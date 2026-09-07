import type { Article } from "@/lib/articles";
import { CATEGORIES } from "@/lib/articles";

export interface LocalArticle {
  slug: string;
  categorySlug: string;
  title: string;
  body: string[];
  image: string;
  date: string;
}

const STORAGE_KEY = "bitgundem:articles";

export function slugify(value: string): string {
  const map: Record<string, string> = {
    ç: "c", ğ: "g", ı: "i", ö: "o", ş: "s", ü: "u",
    Ç: "c", Ğ: "g", İ: "i", Ö: "o", Ş: "s", Ü: "u",
  };
  return value
    .replace(/[çğıöşüÇĞİÖŞÜ]/g, (c) => map[c] ?? c)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function loadLocalArticles(): LocalArticle[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? (parsed as LocalArticle[]) : [];
  } catch {
    return [];
  }
}

export function saveLocalArticles(items: LocalArticle[]): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    /* depolama dolu olabilir */
  }
}

export function toArticle(item: LocalArticle): Article {
  const category = CATEGORIES.find((c) => c.slug === item.categorySlug);
  const text = item.body.join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return {
    slug: item.slug,
    categorySlug: item.categorySlug,
    image: item.image,
    imageAlt: item.title,
    category: category?.name ?? "Haber",
    title: item.title,
    excerpt: text.slice(0, 260) + (text.length > 260 ? "…" : ""),
    date: item.date,
    readTime: `${Math.max(1, Math.round(words / 200))} dk`,
    author: "Ali Haydar Kurçan",
    body: item.body,
    keyPoints: [],
  };
}
