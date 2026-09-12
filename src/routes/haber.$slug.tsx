import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, CalendarDays, Clock, User } from "lucide-react";

import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { ARTICLES, getArticle, getCategory, type Article } from "@/lib/articles";
import { getDbArticle } from "@/lib/db-articles.functions";

export const Route = createFileRoute("/haber/$slug")({
  staticData: { sitemap: true },
  loader: async ({ params }) => {
    const article = getArticle(params.slug) ?? (await getDbArticle({ data: { slug: params.slug } }));
    return { article: article ?? null, slug: params.slug };
  },
  head: ({ loaderData }) => {
    const article = loaderData?.article;
    if (!article) {
      return { meta: [{ title: "Haber — BigKod" }, { name: "robots", content: "noindex" }] };
    }
    const description = article.excerpt.slice(0, 155);
    return {
      meta: [
        { title: `${article.title} — BigKod` },
        { name: "description", content: description },
        { property: "og:title", content: article.title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const [expanded, setExpanded] = useState(false);
  const checked = true;


  if (!article) {
    return (
      <div className="min-h-screen bg-background font-sans text-foreground antialiased">
        <SiteHeader />
        <main className="mx-auto max-w-3xl px-4 py-20 text-center">
          <h1 className="font-display text-2xl font-bold">
            {checked ? "Haber bulunamadı" : "Yükleniyor…"}
          </h1>
          {checked && (
            <Link to="/" className="mt-6 inline-block text-sm font-semibold text-primary hover:underline">
              Ana sayfaya dön
            </Link>
          )}
        </main>
        <SiteFooter />
      </div>
    );
  }

  const category = getCategory(article.categorySlug);
  const related = ARTICLES.filter(
    (a) => a.categorySlug === article.categorySlug && a.slug !== article.slug,
  ).slice(0, 3);

  const preview = article.body.slice(0, 2);
  const rest = article.body.slice(2);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
        <nav className="text-xs text-muted-foreground" aria-label="Konum">
          <Link to="/" className="hover:text-primary">
            Ana sayfa
          </Link>
          {category && (
            <>
              {" / "}
              <Link to="/kategori/$slug" params={{ slug: category.slug }} className="hover:text-primary">
                {category.name}
              </Link>
            </>
          )}
        </nav>

        <article className="mt-4">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {article.category}
          </span>
          <h1 className="mt-3 font-display text-2xl font-bold leading-tight sm:text-4xl">
            {article.title}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <User className="h-3.5 w-3.5" /> {article.author}
            </span>
            <span className="flex items-center gap-1">
              <CalendarDays className="h-3.5 w-3.5" /> {article.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> {article.readTime} okuma
            </span>
          </div>

          <img
            src={article.image}
            alt={article.imageAlt}
            width={1200}
            height={675}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="mt-5 aspect-[16/9] w-full rounded-xl border border-border object-cover"
          />

          <p className="mt-6 text-base font-medium leading-relaxed text-foreground sm:text-lg">
            {article.excerpt}
          </p>

          <div className="mt-6 space-y-5 text-[15px] leading-[1.75] text-muted-foreground sm:text-base sm:leading-8">
            {preview.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}

            {rest.length > 0 && (
              <>
                <div className={expanded ? "space-y-5" : "hidden space-y-5 sm:block"}>
                  {rest.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>
                {!expanded && (
                  <button
                    onClick={() => setExpanded(true)}
                    className="w-full rounded-lg border border-primary/40 bg-primary/10 px-4 py-3 text-sm font-semibold text-primary sm:hidden"
                  >
                    Haberin devamını oku ({rest.length} paragraf)
                  </button>
                )}
              </>
            )}
          </div>

          {article.keyPoints.length > 0 && (
            <aside className="mt-8 rounded-xl border border-border bg-card p-5">
              <h2 className="font-display text-base font-semibold">Öne çıkan başlıklar</h2>
              <ul className="mt-3 space-y-2">
                {article.keyPoints.map((point) => (
                  <li key={point} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </article>

        {related.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display text-xl font-bold tracking-tight">İlgili haberler</h2>
            <ul className="mt-4 space-y-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    to="/haber/$slug"
                    params={{ slug: item.slug }}
                    className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
                  >
                    <img
                      src={item.image}
                      alt=""
                      width={160}
                      height={120}
                      loading="lazy"
                      decoding="async"
                      className="h-16 w-20 shrink-0 rounded-lg object-cover"
                    />
                    <span className="text-sm font-semibold leading-snug group-hover:text-primary">
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {category && (
          <Link
            to="/kategori/$slug"
            params={{ slug: category.slug }}
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            {category.name} kategorisindeki tüm haberler <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
