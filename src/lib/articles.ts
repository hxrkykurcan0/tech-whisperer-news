import heroImg from "@/assets/hero-news.jpg";
import aiImg from "@/assets/news-ai.jpg";
import devImg from "@/assets/news-dev.jpg";
import securityImg from "@/assets/news-security.jpg";
import cloudImg from "@/assets/news-cloud.jpg";
import gameImg from "@/assets/news-game.jpg";

export interface Article {
  slug: string;
  categorySlug: string;
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  body: string[];
  keyPoints: string[];
}

export interface Category {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  topics: string[];
}

export const HERO_SLUG = "yerli-yapay-zeka-super-bilgisayari";

export const CATEGORIES: Category[] = [
  {
    slug: "yapay-zeka",
    name: "Yapay Zeka",
    tagline: "Modeller, ürünler ve araştırma dünyasından derin analizler",
    description:
      "Büyük dil modellerinden uçta çalışan küçük modellere, MLOps'tan yapay zeka etiğine kadar alanın nabzını tutuyoruz. Araştırma makalelerini mühendislik pratiğine çeviren özgün değerlendirmeler sunuyoruz.",
    highlights: [
      "Yerel ve kurumsal LLM dağıtım stratejileri",
      "MLOps, model izleme ve maliyet optimizasyonu",
      "Üretken yapay zeka ürünlerinin mühendislik analizi",
    ],
    topics: ["LLM", "MLOps", "Bilgisayarla Görü", "Doğal Dil İşleme", "Yapay Zeka Etiği"],
  },
  {
    slug: "yazilim",
    name: "Yazılım",
    tagline: "Diller, framework'ler ve mimari kararlar",
    description:
      "Programlama dillerinin evriminden büyük ölçekli sistem mimarilerine, kod kalitesinden ekip pratiklerine uzanan yazılım geliştirme gündemi. Karşılaştırmalar ve gerçek dünya deneyimleriyle.",
    highlights: [
      "Rust, Go, Python ve TypeScript ekosistemi",
      "Mikroservis ve monolit mimari tartışmaları",
      "Kod inceleme, test stratejileri ve teknik borç yönetimi",
    ],
    topics: ["Rust", "Go", "Python", "TypeScript", "Yazılım Mimarisi"],
  },
  {
    slug: "siber-guvenlik",
    name: "Siber Güvenlik",
    tagline: "Tehditler, savunma teknikleri ve güvenlik kültürü",
    description:
      "Kimlik avından tedarik zinciri saldırılarına, sıfır güven mimarisinden güvenli yazılım geliştirmeye kadar güvenlik dünyasının kritik başlıkları. Hem saldırgan hem savunmacı perspektifle.",
    highlights: [
      "Sıfır güven ve kimlik tabanlı mimariler",
      "Yapay zeka destekli saldırılar ve savunmalar",
      "Güvenli SDLC ve zafiyet yönetimi",
    ],
    topics: ["Sıfır Güven", "Sızma Testi", "Kriptografi", "SOC", "CTF"],
  },
  {
    slug: "bulut-bilisim",
    name: "Bulut Bilişim",
    tagline: "Altyapı, platform mühendisliği ve maliyet gerçekleri",
    description:
      "Çoklu bulut stratejilerinden Kubernetes'e, sunucusuz mimarilerden FinOps'a kadar modern altyapı dünyası. Teoriyi değil, üretim ortamında işe yarayan yaklaşımları inceliyoruz.",
    highlights: [
      "Çoklu bulut ve sağlayıcıdan bağımsız mimariler",
      "Kubernetes ve platform mühendisliği",
      "FinOps: bulut maliyetlerini kontrol altına almak",
    ],
    topics: ["Kubernetes", "FinOps", "Sunucusuz", "Terraform", "Gözlemlenebilirlik"],
  },
  {
    slug: "oyun-gelistirme",
    name: "Oyun Geliştirme",
    tagline: "Motorlar, araçlar ve bağımsız sahne",
    description:
      "Oyun motorlarından prosedürel içerik üretimine, grafik programlamadan Türkiye'nin büyüyen bağımsız oyun sahnesine kadar interaktif eğlencenin mühendislik tarafı.",
    highlights: [
      "Unreal ve Unity ile üretim pratikleri",
      "Prosedürel üretim ve yapay zeka destekli araçlar",
      "Türkiye'den bağımsız stüdyoların yükselişi",
    ],
    topics: ["Unreal Engine", "Unity", "Prosedürel Üretim", "Grafik Programlama", "GameJam"],
  },
  {
    slug: "donanim",
    name: "Donanım",
    tagline: "İşlemciler, mimariler ve gömülü sistemler",
    description:
      "Çiplet mimarilerinden RISC-V'a, GPU programlamadan enerji verimliliğine kadar bilgisayar donanımının mühendislik gündemi. Yazılımcının anlayacağı dille donanım analizleri.",
    highlights: [
      "Çiplet ve ileri paketleme teknolojileri",
      "GPU ve hızlandırıcı programlama",
      "Enerji verimliliği ve soğutma mimarileri",
    ],
    topics: ["Çiplet", "RISC-V", "GPU", "Gömülü Sistemler", "Sıvı Soğutma"],
  },
];

export const ARTICLES: Article[] = [
  {
    slug: "yerel-llmler-kurumsal-yazilimda",
    categorySlug: "yapay-zeka",
    image: aiImg,
    imageAlt: "Yapay zeka sinir ağı görselleştirmesi",
    category: "Yapay Zeka",
    title: "Yerel LLM'ler 2026'da kurumsal yazılımın kalbine yerleşiyor",
    excerpt:
      "7-13 milyar parametreli modellerin tek bir GPU'da saniyede yüzlerce token üretebilmesi, kurumların veri gizliliği kaygısıyla buluta gönderemediği iş yüklerini yeniden şirket içine taşıyor. Bankacılıktan sağlığa uzanan sektörlerde, ince ayar yapılmış küçük modeller artık genel amaçlı dev modellerle başa baş sonuç veriyor.",
    date: "5 Eylül 2026",
    readTime: "6 dk",
    author: "BigKod Araştırma Ekibi",
    body: [
      "Kurumsal yapay zeka pazarında dengeler değişiyor. İki yıl önce 'en büyük model en iyi modeldir' varsayımıyla hareket eden şirketler, bugün tam tersi yönde bir strateji izliyor: işe özel, küçük ve şirket içinde çalışan modeller. 7 ile 13 milyar parametre aralığındaki modellerin modern tüketici sınıfı GPU'larda saniyede yüzlerce token üretebilmesi, bu dönüşümün teknik temelini oluşturuyor.",
      "Dönüşümün arkasındaki en güçlü itici güç veri gizliliği. Bankacılık ve sağlık gibi düzenlemeye tabi sektörlerde çalışan kurumlar, müşteri verilerini üçüncü taraf API'lere göndermekten kaçınıyor. KVKK ve GDPR uyum süreçleri, bulut tabanlı genel amaçlı modellerin önüne ciddi engeller çıkarırken; şirket içi sunucularda çalışan açık ağırlıklı modeller bu engeli ortadan kaldırıyor.",
      "Performans tarafında da tablo şaşırtıcı. Alanına özel verilerle ince ayar yapılmış 13 milyar parametreli bir model, kendi dar alanında genel amaçlı dev modellerle başa baş sonuçlar üretebiliyor. Hukuk metni özetleme, tıbbi rapor sınıflandırma ve kod tamamlama gibi görevlerde yapılan karşılaştırmalı testler, küçük modellerin doğruluk açığı kapattığını; gecikme ve maliyet açısından ise açık ara önde olduğunu gösteriyor.",
      "Altyapı maliyeti tarafında da hesap değişti. Tek bir GPU'lu sunucunun aylık işletme maliyeti, yoğun kullanılan API aboneliklerinin çok altında kalabiliyor. Üstelik öngörülebilir sabit maliyet, finans ekiplerinin de işine geliyor.",
      "Uzmanlar önümüzdeki iki yıl içinde kurumsal yapay zeka harcamalarının üçte birinin yerel altyapıya kayacağını öngörüyor. Bu geçiş, model sağlayıcılarının da stratejisini değiştiriyor: büyük laboratuvarlar artık küçük, verimli ve lisansı kurumsal kullanıma uygun modellere ayrı yatırım yapıyor.",
    ],
    keyPoints: [
      "7-13B parametreli modeller tek GPU'da üretim kalitesinde hizmet veriyor",
      "Veri gizliliği, buluttan şirket içine dönüşün ana itici gücü",
      "İnce ayarlı küçük modeller dar alanlarda dev modellerle başa baş",
      "Kurumsal yapay zeka harcamalarının üçte biri yerel altyapıya kayabilir",
    ],
  },
  {
    slug: "rust-mu-go-mu-2026",
    categorySlug: "yazilim",
    image: devImg,
    imageAlt: "Kod editöründe sistem programlama",
    category: "Yazılım",
    title: "Rust mı, Go mu? Sistem programlamada 2026'nın kazananı netleşiyor",
    excerpt:
      "Bellek güvenliği artık bir tercih değil, kamu ihalelerinde dahi aranan bir şart haline geldi. Rust, çekirdek bileşenlerde ve güvenlik açısından kritik yollarda standart olurken; Go, hızlı geliştirme döngüsü ve sade sözdizimiyle mikroservis dünyasındaki tahtını koruyor.",
    date: "4 Eylül 2026",
    readTime: "8 dk",
    author: "BigKod Araştırma Ekibi",
    body: [
      "Sistem programlama dünyasında yıllardır süren 'Rust mı, Go mu?' tartışması 2026 itibarıyla ideolojik bir kavgadan çıkıp pragmatik bir iş bölümüne dönüştü. Büyük ölçekli altyapı ekipleri, iki dili birbirinin rakibi değil tamamlayıcısı olarak konumlandırıyor: performans ve güvenlik kritik katmanda Rust, iş mantığı ve orkestrasyon katmanında Go.",
      "Rust'ın yükselişinin arkasında düzenleyici baskı var. Bellek güvenliği, ulusal güvenlik kurumlarının yayınladığı rehberlerle kamu ihalelerinde dahi aranan bir şart haline geldi. Linux çekirdeğinden Windows sürücülerine kadar kritik kod tabanlarında Rust'ın kabul görmesi, dilin artık 'hobi projesi' algısından tamamen çıktığını gösteriyor. Tarayıcı motorları, veritabanı çekirdekleri ve ağ proxy'leri gibi performansın ölçülebilir para ettiği alanlarda Rust fiilen standart oldu.",
      "Go ise farklı bir savaşı kazandı: geliştirici hızı. Sade sözdizimi, dakikalar içinde öğrenilebilen dil kuralları ve güçlü standart kütüphanesi sayesinde mikroservis dünyasının varsayılanı olmaya devam ediyor. Kubernetes ekosisteminin neredeyse tamamının Go ile yazılmış olması, bulut altyapısında çalışan her mühendisin yolunun Go ile kesişmesi anlamına geliyor.",
      "İki dilin hibrit kullanımı giderek yaygınlaşıyor. Aynı şirket içinde veri düzlemi Rust, kontrol düzlemi Go ile yazılıyor; FFI ve gRPC sınırları net çiziliyor. Mühendislik yöneticileri, işe alım stratejilerini de bu gerçeğe göre şekillendiriyor: Rust için derin uzmanlık aranırken, Go pozisyonlarında genel mühendislik yetkinliği yeterli görülüyor.",
      "Öğrenme eğrisi hâlâ iki dil arasındaki en belirgin fark. Rust'ın sahiplik modeli ilk aylarda üretkenliği düşürürken, Go ile yeni mezun bir mühendis ilk haftasında üretim kodu yazabiliyor. Ancak Rust öğrenen ekiplerin bildirdiği hata oranı düşüşleri, yatırımın geri dönüşünü açıkça ortaya koyuyor.",
    ],
    keyPoints: [
      "Bellek güvenliği kamu ihalelerinde dahi aranan şart haline geldi",
      "Rust performans kritik katmanda, Go iş mantığı ve orkestrasyonda standart",
      "Hibrit mimari: veri düzlemi Rust, kontrol düzlemi Go",
      "Go'nun öğrenme hızı işe alım stratejilerini şekillendiriyor",
    ],
  },
  {
    slug: "sifir-guven-kobiler-icin",
    categorySlug: "siber-guvenlik",
    image: securityImg,
    imageAlt: "Dijital kilit ve siber güvenlik kalkanı",
    category: "Siber Güvenlik",
    title: "Sıfır güven mimarisi artık KOBİ'ler için de erişilebilir",
    excerpt:
      "Kimlik avı saldırılarının yapay zeka ile kişiselleşmesi, küçük ekipleri de kurumsal düzeyde savunma arayışına itti. Yeni nesil kimlik ve erişim yönetimi araçları, donanım anahtarlı doğrulama ve cihaz bazlı güven politikalarını dakikalar içinde kurulabilen paketlere dönüştürdü.",
    date: "3 Eylül 2026",
    readTime: "5 dk",
    author: "BigKod Araştırma Ekibi",
    body: [
      "Sıfır güven mimarisi, beş yıl önce yalnızca büyük bankaların ve teknoloji devlerinin karşılayabildiği bir yaklaşımdı. Bugün ise 20 kişilik bir yazılım şirketi, donanım anahtarlı doğrulama ve cihaz bazlı erişim politikalarını bir öğleden sonra içinde devreye alabiliyor. Yeni nesil kimlik ve erişim yönetimi araçları, karmaşık sıfır güven bileşenlerini abonelik bazlı, dakikalar içinde kurulan paketlere dönüştürdü.",
      "Bu dönüşümü zorunlu kılan gelişme, saldırıların demokratikleşmesi. Üretken yapay zeka araçları, kimlik avı mesajlarını hedef kişinin diline, üslubuna ve çalıştığı projelere göre kişiselleştirebiliyor. Artık kötü yazılmış, hemen fark edilen sahte e-postalar devri kapandı; küçük ekipler de gelişmiş tehdit aktörlerinin hedef listesinde.",
      "Sıfır güvenin temel ilkesi basit: hiçbir kullanıcıya ve cihaza varsayılan olarak güvenme, her erişim isteğini doğrula. Pratikte bu, konum ve IP yerine kimlik tabanlı erişim; VPN yerine uygulama bazlı tünelleme; yıllık parola değişikliği yerine donanım anahtarlı çok faktörlü doğrulama anlamına geliyor.",
      "Sektör raporlarına göre sıfır güven yaklaşımını benimseyen KOBİ'lerde başarılı sızma girişimleri yıldan yıla belirgin biçimde azalıyor. Üstelik sigorta şirketleri de bu tabloyu fark etti: siber güvenlik sigortası primlerinde kimlik tabanlı mimari kullanan şirketlere ölçülü indirimler uygulanmaya başlandı.",
      "Uzmanlar küçük ekiplere 'her şeyi bir anda değiştirme' tavsiyesinde bulunmuyor. Önerilen yol haritası üç adımlı: önce parola yöneticisi ve donanım anahtarı, sonra cihaz envanteri ve sağlık kontrolleri, en sonda uygulama bazlı erişim politikaları.",
    ],
    keyPoints: [
      "Sıfır güven bileşenleri artık dakikalar içinde kurulan paketlere dönüştü",
      "Yapay zeka ile kişiselleşen kimlik avı küçük ekipleri de hedefliyor",
      "Sıfır güven benimseyen KOBİ'lerde başarılı sızma girişimleri azalıyor",
      "Önerilen geçiş: donanım anahtarı → cihaz envanteri → uygulama bazlı erişim",
    ],
  },
  {
    slug: "coklu-bulut-stratejisi",
    categorySlug: "bulut-bilisim",
    image: cloudImg,
    imageAlt: "Bulut sunucu altyapısı",
    category: "Bulut Bilişim",
    title: "Çoklu bulut stratejisi maliyet baskısıyla yeniden tanımlanıyor",
    excerpt:
      "Şirketler, tek sağlayıcıya bağımlılığın faturasını kesinti günlerinde ödediğini fark etti. Ancak çoklu bulutun getirdiği operasyonel karmaşa, platform mühendisliği ekiplerini yeni bir denge arayışına yöneltti: kritik veri katmanı sağlayıcıdan bağımsız, hesaplama katmanı ise esnek.",
    date: "2 Eylül 2026",
    readTime: "7 dk",
    author: "BigKod Araştırma Ekibi",
    body: [
      "Çoklu bulut, birkaç yıl önce 'her şeyi iki sağlayıcıda çalıştırma' hayaliyle başlayan ancak operasyonel maliyetiyle birçok ekibi yıldıran bir stratejiydi. 2026'da ise daha olgun bir tanıma kavuştu: kritik veri katmanı sağlayıcıdan bağımsız tutulur, hesaplama katmanı ise ihtiyaca göre esnek biçimde dağıtılır.",
      "Bu olgunlaşmanın arkasında kesinti günlerinde ödenen faturalar var. Son iki yılda yaşanan büyük sağlayıcı kesintileri, tek buluta bağımlı şirketlerin saatlik zararlarını gündeme taşıdı. Yönetim kurulları artık 'nasılsa çalışıyor' cevabını kabul etmiyor; iş sürekliliği planlarında çoklu bölge ve çoklu sağlayıcı senaryoları zorunlu hale geliyor.",
      "Kubernetes tabanlı soyutlama katmanları bu geçişin en önemli taşıyıcısı. Uygulamalar konteynerlerde paketlendiğinde, iş yüklerini sağlayıcılar arasında taşımak teorik olarak mümkün hale geliyor. Ancak deneyimli platform mühendisleri uyarıyor: gerçek kilitlenme veri servislerinde yaşanıyor. Yönetilen veritabanları, mesaj kuyrukları ve nesne depoları, sağlayıcıya özgü API'leriyle taşınabilirliğin önündeki asıl engel.",
      "Çözüm olarak açık standartlar öne çıkıyor. PostgreSQL uyumlu veritabanları, S3 uyumlu nesne depoları ve Kafka uyumlu mesajlaşma katmanları, şirketlerin pazarlık gücünü artırıyor. FinOps ekipleri bu esnekliği faturaya da yansıtıyor: spot kapasite kullanımı ve taahhüt optimizasyonuyla çoklu bulutun maliyet primi yüzde 15'lerden yüzde 5'in altına inebiliyor.",
      "Platform mühendisliği ekiplerinin 2026'daki ortak kanaati net: çoklu bulut bir günde kurulmaz, ama 'sağlayıcıdan çıkabilme yeteneği' bir günde kaybedilir. Bu yeteneği canlı tutmak, artık mimarinin ayrılmaz bir parçası.",
    ],
    keyPoints: [
      "Yeni denge: veri katmanı bağımsız, hesaplama katmanı esnek",
      "Büyük kesintiler, tek sağlayıcı bağımlılığının gerçek maliyetini gösterdi",
      "Asıl kilitlenme veri servislerinde; açık standartlar çözümün anahtarı",
      "FinOps disipliniyle çoklu bulutun maliyet primi yüzde 5'in altına inebiliyor",
    ],
  },
  {
    slug: "bagimsiz-oyun-studyolari-prosedurel",
    categorySlug: "oyun-gelistirme",
    image: gameImg,
    imageAlt: "Oyun geliştirme ekranında 3B dünya",
    category: "Oyun Geliştirme",
    title: "Bağımsız oyun stüdyoları prosedürel üretim araçlarıyla devleşiyor",
    excerpt:
      "Beş kişilik ekiplerin yüzlerce saatlik açık dünya içeriği üretebildiği bir döneme girdik. Prosedürel seviye tasarımı ve yapay zeka destekli varlık üretimi, bağımsız stüdyoların en büyük dezavantajı olan içerik hacmini ortadan kaldırıyor. Türkiye'den çıkan bağımsız yapımlar da bu rüzgârla uluslararası platformlarda öne çıkıyor.",
    date: "1 Eylül 2026",
    readTime: "6 dk",
    author: "BigKod Araştırma Ekibi",
    body: [
      "Bağımsız oyun geliştirmenin en büyük duvarı her zaman içerik hacmiydi: büyük stüdyolar yüzlerce sanatçıyla devasa dünyalar inşa ederken, beş kişilik ekipler ancak birkaç saatlik deneyim üretebiliyordu. Prosedürel üretim araçlarının olgunlaşması bu duvarı yıkıyor. Bugün küçük bir ekip, algoritmik seviye tasarımı ve yapay zeka destekli varlık üretimiyle yüzlerce saatlik açık dünya içeriği oluşturabiliyor.",
      "Teknik temelde birkaç gelişme bir araya geldi. Prosedürel içerik üretimi artık rastgele labirentler üretmekten ibaret değil; kural tabanlı sistemler, el yapımı kaliteye yaklaşan yapılar, araziler ve görev zincirleri oluşturabiliyor. Tasarımcılar 'ne üretileceğini' değil, 'üretim kurallarını' tasarlıyor; bu da küçük ekiplerin yaratıcı enerjisini doğrudan ölçeklendiriyor.",
      "Yapay zeka destekli araçlar ise üretim hattının diğer ucunu tutuyor: konsept çizimlerden doku varyasyonlarına, ses efektlerinden diyalog taslaklarına kadar birçok iş akışı hızlandı. Sektör temsilcileri, araçların sanatçının yerini almadığını; tekrarlı işleri devralıp yaratıcı karar süresini uzattığını vurguluyor.",
      "Türkiye'den çıkan bağımsız yapımlar da bu rüzgârla uluslararası platformlarda öne çıkıyor. Düşük kur maliyetinin sağladığı dayanıklılıkla birleşen araç hakimiyeti, Türk stüdyolarının riskli ve özgün projelere yönelebilmesini sağlıyor. Sektör temsilcilerinin ortak mesajı net: yaratıcı tasarım artık bütçeden değil, araç hakimiyetinden geçiyor.",
      "Ancak uzmanlar bir uyarıda da bulunuyor: prosedürel üretim kolay içerik üretir, iyi içerik üretmez. Kuralları iyi tasarlanmamış sistemler, 'okyanus kadar geniş, parmak derinliğinde' dünyalar yaratıyor. Başarılı bağımsız ekipler, prosedürel iskeleti elle işlenmiş kilit anlarla birleştiren hibrit yaklaşımı benimsiyor.",
    ],
    keyPoints: [
      "Beş kişilik ekipler yüzlerce saatlik içerik üretebiliyor",
      "Tasarımcılar içeriği değil, üretim kurallarını tasarlıyor",
      "Türk bağımsız stüdyoları araç hakimiyetiyle uluslararası sahnede",
      "Başarı formülü: prosedürel iskelet + elle işlenmiş kilit anlar",
    ],
  },
  {
    slug: "ciplet-mimarisi-islemci-tasarimi",
    categorySlug: "donanim",
    image: heroImg,
    imageAlt: "İşlemci ve anakart yakın çekimi",
    category: "Donanım",
    title: "Çiplet mimarisi işlemci tasarımında yeni bir rekabet alanı açtı",
    excerpt:
      "Tek parça dev yongaların yerini lego gibi birleşen çipletler alırken, rekabet transistör yoğunluğundan paketleme teknolojisine kaydı. Farklı üretim düğümlerinde üretilen çekirdek, bellek ve G/Ç chiplerinin tek pakette buluşması, hem maliyeti düşürüyor hem de tasarım esnekliği sağlıyor.",
    date: "31 Ağustos 2026",
    readTime: "9 dk",
    author: "BigKod Araştırma Ekibi",
    body: [
      "Yarı iletken endüstrisinde onlarca yıldır geçerli olan oyun kuralı değişti: artık kazanan, en küçük transistörü üreten değil; en akıllı paketlemeyi yapan oluyor. Çiplet mimarisi, tek parça dev yongaların yerini lego benzeri birleşen küçük yongalara bırakmasıyla, rekabeti transistör yoğunluğundan paketleme teknolojisine taşıdı.",
      "Yaklaşımın mantığı basit ama etkisi devrimsel. Monolitik tasarımda çekirdekler, bellek denetleyicileri ve G/Ç birimleri tek bir silikon parçasında, aynı üretim düğümüyle üretilmek zorundaydı. Çiplet dünyasında ise işlem çekirdekleri en ileri düğümde, G/Ç ve bellek denetleyicileri daha eski ve ucuz düğümlerde üretilebiliyor; hepsi ileri paketleme teknikleriyle tek bir yonga gibi çalışıyor.",
      "Ekonomik denklem değişti. İleri üretim düğümlerinde verim (yield) sorunu büyük yongaların maliyetini katlanarak artırıyor: dev bir yongadaki tek hata, tüm parçayı çöpe gönderiyor. Küçük çipletlerde ise hatalı parça yalnızca o çipleti etkiliyor. Üstelik aynı çiplet, farklı ürün segmentlerinde farklı kombinasyonlarla tekrar kullanılabiliyor; bu da tasarım maliyetlerini bölüyor.",
      "Rekabetin yeni cephesi ara bağlantı standartları. UCIe gibi açık çiplet ara bağlantı standartları, farklı üreticilerin çipletlerinin aynı pakette buluşmasının önünü açıyor. Vizyonda 'yonga marketi' var: bir şirket çekirdek çipleti, başka bir şirket bellek çipleti, üçüncüsü yapay zeka hızlandırıcısı üretiyor; sistem entegratörü bunları tek pakette birleştiriyor.",
      "Mühendislik eğitimi de bu değişimden payını alıyor. Bilgisayar mimarisi derslerindeki 'tek yonga' varsayımları yeniden yazılıyor; ısıl tasarım, güç dağıtımı ve paket içi sinyal bütünlüğü artık yazılım mühendislerinin bile bilmesi gereken kavramlara dönüşüyor. Çipletler arası gecikme ve bant genişliği, performans modellemesinin yeni değişkenleri.",
    ],
    keyPoints: [
      "Rekabet transistör yoğunluğundan paketleme teknolojisine kaydı",
      "Çekirdekler ileri, G/Ç ve bellek eski düğümlerde üretilerek maliyet düşüyor",
      "Verim sorunu: küçük çipletlerde hata tüm ürünü çöpe göndermiyor",
      "UCIe gibi açık standartlar 'yonga marketi' vizyonunun önünü açıyor",
    ],
  },
  {
    slug: "yerli-yapay-zeka-super-bilgisayari",
    categorySlug: "donanim",
    image: heroImg,
    imageAlt: "Fütüristik bilgisayar mühendisliği laboratuvarı ve sunucu odası",
    category: "Donanım & Altyapı",
    title: "Türkiye'nin ilk yerli yapay zeka süper bilgisayarı devreye girdi",
    excerpt:
      "10 petaflop hesaplama gücüyle üniversitelere ve araştırma merkezlerine hizmet verecek sistem, yerli mühendislerin tasarladığı sıvı soğutma mimarisi sayesinde benzer tesislere kıyasla yüzde 40 daha az enerji tüketiyor.",
    date: "6 Eylül 2026",
    readTime: "10 dk",
    author: "BigKod Araştırma Ekibi",
    body: [
      "Türkiye'nin yüksek başarımlı hesaplama alanındaki en büyük yatırımı devreye girdi. 10 petaflop hesaplama gücüne sahip sistem; iklim modellemeden ilaç keşfine, büyük dil modeli eğitiminden savunma simülasyonlarına uzanan iş yüklerini ilk kez tamamen yerli altyapıda çalıştıracak.",
      "Tesisin en dikkat çekici özelliği, yerli mühendislerin tasarladığı doğrudan sıvı soğutma mimarisi. Sıvının doğrudan işlemcilerin üzerinden geçirildiği bu tasarım, geleneksel hava soğutmalı veri merkezlerine kıyasla yüzde 40 daha az enerji tüketiyor. PUE değeri 1,1'in altına inen tesis, Avrupa'daki en verimli akademik veri merkezleriyle aynı ligde yer alıyor. Soğutma suyunun ısısı ayrıca kampüs ısıtma sisteminde geri kullanılıyor.",
      "Sistemin kapasitesi, Türkiye'nin yapay zeka araştırmalarında uzun süredir şikayet edilen 'hesaplama kıtlığını' gidermeyi hedefliyor. Bugüne kadar yurt dışındaki bulut sağlayıcılardan saatlik GPU kiralamak zorunda kalan araştırma grupları, artık proje başvurusuyla ücretsiz hesaplama kaynağına erişebilecek. Proje ekibi, sistemin ilk yılında 200'den fazla akademik projeye kaynak sağlamasını hedefliyor.",
      "Kaynak dağıtımında şeffaf bir model benimsendi: üniversitelerden ve araştırma merkezlerinden gelen başvurular bağımsız bir bilim kurulu tarafından değerlendirilecek. Öncelik; iklim değişikliği, afet erken uyarı sistemleri, ilaç keşfi ve Türkçe büyük dil modeli geliştirme gibi kamu yararı taşıyan projelere verilecek.",
      "Uzmanlar tesisin asıl değerinin donanımdan çok insan kaynağı olduğunda hemfikir. Sistem yöneticileri, paralel programlama uzmanları ve HPC uygulama mühendisleri için açılan eğitim programları, Türkiye'de süper bilgisayar ekosisteminin temellerini atıyor. Bir sonraki adımın, sistemin exaflop sınıfına çıkarılması için uluslararası iş birlikleri kurulması olduğu belirtiliyor.",
    ],
    keyPoints: [
      "10 petaflop güçle Türkiye'nin en büyük hesaplama yatırımı",
      "Yerli sıvı soğutma mimarisiyle yüzde 40 enerji tasarrufu",
      "İlk yılda 200'den fazla akademik projeye ücretsiz kaynak",
      "Öncelik: iklim, afet uyarı, ilaç keşfi ve Türkçe dil modelleri",
    ],
  },
  {
    slug: "mcp-protokolu-yapay-zeka-entegrasyon",
    categorySlug: "yapay-zeka",
    image: aiImg,
    imageAlt: "Yapay zeka model entegrasyon akışı",
    category: "Yapay Zeka",
    title: "MCP protokolü yapay zeka ajanlarını gerçek dünyaya bağlıyor",
    excerpt:
      "Model Context Protocol olarak bilinen açık standart, yapay zeka modellerinin veritabanlarına, API'lere ve dosya sistemlerine standart bir arayüzle erişmesini sağlıyor. Her entegrasyon için sıfırdan bağlantı yazma devri kapanırken, ajan tabanlı sistemlerin ölçeklenebilirliği yeni bir boyut kazanıyor.",
    date: "12 Eylül 2026",
    readTime: "8 dk",
    author: "BigKod Araştırma Ekibi",
    body: [
      "Yapay zeka ajanları son iki yılda en çok yatırım çekilen alanlardan biri haline geldi. Ancak ajanların gerçek dünyayla etkileşimi — veritabanı sorgulama, dosya okuma, API çağrısı yapma — her zaman özel entegrasyon kodu gerektiriyordu. Model Context Protocol (MCP) olarak bilinen açık standart, bu sorunu çözmeyi vaat ediyor: modeller ve harici sistemler arasında standart bir köprü.",
      "MCP'nin teknik yaklaşımı basit ama etkili. Bir MCP sunucusu, harici bir sistemi (veritabanı, dosya sistemi, SaaS API'si) standart bir arayüzle modelliyor; model ise bu sunucuyla standart protokol üzerinden konuşuyor. Geliştirici, her model-entegrasyon çifti için ayrı kod yazmak yerine, tek bir MCP sunucusu yazıp onu tüm modellere açabiliyor.",
      "Pratik etkisi büyük. Bir şirketin iç veritabanına bağlanan bir MCP sunucusu, hem açık kaynak hem ticari tüm modellerle çalışabiliyor. Model değiştirmek, entegrasyon kodunu yeniden yazmak anlamına gelmekten çıkıyor. Bu da satıcıya bağımlılık endişesini azaltıyor ve şirketlerin model seçimini maliyet ve performansa göre yapabilmesini sağlıyor.",
      "Güvenlik tarafında MCP, modelin erişebileceği kaynakları sunucu tarafında denetleme imkanı sunuyor. Bir modelin yalnızca okuma yetkisi olan bir MCP sunucusuna bağlanması, yanlışlıkla veri silme riskini ortadan kaldırıyor. Yetkilendirme, denetim ve hız sınırlama mekanizmaları protokolün parçası olarak tasarlanmış.",
      "Ekosistem hızla büyüyor. Açık kaynak topluluğu, yaygın SaaS ürünleri ve veritabanları için yüzlerce MCP sunucusu yayımladı. Kurumsal kullanımda ise özel MCP sunucuları, şirket içi sistemleri modellere güvenli biçimde açmanın standart yolu haline geliyor. Uzmanlar, MCP'nin yapay zeka entegrasyonlarında REST API'lerin yerini alabilecek kadar temel bir standart olabileceğini öngörüyor.",
    ],
    keyPoints: [
      "MCP, modeller ve harici sistemler arasında standart köprü kuruyor",
      "Tek bir MCP sunucusu tüm modellere açılıyor; model değiştirmek kolaylaşıyor",
      "Güvenlik: erişim denetimi ve denetim protokolün parçası",
      "Açık kaynak ekosistemi yüzlerce hazır MCP sunucusu üretti",
    ],
  },
  {
    slug: "uretken-yapay-zeka-kod-gelistirme",
    categorySlug: "yapay-zeka",
    image: aiImg,
    imageAlt: "Yapay zeka destekli kod geliştirme",
    category: "Yapay Zeka",
    title: "Üretken yapay zeka kod geliştirme akışını baştan yazıyor",
    excerpt:
      "Kod tamamlama araçlarından tam proje üreten ajanlara uzanan araç zinciri, yazılım geliştirme döngüsünü kökten değiştiriyor. Mühendisler artık satır yazmaktan çok sistem tasarlıyor ve yapay zeka ajanlarını yönetiyor; bu dönüşüm kıdemlilik beklentilerini de yeniden tanımlıyor.",
    date: "10 Eylül 2026",
    readTime: "9 dk",
    author: "BigKod Araştırma Ekibi",
    body: [
      "İki yıl önce kod tamamlama araçları yalnızca bir son satırı öneren yardımcılar olarak başladı. Bugün ise yapay zeka ajanları, bir gereksinim açıklamasından tüm bir proje iskeleti üretebilen, test yazan, hata ayıklayan ve pull request açan otonom sistemlere dönüştü. Yazılım geliştirme döngüsü, bu araç zincirinin ağırlığı altında kökten değişiyor.",
      "Araç zincirinin en önemli katmanı, kod tabanını anlayan bağlam-tabanlı modeller. Bir dosyayı değil, tüm projeyi okuyabilen modeller, 'bu fonksiyonu değiştir' gibi talimatları doğru dosyalarda, doğru konumlarda uygulayabiliyor. Sürüm kontrol sistemleriyle entegrasyon, değişikliklerin diff olarak görüntülenebilmesini ve insan incelemesinden geçmesini sağlıyor.",
      "Mühendislik kültürü de dönüştü. Ekipler, 'kim ne kadar hızlı kod yazıyor' ölçütünden 'kim ajanları ne kadar iyi yönlendiriyor' ölçütüne geçiyor. Kıdemli mühendislerin değeri, kod yazma hızından değil; sistem tasarımı, mimari kararlar ve ajan çıktılarının doğruluğunu denetleme becerisinden geliyor. Junior mühendisler ise ajanlarla çalışarak, normalde yıllar alacak kod tabanı hakimiyetini aylarda edinebiliyor.",
      "Kalite tarafında tartışmalar henüz olgunlaşmadı. Bazı ekipler, ajan üretimi kodun test kapsamının düştüğünü ve teknik borcun arttığını bildiriyor. Diğerleri ise ajanların tutarlı test yazma alışkanlığının, insan ekiplerin dağınık test pratiklerinden daha iyi olduğunu savunuyor. Ortak nokta şu: ajan çıktısı mutlaka insan incelemesinden geçmeli; otonom birleştirme henüz erken.",
      "Ekonomik etki de belirginleşiyor. Bir önceki yılda on mühendis gerektiren bir proje, bugün üç mühendis ve ajan desteğiyle tamamlanabiliyor. Bu verimlilik artışı, küçük ekiplerin daha iddialı projelere yönelebilmesini sağlıyor. Ancak sektör, 'mühendis ihtiyacı azalıyor' sonucuna varmaktan kaçınıyor: verimlilik artışı, talebi de artırıyor ve net etki henüz netleşmedi.",
    ],
    keyPoints: [
      "Ajanlar gereksinimden proje iskeletine, testten hata ayıklamaya kadar uzanıyor",
      "Kıdemlilik: kod yazma hızından sistem tasarımı ve ajan denetimine kayıyor",
      "Kalite tartışması: test kapsamı ve teknik borç konusu henüz olgunlaşmadı",
      "Verimlilik artışı küçük ekipleri daha iddialı projelere yönlendiriyor",
    ],
  },
  {
    slug: "yapay-zeka-etigi-ve-duzenleme",
    categorySlug: "yapay-zeka",
    image: aiImg,
    imageAlt: "Yapay zeka etiği ve düzenleme kavramı",
    category: "Yapay Zeka",
    title: "Yapay zeka etiği: Avrupa Birliği Yasası yürürlüğe giriyor",
    excerpt:
      "AB Yapay Zeka Yasası'nın risk tabanlı yaklaşımı, modellerin sınıflandırılmasından şeffaflık yükümlülüklerine kadar geniş bir yelpazede kurallar getiriyor. Kurumlar, yüksek riskli sistemler için denetim izleri, veri yönetimi ve insan gözetimi şartlarını yerine getirmek zorunda.",
    date: "8 Eylül 2026",
    readTime: "7 dk",
    author: "BigKod Araştırma Ekibi",
    body: [
      "Avrupa Birliği'nin Yapay Zeka Yasası, dünyanın ilk kapsamlı yapay zeka düzenlemesi olarak yürürlüğe girdi. Yasanın temel yaklaşımı risk tabanlı: sistemler, oluşturdukları riske göre dört kategoride sınıflandırılıyor ve her kategori için farklı yükümlülükler getiriliyor.",
      "Yüksek riskli kategoride yer alan sistemler — özgeçmiş tarama, kredi skorlama, biyometrik tanıma gibi — katı şartlara tabi. Eğitim verilerinin kalitesi ve temsiliyeti, model şeffaflığı, insan gözetimi ve denetim izleri (audit trail) gibi gereksinimler, kurumların sadece model değil, tüm veri ve karar süreçlerini belgelemesini zorunlu kılıyor.",
      "Temel modeller (foundation models) için ek yükümlülükler getirildi. Belirli bir hesaplama eşiğini aşan modelleri geliştiren laboratuvarlar, model kartları yayımlamak, sistemik risk değerlendirmesi yapmak ve AB yetkililerine teknik belgeler sunmak zorunda. Bu şartlar, açık ağırlıklı modeller için kısmen hafifletilmiş olsa da, ticari modelleri geliştiren şirketleri yakından ilgilendiriyor.",
      "Düzenlemenin en tartışmalı kısmı, açık kaynak modellerin durumu. Yasanın ilk taslaklarında açık ağırlıklı modeller için muafiyet öngörülürken, son versiyon bu muafiyeti sınırladı. Açık kaynak topluluğu, bu yaklaşımın inovasyonu engelleyeceğini savunuyor; düzenleyiciler ise 'sistemik risk' kavramının tüm dağıtım biçimlerini kapsaması gerektiğini öne sürüyor.",
      "Türkiye'deki kurumlar için de etkisi dolaylı ama önemli. AB'ye veri veya hizmet sunan şirketler, yasanın kapsamına giriyor. KVKK uyum süreçlerini tamamlayan kurumların, şimdi de yapay zeka sistemleri için benzer bir uyum çerçevesi kurmaları gerekiyor. Hukuk danışmanları, bu sürecin en az bir yıl süreceğini ve özel uzmanlık gerektirdiğini belirtiyor.",
    ],
    keyPoints: [
      "Risk tabanlı yaklaşım: sistemler dört kategoride sınıflandırılıyor",
      "Yüksek riskli sistemler için denetim izi ve insan gözetimi zorunlu",
      "Temel modeller için model kartı ve sistemik risk değerlendirmesi şart",
      "AB'ye hizmet sunan Türk şirketleri de yasanın kapsamında",
    ],
  },
  {
    slug: "yapay-zeka-goruntu-isleme-tarim",
    categorySlug: "yapay-zeka",
    image: aiImg,
    imageAlt: "Tarımda yapay zeka ve görüntü işleme",
    category: "Yapay Zeka",
    title: "Bilgisayarla görü tarımda hassas tarımı hızlandırıyor",
    excerpt:
      "İnsansız hava araçlarından çekilen görüntüleri işleyen modeller, hastalık tespitinden verim tahminine kadar tarımın kritik kararlarını otomatikleştiriyor. Türkiye'deki pilot uygulamalar, kimyasal kullanımında yüzde 30 azalma sağlarken ürün verimini de artırıyor.",
    date: "7 Eylül 2026",
    readTime: "6 dk",
    author: "BigKod Araştırma Ekibi",
    body: [
      "Hassas tarım, yapay zeka ve bilgisayarla görü teknolojilerinin en somut fayda sağadığı alanlardan biri haline geldi. İnsansız hava araçlarından çekilen yüksek çözünürlüklü görüntüler, bitki hastalıklarını, su stresini ve besin eksikliklerini yaprak bazında tespit edebilen modellerle işleniyor.",
      "Teknik yaklaşım üç katmanlı. İlk katmanda İHA'lar tarlayı düzenli aralıklarla görüntülüyor. İkinci katmanda görüntü işleme modelleri, her bitkinin sağlık durumunu sınıflandırıyor. Üçüncü katmanda ise bir karar destek sistemi, hangi bölgeye ne kadar gübre veya pestisit uygulanacağını öneriyor. Bu yaklaşım, tarlanın tamamına eşit miktarda kimyasal atılan geleneksel yöntemlerin yerini alıyor.",
      "Türkiye'deki pilot uygulamalar dikkat çekici sonuçlar üretti. İzmir ve Tekirdağ'da yapılan denemelerde, yapay zeka destekli hassas tarım uygulaması, kimyasal gübre kullanımında yüzde 30'a varan azalma sağlarken ürün veriminde de yüzde 12'ye kadar artış gözlendi. Su tüketiminde de belirgin düşüşler kaydedildi.",
      "Modellerin eğitimi için en büyük zorluk veri. Bitki hastalıklarının görüntü veri setleri, bölgeye ve iklime özgü olduğu için genel veri setleri yetersiz kalıyor. Türk üniversiteleri ve tarım araştırma enstitüleri, yerel bitki türleri ve hastalıkları için özgün veri setleri oluşturmak için iş birliği yapıyor.",
      "Uzmanlar, teknolojinin yaygınlaşmasının önündeki en büyük engelin maliyet değil, dijital okuryazarlık olduğunu belirtiyor. Bir İHA ve yazılım paketinin maliyeti, orta ölçekli bir çiftlik için bir sezonda geri çıkıyor. Ancak çiftçilerin bu teknolojiyi benimsemesi için yerel danışmanlık ve eğitim altyapısının kurulması gerekiyor.",
    ],
    keyPoints: [
      "İHA görüntüleri + görüntü işleme = yaprak bazında hastalık tespiti",
      "Türkiye pilotlarında kimyasal kullanımı yüzde 30 azaldı, verim yüzde 12 arttı",
      "Yerel veri setleri oluşturmak için üniversite-enstitü iş birliği sürüyor",
      "Yaygınlaşmanın önündeki asıl engel dijital okuryazarlık",
    ],
  },
  {
    slug: "typescript-2026-derleme-hizi",
    categorySlug: "yazilim",
    image: devImg,
    imageAlt: "TypeScript derleme ve geliştirme akışı",
    category: "Yazılım",
    title: "TypeScript 2026: Derleme hızı ve tip güvenliği arasında yeni denge",
    excerpt:
      "Yeni nesil derleyici araçları, tip kontrolü süresini dakikalardan saniyelere indirirken, IDE yanıtlama hızı da belirgin biçimde arttı. Ancak tip çıkarımının karmaşıklığı, büyük kod tabanlarında beklenmedik performans düşüşlerine yol açabiliyor.",
    date: "11 Eylül 2026",
    readTime: "7 dk",
    author: "BigKod Araştırma Ekibi",
    body: [
      "TypeScript, JavaScript ekosisteminin fiili standardı haline geldikten sonra en çok eleştirilen yanı derleme hızıydı. Yüz binlerce satırlık kod tabanlarında tip kontrolü dakikalar sürebiliyordu; geliştirici deneyimini ciddi biçimde bozan bu durum, 2026'da yeni nesil derleyici araçlarıyla çözülüyor.",
      "En önemli gelişme, derleyicinin paralel çalışma yeteneği. Eski derleyici, tip kontrolünü tek iş parçacığında yürütüyordu; yeni araçlar, dosya bazlı paralelleştirme sayesinde çok çekirdekli işlemcilerden tam verim alıyor. Sonuçlar çarpıcı: 500 bin satırlık bir kod tabanında tip kontrolü süresi 3 dakikadan 12 saniyeye indi.",
      "IDE tarafında da iyileştirmeler belirgin. Dil sunucusu (language server) artık artımlı çalışıyor: yalnızca değişen dosyaları yeniden analiz ediyor, tüm projeyi baştan derlemiyor. Bu, kod yazarken otomatik tamamlama ve hata vurgulama yanıtlarının milisaniyeler seviyesine inmesini sağlıyor.",
      "Ancak tip çıkarımının karmaşıklığı yeni sorunlar da doğuruyor. Derin iç içe geçmiş generic tipler ve koşullu tip ifadeleri, derleyicinin çözmesi gereken tip denklemlerini katlanarak büyütüyor. Bazı kod tabanlarında, derleyici 'tip hesaplama derinliği aşıldı' hatası veriyor ve geliştiricinin tip ifadelerini basitleştirmesi gerekiyor.",
      "Topluluk, bu gerilimi 'tip güvenliği vs. derleme hızı' ekseni tartışıyor. Bir kesim, karmaşık tip ifadelerinin kod okunabilirliğini düşürdüğünü ve basit tiplerin yeterli olduğunu savunuyor. Diğer kesim ise, tip güvenliğinin getirdiği hata önlemenin derleme süresine değdiğini öne sürüyor. Pratik çözüm olarak, karmaşık tipleri ara katmanlarda soyutlayan mimari desenler öneriliyor.",
    ],
    keyPoints: [
      "Paralel derleme: 500K satırda tip kontrolü 3 dakikadan 12 saniyeye indi",
      "Artımlı dil sunucusu, IDE yanıtlarını milisaniyeler seviyesine taşıdı",
      "Karmaşık tip çıkarımı bazı kod tabanlarında derleyici hatasına yol açıyor",
      "Topluluk: tip güvenliği mi derleme hızı mı tartışması sürüyor",
    ],
  },
  {
    slug: "python-313-jit-derleyici",
    categorySlug: "yazilim",
    image: devImg,
    imageAlt: "Python performans iyileştirmeleri",
    category: "Yazılım",
    title: "Python 3.13 JIT derleyicisi performans uçurumunu kapatıyor",
    excerpt:
      "Yıllardır 'yavaş' etiketinden kurtulmaya çalışan Python, JIT derleyicisi ile sayısal iş yüklerinde yüzde 40'a varan hız artışı sağlıyor. C eklentileri için stabilize ABI ve serbest iş parçacıklı mod, kurumsal benimsemeyi hızlandırıyor.",
    date: "9 Eylül 2026",
    readTime: "6 dk",
    author: "BigKod Araştırma Ekibi",
    body: [
      "Python, dünyanın en yaygın kullanılan programlama dillerinden biri olmasına rağmen performans konusundaki zayıflığı her zaman en büyük eleştiri konusuydu. Python 3.13 ile birlikte gelen JIT (Just-In-Time) derleyicisi, bu eksiği kapatmaya yönelik en ciddi adım olarak değerlendiriliyor.",
      "JIT derleyicisi, sık yürütülen kod yollarını çalışma zamanında makine koduna çeviriyor. İlk yürütmede yorumlanan kod, tekrarlanan çağrılarda derlenmiş makine kodu olarak çalışıyor. Sayısal iş yüklerinde, döngü yoğun algoritmalarda ve veri işleme boru hatlarında yüzde 30-40 arası hız artışı ölçüldü. Bu artış, Python'u C ve Go'ya yaklaştırıyor olmasa da, 'yavaş' etiketini zayıflatıyor.",
      "Serbest iş parçacıklı (free-threaded) mod, Python'un uzun süredir en büyük darboğazlarından birini çözüyor. GIL (Global Interpreter Lock) olarak bilinen kilidi devre dışı bırakan bu mod, gerçek paralel iş parçacığı çalışmasını mümkün kılıyor. Çok çekirdekli işlemcilerden tam verim almak isteyen veri bilimi ve makine öğrenmesi ekipleri için bu, oyun değiştirici bir gelişme.",
      "C eklentileri için stabilize ABI (Application Binary Interface), eklenti uyumluluk sorunlarını azaltıyor. Artık bir Python sürümü için derlenmiş C eklentisi, sonraki sürümlerde yeniden derleme gerektirmeden çalışabiliyor. Bu, kurumsal ortamlarda sürüm yükseltme sürecini belirgin biçimde kolaylaştırıyor.",
      "Uzmanlar, JIT derleyicisinin henüz olgunlaşma aşamasında olduğunu ve bazı kod desenlerinde yavaşlamaya yol açabileceğini belirtiyor. Ancak genel eğilim olumlu: Python'un performans açığını kapatması, veri bilimi ve yapay zeka ekosisteminde dilin konumunu daha da güçlendiriyor.",
    ],
    keyPoints: [
      "JIT derleyicisi sayısal iş yüklerinde yüzde 40 hız artışı sağlıyor",
      "Serbest iş parçacıklı mod GIL'i devre dışı bırakıyor",
      "Stabilize ABI, C eklenti uyumluluğunu sürümler arası koruyor",
      "JIT henüz olgunlaşma aşamasında; bazı desenlerde yavaşlama olabilir",
    ],
  },
  {
    slug: "mikroservis-monolit-geri-donus",
    categorySlug: "yazilim",
    image: devImg,
    imageAlt: "Mikroservis ve monolit mimari karşılaştırması",
    category: "Yazılım",
    title: "Mikroservislerden monolite geri dönüş: 2026'nın sürpriz trendi",
    excerpt:
      "Bir zamanlar her ölçekli ekibin benimsediği mikroservis mimarisi, operasyonel yükü ve maliyeti yüzünden sorgulanmaya başlandı. Orta ölçekli şirketler, modüler monolit yaklaşımıyla aynı bağımsızlığı daha düşük operasyonel maliyetle elde ediyor.",
    date: "7 Eylül 2026",
    readTime: "8 dk",
    author: "BigKod Araştırma Ekibi",
    body: [
      "Beş yıl önce mikroservis mimarisi, modern yazılım geliştirmenin varsayılan yaklaşımı olarak görülüyordu. Her hizmet bağımsız dağıtılabilir, bağımsız ölçeklenebilir ve bağımsız ekipler tarafından geliştirilebilir. Ancak pratikte, bu bağımsızlığın bedeli ağ geçidi yükü, dağıtık izleme karmaşıklığı ve veri tutarlılığı sorunları olarak geri döndü.",
      "2026'da ortaya çıkan trend şaşırtıcı: orta ölçekli şirketler mikroservislerden modüler monolit'e geri dönüyor. Modüler monolit, tek bir dağıtılabilir birim içinde modül bazında bağımsızlık sağlıyor. Modüller arası sınırlar kod içinde net çiziliyor; her modül kendi veri tablosuna sahip ve diğer modüllerle yalnızca açık API'ler üzerinden konuşuyor.",
      "Bu yaklaşımın en büyük avantajı operasyonel basitlik. Tek bir dağıtım, tek bir izleme zinciri, tek bir hata ayıklama bağlamı. Geliştirici, bir özelliği birden fazla hizmet arasında değil, tek bir kod tabanı içinde izleyebiliyor. Bu, yeni katılan mühendislerin üretkenliğe ulaşma süresini belirgin biçimde kısaltıyor.",
      "Maliyet tarafında da tablo lehte. Mikroservis mimarisinde her hizmet için ayrı izleme, log toplama ve CI/CD boru hattı kurmak gerekiyordu. Modüler monolitte bu araçlar bir kez kuruluyor ve tüm modüller için kullanılıyor. Bulut maliyetlerinde de belirgin düşüş görülüyor: bir düzine mikroservis yerine tek bir uygulama, kaynak kullanımını daha verimli hale getiriyor.",
      "Uzmanlar, modüler monolitin her durumda daha iyi olduğu sonucuna varmaktan kaçınıyor. Gerçekten bağımsız ekiplerin (50+ mühendis) ve çok farklı ölçeklendirme ihtiyaçları olan hizmetlerin bulunduğu kurumlarda mikroservis hâlâ doğru seçim. Ancak 5-30 mühendislik ekipler için modüler monolit, operasyonel yükü azaltan ve geliştirme hızını artıran pragmatik bir seçenek olarak öne çıkıyor.",
    ],
    keyPoints: [
      "Orta ölçekli ekipler operasyonel yük nedeniyle mikroservisten uzaklaşıyor",
      "Modüler monolit: tek dağıtım, modül bazında bağımsızlık",
      "Tek izleme ve CI/CD zinciri maliyetleri belirgin düşürüyor",
      "50+ mühendisli ve farklı ölçeklendirme ihtiyacı olan ekipler için mikroservis geçerli",
    ],
  },
  {
    slug: "tedarik-zinciri-saldirilari-2026",
    categorySlug: "siber-guvenlik",
    image: securityImg,
    imageAlt: "Tedarik zinciri siber saldırı konsepti",
    category: "Siber Güvenlik",
    title: "Tedarik zinciri saldırıları: Üçüncü taraf riski yeni savaş alanı",
    excerpt:
      "Saldırganlar, doğrudan hedefe saldırmak yerine hedefin kullandığı yazılım tedarikçilerini ele geçirmeyi tercih ediyor. Bir açık kaynak pakete enjekte edilen kötü kod, binlerce şirkete aynı anda sızma kapısı açıyor. SBOM ve yazılım imzalama, savunmanın omurgasına yükseliyor.",
    date: "11 Eylül 2026",
    readTime: "8 dk",
    author: "BigKod Araştırma Ekibi",
    body: [
      "Siber güvenlik dünyasında saldırı yüzeyi değişti. Saldırganlar, iyi korunan büyük şirketlere doğrudan saldırmak yerine, bu şirketlerin kullandığı daha az korunan yazılım tedarikçilerini hedefliyor. Bir npm veya PyPI paketine enjekte edilen kötü kod, bağımlılık zinciri aracılığıyla binlerce şirkete aynı anda yayılabiliyor.",
      "Bu saldırı vektörünün en korkutucu yanı, geleneksel savunmaların işe yaramaması. Güvenlik duvarları, IDS sistemleri ve uç nokta koruması, güvenilir bir paketten gelen kötü kodu genellikle meşru olarak değerlendiriyor. Saldırı, güven zincirinin içinden geldiği için imza tabanlı tespit sistemleri de sessiz kalıyor.",
      "Savunmanın omurgası SBOM (Software Bill of Materials) kavramına dayanıyor. SBOM, bir yazılımın içerdiği tüm bileşenlerin — açık kaynak paketler, sürümler, lisanslar — listesini tutan bir envanter. Bir zafiyet açıklandığında, SBOM sayesinde hangi sistemin etkilendiği dakikalar içinde tespit edilebiliyor. Aksi halde bu süre haftları alabiliyordu.",
      "Yazılım imzalama ve reproducible builds, tedarik zinciri bütünlüğünün diğer ayağı. Derleme süreci şeffaf ve tekrarlanabilir olduğunda, bir paketin derleme sırasında değiştirilmediği doğrulanabiliyor. İmzalı paketler, saldırganın paket deposuna müdahale etse bile içeriği değiştirmesini engelliyor.",
      "Kurumsal düzeyde en etkili önlem, bağımlılık yönetimi disiplini. Her açık kaynak paketin güvenilirlik skoru, bakım durumu ve bilinen zafiyet geçmişi değerlendiriliyor. Otomatik bağımlılık tarama araçları, yeni eklenen paketleri gerçek zamanlı denetliyor ve riskli paketleri derleme öncesi engelliyor. Uzmanlar, 'sıfır güven' felsefesinin artık yalnızca ağ değil, yazılım tedarik zinciri için de geçerli olması gerektiğini vurguluyor.",
    ],
    keyPoints: [
      "Saldırganlar hedef yerine tedarikçiyi ele geçirmeyi tercih ediyor",
      "Geleneksel savunmalar, güvenilir paketten gelen kötü kodu algılayamıyor",
      "SBOM sayesinde etkilenecek sistemler dakikalar içinde tespit ediliyor",
      "İmzalı paketler ve reproducible builds bütünlüğü sağlıyor",
    ],
  },
  {
    slug: "ransomware-2026-fidye",
    categorySlug: "siber-guvenlik",
    image: securityImg,
    imageAlt: "Fidye yazılımı ve siber saldırı",
    category: "Siber Güvenlik",
    title: "Fidye yazılımı ekosistemi 2026: Çifte şantaj ve sigorta krizi",
    excerpt:
      "Saldırganlar artık yalnızca veriyi şifrelemiyor; çaldıkları veriyi yayımlamakla tehdit ediyor. Şirketler, fidye ödemek ile veri ifşası arasında sıkışırken, siber sigorta şirketleri primleri katlanarak artırıyor ve kapsam sınırları çekiyor.",
    date: "10 Eylül 2026",
    readTime: "7 dk",
    author: "BigKod Araştırma Ekibi",
    body: [
      "Fidye yazılımı (ransomware) ekosistemi, son iki yılda önemli bir evrim geçirdi. Eskiden saldırganlar veriyi şifreleyip karşılığında fidye istiyordu; bugün ise çifte şantaj modeli hakim. Saldırgan, veriyi şifrelemeden önce bir kopyasını alıyor ve fidye ödenmezse veriyi yayımlamakla tehdit ediyor. Bu, yedekleri olan şirketleri bile savunmasız bırakıyor.",
      "Çifte şantajın en yıkıcı tarafı, ifşa tehdidinin veri şifrelemesinden çok daha uzun süreli olması. Şifreli veri bir kez çözüldüğünde sorun biter; ancak ifşa edilmiş veri internetten silinemiyor. Müşteri verileri, ticari sırlar ve finansal kayıtlar bir kez yayımlandığında, şirket itibar kaybı ve yasal yaptırımlarla karşı karşıya kalıyor.",
      "Siber güvenlik sigortası piyasası bu gelişmelerden ciddi biçimde etkilendi. 2024-2026 arasında primler ortalama yüzde 200 arttı. Sigorta şirketleri, fidye ödemesini artık sınırlı tutuyor ve poliçalara 'en iyi pratik' şartları koyuyor: çok faktörlü doğrulama, yedeklerin çevrim dışı tutulması, düzenli sızma testi gibi. Bu şartları yerine getirmeyen şirketler, sigorta kapsamından çıkıyor.",
      "Saldırgan profilinde de değişim var. Eskiden yarı otonom çeteler operasyon yürütürken, bugün fidye yazılımı ekosistemi franchise modeline benziyor. Bir grup yazılımı geliştiriyor (RaaS — Ransomware as a Service), başka gruplar saldırıyı yürütüyor ve fidye paylaşıyor. Bu uzmanlaşma, saldırıların daha profesyonel ve koordineli olmasını sağlıyor.",
      "Savunma tarafında en etkili önlemlerden biri, çevrim dışı (offline) yedeklerin yanı sıra 'bal küpü' (honeypot) yaklaşımı. Saldırganın çekeceği sahte verilerle dolun tuzaklar, saldırının erken tespit edilmesini ve yayılmasının engellenmesini sağlıyor. Uzmanlar, fidye ödemenin saldırganları cesaretlendirdiğini ve uzun vadede sorunu büyüttüğünü vurguluyor.",
    ],
    keyPoints: [
      "Çifte şantaj: veri şifreleme + ifşa tehdidi",
      "Siber sigorta primleri iki yılda yüzde 200 arttı",
      "RaaS modeli: saldırılar franchise gibi profesyonelleşti",
      "Çevrim dışı yedek ve bal küpü, erken tespit ve savunma için kritik",
    ],
  },
  {
    slug: "ctf-yarismalari-turkiye-2026",
    categorySlug: "siber-guvenlik",
    image: securityImg,
    imageAlt: "CTF siber güvenlik yarışması",
    category: "Siber Güvenlik",
    title: "CTF yarışmaları: Türkiye'den dünya sahnesine açılan kapı",
    excerpt:
      "Capture The Flag yarışmaları, siber güvenlik yeteneklerini ölçmenin ve geliştirmenin en heyecan verici yolu haline geldi. Türk üniversite takımları, uluslararası finallerde derece üstüne derece alıyor ve bu başarılar, sektördeki yetenek açığının kapanmasına katkı sağlıyor.",
    date: "9 Eylül 2026",
    readTime: "6 dk",
    author: "BigKod Araştırma Ekibi",
    body: [
      "Capture The Flag (CTF) yarışmaları, siber güvenlik dünyasının en hızlı büyüyen topluluk etkinlikleri haline geldi. Katılımcılar, gerçek dünyadaki güvenlik açıklarını simüle eden bulmacaları çözerek bayrak (flag) topluyor ve bu bayraklar puan kazanıyor. Yarışmalar; web güvenliği, ters mühendislik, kriptografi, adli bilişim ve binary exploitation gibi kategorilere ayrılıyor.",
      "Türkiye, CTF dünyasında son yıllarda yükselen bir güç. Türk üniversite takımları, uluslararası finallerde düzenli olarak ilk ona giriyor. Bu başarı, yalnızca bireysel yeteneklerden değil; üniversite kulüplerinin ve topluluk odaklı eğitim modellerinin olgunlaşmasından geliyor. İstanbul, Ankara ve İzmir'deki teknik üniversiteler, haftalık CTF çalışma grupları düzenliyor ve yeni gelen öğrencileri aktif olarak yetiştiriyor.",
      "CTF'nin eğitim değeri, geleneksel siber güvenlik eğitiminden farklı. Katılımcı, teoriyi değil pratik zafiyetleri deneyimleyerek öğreniyor. Bir web uygulamasında SQL injection açığı bulmak, bir binary'yi tersine mühendislikle gizli bayrağı çıkarmak, zayıf bir şifreleme algoritmasını kırmak — bu görevler, sınıfta öğrenilen kavramların gerçek dünya pratiğine çevrilmesini sağlıyor.",
      "Sektör, CF yarışmalarını bir yetenek avı alanı olarak kullanıyor. Başarılı takımların üyeleri, genellikle yarışma sırasında iş teklifleri alıyor. Siber güvenlik şirketleri, CTF platformlarını işe alım sürecinin bir parçası haline getiriyor; adayın yarışma performansı, mülakat yerine veya mülakatla birlikte değerlendiriliyor.",
      "Uzmanlar, CTF kültürünün Türkiye'de daha da yaygınlaşması için lise seviyesinde başlatılacak programlara ihtiyaç olduğunu belirtiyor. Ortaokul ve lise öğrencileri için düzenlenen giriş seviyesi yarışmalar, siber güvenlik alanına yönelen gençlerin sayısını artırabilir ve Türkiye'nin siber güvenlik yetenek havuzunu büyütebilir.",
    ],
    keyPoints: [
      "Türk üniversite takımları uluslararası CTF finallerinde ilk onda",
      "CTF, teoriyi pratik zafiyet deneyimine çeviriyor",
      "Sektör, CTF performansını işe alım sürecinde kullanıyor",
      "Lise seviyesi CTF programları yetenek havuzunu büyütebilir",
    ],
  },
  {
    slug: "kubernetes-platform-muhendisligi-2026",
    categorySlug: "bulut-bilisim",
    image: cloudImg,
    imageAlt: "Kubernetes ve platform mühendisliği",
    category: "Bulut Bilişim",
    title: "Kubernetes platform mühendisliği: Geliştirici deneyimi odaklı yeni dönem",
    excerpt:
      "Kubernetes kurulumu artık sorun değil; sorun, geliştiricilere Kubernetes'in karmaşıklığını gizlemek. İç geliştirici platformları (IDP), self-servis ortam sağlarken mühendislik verimliliğini ölçülebilir biçimde artırıyor.",
    date: "12 Eylül 2026",
    readTime: "8 dk",
    author: "BigKod Araştırma Ekibi",
    body: [
      "Kubernetes, beş yıl önce kurulumu bile bir proje olan bir teknolojiydi. Bugün ise kurulum çözülmüş bir sorun; tüm büyük bulut sağlayıcılar yönetilen Kubernetes sunuyor. 2026'nın sorunu farklı: Kubernetes'in karmaşıklığını geliştiricilerden gizlemek ve self-servis bir deneyim sunmak.",
      "İç geliştirici platformu (Internal Developer Platform — IDP) kavramı, bu sorunun yanıtı olarak yükseldi. Bir IDP, geliştiriciye 'yeni bir servis oluştur' butonu sunuyor; arka planda Kubernetes namespace, CI/CD boru hattı, izleme ve log toplama yapılandırması, DNS ve TLS sertifikası otomatik kuruluyor. Geliştirici YAML yazmakla değil, iş mantığıyla ilgileniyor.",
      "Platform mühendisliği ekiplerinin rolü de değişti. Eskiden 'altyapı yöneticisi' olarak çalışan bu ekipler, artık 'ürün mühendisi' gibi düşünüyor: iç müşterileri geliştiriciler, ürünleri ise platform. Geri bildirim döngüleri, kullanım metrikleri ve memnuniyet anketleri, platform ekibinin başarısını ölçen araçlar haline geldi.",
      "Ölçülebilir sonuçlar çarpıcı. IDP uygulayan şirketlerde, yeni bir servisi üretime alma süresi günlerden dakikalara indi. Geliştirici memnuniyet skorları belirgin biçimde arttı. Operasyonel yük azaldıkça, geliştirme hızı da arttı; bazı ekipler dağıtım sıklığını haftada birden günde onlara çıkardı.",
      "Ancak uzmanlar, IDP'nin bir araç değil bir kültür değişimi olduğunu vurguluyor. Platformu bir 'ürün' gibi yönetmek, sürekli geri bildirim ve iterasyon gerektiriyor. Araçları kurup ekibi dinlemediğinde, platform kullanılmıyor ve yatırım boşa gidiyor. Başarılı platform ekipleri, geliştirici deneyimini birinci öncelik olarak benimsiyor.",
    ],
    keyPoints: [
      "Sorun Kubernetes kurulumu değil, karmaşıklığı geliştiriciden gizlemek",
      "IDP: self-servis platform, arka planda tüm altyapı otomatik",
      "Platform ekipleri artık 'ürün mühendisi' gibi çalışıyor",
      "IDP uygulayan şirketlerde dağıtım süresi günlerden dakikalara indi",
    ],
  },
  {
    slug: "finops-bulut-maliyet-optimizasyonu",
    categorySlug: "bulut-bilisim",
    image: cloudImg,
    imageAlt: "Bulut maliyet optimizasyonu ve FinOps",
    category: "Bulut Bilişim",
    title: "FinOps: Bulut faturalarını kontrol altına almanın mühendislik disiplini",
    excerpt:
      "Bulut maliyetleri, şirketlerin en hızlı büyüyen harcama kalemlerinden biri haline geldi. FinOps disiplini, mühendislik kararlarını mali sonuçlarla ilişkilendirerek, her ekibin faturayı sahiplenmesini sağlıyor. Otomatik kapatma ve spot kapasite kullanımı, ilk adımlar.",
    date: "10 Eylül 2026",
    readTime: "7 dk",
    author: "BigKod Araştırma Ekibi",
    body: [
      "Buluta geçişin vaat ettiği 'kullandıkça öde' modeli, pratikte çoğu şirket için 'kullanmasan da öde' modeline dönüştü. Geliştirici, boş çalışan bir sunucuyu kapatmak için bir bilet açıp haftalarca beklemek yerine, çalışır halde bırakıyor; fatura ekibe değil şirkete geliyor. FinOps, bu sorunu mühendislik disipliniyle çözmeyi amaçlayan bir yaklaşımdır.",
      "FinOps'un temel ilkesi, maliyetin görünürlüğü ve sahiplenmesi. Her ekip, kendi kaynaklarının maliyetini gerçek zamanlı olarak görebiliyor. Bir geliştirici, açtığı test ortamının saatlik maliyetini biliyor ve işi bittiğinde kapatıyor. Bu görünürlük, maliyetleri merkezi bir ekipten ziyade dağıtık olarak yönetmeyi sağlıyor.",
      "İlk ve en etkili optimizasyon adımı, boş kaynakların otomatik kapatılması. Geliştirme ve test ortamlarının gece ve hafta sonu otomatik durdurulması, ortalama bir şirkette aylık binlerce lira tasarruf sağlıyor. Bu basit önlem, çoğu şirkette faturada yüzde 15-20 azalma yaratıyor.",
      "Spot kapasite kullanımı, bir sonraki optimizasyon katmanı. Bulut sağlayıcıların boşta kalan kapasiteleri, normal fiyatın üçte biri fiyatla sunuluyor. Kesinti riski taşıyan bu kaynaklar, iş yükü kesintiye toleranslıysa (toplu işlem, CI/CD, test) ideal bir seçim. Otomatik spot-to-on-demand geçiş araçları, kesinti anında iş yükünü güvenli biçimde taşıyor.",
      "İleri seviye FinOps, mimari kararları da kapsıyor. Bir servisin sunucusuz mimariye taşınıp taşınamayacağı, veritabanı olarak yönetilen hizmet yerine self-hosted çözümün daha mı ekonomik olduğu, trafiğe göre otomatik ölçeklendirme eşiğinin doğru ayarlanıp ayarlanmadığı — bu kararlar artık mühendislik ve finans ekiplerinin ortak değerlendirmesiyle alınıyor.",
    ],
    keyPoints: [
      "FinOps: maliyetin görünürlüğü ve ekibin sahiplenmesi",
      "Boş kaynakların otomatik kapatılması faturada yüzde 15-20 azalma sağlıyor",
      "Spot kapasite, kesintiye toleranslı iş yüklerinde üçte bir fiyat",
      "Mimari kararlar artık mühendislik ve finans ortak değerlendirmesiyle",
    ],
  },
  {
    slug: "sunucusuz-mimari-edge-computing",
    categorySlug: "bulut-bilisim",
    image: cloudImg,
    imageAlt: "Sunucusuz mimari ve edge computing",
    category: "Bulut Bilişim",
    title: "Edge computing ve sunucusuz mimari: Gecikme savaşının yeni cephesi",
    excerpt:
      "Kullanıcıya en yakın noktada çalıştırılan fonksiyonlar, milisaniyelik gecikme avantajını rekabet avantajına çeviriyor. Dünya çapında dağıtılan edge ağları, içeriği kullanıcının yanına taşıyor ve geleneksel bulut mimarilerine kıyasla belirgin performans artışı sağlıyor.",
    date: "8 Eylül 2026",
    readTime: "6 dk",
    author: "BigKod Araştırma Ekibi",
    body: [
      "Edge computing, yıllarca bir pazarlama terimi olarak kaldıktan sonra 2026'da gerçek bir mimari seçenek haline geldi. Yaklaşım basit: hesaplama, merkezi veri merkezlerinde değil, kullanıcının coğrafi olarak en yakın olduğu noktada çalışıyor. Bu, gecikmeyi belirgin biçimde azaltıyor.",
      "Gecikmenin neden önemli olduğu, kullanım senaryosuna göre değişiyor. Bir e-ticaret sitesinde 200 milisaniyelik gecikme, dönüşüm oranını düşürebiliyor. Bir multiplayer oyunda 50 milisaniyelik gecikme, oyun deneyimini bozuyor. Bir finansal uygulamada 10 milisaniyelik gecikme, arbitraj fırsatını kaçırıyor. Edge computing, her senaryo için gecikmeyi kullanıcının coğrafi konumuna göre minimize ediyor.",
      "Sunucusuz (serverless) mimari ile edge computing'in birleşimi, 2026'nın en güçlü trendi. Geliştirici, bir fonksiyon yazıyor ve dağıtıyor; platform, bu fonksiyonu otomatik olarak dünya çapındaki edge noktalarına çoğaltıyor. Kullanıcı İstanbul'dan bağlandığında İstanbul'daki nokta, Berlin'den bağlandığında Berlin'deki nokta yanıt veriyor.",
      "Bu yaklaşımın getirdiği mimari zorluklar da yeni. Veri tutarlılığı, merkezi bir veritabanıyla senkronizasyon gerektiriyor; edge noktalarında önbellekleme ve çakışma çözümü stratejileri kurulması şart. Oturum yönetimi, stateful iş yükleri için hâlâ zorlu bir alan. Platform sağlayıcılar, bu sorunları çözmek için edge-native veri servisleri geliştiriyor.",
      "Maliyet tarafında edge, her durumda daha pahalı değil. Düşük trafikli iş yüklerinde, merkezi bulut + CDN kombinasyonu daha ekonomik kalabilir. Ancak yüksek trafikli, gecikme duyarlı iş yüklerinde edge, performans başına maliyet anlamında rekabetçi hale geliyor. Uzmanlar, mimari kararı kullanım senaryosuna göre vermek gerektiğini vurguluyor.",
    ],
    keyPoints: [
      "Edge computing: hesaplama kullanıcının en yakın noktasında",
      "Gecikme: e-ticaretten finansa kadar farklı sektörlerde rekabet avantajı",
      "Sunucusuz + edge: fonksiyonlar dünya çapına otomatik çoğaltılıyor",
      "Veri tutarlılığı ve oturum yönetimi hâlâ zorlu alanlar",
    ],
  },
  {
    slug: "unreal-engine-5-nanite-lumen",
    categorySlug: "oyun-gelistirme",
    image: gameImg,
    imageAlt: "Unreal Engine 5 grafik teknolojileri",
    category: "Oyun Geliştirme",
    title: "Unreal Engine 5: Nanite ve Lumen ile grafik devrimi sürüyor",
    excerpt:
      "Milyarlarca poligonu otomatik optimize eden Nanite ve gerçek zamanlı global aydınlatma sağlayan Lumen, bağımsız stüdyoların AAA kaliteye ulaşmasını sağlıyor. Türkiye'deki eğitim stüdyoları, bu araçları mimari görselleştirme ve sanayi simülasyonuna da uyarlıyor.",
    date: "13 Eylül 2026",
    readTime: "8 dk",
    author: "BigKod Araştırma Ekibi",
    body: [
      "Unreal Engine 5'in getirdiği iki teknoloji, oyun grafiklerinde paradigma değişikliği yarattı. Nanite, sanatçının milyarlarca poligon içeren modeli doğrudan sahneye yerleştirmesine olanak tanıyor; motor, bu poligonları otomatik olarak ekran kartının işleyebileceği seviyeye indiriyor. Lumen ise gerçek zamanlı global aydınlatma sistemi: ışık kaynaklarından yansıyan ışık, yüzeyler arası dolaylı aydınlatma ve gölgeler tümüyle dinamik olarak hesaplanıyor.",
      "Bu iki teknolojinin en büyük etkisi, küçük stüdyoların grafik kalitesi açığını kapatması. Eskiden AAA stüdyolar, milyonlarca dolarlık araç ve onlarca teknik sanatçıyla elde edilen görsel kaliteyi, bugün beş kişilik bir ekip Unreal Engine 5 ile yaklaşabiliyor. Sanatçı, teknik optimizasyon kaygısı yerine yaratıcı sürece odaklanabiliyor.",
      "Türkiye'deki oyun stüdyoları dışında, mimari görselleştirme ve sanayi simülasyonu alanları da bu teknolojiden yararlanıyor. Mimarlık ofisleri, bina projelerini Unreal Engine 5 ile fotogerçekçi biçimde sunuyor; müşteri, henüz inşa edilmemiş binayı gerçek zamanlı ışık ve gölgeyle gezebiliyor. Sanayi tarafında ise fabrika simülasyonları ve dijital ikiz uygulamaları, Lumen'in gerçekçi aydınlatmasıyla daha doğru görsel analiz sağlıyor.",
      "Performans tarafında Nanite ve Lumen, belirli donanım gereksinimleri getiriyor. Nanite, mesh bazlı geometri için tasarlanmış; deforme olan yüzeyler (yüz ifadeleri, kumaş) için henüz ideal değil. Lumen ise düşük seviye donanımlarda performans düşüşüne yol açabiliyor ve bazı durumlarda geleneksel önden pişirilmiş (pre-baked) aydınlatma hâlâ daha verimli.",
      "Eğitim tarafında da etkisi büyük. Oyun geliştirme bölümleri ve kurslar, Unreal Engine 5'i müfredata dahil etti. Ancak uzmanlar, araçların kolay kullanımının yanı sıra grafik programlama ve shader bilgisinin hâlâ değerli olduğunu vurguluyor: Nanite ve Lumen'in sınırlarını anlamak ve ötesine geçmek için temel grafik bilgisine ihtiyaç var.",
    ],
    keyPoints: [
      "Nanite milyarlarca poligonu otomatik optimize ediyor",
      "Lumen gerçek zamanlı global aydınlatma sağlıyor",
      "Türkiye'de mimari görselleştirme ve sanayi simülasyonuna da uyarlanıyor",
      "Deforme olan yüzeyler ve düşük seviye donanımda sınırlamalar var",
    ],
  },
  {
    slug: "unity-vs-godot-2026",
    categorySlug: "oyun-gelistirme",
    image: gameImg,
    imageAlt: "Oyun motoru karşılaştırması",
    category: "Oyun Geliştirme",
    title: "Unity vs Godot: Bağımsız geliştiricinin yeni ikilemi",
    excerpt:
      "Godot'nun hızlı yükselişi ve açık kaynak doğası, bağımsız geliştiricileri Unity'ye olan bağımlılığı sorgulamaya itiyor. Godot 4'ün grafik motoru ve C# desteği, gap'i kapatırken; Unity'nin kurumsal güçlü yanları hâlâ ağır basıyor.",
    date: "11 Eylül 2026",
    readTime: "7 dk",
    author: "BigKod Araştırma Ekibi",
    body: [
      "Oyun motoru pazarında yıllardır Unity, bağımsız ve mobil oyun geliştirmenin varsayılan aracıydı. Ancak son iki yılda Godot'nun yükselişi, bu tekelini sorgulanır hale getirdi. Godot'nun açık kaynak doğası, küçük boyutu ve topluluk desteği, bağımsız geliştiricilerin dikkatini çekiyor.",
      "Godot 4'ün en önemli gelişimi, yeni grafik motoru (Vulkan tabanlı) ve C# desteğinin olgunlaşması. C# desteği, Unity'den Godot'ya geçmek isteyen geliştiriciler için köprü görevi görüyor; mevcut kodun bir kısmı görece kolay taşınabiliyor. Godot'nun düğüm-tabanlı sahne sistemi, Unity'nin component-tabanlı sisteminden farklı ama öğrenmesi kolay bir model sunuyor.",
      "Ancak Unity'nin avantajları hâlâ belirgin. Asset Store'daki binlerce hazır varlık ve eklenti, mobil platformlarda olgun dağıtım araçları ve reklam entegrasyonu, Unity'yi mobil oyun pazarının lideri konumunda tutuyor. Godot'nun mobil dağıtım araçları gelişiyor olsa da, Unity'nin olgunluğuna henüz ulaşmadı.",
      "Topluluk tarafında Godot'nun en büyük avantajı, açık kaynak olması. Motorun kendisini değiştirme özgürlüğü, özel ihtiyaçları olan stüdyolar için değerli. Unity'nin lisans modelindeki belirsizlikler ve fiyat politikası tartışmaları, bazı geliştiricilerin Godot'ya yönelmesine neden oldu. Godot topluluğu, hızla büyüyen ve yardımlaşmaya açık bir ekosistem kurdu.",
      "Uzmanlar, seçimi proje türüne göre öneriyor. Mobil ve ticari oyunlar için Unity hâlâ güvenli seçim. 2B oyunlar, prototip geliştirme ve açık kaynak felsefesine yakın bağımsız projeler için Godot ideal. 3B AAA kalite hedefleyen projeler için ise Unreal Engine başlıbaşına bir kategori. Bir motorun her şeyi yapabileceği yanılgısından çıkıp, projeye göre araç seçmek 2026'nın pragmatik yaklaşımı.",
    ],
    keyPoints: [
      "Godot 4 Vulkan tabanlı grafik motoru ve C# desteğiyle gap'i kapatıyor",
      "Unity Asset Store ve mobil dağıtım olgunluğuyla liderliğini koruyor",
      "Godot'nun açık kaynak doğası özel ihtiyaçlar için değerli",
      "Seçim: mobil için Unity, 2B için Godot, AAA için Unreal",
    ],
  },
  {
    slug: "gamejam-turkiye-48-saat",
    categorySlug: "oyun-gelistirme",
    image: gameImg,
    imageAlt: "GameJam oyun yarışması",
    category: "Oyun Geliştirme",
    title: "GameJam kültürü: 48 saatte oyun üretmenin mühendislik eğitimi",
    excerpt:
      "Türkiye'de her yıl onlarca GameJam etkinliği düzenleniyor ve binlerce geliştirici adayı, 48 saatlik zaman baskısı altında takım çalışması ve hızlı prototipleme becerisi kazanıyor. Bu etkinlikler, oyun endüstrisine yetenek kazandırmanın en etkili yolu olarak görülüyor.",
    date: "10 Eylül 2026",
    readTime: "5 dk",
    author: "BigKod Araştırma Ekibi",
    body: [
      "GameJam — katılımcıların 48 saat gibi kısa bir sürede belirlenen tema doğrultusunda bir oyun prototipi ürettiği yarışmalar — Türkiye'de son yıllarda patlama yaşadı. İstanbul, Ankara, İzmir ve Erzurum'da düzenlenen etkinlikler, her yıl binlerce katılımcıyı bir araya getiriyor.",
      "GameJam'lerin eğitim değeri, geleneksel yazılım eğitiminden farklı. Katılımcı, sınırsız süre ve kaynak varsayımıyla değil, kesin bir teslim tarihi ve sınırlı kaynakla çalışmayı öğreniyor. Bu, gerçek dünya proje yönetimi deneyiminin en gerçekçi simülasyonu. Önceliklendirme, kapsamı daraltma ve zaman baskısı altında karar verme becerileri, 48 saatte yoğun biçimde gelişiyor.",
      "Takım çalışması, GameJam'lerin en değerli çıktısı. Çoğu katılımcı, etkinliğe yabancılardan oluşan bir takımla giriyor ve 48 saatte bir takım kurmayı, görev paylaşımını ve iletişim disiplinini öğreniyor. Bu deneyim, oyun endüstrisindeki crunch kültürüne hazırlık olarak da değerlendiriliyor; ancak eleştirmenler, crunch kültürünü özendirmek yerine yönetmeyi öğretmesi gerektiğini vurguluyor.",
      "Türkiye'den çıkan başarılı bağımsız oyunların birçoğu, GameJam prototiplerinden büyüdü. 48 saatte üretilen bir prototip, etkinlik sonrasında geliştirilmeye devam ederek tam bir oyuna dönüşebiliyor. Bu, GameJam'leri yalnızca bir eğitim değil, bir proje kuluçka makinesi haline getiriyor.",
      "Sektör temsilcileri, GameJam kültürünün lise seviyesine inmesi gerektiğini belirtiyor. Lise öğrencileri için düzenlenen giriş seviyesi GameJam'ler, oyun geliştirmeye ilgi duyan gençlerin erken yaşta takım çalışması ve teknik deneyim kazanmasını sağlıyor. Bu, hem yetenek havuzunu büyütüyor hem de oyun sektörüne yönelen gençlerin sayısını artırıyor.",
    ],
    keyPoints: [
      "Türkiye'de her yıl onlarca GameJam, binlerce katılımcı",
      "48 saatte önceliklendirme, kapsamı daraltma ve zaman yönetimi öğreniliyor",
      "Yabancılardan oluşan takımlarla takım kurma deneyimi kazandırıyor",
      "Başarılı bağımsız oyunlar GameJam prototiplerinden büyüyor",
    ],
  },
  {
    slug: "risc-v-acik-kaynak-islemci",
    categorySlug: "donanim",
    image: heroImg,
    imageAlt: "RISC-V açık kaynak işlemci mimarisi",
    category: "Donanım",
    title: "RISC-V: Açık kaynak işlemci devrimi Türkiye'ye de ulaşıyor",
    excerpt:
      "Telif ücreti ödemeden kullanılabilen açık komut seti mimarisi, çip tasarımını demokratikleştiriyor. Türk üniversiteleri, RISC-V tabanlı eğitim kartları tasarlıyor ve yerli yonga girişimleri bu mimariyi temel alıyor.",
    date: "13 Eylül 2026",
    readTime: "8 dk",
    author: "BigKod Araştırma Ekibi",
    body: [
      "RISC-V, çip dünyasının Linux'una benzetiliyor. Tescilli işlemci mimarilerinin (x86, ARM) aksine, RISC-V açık bir komut seti mimarisi (ISA) standardı. Herhangi bir telif ücreti ödemeden, bu mimariyi temel alan kendi işlemcinizi tasarlayabilir ve üretebilirsiniz. Bu, on yıllardır birkaç şirketin tekelinde olan çip tasarımını demokratikleştiriyor.",
      "RISC-V'nin açık doğası, eğitim ve araştırma dünyasında hızla benimsenmesini sağladı. Türk üniversiteleri, bilgisayar mimarisi derslerinde RISC-V tabanlı eğitim kartları kullanıyor. Öğrenciler, bir işlemcinin nasıl çalıştığını simülasyon seviyesinde değil, gerçek donanımda deneyimliyor. Bazı üniversiteler, öğrencilere RISC-V tabanlı basit bir işlemci tasarlatarak, donanım tasarımının temellerini öğretiyor.",
      "Yerli yonga ekosistemi de RISC-V'ye yöneliyor. Tescilli mimarilerin lisans maliyeti ve ihracat kısıtlamaları, RISC-V'yi cazip kılıyor. Türkiye'deki yonga tasarım girişimleri, gömülü sistemler ve IoT cihazları için RISC-V tabanlı düşük güçlü işlemciler geliştiriyor. Bu, yerli donanım ekosisteminin temel taşlarından biri olarak değerlendiriliyor.",
      "RISC-V'nin en büyük zorluğu, yazılım ekosistemi. x86 ve ARM'ın onlarca yıllık yazılım birikimi, RISC-V için henüz olgunlaşmadı. İşletim sistemi desteği (Linux, FreeBSD) temel düzeyde olsa da, uygulama yazılımları ve araç zinciri tamamlanmaya devam ediyor. Ancak Android'in RISC-V desteğinin olgunlaşması, bu açığı hızla kapatıyor.",
      "Uzmanlar, RISC-V'nin x86 veya ARM'ın yerini alacağı sonucuna varmaktan kaçınıyor. Daha gerçekçi senaryo, her mimarinin kendi alanında varlığını sürdürmesi: x86 masaüstü ve sunucuda, ARM mobil ve düşük güçlü, RISC-V gömülü sistemler ve özel amaçlı tasarımlarda. Ancak uzun vadede, RISC-V'nin açık doğasının inovasyonu hızlandıracağı ve çip tasarım maliyetlerini düşürdüğü konusunda hemfikirler.",
    ],
    keyPoints: [
      "RISC-V, telif ücretsiz açık komut seti mimarisi",
      "Türk üniversiteleri RISC-V tabanlı eğitim kartları tasarlıyor",
      "Yerli yonga girişimleri gömülü sistemler için RISC-V'yi temel alıyor",
      "Yazılım ekosistemi olgunlaşıyor ama x86/ARM seviyesine henüz ulaşmadı",
    ],
  },
  {
    slug: "gpu-programlama-cuda-alternatifleri",
    categorySlug: "donanim",
    image: heroImg,
    imageAlt: "GPU programlama ve paralel hesaplama",
    category: "Donanım",
    title: "GPU programlama: CUDA tekelinden açık standartlara geçiş",
    excerpt:
      "Yapay zeka eğitimi için GPU'lara bağımlılık, CUDA'nın tekelini beraberinde getirdi. Ancak SYCL, OpenCL ve WebGPU gibi açık standartlar, sağlayıcı değiştirme yeteneğini geri getiriyor. Türk araştırma grupları, çok sağlayıcılı stratejilerle maliyet ve riski azaltıyor.",
    date: "11 Eylül 2026",
    readTime: "7 dk",
    author: "BigKod Araştırma Ekibi",
    body: [
      "GPU programlama, son on yılda yapay zeka patlamasıyla en kritik mühendislik becerilerinden biri haline geldi. Ancak bu alanda NVIDIA'ın CUDA platformı, fiili standart olarak konumlandı. CUDA'ya yazılan kod, yalnızca NVIDIA GPU'larında çalışıyor; bu da şirketleri tek sağlayıcıya bağımlı hale getiriyor.",
      "Bu bağımlılık, hem maliyet hem risk oluşturuyor. NVIDIA GPU'larının fiyatı ve tedarik süresi, yapay zeka projelerinin maliyetini ve zaman çizelgesini doğrudan etkiliyor. Alternatif GPU sağlayıcıları (AMD, Intel) ve özel yapay zeka hızlandırıcıları (TPU, NPU) mevcut, ancak CUDA'ya yazılmış kod bu platformlarda çalışmıyor.",
      "Açık standartlar bu sorunu çözmeyi vaat ediyor. SYCL, C++ kodunu farklı GPU sağlayıcıları için derlenebilir hale getiriyor. OpenCL, daha geniş bir donanım yelpazesini destekliyor ancak performans açısından CUDA'nın gerisinde. WebGPU ise tarayıcıda GPU programlamayı mümkün kılıyor ve düşük seviye GPU erişimini web geliştiricilere açıyor.",
      "Türk araştırma grupları, çok sağlayıcılı stratejiler geliştiriyor. Bir modelin eğitim kodunu, CUDA ve SYCL arasında değiştirilebilir biçimde yazmak; hem NVIDIA hem AMD GPU'ları olan sistemlerde çalışabilmeyi sağlıyor. Bu, tedarik zinciri riskini azaltıyor ve pazarlık gücünü artırıyor.",
      "Uzmanlar, CUDA'nın yerini bir günde almayacağını ancak açık standartların olgunlaşmasının pazar dengesini değiştireceğini belirtiyor. Sağlayıcı bağımsız kod yazma yeteneği, uzun vadede GPU maliyetlerinin düşmesine ve tedarik çeşitliliğinin artmasına katkı sağlayabilir. Bu, yapay zeka altyapı maliyetlerini düşürmenin önemli bir adımı olarak görülüyor.",
    ],
    keyPoints: [
      "CUDA tekel oluşturuyor; kod yalnızca NVIDIA GPU'larında çalışıyor",
      "SYCL ve OpenCL sağlayıcı bağımsız GPU programlamayı mümkün kılıyor",
      "WebGPU, tarayıcıda GPU erişimini açıyor",
      "Çok sağlayıcılı strateji tedarik riskini ve maliyeti azaltıyor",
    ],
  },
  {
    slug: "enerji-verimli-veri-merkezi",
    categorySlug: "donanim",
    image: heroImg,
    imageAlt: "Enerji verimli veri merkezi tasarımı",
    category: "Donanım",
    title: "Yapay zeka veri merkezlerinin enerji krizi ve çözüm arayışları",
    excerpt:
      "Büyük dil modellerini eğiten dev GPU kümeleri, bir kasaba büyüklüğünde elektrik tüketiyor. Soğutma, güç dağıtımı ve karbon ayak izi, artık donanım mühendisliğinin en önemli başlıkları. Sıvı soğutma ve ısıl geri kazanım, çözümün öncüleri.",
    date: "12 Eylül 2026",
    readTime: "9 dk",
    author: "BigKod Araştırma Ekibi",
    body: [
      "Yapay zeka patlaması, veri merkezlerinin enerji tüketimini katlanarak artırdı. Tek bir büyük dil modeli eğitimi, yüzlerca GPU'yu haftalarca çalıştırıyor; bu GPU'ların toplam güç tüketimi, küçük bir kasabanın elektrik tüketimine eşit. Enerji şirketleri, yeni veri merkezlerinin şebeke kapasitesini aştığı bölgelerde bağlantıyı reddetmeye başladı.",
      "Geleneksel hava soğutma, bu güç yoğunluklarına yetişemiyor. Bir sunucu dolabı 40-50 kW güç tüketirken, hava soğutma ancak 15-20 kW'a kadar etkili. Çözüm, sıvı soğutma: sıvı, havadan binlerce kat daha iyi ısı iletkenliğine sahip ve işlemcilere doğrudan temas ettirildiğinde çok daha verimli soğutma sağlıyor.",
      "Sıvı soğutmanın iki ana yaklaşımı var. Doğrudan sıvı soğutma (direct-to-chip), sıvıyı işlemcinin üzerinden geçiriyor; en verimli yöntem ama en yüksek kurulum maliyeti. Daldırma soğutması (immersion), tüm sunucuyu dielektrik sıvıya batırıyor; daha basit ama daha az verimli. Hangi yöntem seçilirse seçilsin, PUE (Power Usage Effectiveness) değeri 1,1'in altına inebiliyor; bu, her 1 watt hesaplama için yalnızca 0,1 watt soğutma harcandığı anlamına geliyor.",
      "Isıl geri kazanım, enerji verimliliğinin ikinci ayağı. Soğutma sıvısının emdiği ısı, boşa atılmıyor; kampüs ısıtma sistemlerine, sera tarımına veya jeotermal destekli ısıtma ağlarına bağlanıyor. Bu, veri merkezinin karbon ayak izini sadece azaltmakla kalmıyor, ısınan bir binanın karbon ayak izini de düşürmüş oluyor.",
      "Uzmanlar, enerji verimliliğinin artık bir 'iyi olma' değil bir 'zorunluluk' olduğunu vurguluyor. Hem düzenleyici baskı (karbon raporlama şartları) hem ekonomik baskı (enerji maliyetleri) hem de itibari baskı (sürdürülebilirlik taahhütleri), veri merkezi tasarımcılarını verimlilik yeniliklerine yönlendiriyor. Bir sonraki adımın, işlemci seviyesinde güç-frekans dinamik ayarı ve iş yükü bazlı güç yönetimi olduğu belirtiliyor.",
    ],
    keyPoints: [
      "Tek bir LLM eğitimi bir kasaba büyüklüğünde elektrik tüketiyor",
      "Hava soğutma 20 kW'da sınırlanıyor; sıvı soğutma 50+ kW'a çıkıyor",
      "Sıvı soğutma PUE'yi 1,1'in altına indiriyor",
      "Isıl geri kazanım: soğutma ısısı ısıtma ve tarımda kullanılıyor",
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function articlesByCategory(categorySlug: string): Article[] {
  return ARTICLES.filter((a) => a.categorySlug === categorySlug);
}
