import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowLeft, CalendarDays, Clock, User, Sparkles, Share2, Bookmark } from "lucide-react";

import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { ARTICLES, getArticle, getCategory } from "@/lib/articles";
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

function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (scrolled / height) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div className="reading-progress" style={{ width: `${progress}%` }} />;
}

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const [expanded, setExpanded] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    try {
      setBookmarked(localStorage.getItem(`bk:${article?.slug}`) === "1");
    } catch { /* yoksay */ }
  }, [article?.slug]);

  const toggleBookmark = () => {
    const next = !bookmarked;
    setBookmarked(next);
    try {
      localStorage.setItem(`bk:${article?.slug}`, next ? "1" : "0");
    } catch { /* yoksay */ }
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-background font-sans text-foreground antialiased">
        <SiteHeader />
        <main className="mx-auto max-w-3xl px-4 py-20 text-center">
          <h1 className="font-display text-2xl font-bold">Haber bulunamadı</h1>
          <Link to="/" className="mt-6 inline-block text-sm font-semibold text-primary hover:underline">
            Ana sayfaya dön
          </Link>
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
      <ReadingProgress />
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-muted-foreground animate-fade-in-up" aria-label="Konum">
          <Link to="/" className="transition-colors hover:text-primary">
            Ana sayfa
          </Link>
          <span className="text-border">/</span>
          {category && (
            <>
              <Link
                to="/kategori/$slug"
                params={{ slug: category.slug }}
                className="transition-colors hover:text-primary"
              >
                {category.name}
              </Link>
              <span className="text-border">/</span>
            </>
          )}
          <span className="truncate text-foreground">{article.title.slice(0, 40)}…</span>
        </nav>

        {/* Article header */}
        <article className="mt-6 animate-fade-in-up">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-primary">
            {article.category}
          </span>
          <h1 className="mt-4 font-display text-2xl font-bold leading-tight sm:text-4xl">
            {article.title}
          </h1>

          {/* Meta bar */}
          <div className="mt-5 flex flex-wrap items-center justify-between gap-y-3 border-y border-border py-4">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <User className="h-3.5 w-3.5 text-primary/70" /> {article.author}
              </span>
              <span className="flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5 text-primary/70" /> {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-primary/70" /> {article.readTime} okuma
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleBookmark}
                aria-label="Yer imine ekle"
                className={`flex h-8 w-8 items-center justify-center rounded-lg border transition-all ${
                  bookmarked
                    ? "border-primary/40 bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:border-primary/40 hover:text-primary"
                }`}
              >
                <Bookmark className={`h-4 w-4 ${bookmarked ? "fill-current" : ""}`} />
              </button>
              <button
                onClick={() => {
                  try { void navigator.clipboard?.writeText(window.location.href); } catch { /* yoksay */ }
                }}
                aria-label="Bağlantıyı paylaş"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
              >
                <Share2 className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Hero image */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-xl shadow-black/10">
            <img
              src={article.image}
              alt={article.imageAlt}
              width={1200}
              height={675}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="aspect-[16/9] w-full object-cover"
            />
          </div>

          {/* Excerpt */}
          <p className="mt-6 border-l-2 border-primary/40 pl-4 text-base font-medium leading-relaxed text-foreground sm:text-lg">
            {article.excerpt}
          </p>

          {/* Body */}
          <div className="mt-8 space-y-5 text-[15px] leading-[1.75] text-muted-foreground sm:text-base sm:leading-8">
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
                    className="w-full rounded-xl border border-primary/40 bg-primary/10 px-4 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/20 sm:hidden"
                  >
                    Haberin devamını oku ({rest.length} paragraf)
                  </button>
                )}
              </>
            )}
          </div>

          {/* Key points */}
          {article.keyPoints.length > 0 && (
            <aside className="mt-8 overflow-hidden rounded-2xl border border-border bg-card gradient-border">
              <div className="p-6">
                <h2 className="flex items-center gap-2 font-display text-base font-semibold">
                  <Sparkles className="h-4 w-4 text-primary" />
                  Öne çıkan başlıklar
                </h2>
                <ul className="mt-4 space-y-3">
                  {article.keyPoints.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          )}
        </article>

        {/* Related articles */}
        {related.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display text-xl font-bold tracking-tight">İlgili haberler</h2>
            <ul className="mt-4 space-y-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    to="/haber/$slug"
                    params={{ slug: item.slug }}
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:border-primary/40 hover:shadow-md hover:shadow-primary/5 card-lift"
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
                    <span className="text-sm font-semibold leading-snug transition-colors group-hover:text-primary">
                      {item.title}
                    </span>
                    <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Footer links */}
        <div className="mt-10 flex items-center gap-4">
          {category && (
            <Link
              to="/kategori/$slug"
              params={{ slug: category.slug }}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              {category.name} kategorisindeki tüm haberler
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
          <Link
            to="/"
            className="ml-auto inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Ana sayfa
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
