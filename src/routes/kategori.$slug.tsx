import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, CalendarDays, Clock, Tag } from "lucide-react";

import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { articlesByCategory, getCategory, type Article } from "@/lib/articles";
import { loadLocalArticles, toArticle } from "@/lib/local-articles";

export const Route = createFileRoute("/kategori/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Kategori bulunamadı — BitGündem" }, { name: "robots", content: "noindex" }] };
    }
    const { category } = loaderData;
    const title = `${category.name} Haberleri — BitGündem`;
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
    setExtra(
      loadLocalArticles()
        .filter((item) => item.categorySlug === category.slug)
        .map(toArticle),
    );
  }, [category.slug]);

  const articles = [...extra, ...articlesByCategory(category.slug)];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        <nav className="text-xs text-muted-foreground" aria-label="Konum">
          <Link to="/" className="hover:text-primary">
            Ana sayfa
          </Link>{" "}
          / <span className="text-foreground">{category.name}</span>
        </nav>

        <header className="mt-4 rounded-2xl border border-border bg-card p-5 sm:p-8">
          <h1 className="font-display text-2xl font-bold tracking-tight sm:text-4xl">
            {category.name}
          </h1>
          <p className="mt-2 text-sm font-medium text-primary sm:text-base">{category.tagline}</p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {category.description}
          </p>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-base font-semibold">Bu kategoride öne çıkanlar</h2>
              <ul className="mt-3 space-y-2">
                {category.highlights.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-base font-semibold">Konu başlıkları</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {category.topics.map((topic) => (
                  <span
                    key={topic}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium text-muted-foreground"
                  >
                    <Tag className="h-3 w-3" />
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        <h2 className="mt-10 font-display text-xl font-bold tracking-tight sm:text-2xl">
          {category.name} haberleri ({articles.length})
        </h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <img
                src={article.image}
                alt={article.imageAlt}
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-semibold leading-snug group-hover:text-primary">
                  <Link to="/haber/$slug" params={{ slug: article.slug }}>
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-2 line-clamp-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {article.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-3 border-t border-border pt-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <CalendarDays className="h-3.5 w-3.5" /> {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {article.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <Link
          to="/"
          className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          Ana sayfaya dön <ArrowRight className="h-4 w-4" />
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}
