import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ImagePlus, Plus, Trash2 } from "lucide-react";

import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { CATEGORIES } from "@/lib/articles";
import {
  loadLocalArticles,
  saveLocalArticles,
  slugify,
  type LocalArticle,
} from "@/lib/local-articles";

export const Route = createFileRoute("/admin")({
  staticData: { sitemap: false },
  head: () => ({
    meta: [
      { title: "Haber Ekle — BitGündem Yönetim" },
      {
        name: "description",
        content: "BitGündem yönetim ekranı: kategori, başlık, metin ve görsel ile yeni haber ekleyin.",
      },
      { property: "og:title", content: "Haber Ekle — BitGündem Yönetim" },
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

const MAX_IMAGE_BYTES = 1_500_000;

function AdminPage() {
  const [items, setItems] = useState<LocalArticle[]>([]);
  const [categorySlug, setCategorySlug] = useState(CATEGORIES[0]!.slug);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState<{ type: "ok" | "error"; text: string } | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setItems(loadLocalArticles());
  }, []);

  const persist = (next: LocalArticle[]) => {
    setItems(next);
    saveLocalArticles(next);
  };

  const onFile = (file: File | undefined) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setMessage({ type: "error", text: "Lütfen bir görsel dosyası seçin." });
      return;
    }
    if (file.size > MAX_IMAGE_BYTES) {
      setMessage({ type: "error", text: "Görsel en fazla 1,5 MB olabilir." });
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setImage(String(reader.result));
    reader.readAsDataURL(file);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanTitle = title.trim();
    const cleanText = text.trim();
    if (cleanTitle.length < 5 || cleanText.length < 30) {
      setMessage({ type: "error", text: "Başlık en az 5, metin en az 30 karakter olmalı." });
      return;
    }
    const base = slugify(cleanTitle) || "haber";
    const slug = items.some((i) => i.slug === base) ? `${base}-${Date.now().toString(36)}` : base;
    const article: LocalArticle = {
      slug,
      categorySlug,
      title: cleanTitle,
      body: cleanText.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean),
      image: image || "/favicon.ico",
      date: new Date().toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" }),
    };
    persist([article, ...items]);
    setTitle("");
    setText("");
    setImage("");
    if (fileRef.current) fileRef.current.value = "";
    setMessage({ type: "ok", text: "Haber yayınlandı. Ana sayfada ve kategorisinde görünüyor." });
  };

  const inputClass =
    "mt-1 w-full rounded-lg border border-input bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Haber Ekle</h1>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Buradan eklediğiniz haberler bu tarayıcıda saklanır ve sitede anında yayınlanır. Haberleri
          tüm ziyaretçilere kalıcı olarak göstermek isterseniz bunu bir sonraki adımda ortak bir
          veri tabanına taşıyabiliriz.
        </p>

        <form onSubmit={onSubmit} className="mt-8 space-y-5" noValidate>
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
              {image ? (
                <img
                  src={image}
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
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
          >
            <Plus className="h-4 w-4" /> Haberi Yayınla
          </button>
        </form>

        <section className="mt-12">
          <h2 className="font-display text-xl font-bold tracking-tight">
            Eklediğiniz haberler ({items.length})
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
                    onClick={() => persist(items.filter((i) => i.slug !== item.slug))}
                    aria-label={`${item.title} haberini sil`}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-destructive/50 hover:text-destructive"
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
