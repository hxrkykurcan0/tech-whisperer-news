import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { CATEGORIES, type Article } from "@/lib/articles";
import { slugify } from "@/lib/local-articles";

export interface DbArticleRow {
  slug: string;
  category_slug: string;
  title: string;
  body: string[];
  image_url: string | null;
  author: string;
  published_at: string;
}

export function rowToArticle(row: DbArticleRow): Article {
  const category = CATEGORIES.find((c) => c.slug === row.category_slug);
  const body = Array.isArray(row.body) ? row.body : [];
  const text = body.join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return {
    slug: row.slug,
    categorySlug: row.category_slug,
    image: row.image_url ?? "/favicon.png",
    imageAlt: row.title,
    category: category?.name ?? "Haber",
    title: row.title,
    excerpt: text.slice(0, 260) + (text.length > 260 ? "…" : ""),
    date: new Date(row.published_at).toLocaleDateString("tr-TR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    readTime: `${Math.max(1, Math.round(words / 200))} dk`,
    author: row.author,
    body,
    keyPoints: [],
  };
}

const SELECT_COLUMNS = "slug, category_slug, title, body, image_url, author, published_at";

async function publicClient() {
  const { createClient } = await import("@supabase/supabase-js");
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"] ?? process.env["SUPABASE_ANON_KEY"]!;
  return createClient(process.env["SUPABASE_URL"]!, key, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: {
      fetch: (input: RequestInfo | URL, init?: RequestInit) => {
        const headers = new Headers(init?.headers);
        if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) {
          headers.delete("Authorization");
        }
        headers.set("apikey", key);
        return fetch(input, { ...init, headers });
      },
    },
  });
}

/** Yayınlanan tüm özel haberler (herkese açık okuma). */
export const listDbArticles = createServerFn({ method: "GET" }).handler(async () => {
  try {
    const supabase = await publicClient();
    const { data, error } = await supabase
      .from("articles")
      .select(SELECT_COLUMNS)
      .order("published_at", { ascending: false })
      .limit(200);
    if (error) throw error;
    return ((data ?? []) as unknown as DbArticleRow[]).map(rowToArticle);
  } catch {
    return [] as Article[];
  }
});

function checkPassword(password: string) {
  const expected = process.env["ADMIN_PASSWORD"];
  if (!expected || password !== expected) {
    throw new Error("Yönetim şifresi hatalı.");
  }
}

const CreateInput = z.object({
  password: z.string().min(1),
  categorySlug: z.string().min(1),
  title: z.string().min(5).max(160),
  text: z.string().min(30),
  imageBase64: z.string().nullable(),
  imageName: z.string().nullable(),
  imageType: z.string().nullable(),
});

export const createDbArticle = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => CreateInput.parse(data))
  .handler(async ({ data }) => {
    checkPassword(data.password);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const base = slugify(data.title) || "haber";
    const slug = `${base}-${Date.now().toString(36)}`;

    let imageUrl: string | null = null;
    if (data.imageBase64 && data.imageType?.startsWith("image/")) {
      const bytes = Uint8Array.from(atob(data.imageBase64), (c) => c.charCodeAt(0));
      const ext = (data.imageName?.split(".").pop() ?? "jpg").toLowerCase().replace(/[^a-z0-9]/g, "");
      const path = `${slug}.${ext || "jpg"}`;
      const { error: uploadError } = await supabaseAdmin.storage
        .from("article-images")
        .upload(path, bytes, { contentType: data.imageType, upsert: true });
      if (uploadError) throw new Error("Görsel yüklenemedi: " + uploadError.message);
      imageUrl = `/api/public/gorsel/${path}`;
    }

    const body = data.text
      .split(/\n{2,}/)
      .map((p) => p.trim())
      .filter(Boolean);

    const { error } = await supabaseAdmin.from("articles").insert({
      slug,
      category_slug: data.categorySlug,
      title: data.title.trim(),
      body,
      image_url: imageUrl,
    });
    if (error) throw new Error(error.message);
    return { slug };
  });

export const deleteDbArticle = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) =>
    z.object({ password: z.string().min(1), slug: z.string().min(1) }).parse(data),
  )
  .handler(async ({ data }) => {
    checkPassword(data.password);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("articles").delete().eq("slug", data.slug);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const checkAdminPassword = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => z.object({ password: z.string() }).parse(data))
  .handler(async ({ data }) => {
    checkPassword(data.password);
    return { ok: true };
  });

/** Tek bir özel haberi slug ile getirir. */
export const getDbArticle = createServerFn({ method: "GET" })
  .inputValidator((data: unknown) => z.object({ slug: z.string().min(1) }).parse(data))
  .handler(async ({ data }) => {
    try {
      const supabase = await publicClient();
      const { data: row, error } = await supabase
        .from("articles")
        .select(SELECT_COLUMNS)
        .eq("slug", data.slug)
        .maybeSingle();
      if (error || !row) return null;
      return rowToArticle(row as unknown as DbArticleRow);
    } catch {
      return null;
    }
  });

/** Site haritası için yayınlanan haber slug ve tarihleri. */
export const listDbArticleSlugs = createServerFn({ method: "GET" }).handler(async () => {
  try {
    const supabase = await publicClient();
    const { data, error } = await supabase
      .from("articles")
      .select("slug, published_at")
      .order("published_at", { ascending: false })
      .limit(500);
    if (error) throw error;
    return (data ?? []) as { slug: string; published_at: string }[];
  } catch {
    return [] as { slug: string; published_at: string }[];
  }
});
