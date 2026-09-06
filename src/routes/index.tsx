import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BrainCircuit,
  CalendarDays,
  Clock,
  Cloud,
  Cpu,
  Gamepad2,
  Github,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Newspaper,
  ShieldCheck,
  Sun,
  Twitter,
  X,
  Youtube,
} from "lucide-react";

import heroImg from "@/assets/hero-news.jpg";
import aiImg from "@/assets/news-ai.jpg";
import devImg from "@/assets/news-dev.jpg";
import securityImg from "@/assets/news-security.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BitGündem — Bilgisayar Mühendisliği Haberleri" },
      {
        name: "description",
        content:
          "Bilgisayar mühendisliği dünyasından güncel haberler, yazılım ve yapay zeka analizleri, kariyer fırsatları ve etkinlikler.",
      },
      { property: "og:title", content: "BitGündem — Bilgisayar Mühendisliği Haberleri" },
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

const NAV_ITEMS = [
  { label: "Haberler", href: "#haberler" },
  { label: "Yazılım & Yapay Zeka", href: "#yazilim-ai" },
  { label: "Kariyer & İlanlar", href: "#kariyer" },
  { label: "Etkinlikler", href: "#etkinlikler" },
];

const TAGS = [
  { label: "Python", icon: Cpu },
  { label: "AI", icon: BrainCircuit },
  { label: "Cloud", icon: Cloud },
  { label: "Oyun Geliştirme", icon: Gamepad2 },
  { label: "Siber Güvenlik", icon: ShieldCheck },
];

const ARTICLES = [
  {
    image: aiImg,
    category: "Yapay Zeka",
    title: "Yerel LLM'ler 2026'da kurumsal yazılımın kalbine yerleşiyor",
    excerpt:
      "Küçük dil modellerinin donanım üzerindeki verimliliği, bulut bağımlılığını azaltarak yeni bir mimari dalga başlattı.",
    date: "5 Eylül 2026",
    readTime: "6 dk",
  },
  {
    image: devImg,
    category: "Yazılım",
    title: "Rust mı, Go mu? Sistem programlamada 2026'nın kazananı",
    excerpt:
      "Büyük ölçekli altyapı ekiplerinin tercihleri, performans ve geliştirici deneyimi dengesini yeniden tanımlıyor.",
    date: "4 Eylül 2026",
    readTime: "8 dk",
  },
  {
    image: securityImg,
    category: "Siber Güvenlik",
    title: "Sıfır güven mimarisi artık KOBİ'ler için de erişilebilir",
    excerpt:
      "Yeni nesil kimlik doğrulama araçları, kurumsal düzeyde güvenliği küçük ekiplerin bütçesine indiriyor.",
    date: "3 Eylül 2026",
    readTime: "5 dk",
  },
];

function useTheme() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    setTheme(document.documentElement.classList.contains("light") ? "light" : "dark");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("light", next === "light");
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* yoksay */
    }
  };

  return { theme, toggle };
}

function Header() {
  const { theme, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="/" className="flex items-center gap-2.5" aria-label="BitGündem ana sayfa">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Cpu className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-bold tracking-tight">
            Bit<span className="text-primary">Gündem</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Ana menü">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label={theme === "dark" ? "Açık temaya geç" : "Koyu temaya geç"}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menüyü aç/kapat"
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground lg:hidden"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          className="border-t border-border bg-background px-4 pb-4 pt-2 lg:hidden"
          aria-label="Mobil menü"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 lg:p-10">
          <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
            Donanım & Altyapı
          </span>
          <h1 className="mt-3 max-w-3xl font-display text-2xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Türkiye'nin ilk yerli yapay zeka süper bilgisayarı devreye girdi
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-white/80 sm:text-base">
            10 petaflop hesaplama gücüyle araştırma merkezlerine hizmet verecek sistem, yerli
            mühendisler tarafından tasarlanan soğutma mimarisiyle enerji verimliliğinde dünya
            rekoru kırdı.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <a
              href="#haberler"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
            >
              Haberi Oku <ArrowRight className="h-4 w-4" />
            </a>
            <span className="flex items-center gap-1.5 text-xs text-white/70">
              <CalendarDays className="h-3.5 w-3.5" /> 6 Eylül 2026
              <span className="mx-1">•</span>
              <Clock className="h-3.5 w-3.5" /> 10 dk okuma
            </span>
          </div>
        </div>
      </article>

      <div className="mt-6 flex flex-wrap items-center gap-2" role="list" aria-label="Konu etiketleri">
        {TAGS.map((tag) => (
          <a
            key={tag.label}
            href={`#${tag.label.toLowerCase().replace(/\s+/g, "-")}`}
            role="listitem"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
          >
            <tag.icon className="h-4 w-4" />
            {tag.label}
          </a>
        ))}
      </div>
    </section>
  );
}

function ArticleGrid() {
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
        <a
          href="#haberler"
          className="hidden items-center gap-1.5 text-sm font-medium text-primary hover:underline sm:inline-flex"
        >
          Tümünü Gör <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ARTICLES.map((article) => (
          <article
            key={article.title}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                width={800}
                height={600}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <span className="w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {article.category}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold leading-snug group-hover:text-primary">
                <a href="#haberler">{article.title}</a>
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
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
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
    if (!valid || email.trim().length > 255) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  };

  return (
    <div>
      <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
        <Mail className="h-5 w-5 text-primary" /> Haftalık Bülten
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Mühendislik dünyasından seçki haberler her Pazartesi kutunuzda.
      </p>
      {status === "success" ? (
        <p className="mt-4 rounded-lg border border-primary/40 bg-primary/10 px-4 py-3 text-sm font-medium text-primary">
          Kaydınız alındı, hoş geldiniz!
        </p>
      ) : (
        <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-2 sm:flex-row" noValidate>
          <label htmlFor="newsletter-email" className="sr-only">
            E-posta adresiniz
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setStatus("idle");
            }}
            placeholder="ornek@eposta.com"
            maxLength={255}
            className="h-11 flex-1 rounded-lg border border-input bg-card px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <button
            type="submit"
            className="h-11 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
          >
            Abone Ol
          </button>
        </form>
      )}
      {status === "error" && (
        <p className="mt-2 text-xs font-medium text-destructive">
          Lütfen geçerli bir e-posta adresi girin.
        </p>
      )}
    </div>
  );
}

function Footer() {
  const socials = [
    { label: "Twitter", icon: Twitter },
    { label: "GitHub", icon: Github },
    { label: "LinkedIn", icon: Linkedin },
    { label: "YouTube", icon: Youtube },
  ];

  return (
    <footer id="etkinlikler" className="border-t border-border bg-card/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <a href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Cpu className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-bold tracking-tight">
              Bit<span className="text-primary">Gündem</span>
            </span>
          </a>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Bilgisayar mühendisliği öğrencileri ve profesyonelleri için güncel haber, analiz ve
            kariyer kaynağı.
          </p>
          <div className="mt-4 flex gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Alt menü" className="md:justify-self-center">
          <h3 className="font-display text-lg font-semibold">Keşfet</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="transition-colors hover:text-primary">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Newsletter />
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © 2026 BitGündem. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <ArticleGrid />
      </main>
      <Footer />
    </div>
  );
}
