import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, CalendarDays, Clock, Tag, Sparkles, Layers } from "lucide-react";

import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { articlesByCategory, getCategory, type Article } from "@/lib/articles";
import { listDbArticles } from "@/lib/db-articles.functions";

export const Route = createFileRoute("/kategori/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Kategori bulunamadı — BigKod" }, { name: "robots", content: "noindex" }] };
    }
    const { category } = loaderData;
    const title = `${category.name} Haberleri — BigKod`;
    const description = category.description.slice(0, 155);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const [extra, setExtra] = useState<Article[]>([]);

  useEffect(() => {
    void listDbArticles()
      .then((list) => setExtra(list.filter((item) => item.categorySlug === category.slug)))
      .catch(() => setExtra([]));
  }, [category.slug]);

  const articles = [...extra, ...articlesByCategory(category.slug)];

  return (
    <div className="min-h-screen bg-mesh font-sans text-foreground antialiased">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        <nav className="flex items-center gap-2 text-xs text-muted-foreground anim-in" aria-label="Konum">
          <Link to="/" className="transition-colors hover:text-primary">
            Ana sayfa
          </Link>
          <span className="text-border">/</span>
          <span className="text-foreground">{category.name}</span>
        </nav>

        <header className="mt-6 overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-8 aurora-blobs ring-gradient anim-in">
          <div className="relative">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
              <Layers className="h-4 w-4" />
              Kategori
            </div>
            <h1 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-4xl">
              {category.name}
            </h1>
            <p className="mt-2 text-sm font-medium text-primary sm:text-base">{category.tagline}</p>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {category.description}
            </p>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div>
                <h2 className="flex items-center gap-2 font-display text-base font-semibold">
                  <Sparkles className="h-4 w-4 text-primary" />
                  Bu kategoride öne çıkanlar
                </h2>
                <ul className="mt-3 space-y-2.5">
                  {category.highlights.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="flex items-center gap-2 font-display text-base font-semibold">
                  <Tag className="h-4 w-4 text-primary" />
                  Konu başlıkları
                </h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {category.topics.map((topic) => (
                    <span
                      key={topic}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      <Tag className="h-3 w-3" />
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="mt-10 flex items-end justify-between gap-4">
          <h2 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
            {category.name} haberleri{" "}
            <span className="text-muted-foreground">({articles.length})</span>
          </h2>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 stagger">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card lift hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.imageAlt}
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-semibold leading-snug transition-colors group-hover:text-primary">
                  <Link to="/haber/$slug" params={{ slug: article.slug }}>
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {article.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between gap-3 border-t border-border pt-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <CalendarDays className="h-3.5 w-3.5" /> {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" /> {article.readTime}
                    </span>
                  </span>
                  <Link
                    to="/haber/$slug"
                    params={{ slug: article.slug }}
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-md hover:shadow-primary/20"
                  >
                    Oku <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <Link
          to="/"
          className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
        >
          Ana sayfaya dön <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}
