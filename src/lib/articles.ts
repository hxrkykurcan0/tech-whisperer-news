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
