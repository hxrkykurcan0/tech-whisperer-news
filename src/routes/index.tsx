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
import cloudImg from "@/assets/news-cloud.jpg";
import gameImg from "@/assets/news-game.jpg";
import careerImg from "@/assets/news-career.jpg";
import eventImg from "@/assets/news-event.jpg";

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
      "7-13 milyar parametreli modellerin tek bir GPU'da saniyede yüzlerce token üretebilmesi, kurumların veri gizliliği kaygısıyla buluta gönderemediği iş yüklerini yeniden şirket içine taşıyor. Bankacılıktan sağlığa uzanan sektörlerde, ince ayar yapılmış küçük modeller artık genel amaçlı dev modellerle başa baş sonuç veriyor. Uzmanlar, önümüzdeki iki yıl içinde kurumsal yapay zeka harcamalarının üçte birinin yerel altyapıya kayacağını öngörüyor.",
    date: "5 Eylül 2026",
    readTime: "6 dk",
  },
  {
    image: devImg,
    category: "Yazılım",
    title: "Rust mı, Go mu? Sistem programlamada 2026'nın kazananı netleşiyor",
    excerpt:
      "Bellek güvenliği artık bir tercih değil, kamu ihalelerinde dahi aranan bir şart haline geldi. Rust, çekirdek bileşenlerde ve güvenlik açısından kritik yollarda standart olurken; Go, hızlı geliştirme döngüsü ve sade sözdizimiyle mikroservis dünyasındaki tahtını koruyor. Büyük ölçekli altyapı ekipleri, iki dili birbirinin rakibi değil tamamlayıcısı olarak konumlandırıyor: performans kritik katmanda Rust, iş mantığı ve orkestrasyonda Go.",
    date: "4 Eylül 2026",
    readTime: "8 dk",
  },
  {
    image: securityImg,
    category: "Siber Güvenlik",
    title: "Sıfır güven mimarisi artık KOBİ'ler için de erişilebilir",
    excerpt:
      "Kimlik avı saldırılarının yapay zeka ile kişiselleşmesi, küçük ekipleri de kurumsal düzeyde savunma arayışına itti. Yeni nesil kimlik ve erişim yönetimi araçları, donanım anahtarlı doğrulama ve cihaz bazlı güven politikalarını dakikalar içinde kurulabilen paketlere dönüştürdü. Sektör raporlarına göre sıfır güven yaklaşımını benimseyen KOBİ'lerde başarılı sızma girişimleri yıldan yıla belirgin biçimde azalıyor.",
    date: "3 Eylül 2026",
    readTime: "5 dk",
  },
  {
    image: cloudImg,
    category: "Bulut Bilişim",
    title: "Çoklu bulut stratejisi maliyet baskısıyla yeniden tanımlanıyor",
    excerpt:
      "Şirketler, tek sağlayıcıya bağımlılığın faturasını kesinti günlerinde ödediğini fark etti. Ancak çoklu bulutun getirdiği operasyonel karmaşa, platform mühendisliği ekiplerini yeni bir denge arayışına yöneltti: kritik veri katmanı sağlayıcıdan bağımsız, hesaplama katmanı ise esnek. Kubernetes tabanlı soyutlama katmanları ve açık standartlar, bu geçişin en önemli taşıyıcıları olarak öne çıkıyor.",
    date: "2 Eylül 2026",
    readTime: "7 dk",
  },
  {
    image: gameImg,
    category: "Oyun Geliştirme",
    title: "Bağımsız oyun stüdyoları prosedürel üretim araçlarıyla devleşiyor",
    excerpt:
      "Beş kişilik ekiplerin yüzlerce saatlik açık dünya içeriği üretebildiği bir döneme girdik. Prosedürel seviye tasarımı ve yapay zeka destekli varlık üretimi, bağımsız stüdyoların en büyük dezavantajı olan içerik hacmini ortadan kaldırıyor. Türkiye'den çıkan bağımsız yapımlar da bu rüzgârla uluslararası platformlarda öne çıkıyor; sektör temsilcileri yaratıcı tasarımın artık bütçeden değil araç hakimiyetinden geçtiğini vurguluyor.",
    date: "1 Eylül 2026",
    readTime: "6 dk",
  },
  {
    image: heroImg,
    category: "Donanım",
    title: "Çiplet mimarisi işlemci tasarımında yeni bir rekabet alanı açtı",
    excerpt:
      "Tek parça dev yongaların yerini lego gibi birleşen çipletler alırken, rekabet transistör yoğunluğundan paketleme teknolojisine kaydı. Farklı üretim düğümlerinde üretilen çekirdek, bellek ve G/Ç chiplerinin tek pakette buluşması, hem maliyeti düşürüyor hem de tasarım esnekliği sağlıyor. Mühendislik ekipleri için bu, bilgisayar mimarisi derslerindeki varsayımların yeniden yazılması anlamına geliyor.",
    date: "31 Ağustos 2026",
    readTime: "9 dk",
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
            10 petaflop hesaplama gücüyle üniversitelere ve araştırma merkezlerine hizmet verecek
            sistem, yerli mühendislerin tasarladığı sıvı soğutma mimarisi sayesinde benzer
            tesislere kıyasla yüzde 40 daha az enerji tüketiyor. İklim modellemeden ilaç
            keşfine, büyük dil modeli eğitiminden savunma simülasyonlarına uzanan iş yükleri
            ilk kez tamamen yerli altyapıda çalıştırılacak. Proje ekibi, sistemin ilk yılında
            200'den fazla akademik projeye kaynak sağlamasını hedefliyor.
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
          <h2 className="mt-5 font-display text-2xl font-bold tracking-tight">
            Kariyer & İlanlar
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Mühendislik ekiplerinden öne çıkan açık pozisyonlar
          </p>
          <ul className="mt-5 divide-y divide-border rounded-xl border border-border bg-card">
            {JOBS.map((job) => (
              <li key={job.role}>
                <a
                  href="#kariyer"
                  className="group flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-secondary/60"
                >
                  <div>
                    <p className="text-sm font-semibold group-hover:text-primary">{job.role}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{job.company}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                    {job.location}
                  </span>
                </a>
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
              <li key={event.title}>
                <a
                  href="#etkinlikler"
                  className="group flex items-start gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40"
                >
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <CalendarDays className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold group-hover:text-primary">{event.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                      {event.detail}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
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
