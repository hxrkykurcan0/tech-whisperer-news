import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, Mail, Sparkles } from "lucide-react";

import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const Route = createFileRoute("/hakkimda")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Hakkımda — Ali Haydar Kurçan | BigKod" },
      {
        name: "description",
        content:
          "BigKod'i hazırlayan Ali Haydar Kurçan: bilgisayar mühendisliği okumak isteyen bir lise öğrencisinin teknoloji yolculuğu.",
      },
      { property: "og:title", content: "Hakkımda — Ali Haydar Kurçan | BigKod" },
      {
        property: "og:description",
        content: "BigKod'in kurucusu Ali Haydar Kurçan hakkında.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <nav className="flex items-center gap-2 text-xs text-muted-foreground" aria-label="Konum">
          <Link to="/" className="transition-colors hover:text-primary">
            Ana sayfa
          </Link>
          <span className="text-border">/</span>
          <span className="text-foreground">Hakkımda</span>
        </nav>

        <h1 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Hakkımda
        </h1>

        <section className="relative mt-6 overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-primary/8 blur-3xl" />
          <div className="relative">
            <div className="flex items-center gap-4">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/90 font-display text-xl font-bold text-primary-foreground shadow-lg shadow-primary/20">
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
              BigKod'i, teknolojiye ilgi duyan öğrencilerin yazılım, yapay zeka, siber güvenlik ve
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
                  className="rounded-xl border border-border bg-secondary/30 p-4 transition-all hover:border-primary/30 hover:bg-secondary/50"
                >
                  <item.icon className="h-5 w-5 text-primary" />
                  <p className="mt-2 text-sm font-semibold">{item.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Link
          to="/muhendislik-dallari"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
        >
          Mühendislik dalları rehberini incele <ArrowRight className="h-4 w-4" />
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}
