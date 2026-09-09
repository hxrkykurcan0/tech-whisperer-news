import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Code2 } from "lucide-react";

import { SiteFooter, SiteHeader } from "@/components/site-chrome";

interface Language {
  name: string;
  tagline: string;
  purpose: string;
  usage: string;
  detail: string;
  areas: string[];
  level: string;
}

const LANGUAGES: Language[] = [
  {
    name: "Python",
    tagline: "Okunabilirliği ve çok yönlülüğüyle yeni başlayanların ve yapay zeka dünyasının gözdesi.",
    purpose:
      "Python, sade ve insan diline yakın sözdizimi sayesinde hızlı prototip geliştirmek, veri analiz etmek ve otomasyon yazmak için tasarlandı.",
    usage:
      "Yapay zeka ve makine öğrenmesi (TensorFlow, PyTorch), veri bilimi (pandas, NumPy), web geliştirme (Django, Flask), otomasyon betikleri ve eğitim amaçlı kullanılır.",
    detail:
      "Yorumlanan bir dil olduğu için yazdığınız kod anında çalıştırılabilir; derleme adımı yoktur. Zengin kütüphane ekosistemi sayesinde birkaç satırla karmaşık işler yapılabilir. Büyük veri, siber güvenlik araçları ve bilimsel hesaplama alanlarında da standart hale gelmiştir. Dezavantajı, C++ gibi diller kadar hızlı çalışmamasıdır; ancak kritik bölümler C ile hızlandırılabilir.",
    areas: ["Yapay zeka", "Veri bilimi", "Web backend", "Otomasyon", "Eğitim"],
    level: "Başlangıç dostu",
  },
  {
    name: "JavaScript / TypeScript",
    tagline: "Web'in dili: tarayıcıda çalışan tek programlama dili.",
    purpose:
      "JavaScript, web sayfalarını etkileşimli hale getirmek için doğdu; TypeScript ise büyük projelerde hata bulmayı kolaylaştıran tip güvenliği ekleyen bir üst kümesidir.",
    usage:
      "Web arayüzleri (React, Vue, Angular), sunucu geliştirme (Node.js), mobil uygulama (React Native) ve hatta masaüstü uygulamalar (Electron) için kullanılır.",
    detail:
      "Her tarayıcıda yerleşik çalışan tek dildir; bu yüzden frontend geliştirmenin vazgeçilmezidir. Node.js sayesinde aynı dille hem arayüz hem sunucu yazılabilir. TypeScript, büyük ekiplerde kodun daha güvenli ve öngörülebilir olmasını sağlar; günümüzde profesyonel web projelerinin çoğunda tercih edilir.",
    areas: ["Web frontend", "Node.js backend", "Mobil (React Native)", "Masaüstü (Electron)"],
    level: "Başlangıç dostu",
  },
  {
    name: "C",
    tagline: "Modern dillerin atası; donanıma en yakın taşınabilir dil.",
    purpose:
      "C, işletim sistemleri ve donanımla doğrudan konuşabilen, küçük ama güçlü bir sistem programlama dili olarak tasarlandı.",
    usage:
      "İşletim sistemi çekirdekleri (Linux), gömülü sistemler, mikrodenetleyici programlama, sürücü yazılımları ve yüksek performanslı kütüphaneler için kullanılır.",
    detail:
      "Belleği doğrudan yönetmenize izin verir; bu güç büyük hız sağlar ama hatalara açık olmayı da beraberinde getirir. Python, Java ve C++ gibi birçok dilin temelleri C'den esinlenmiştir. Bir mikrodenetleyici, akıllı saat veya otomobil beyni programlıyorsanız büyük olasılıkla C kullanırsınız.",
    areas: ["İşletim sistemleri", "Gömülü sistemler", "Sürücüler", "IoT cihazları"],
    level: "Orta-ileri",
  },
  {
    name: "C++",
    tagline: "Performansın kralı: oyun motorlarından tarayıcılara.",
    purpose:
      "C++ , C'nin hızını koruyarak nesne yönelimli programlama ve modern soyutlamalar ekler; büyük ve performans kritik sistemler için tasarlanmıştır.",
    usage:
      "Oyun motorları (Unreal Engine), grafik işleme, tarayıcı motorları, finans sistemleri, simülasyonlar ve yüksek frekanslı işlem yazılımlarında kullanılır.",
    detail:
      "Saniyede milyonlarca işlem gereken her yerde C++ karşınıza çıkar. Oyun geliştirmede Unreal Engine'in dili, Chrome tarayıcısının motorunun dili ve birçok yapay zeka kütüphanesinin arkasındaki dildir. Öğrenmesi zordur ama donanımın tüm gücünü kontrol etmenizi sağlar.",
    areas: ["Oyun geliştirme", "Grafik ve simülasyon", "Finans sistemleri", "Tarayıcı motorları"],
    level: "İleri",
  },
  {
    name: "C#",
    tagline: "Microsoft ekosisteminin ve Unity oyunlarının dili.",
    purpose:
      "C#, Microsoft tarafından kurumsal uygulamalar, masaüstü yazılımlar ve oyunlar için geliştirilen modern, nesne yönelimli bir dildir.",
    usage:
      "Unity ile oyun geliştirme, .NET ile web ve kurumsal uygulamalar, Windows masaüstü programları ve bulut servisleri için kullanılır.",
    detail:
      "Dünyadaki bağımsız ve mobil oyunların büyük bölümü Unity ile, yani C# ile yazılır. Kurumsal dünyada bankacılık ve sigortacılık sistemlerinde yaygındır. Sözdizimi Java'ya benzer; öğrenen biri iki dile de kolayca geçiş yapabilir.",
    areas: ["Unity oyunları", "Kurumsal yazılım", "Windows uygulamaları", ".NET web servisleri"],
    level: "Orta",
  },
  {
    name: "Java",
    tagline: "\"Bir kez yaz, her yerde çalıştır\" ilkesinin kurumsal devi.",
    purpose:
      "Java, platformdan bağımsız çalışan, güvenli ve büyük ölçekli kurumsal uygulamalar geliştirmek için tasarlandı.",
    usage:
      "Kurumsal backend sistemleri, Android uygulama geliştirme, büyük veri araçları (Hadoop, Kafka) ve finans uygulamalarında kullanılır.",
    detail:
      "Java Sanal Makinesi (JVM) sayesinde yazılan kod Windows, Linux veya macOS fark etmeksizin çalışır. Bankalar, sigorta şirketleri ve devlet kurumlarındaki kritik sistemlerin çoğu Java ile yazılmıştır. Android'in tarihsel ana dilidir; günümüzde yerini kademeli olarak Kotlin'e bırakmaktadır.",
    areas: ["Kurumsal backend", "Android", "Büyük veri", "Finans sistemleri"],
    level: "Orta",
  },
  {
    name: "Go",
    tagline: "Google'ın bulut çağı için tasarladığı sade ve hızlı dil.",
    purpose:
      "Go, büyük ölçekli sunucu yazılımlarını basit sözdizimi ve yerleşik eşzamanlılık desteğiyle hızlı geliştirmek için Google'da doğdu.",
    usage:
      "Bulut altyapıları (Docker, Kubernetes Go ile yazılmıştır), mikroservisler, API sunucuları ve ağ araçları için kullanılır.",
    detail:
      "Derlenen bir dil olduğu için C++'a yakın hızda çalışır ama Python kadar sade bir sözdizimine sahiptir. Goroutine mekanizması sayesinde binlerce eşzamanlı bağlantıyı zahmetsizce yönetir. DevOps ve bulut dünyasının standart dili haline gelmiştir.",
    areas: ["Mikroservisler", "Bulut altyapısı", "DevOps araçları", "API geliştirme"],
    level: "Orta",
  },
  {
    name: "Rust",
    tagline: "Bellek güvenliğini hızdan ödün vermeden sağlayan modern sistem dili.",
    purpose:
      "Rust, C++ seviyesinde performans sunarken bellek hatalarını (çökme, güvenlik açıkları) derleme aşamasında engellemek için tasarlandı.",
    usage:
      "Sistem programlama, tarayıcı motorları, blokzincir, oyun motorları ve güvenlik kritik yazılımlarda kullanılır.",
    detail:
      "\"Ownership\" (sahiplik) sistemi sayesinde çöp toplayıcıya ihtiyaç duymadan belleği güvenle yönetir. Stack Overflow anketlerinde yıllardır \"en sevilen dil\" seçilmektedir. Linux çekirdeği ve Windows bileşenleri gibi kritik projelere girmeye başlamıştır.",
    areas: ["Sistem yazılımı", "Güvenlik", "Blokzincir", "WebAssembly"],
    level: "İleri",
  },
  {
    name: "SQL",
    tagline: "Veritabanlarıyla konuşmanın evrensel dili.",
    purpose:
      "SQL, ilişkisel veritabanlarında veri sorgulamak, eklemek, güncellemek ve silmek için geliştirilmiş bildirimsel bir dildir.",
    usage:
      "PostgreSQL, MySQL, SQL Server ve Oracle gibi veritabanlarında raporlama, veri analizi ve uygulama backend'lerinde kullanılır.",
    detail:
      "Nasıl yapılacağını değil, ne istediğinizi yazarsınız; veritabanı en verimli yolu kendisi bulur. Programlama dillerinden farklı olarak tek bir işe odaklanır ama neredeyse her yazılımcının bilmesi gerekir: verisi olmayan uygulama yoktur. Veri analistleri ve backend geliştiriciler için temel beceridir.",
    areas: ["Veritabanı yönetimi", "Veri analizi", "Backend geliştirme", "Raporlama"],
    level: "Başlangıç dostu",
  },
  {
    name: "Kotlin & Swift",
    tagline: "Mobil dünyanın modern ikilisi: Android ve iOS.",
    purpose:
      "Kotlin, Android için Java'nın modern halefi; Swift ise Apple'ın iOS, macOS ve diğer platformları için geliştirdiği güvenli ve hızlı dildir.",
    usage:
      "Kotlin ile Android uygulamaları ve sunucu yazılımları; Swift ile iPhone, iPad, Mac, Apple Watch ve Vision Pro uygulamaları geliştirilir.",
    detail:
      "İkisi de null güvenliği, kısa sözdizimi ve modern dil özellikleriyle eski dillerin (Java, Objective-C) zorluklarını çözer. Mobil geliştirmek isteyenler için platformuna göre birini öğrenmek en doğrudan yoldur; ikisinin de sözdizimi birbirine şaşırtıcı derecede benzer.",
    areas: ["Android geliştirme", "iOS geliştirme", "Mobil uygulama", "Apple ekosistemi"],
    level: "Orta",
  },
];

export const Route = createFileRoute("/yazilim-dilleri")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Yazılım Dilleri Rehberi — BigKod" },
      {
        name: "description",
        content:
          "Python, JavaScript, C, C++, C#, Java, Go, Rust, SQL, Kotlin ve Swift: her yazılım dilinin ne işe yaradığı, hangi amaçla ve hangi alanlarda kullanıldığı hakkında detaylı Türkçe rehber.",
      },
      { property: "og:title", content: "Yazılım Dilleri Rehberi — BigKod" },
      {
        property: "og:description",
        content:
          "Her yazılım dilinin ne işe yaradığını ve nerelerde kullanıldığını öğrenin: Python'dan Rust'a kapsamlı Türkçe rehber.",
      },
      { property: "og:url", content: "https://tech-whisperer-news.lovable.app/yazilim-dilleri" },
    ],
    links: [{ rel: "canonical", href: "https://tech-whisperer-news.lovable.app/yazilim-dilleri" }],
  }),
  component: LanguagesPage,
});

function LanguagesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="border-b border-border/60 bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
              <Code2 className="h-6 w-6" />
            </span>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">BigKod Rehberi</p>
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Yazılım Dilleri: Ne İşe Yarar, Nerede Kullanılır?
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Her yazılım dili belirli bir sorunu çözmek için doğdu. Kimisi donanımla konuşur, kimisi web
            sayfalarını canlandırır, kimisi milyonlarca kullanıcılı sunucuları yönetir. Bu rehberde en
            yaygın dillerin amacını, kullanım alanlarını ve hangi seviyeye uygun olduğunu bulabilirsiniz.
          </p>
          <nav className="mt-8 flex flex-wrap gap-2">
            {LANGUAGES.map((lang) => (
              <a
                key={lang.name}
                href={`#${lang.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="rounded-full border border-border/70 bg-card/60 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                {lang.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {LANGUAGES.map((lang) => (
            <article
              key={lang.name}
              id={lang.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
              className="flex scroll-mt-24 flex-col rounded-2xl border border-border/70 bg-card/70 p-6 shadow-lg shadow-black/5"
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-xl font-bold tracking-tight sm:text-2xl">{lang.name}</h2>
                <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
                  {lang.level}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-primary/90">{lang.tagline}</p>

              <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>
                  <strong className="font-semibold text-foreground">Amacı: </strong>
                  {lang.purpose}
                </p>
                <p>
                  <strong className="font-semibold text-foreground">Kullanımı: </strong>
                  {lang.usage}
                </p>
                <p>{lang.detail}</p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2 border-t border-border/60 pt-4">
                {lang.areas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-secondary-foreground"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <section className="mt-14 rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight">Hangi dille başlamalıyım?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Yeni başlıyorsanız Python ile temel mantığı kavramak, ardından ilgi alanınıza göre web için
            JavaScript, oyun için C# veya sistem programlama için C/C++ yoluna girmek yaygın bir
            yaklaşımdır. Mühendislik dalları hakkında daha fazla bilgi için rehberimize göz atın.
          </p>
          <Link
            to="/muhendislik-dallari"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Mühendislik Dalları Rehberi
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
