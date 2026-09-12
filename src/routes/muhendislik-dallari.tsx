import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteFooter, SiteHeader } from "@/components/site-chrome";

interface Branch {
  name: string;
  summary: string;
  detail: string;
  fields: string[];
}

const BRANCHES: Branch[] = [
  {
    name: "Bilgisayar Mühendisliği",
    summary: "Donanım ve yazılımı birlikte tasarlayan, hesaplama sistemlerinin temelini kuran dal.",
    detail:
      "Bilgisayar mühendisleri işletim sistemleri, veri yapıları ve algoritmalar, bilgisayar mimarisi, ağlar ve veritabanları gibi konularda çalışır. Bir yandan işlemcinin nasıl komut yürüttüğünü bilirken diğer yandan büyük ölçekli uygulamalar geliştirebilir. Mezunlar yazılım geliştirme, gömülü sistemler, ağ yönetimi, veri mühendisliği ve araştırma alanlarında görev alır.",
    fields: ["Yazılım geliştirme", "Gömülü sistemler", "Ağ ve sistem", "Veritabanı", "Ar-Ge"],
  },
  {
    name: "Yazılım Mühendisliği",
    summary: "Büyük yazılım projelerini planlı, test edilebilir ve sürdürülebilir biçimde üretir.",
    detail:
      "Yazılım mühendisliği; gereksinim analizi, tasarım, kodlama, test, sürüm yönetimi ve bakım süreçlerini disiplinli bir mühendislik yaklaşımıyla ele alır. Ekip çalışması, kod kalitesi, otomatik test ve sürekli entegrasyon bu dalın merkezindedir. Mezunlar web ve mobil uygulama geliştirme, kalite güvence, DevOps ve ürün mühendisliği rollerinde çalışır.",
    fields: ["Web & mobil", "Test ve kalite", "DevOps", "Ürün mühendisliği"],
  },
  {
    name: "Yapay Zeka ve Veri Mühendisliği",
    summary: "Veriden öğrenen sistemler kurar; modelleri üretim ortamına taşır.",
    detail:
      "Bu alan istatistik, doğrusal cebir ve olasılık temelleri üzerine kurulur. Makine öğrenmesi, derin öğrenme, doğal dil işleme ve bilgisayarla görü konularında model geliştirilir; veri toplama, temizleme ve etiketleme süreçleri kurgulanır. MLOps sayesinde modeller izlenir, güncellenir ve ölçeklenir. Sağlık, finans, otomotiv ve savunma sektörlerinde talep yüksektir.",
    fields: ["Makine öğrenmesi", "Doğal dil işleme", "Bilgisayarla görü", "MLOps", "Veri analizi"],
  },
  {
    name: "Elektrik-Elektronik Mühendisliği",
    summary: "Elektriğin üretiminden mikroçip tasarımına uzanan geniş bir yelpaze.",
    detail:
      "Elektrik tarafında enerji üretimi, iletim hatları, yüksek gerilim sistemleri ve yenilenebilir enerji; elektronik tarafında devre tasarımı, sensörler, haberleşme sistemleri ve mikrodenetleyiciler yer alır. Mühendisler baskılı devre kartı tasarlar, sinyal işler ve gömülü yazılım yazar. Enerji şirketleri, savunma sanayii, telekomünikasyon ve elektronik üreticileri başlıca çalışma alanlarıdır.",
    fields: ["Enerji sistemleri", "Devre tasarımı", "Telekomünikasyon", "Gömülü donanım", "Kontrol"],
  },
  {
    name: "Makine Mühendisliği",
    summary: "Hareket eden her şeyin tasarımı, üretimi ve enerji dönüşümü.",
    detail:
      "Termodinamik, akışkanlar mekaniği, malzeme bilimi ve makine elemanları temel derslerdir. Mühendisler motor, türbin, iklimlendirme sistemi, üretim hattı ve mekanik parça tasarlar; bilgisayar destekli tasarım (CAD) ve sonlu elemanlar analizi (FEA) araçlarını kullanır. Otomotiv, havacılık, enerji ve beyaz eşya sektörleri en yoğun istihdam alanlarıdır.",
    fields: ["Otomotiv", "Havacılık", "Enerji", "Üretim ve imalat", "CAD/CAE"],
  },
  {
    name: "Endüstri Mühendisliği",
    summary: "İnsan, makine ve malzemeden oluşan sistemleri verimli hale getirir.",
    detail:
      "Yöneylem araştırması, üretim planlama, kalite yönetimi, tedarik zinciri ve simülasyon bu dalın araçlarıdır. Endüstri mühendisi bir fabrikanın üretim akışını, bir hastanenin randevu düzenini ya da bir e-ticaret şirketinin depo yerleşimini optimize edebilir. Matematiksel modelleme ve veri analizi becerisi, bu dalı yazılım ve veri alanlarına da yakınlaştırır.",
    fields: ["Tedarik zinciri", "Üretim planlama", "Kalite", "Optimizasyon", "İş analitiği"],
  },
  {
    name: "Mekatronik Mühendisliği",
    summary: "Makine, elektronik ve yazılımın kesişiminde robotik sistemler kurar.",
    detail:
      "Mekatronik mühendisleri sensörlerden veri alan, karar veren ve motorları süren sistemler tasarlar. Robot kolları, otonom araçlar, akıllı üretim hatları ve insansız hava araçları tipik uygulamalardır. Kontrol teorisi, gömülü programlama ve mekanik tasarım bilgisini birlikte kullanmayı gerektirir.",
    fields: ["Robotik", "Otomasyon", "Kontrol sistemleri", "İnsansız araçlar"],
  },
  {
    name: "İnşaat Mühendisliği",
    summary: "Yapıların güvenli, dayanıklı ve ekonomik biçimde inşa edilmesini sağlar.",
    detail:
      "Statik ve betonarme hesapları, zemin mekaniği, ulaştırma ve su yapıları bu dalın omurgasıdır. Deprem kuşağındaki Türkiye'de yapı güvenliği ve güçlendirme özellikle kritik bir uzmanlık alanıdır. Şantiye yönetimi, proje planlaması ve yapı bilgi modellemesi (BIM) günlük iş akışının parçasıdır.",
    fields: ["Yapı statiği", "Geoteknik", "Ulaştırma", "Şantiye yönetimi", "BIM"],
  },
  {
    name: "Kimya Mühendisliği",
    summary: "Hammaddeyi endüstriyel ölçekte ürüne dönüştüren süreçleri tasarlar.",
    detail:
      "Reaksiyon mühendisliği, ısı ve kütle transferi, ayırma işlemleri ve proses kontrolü temel konulardır. Petrokimya, ilaç, gıda, kozmetik ve enerji sektörlerinde tesis tasarımı, verim artırma ve çevresel etkiyi azaltma üzerine çalışılır.",
    fields: ["Petrokimya", "İlaç", "Gıda", "Proses kontrol", "Çevre teknolojileri"],
  },
  {
    name: "Biyomedikal Mühendisliği",
    summary: "Mühendislik yöntemlerini sağlık ve tıp alanına uygular.",
    detail:
      "Görüntüleme cihazları, protezler, giyilebilir sağlık sensörleri ve klinik karar destek yazılımları geliştirilir. Sinyal işleme, malzeme bilimi ve yapay zeka bir arada kullanılır. Hastaneler, medikal cihaz üreticileri ve araştırma merkezleri başlıca çalışma alanlarıdır.",
    fields: ["Medikal cihazlar", "Biyosinyal işleme", "Protez ve implant", "Sağlık yazılımları"],
  },
];

export const Route = createFileRoute("/muhendislik-dallari")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Mühendislik Dalları Rehberi — BigKod" },
      {
        name: "description",
        content:
          "Bilgisayar, yazılım, yapay zeka, elektrik-elektronik, makine, endüstri ve diğer mühendislik dalları: ne iş yaparlar, hangi alanlarda çalışırlar?",
      },
      { property: "og:title", content: "Mühendislik Dalları Rehberi — BigKod" },
      {
        property: "og:description",
        content: "Tüm mühendislik dallarının çalışma alanları ve detaylı açıklamaları.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BranchesPage,
});

function BranchesPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <nav className="flex items-center gap-2 text-xs text-muted-foreground" aria-label="Konum">
          <Link to="/" className="transition-colors hover:text-primary">
            Ana sayfa
          </Link>
          <span className="text-border">/</span>
          <span className="text-foreground">Mühendislik Dalları</span>
        </nav>

        <h1 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Mühendislik Dalları Rehberi
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Hangi mühendislik dalı ne iş yapar, hangi derslerle şekillenir ve mezunları nerelerde
          çalışır? Üniversite tercihi öncesinde yön bulmanı kolaylaştıracak kapsamlı bir rehber
          hazırladık.
        </p>

        <nav aria-label="Dal listesi" className="mt-6 flex flex-wrap gap-2">
          {BRANCHES.map((branch) => (
            <a
              key={branch.name}
              href={`#${slugify(branch.name)}`}
              className="rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
            >
              {branch.name}
            </a>
          ))}
        </nav>

        <div className="mt-10 space-y-6">
          {BRANCHES.map((branch) => (
            <article
              key={branch.name}
              id={slugify(branch.name)}
              className="group scroll-mt-24 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 sm:p-7"
            >
              <h2 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
                {branch.name}
              </h2>
              <p className="mt-2 text-sm font-medium text-primary">{branch.summary}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {branch.detail}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {branch.fields.map((field) => (
                  <span
                    key={field}
                    className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {field}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function slugify(value: string) {
  return value
    .toLocaleLowerCase("tr")
    .replace(/[çğıöşü]/g, (c) => ({ ç: "c", ğ: "g", ı: "i", ö: "o", ş: "s", ü: "u" })[c] ?? c)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
