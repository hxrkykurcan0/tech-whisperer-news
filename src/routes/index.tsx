import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BrainCircuit,
  CalendarDays,
  Clock,
  Cloud,
  Cpu,
  Gamepad2,
  Newspaper,
  ShieldCheck,
} from "lucide-react";

import heroImg from "@/assets/hero-news.jpg";
import careerImg from "@/assets/news-career.jpg";
import eventImg from "@/assets/news-event.jpg";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { ARTICLES, HERO_SLUG, getArticle, type Article } from "@/lib/articles";
import { loadLocalArticles, toArticle } from "@/lib/local-articles";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "BigKod — Bilgisayar Mühendisliği Haberleri" },
      {
        name: "description",
        content:
          "Bilgisayar mühendisliği dünyasından güncel haberler, yazılım ve yapay zeka analizleri, mühendislik dalları rehberi, kariyer fırsatları ve etkinlikler.",
      },
      { property: "og:title", content: "BigKod — Bilgisayar Mühendisliği Haberleri" },
      {
        property: "og:description",
        content:
          "Yazılım, yapay zeka, siber güvenlik ve kariyer: mühendislik dünyasının nabzı.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const TAGS = [
  { label: "Python", icon: Cpu, slug: "yazilim" },
  { label: "AI", icon: BrainCircuit, slug: "yapay-zeka" },
  { label: "Cloud", icon: Cloud, slug: "bulut-bilisim" },
  { label: "Oyun Geliştirme", icon: Gamepad2, slug: "oyun-gelistirme" },
  { label: "Siber Güvenlik", icon: ShieldCheck, slug: "siber-guvenlik" },
];

function Hero() {
  const hero = getArticle(HERO_SLUG);

  return (
    <section id="haberler" className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 sm:pt-14">
      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
        <Newspaper className="h-4 w-4" />
        Öne Çıkan Haber
      </div>

      <article className="group relative mt-4 overflow-hidden rounded-2xl border border-border">
        <img
          src={heroImg}
          alt="Fütüristik bilgisayar mühendisliği laboratuvarı ve sunucu odası"
          width={1600}
          height={900}
          className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] sm:aspect-[21/9]"
        />
        <div className="absolute inset-0 hidden bg-gradient-to-t from-black/85 via-black/45 to-transparent sm:block" />
        <div className="bg-card p-5 sm:absolute sm:inset-x-0 sm:bottom-0 sm:bg-transparent sm:p-8 lg:p-10">
          <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
            Donanım & Altyapı
          </span>
          <h1 className="mt-3 max-w-3xl font-display text-2xl font-bold leading-tight text-foreground sm:text-4xl sm:text-white lg:text-5xl">
            {hero?.title ?? "Türkiye'nin ilk yerli yapay zeka süper bilgisayarı devreye girdi"}
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base sm:text-white/80">
            {hero?.excerpt}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <Link
              to="/haber/$slug"
              params={{ slug: HERO_SLUG }}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
            >
              Detay <ArrowRight className="h-4 w-4" />
            </Link>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground sm:text-white/70">
              <CalendarDays className="h-3.5 w-3.5" /> {hero?.date}
              <span className="mx-1">•</span>
              <Clock className="h-3.5 w-3.5" /> {hero?.readTime} okuma
            </span>
          </div>
        </div>
      </article>

      <div className="mt-6 flex flex-wrap items-center gap-2" aria-label="Konu etiketleri">
        {TAGS.map((tag) => (
          <Link
            key={tag.label}
            to="/kategori/$slug"
            params={{ slug: tag.slug }}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
          >
            <tag.icon className="h-4 w-4" />
            {tag.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

function ArticleGrid() {
  const [local, setLocal] = useState<Article[]>([]);

  useEffect(() => {
    setLocal(loadLocalArticles().map(toArticle));
  }, []);

  const list = [...local, ...ARTICLES.filter((a) => a.slug !== HERO_SLUG)];

  return (
    <section id="yazilim-ai" className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Son Haberler & Makaleler
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Teknoloji gelişmelerinden derlenen güncel içerikler
          </p>
        </div>
        <Link
          to="/muhendislik-dallari"
          className="hidden items-center gap-1.5 text-sm font-medium text-primary hover:underline sm:inline-flex"
        >
          Mühendislik Dalları <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((article) => (
          <article
            key={article.slug}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="overflow-hidden">
              <img
                src={article.image}
                alt={article.imageAlt}
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <Link
                to="/kategori/$slug"
                params={{ slug: article.categorySlug }}
                className="w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary hover:bg-primary/20"
              >
                {article.category}
              </Link>
              <h3 className="mt-3 font-display text-lg font-semibold leading-snug group-hover:text-primary">
                <Link to="/haber/$slug" params={{ slug: article.slug }}>
                  {article.title}
                </Link>
              </h3>
              <p className="mt-2 line-clamp-5 flex-1 text-sm leading-relaxed text-muted-foreground">
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
              </div>
              <Link
                to="/haber/$slug"
                params={{ slug: article.slug }}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Detay <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const JOBS = [
  {
    role: "Kıdemli Backend Mühendisi (Go)",
    company: "FinTech girişimi",
    location: "İstanbul / Hibrit",
  },
  {
    role: "Makine Öğrenmesi Mühendisi",
    company: "Otonom sürüş Ar-Ge merkezi",
    location: "Ankara",
  },
  {
    role: "DevOps / Platform Mühendisi",
    company: "E-ticaret teknoloji şirketi",
    location: "Uzaktan",
  },
  {
    role: "Oyun Programcısı (Unreal Engine)",
    company: "Bağımsız oyun stüdyosu",
    location: "İzmir / Uzaktan",
  },
];

const EVENTS = [
  {
    title: "Türkiye Yapay Zeka Zirvesi 2026",
    detail: "12-13 Ekim • İstanbul — Üretken yapay zeka, MLOps ve etik oturumları",
  },
  {
    title: "DevFest İstanbul",
    detail: "24 Ekim • İstanbul — Mobil, web ve bulut atölyeleri",
  },
  {
    title: "Siber Güvenlik CTF Yarışması",
    detail: "8 Kasım • Çevrim içi — Üniversite takımlarına açık bayrak yakalama etkinliği",
  },
  {
    title: "GameJam TR: 48 Saat Oyun Maratonu",
    detail: "21 Kasım • Ankara — Bağımsız geliştiriciler için hibrit jam",
  },
];

function CareerEvents() {
  return (
    <section id="kariyer" className="border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
        <div>
          <div className="overflow-hidden rounded-xl border border-border">
            <img
              src={careerImg}
              alt="Yazılım mühendisleri beyaz tahta başında mimari diyagram üzerinde çalışıyor"
              width={800}
              height={600}
              loading="lazy"
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
          <h2 className="mt-5 font-display text-2xl font-bold tracking-tight">Kariyer & İlanlar</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Mühendislik ekiplerinden öne çıkan açık pozisyonlar
          </p>
          <ul className="mt-5 divide-y divide-border rounded-xl border border-border bg-card">
            {JOBS.map((job) => (
              <li key={job.role}>
                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <div>
                    <p className="text-sm font-semibold">{job.role}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{job.company}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                    {job.location}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div id="etkinlikler">
          <div className="overflow-hidden rounded-xl border border-border">
            <img
              src={eventImg}
              alt="Teknoloji konferansında dev ekran önünde sunum yapan konuşmacı"
              width={800}
              height={600}
              loading="lazy"
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
          <h2 className="mt-5 font-display text-2xl font-bold tracking-tight">Etkinlikler</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Takviminize ekleyin: konferanslar, yarışmalar ve buluşmalar
          </p>
          <ul className="mt-5 space-y-3">
            {EVENTS.map((event) => (
              <li
                key={event.title}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-4"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <CalendarDays className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold">{event.title}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                    {event.detail}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function AboutTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6">
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
        <h2 className="font-display text-2xl font-bold tracking-tight">Hakkımda</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Ben Ali Haydar Kurçan, ileride bilgisayar mühendisliği okumak isteyen bir lise
          öğrencisiyim.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            to="/hakkimda"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
          >
            Detay <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/muhendislik-dallari"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            Mühendislik Dalları Rehberi
          </Link>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <ArticleGrid />
        <CareerEvents />
        <AboutTeaser />
      </main>
      <SiteFooter />
    </div>
  );
}
