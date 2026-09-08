import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Cpu,
  Github,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Sun,
  Twitter,
  X,
  Youtube,
} from "lucide-react";

import { CATEGORIES } from "@/lib/articles";

export const NAV_ITEMS = [
  { label: "Haberler", href: "/#haberler" },
  { label: "Yazılım & Yapay Zeka", href: "/kategori/yapay-zeka" },
  { label: "Mühendislik Dalları", href: "/muhendislik-dallari" },
  { label: "Kariyer & İlanlar", href: "/#kariyer" },
  { label: "Etkinlikler", href: "/#etkinlikler" },
  { label: "Hakkımda", href: "/hakkimda" },
];

export function useTheme() {
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

export function SiteHeader() {
  const { theme, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5" aria-label="BitGündem ana sayfa">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Cpu className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-bold tracking-tight">
            Bit<span className="text-primary">Gündem</span>
          </span>
        </Link>

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

export function SiteFooter() {
  const socials = [
    { label: "Twitter", icon: Twitter },
    { label: "GitHub", icon: Github },
    { label: "LinkedIn", icon: Linkedin },
    { label: "YouTube", icon: Youtube },
  ];

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Cpu className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-bold tracking-tight">
              Bit<span className="text-primary">Gündem</span>
            </span>
          </Link>
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

        <nav aria-label="Kategoriler" className="md:justify-self-center">
          <h3 className="font-display text-lg font-semibold">Kategoriler</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {CATEGORIES.map((category) => (
              <li key={category.slug}>
                <Link
                  to="/kategori/$slug"
                  params={{ slug: category.slug }}
                  className="transition-colors hover:text-primary"
                >
                  {category.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/muhendislik-dallari" className="transition-colors hover:text-primary">
                Mühendislik Dalları
              </Link>
            </li>
            <li>
              <Link to="/hakkimda" className="transition-colors hover:text-primary">
                Hakkımda
              </Link>
            </li>
            <li>
              <Link to="/admin" className="transition-colors hover:text-primary">
                Haber Ekle (Yönetim)
              </Link>
            </li>
          </ul>
        </nav>

        <Newsletter />
      </div>
      <div className="border-t border-border px-4 py-5 text-center text-xs leading-relaxed text-muted-foreground">
        © 2026 BitGündem — Tasarım ve İçerik: Ali Haydar Kurçan. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
