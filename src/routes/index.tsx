import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CalendarDays,
  Clock,
  Cloud,
  Cpu,
  Gamepad2,
  MapPin,
  Newspaper,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
  Eye,
  Layers,
} from "lucide-react";

import heroImg from "@/assets/hero-news.jpg";
import careerImg from "@/assets/news-career.jpg";
import eventImg from "@/assets/news-event.jpg";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { ARTICLES, HERO_SLUG, getArticle, type Article } from "@/lib/articles";
import { listDbArticles } from "@/lib/db-articles.functions";

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

const STATS = [
  { value: "42", label: "Haber & Makale", icon: Newspaper },
  { value: "6", label: "Kategori", icon: Layers },
  { value: "10", label: "Okuma Saati", icon: Clock },
  { value: "2026", label: "Güncel İçerik", icon: TrendingUp },
];

function Hero() {
  const hero = getArticle(HERO_SLUG);

  return (
    <section id="haberler" className="relative mx-auto max-w-7xl px-4 pt-10 sm:px-6 sm:pt-14">
      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary animate-fade-in-up">
        <Sparkles className="h-4 w-4" />
        Öne Çıkan Haber
      </div>

      <article className="group relative mt-4 overflow-hidden rounded-3xl border border-border shadow-2xl shadow-black/30 animate-fade-in-up gradient-border">
        <img
          src={heroImg}
          alt="Fütüristik bilgisayar mühendisliği laboratuvarı ve sunucu odası"
          width={1600}
          height={900}
          className="aspect-[16/9] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.05] sm:aspect-[21/9]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

        {/* Floating category badge */}
        <div className="absolute left-5 top-5 sm:left-8 sm:top-8">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-primary-foreground shadow-lg shadow-primary/30 badge-pulse">
            <Cpu className="h-3.5 w-3.5" />
            Donanım & Altyapı
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-12">
          <h1 className="max-w-3xl font-display text-2xl font-bold leading-tight text-white drop-shadow-lg sm:text-4xl lg:text-5xl">
            {hero?.title ?? "Türkiye'nin ilk yerli yapay zeka süper bilgisayarı devreye girdi"}
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-white/85 drop-shadow sm:text-base lg:text-lg">
            {hero?.excerpt}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              to="/haber/$slug"
              params={{ slug: HERO_SLUG }}
              className="group/btn inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40"
            >
              Detay
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
            <div className="flex items-center gap-4 text-xs text-white/70">
              <span className="flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5" /> {hero?.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" /> {hero?.readTime} okuma
              </span>
              <span className="flex items-center gap-1.5">
                <Eye className="h-3.5 w-3.5" /> Öne çıkan
              </span>
            </div>
          </div>
        </div>
      </article>

      {/* Tag pills */}
      <div className="mt-6 flex flex-wrap items-center gap-2 animate-fade-in-up" aria-label="Konu etiketleri">
        {TAGS.map((tag) => (
          <Link
            key={tag.label}
            to="/kategori/$slug"
            params={{ slug: tag.slug }}
            className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:shadow-md hover:shadow-primary/10"
          >
            <tag.icon className="h-4 w-4 transition-transform group-hover:scale-110" />
            {tag.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

function StatsBar() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 stagger">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 text-center transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 card-lift"
          >
            <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-primary/5 blur-2xl transition-opacity group-hover:opacity-100" />
            <stat.icon className="mx-auto h-6 w-6 text-primary/70 transition-transform group-hover:scale-110" />
            <p className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">{stat.value}</p>
            <p className="mt-0.5 text-xs font-medium text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ArticleGrid() {
  const [local, setLocal] = useState<Article[]>([]);

  useEffect(() => {
    void listDbArticles().then(setLocal).catch(() => setLocal([]));
  }, []);

  const list = [...local, ...ARTICLES.filter((a) => a.slug !== HERO_SLUG)];

  return (
    <section id="yazilim-ai" className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6">
      {/* Section header */}
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
            <Newspaper className="h-4 w-4" />
            Güncel
          </div>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Son Haberler & Makaleler
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Teknoloji gelişmelerinden derlenen güncel içerikler — {list.length} haber
          </p>
        </div>
        <Link
          to="/muhendislik-dallari"
          className="group hidden items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80 sm:inline-flex"
        >
          Mühendislik Dalları
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Article grid */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 stagger">
        {list.map((article) => (
          <article
            key={article.slug}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-400 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 card-lift"
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
              <div className="absolute left-3 top-3">
                <span className="inline-flex items-center rounded-full bg-background/80 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-md transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  {article.category}
                </span>
              </div>
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
    <section id="kariyer" className="relative border-t border-border bg-card/30 bg-grid">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
        <div id="etkinlikler-kariyer" className="animate-fade-in-up">
          <div className="overflow-hidden rounded-2xl border border-border shadow-lg shadow-black/5">
            <img
              src={careerImg}
              alt="Yazılım mühendisleri beyaz tahta başında mimari diyagram üzerinde çalışıyor"
              width={800}
              height={600}
              loading="lazy"
              className="aspect-[16/9] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <h2 className="mt-5 font-display text-2xl font-bold tracking-tight">Kariyer & İlanlar</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Mühendislik ekiplerinden öne çıkan açık pozisyonlar
          </p>
          <ul className="mt-5 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
            {JOBS.map((job) => (
              <li key={job.role} className="group transition-colors hover:bg-secondary/30">
                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <div>
                    <p className="text-sm font-semibold transition-colors group-hover:text-primary">{job.role}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{job.company}</p>
                  </div>
                  <span className="flex shrink-0 items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                    <MapPin className="h-3 w-3" />
                    {job.location}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div id="etkinlikler" className="animate-fade-in-up">
          <div className="overflow-hidden rounded-2xl border border-border shadow-lg shadow-black/5">
            <img
              src={eventImg}
              alt="Teknoloji konferansında dev ekran önünde sunum yapan konuşmacı"
              width={800}
              height={600}
              loading="lazy"
              className="aspect-[16/9] w-full object-cover transition-transform duration-700 hover:scale-105"
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
                className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:border-primary/40 hover:shadow-md hover:shadow-primary/5 card-lift"
              >
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                  <CalendarDays className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold transition-colors group-hover:text-primary">{event.title}</p>
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
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-8 aurora gradient-border">
        <div className="relative">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
            <Zap className="h-4 w-4" />
            Hakkımda
          </div>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
            BigKod'u hazırlayan
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Ben Ali Haydar Kurçan, ileride bilgisayar mühendisliği okumak isteyen bir lise
            öğrencisiyim. BigKod'u teknolojiye ilgi duyan öğrencilerin yazılım, yapay zeka, siber
            güvenlik ve donanım dünyasındaki gelişmeleri sade bir Türkçeyle takip edebilmesi için
            hazırlıyorum.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/hakkimda"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/85 hover:shadow-md hover:shadow-primary/20"
            >
              Detay
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/muhendislik-dallari"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:text-primary"
            >
              Mühendislik Dalları Rehberi
            </Link>
          </div>
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
        <StatsBar />
        <ArticleGrid />
        <CareerEvents />
        <AboutTeaser />
      </main>
      <SiteFooter />
    </div>
  );
}
