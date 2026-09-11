import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ImagePlus, Loader2, Plus, Trash2 } from "lucide-react";

import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { CATEGORIES, type Article } from "@/lib/articles";
import {
  createDbArticle,
  deleteDbArticle,
  listDbArticles,
} from "@/lib/db-articles.functions";

export const Route = createFileRoute("/admin")({
  staticData: { sitemap: false },
  head: () => ({
    meta: [
      { title: "Haber Ekle — BigKod Yönetim" },
      {
        name: "description",
        content: "BigKod yönetim ekranı: kategori, başlık, metin ve görsel ile yeni haber ekleyin.",
      },
      { property: "og:title", content: "Haber Ekle — BigKod Yönetim" },
      {
        property: "og:description",
        content: "Kendi haberlerinizi kategori, başlık, metin ve görselle yayınlayın.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminPage,
});

const MAX_IMAGE_BYTES = 4_500_000;

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(",")[1] ?? "");
    reader.onerror = () => reject(new Error("Dosya okunamadı"));
    reader.readAsDataURL(file);
  });
}

function AdminPage() {
  const [password, setPassword] = useState("");
  const [items, setItems] = useState<Article[]>([]);
  const [categorySlug, setCategorySlug] = useState(CATEGORIES[0]!.slug);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [preview, setPreview] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<{ type: "ok" | "error"; text: string } | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setPassword(sessionStorage.getItem("bigkod:admin") ?? "");
    void refresh();
  }, []);

  const refresh = async () => {
    const list = await listDbArticles();
    setItems(list);
  };

  const onFile = (selected: File | undefined) => {
    if (!selected) return;
    if (!selected.type.startsWith("image/")) {
      setMessage({ type: "error", text: "Lütfen bir görsel dosyası seçin." });
      return;
    }
    if (selected.size > MAX_IMAGE_BYTES) {
      setMessage({ type: "error", text: "Görsel en fazla 4,5 MB olabilir." });
      return;
    }
    setFile(selected);
    const reader = new FileReader();
    reader.onload = () => setPreview(String(reader.result));
    reader.readAsDataURL(selected);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanTitle = title.trim();
    const cleanText = text.trim();
    if (!password) {
      setMessage({ type: "error", text: "Önce yönetim şifrenizi girin." });
      return;
    }
    if (cleanTitle.length < 5 || cleanText.length < 30) {
      setMessage({ type: "error", text: "Başlık en az 5, metin en az 30 karakter olmalı." });
      return;
    }
    setBusy(true);
    setMessage(null);
    try {
      const imageBase64 = file ? await fileToBase64(file) : null;
      await createDbArticle({
        data: {
          password,
          categorySlug,
          title: cleanTitle,
          text: cleanText,
          imageBase64,
          imageName: file?.name ?? null,
          imageType: file?.type ?? null,
        },
      });
      sessionStorage.setItem("bigkod:admin", password);
      setTitle("");
      setText("");
      setPreview("");
      setFile(null);
      if (fileRef.current) fileRef.current.value = "";
      await refresh();
      setMessage({
        type: "ok",
        text: "Haber yayınlandı. Sitede herkese açık ve site haritasına eklendi.",
      });
    } catch (error) {
      setMessage({
        type: "error",
        text: error instanceof Error ? error.message : "Haber kaydedilemedi.",
      });
    } finally {
      setBusy(false);
    }
  };

  const onDelete = async (slug: string) => {
    if (!password) {
      setMessage({ type: "error", text: "Önce yönetim şifrenizi girin." });
      return;
    }
    setBusy(true);
    try {
      await deleteDbArticle({ data: { password, slug } });
      await refresh();
      setMessage({ type: "ok", text: "Haber silindi." });
    } catch (error) {
      setMessage({
        type: "error",
        text: error instanceof Error ? error.message : "Haber silinemedi.",
      });
    } finally {
      setBusy(false);
    }
  };

  const inputClass =
    "mt-1 w-full rounded-lg border border-input bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Haber Ekle</h1>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Buradan eklediğiniz haberler sitenin kendi veri tabanına kaydedilir; tüm ziyaretçiler
          görür, görseller sitede saklanır ve haber otomatik olarak site haritasına eklenir.
        </p>

        <form onSubmit={onSubmit} className="mt-8 space-y-5" noValidate>
          <div>
            <label htmlFor="password" className="text-sm font-medium">
              Yönetim şifresi
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="category" className="text-sm font-medium">
              Kategori
            </label>
            <select
              id="category"
              value={categorySlug}
              onChange={(e) => setCategorySlug(e.target.value)}
              className={inputClass}
            >
              {CATEGORIES.map((category) => (
                <option key={category.slug} value={category.slug}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="title" className="text-sm font-medium">
              Başlık
            </label>
            <input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={160}
              placeholder="Haber başlığı"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="text" className="text-sm font-medium">
              Metin
            </label>
            <textarea
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={10}
              placeholder="Haber metni. Paragrafları ayırmak için aralarında bir boş satır bırakın."
              className={inputClass}
            />
          </div>

          <div>
            <span className="text-sm font-medium">Görsel</span>
            <div className="mt-1 flex flex-col gap-3 sm:flex-row sm:items-center">
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                onChange={(e) => onFile(e.target.files?.[0])}
                className="text-sm text-muted-foreground file:mr-3 file:rounded-md file:border-0 file:bg-secondary file:px-4 file:py-2 file:text-sm file:font-medium file:text-secondary-foreground"
              />
              {preview ? (
                <img
                  src={preview}
                  alt="Seçilen görsel önizlemesi"
                  className="h-20 w-28 rounded-lg border border-border object-cover"
                />
              ) : (
                <span className="flex h-20 w-28 items-center justify-center rounded-lg border border-dashed border-border text-muted-foreground">
                  <ImagePlus className="h-5 w-5" />
                </span>
              )}
            </div>
          </div>

          {message && (
            <p
              className={`rounded-lg border px-4 py-3 text-sm font-medium ${
                message.type === "ok"
                  ? "border-primary/40 bg-primary/10 text-primary"
                  : "border-destructive/40 bg-destructive/10 text-destructive"
              }`}
            >
              {message.text}
            </p>
          )}

          <button
            type="submit"
            disabled={busy}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85 disabled:opacity-60"
          >
            {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />}
            Haberi Yayınla
          </button>
        </form>

        <section className="mt-12">
          <h2 className="font-display text-xl font-bold tracking-tight">
            Yayındaki haberleriniz ({items.length})
          </h2>
          {items.length === 0 ? (
            <p className="mt-3 text-sm text-muted-foreground">Henüz haber eklemediniz.</p>
          ) : (
            <ul className="mt-4 divide-y divide-border rounded-xl border border-border bg-card">
              {items.map((item) => (
                <li key={item.slug} className="flex items-center justify-between gap-4 p-4">
                  <Link
                    to="/haber/$slug"
                    params={{ slug: item.slug }}
                    className="text-sm font-semibold hover:text-primary"
                  >
                    {item.title}
                  </Link>
                  <button
                    type="button"
                    onClick={() => void onDelete(item.slug)}
                    disabled={busy}
                    aria-label={`${item.title} haberini sil`}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-destructive/50 hover:text-destructive disabled:opacity-50"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
