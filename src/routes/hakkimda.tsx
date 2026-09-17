import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, Mail, Sparkles, Zap, Code2, Brain, Shield, Cpu } from "lucide-react";

import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const Route = createFileRoute("/hakkimda")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Hakkımda — Ali Haydar Kurçan | BigKod" },
      {
        name: "description",
        content:
          "BigKod'u hazırlayan Ali Haydar Kurçan: bilgisayar mühendisliği okumak isteyen bir lise öğrencisinin teknoloji yolculuğu.",
      },
      { property: "og:title", content: "Hakkımda — Ali Haydar Kurçan | BigKod" },
      {
        property: "og:description",
        content: "BigKod'un kurucusu Ali Haydar Kurçan hakkında.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const INTERESTS = [
  { icon: Code2, label: "Yazılım Geliştirme", desc: "Rust, Go, Python ve TypeScript ile sistem ve uygulama geliştirme" },
  { icon: Brain, label: "Yapay Zeka", desc: "Büyük dil modelleri, bilgisayarla görü ve MLOps" },
  { icon: Shield, label: "Siber Güvenlik", desc: "Sıfır güven mimarisi, CTF yarışmaları ve güvenli SDLC" },
  { icon: Cpu, label: "Donanım", desc: "İşlemci mimarileri, GPU programlama ve gömülü sistemler" },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-mesh font-sans text-foreground antialiased">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <nav className="flex items-center gap-2 text-xs text-muted-foreground anim-in" aria-label="Konum">
          <Link to="/" className="transition-colors hover:text-primary">
            Ana sayfa
          </Link>
          <span className="text-border">/</span>
          <span className="text-foreground">Hakkımda</span>
        </nav>

        <div className="mt-6 anim-in">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
            <Zap className="h-4 w-4" />
            Hakkımda
          </div>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Hakkımda
          </h1>
        </div>

        <section className="relative mt-6 overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-8 aurora-blobs ring-gradient anim-in">
          <div className="relative">
            <div className="flex items-center gap-4">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary font-display text-xl font-bold text-primary-foreground shadow-lg shadow-primary/20">
                BG
              </span>
              <div>
                <p className="font-display text-xl font-semibold">Ali Haydar Kurçan</p>
                <p className="text-sm text-muted-foreground">Lise öğrencisi • BigKod kurucusu</p>
              </div>
            </div>

            <p className="mt-6 border-l-2 border-primary/40 pl-4 text-base leading-relaxed text-foreground sm:text-lg">
              Ben Ali Haydar Kurçan, ileride bilgisayar mühendisliği okumak isteyen bir lise
              öğrencisiyim.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              BigKod'u, teknolojiye ilgi duyan öğrencilerin yazılım, yapay zeka, siber güvenlik ve
              donanım dünyasındaki gelişmeleri sade bir Türkçeyle takip edebilmesi için hazırlıyorum.
              Amacım hem kendi öğrenme sürecimi belgelemek hem de aynı yolda ilerlemek isteyenlere
              derli toplu bir kaynak sunmak.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { icon: GraduationCap, title: "Hedef", text: "Bilgisayar mühendisliği okumak" },
                { icon: Sparkles, title: "İlgi alanları", text: "Yazılım, yapay zeka, donanım" },
                { icon: Mail, title: "İletişim", text: "Bülten üzerinden ulaşabilirsiniz" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group rounded-xl border border-border bg-secondary/30 p-4 lift hover:border-primary/30 hover:bg-secondary/50"
                >
                  <item.icon className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
                  <p className="mt-2 text-sm font-semibold">{item.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 anim-in">
          <h2 className="font-display text-xl font-bold tracking-tight">İlgi alanlarım</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 stagger">
            {INTERESTS.map((interest) => (
              <div
                key={interest.label}
                className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 lift hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                  <interest.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold transition-colors group-hover:text-primary">{interest.label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{interest.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-8 flex flex-wrap gap-3 anim-in">
          <Link
            to="/muhendislik-dallari"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/85 hover:shadow-md hover:shadow-primary/20"
          >
            Mühendislik dalları rehberini incele
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:text-primary"
          >
            Haberlere dön
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
