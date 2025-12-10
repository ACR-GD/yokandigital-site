export interface PageConfig {
  slug: string;
  category: 'pillar' | 'service' | 'location' | 'industry';
  title: { en: string; ms: string };
  metaDescription: { en: string; ms: string };
  heroTitle: { en: string; ms: string };
  heroSubtitle: { en: string; ms: string };
  sections: {
    title: { en: string; ms: string };
    content: { en: string; ms: string };
    icon?: string;
  }[];
  features: { en: string; ms: string }[];
  ctaText: { en: string; ms: string };
}

export const interiorDesignerPages: PageConfig[] = [
  // PILLAR PAGE
  {
    slug: 'digital-marketing-interior-designers-kuala-lumpur',
    category: 'pillar',
    title: {
      en: 'Digital Marketing for Interior Designers in Kuala Lumpur | Yokan Digital',
      ms: 'Pemasaran Digital untuk Pereka Dalaman di Kuala Lumpur | Yokan Digital'
    },
    metaDescription: {
      en: 'Complete digital marketing solutions for interior designers in Kuala Lumpur. SEO, web design, paid ads & social media to attract high-value clients.',
      ms: 'Penyelesaian pemasaran digital lengkap untuk pereka dalaman di Kuala Lumpur. SEO, reka bentuk web, iklan berbayar & media sosial untuk menarik klien bernilai tinggi.'
    },
    heroTitle: {
      en: 'Digital Marketing for Interior Designers in Kuala Lumpur',
      ms: 'Pemasaran Digital untuk Pereka Dalaman di Kuala Lumpur'
    },
    heroSubtitle: {
      en: 'Get found by homeowners searching for interior designers in KL. We help you attract quality clients who appreciate your design expertise.',
      ms: 'Ditemui oleh pemilik rumah yang mencari pereka dalaman di KL. Kami membantu anda menarik klien berkualiti yang menghargai kepakaran reka bentuk anda.'
    },
    sections: [
      {
        title: { en: 'Why KL Interior Designers Choose Us', ms: 'Mengapa Pereka Dalaman KL Memilih Kami' },
        content: { en: 'Kuala Lumpur is a competitive market for interior designers. With hundreds of design studios vying for attention, you need more than beautiful work—you need visibility. Our digital marketing strategies are specifically designed for interior designers who want to stand out in Mont Kiara, Bangsar, KLCC, and beyond.', ms: 'Kuala Lumpur adalah pasaran yang kompetitif untuk pereka dalaman. Dengan ratusan studio reka bentuk yang bersaing untuk perhatian, anda memerlukan lebih daripada kerja yang indah—anda perlukan keterlihatan. Strategi pemasaran digital kami direka khusus untuk pereka dalaman yang ingin menonjol di Mont Kiara, Bangsar, KLCC, dan seterusnya.' },
        icon: 'Target'
      },
      {
        title: { en: 'Our Complete Digital Marketing Approach', ms: 'Pendekatan Pemasaran Digital Lengkap Kami' },
        content: { en: 'From portfolio websites that showcase your signature style to SEO that gets you found when potential clients search "interior designer near me," we cover every aspect of your online presence. Our integrated approach includes Google Ads, Instagram marketing, and lead generation funnels designed to convert visitors into consultations.', ms: 'Dari laman web portfolio yang mempamerkan gaya khas anda hingga SEO yang membuat anda ditemui apabila bakal klien mencari "pereka dalaman berhampiran saya," kami meliputi setiap aspek kehadiran dalam talian anda. Pendekatan bersepadu kami termasuk Google Ads, pemasaran Instagram, dan corong penjanaan petunjuk yang direka untuk menukar pelawat kepada konsultasi.' },
        icon: 'Layers'
      },
      {
        title: { en: 'Results That Matter', ms: 'Hasil Yang Penting' },
        content: { en: 'We focus on what matters to your business: quality leads, not just traffic. Our clients see an average 3x increase in consultation requests within the first 6 months. More importantly, these are clients who understand the value of professional interior design and have the budget for your services.', ms: 'Kami fokus pada apa yang penting untuk perniagaan anda: petunjuk berkualiti, bukan sekadar trafik. Klien kami melihat peningkatan purata 3x dalam permintaan konsultasi dalam tempoh 6 bulan pertama. Lebih penting lagi, ini adalah klien yang memahami nilai reka bentuk dalaman profesional dan mempunyai bajet untuk perkhidmatan anda.' },
        icon: 'TrendingUp'
      }
    ],
    features: [
      { en: 'Portfolio websites that wow potential clients', ms: 'Laman web portfolio yang memukau bakal klien' },
      { en: 'SEO to rank for "interior designer KL"', ms: 'SEO untuk mendapat kedudukan "pereka dalaman KL"' },
      { en: 'Google & Meta ads targeting homeowners', ms: 'Iklan Google & Meta menyasarkan pemilik rumah' },
      { en: 'Instagram strategies for design studios', ms: 'Strategi Instagram untuk studio reka bentuk' },
      { en: 'Lead funnels that convert visitors', ms: 'Corong petunjuk yang menukar pelawat' },
      { en: 'Google Business Profile optimization', ms: 'Pengoptimuman Profil Perniagaan Google' }
    ],
    ctaText: { en: 'Get Your Free Marketing Consultation', ms: 'Dapatkan Konsultasi Pemasaran Percuma Anda' }
  },

  // SERVICE PAGES
  {
    slug: 'seo-for-interior-designers',
    category: 'service',
    title: {
      en: 'SEO for Interior Designers | Get Found on Google | Yokan Digital',
      ms: 'SEO untuk Pereka Dalaman | Ditemui di Google | Yokan Digital'
    },
    metaDescription: {
      en: 'SEO services designed for interior designers in Malaysia. Rank higher when clients search for interior designers in your area.',
      ms: 'Perkhidmatan SEO direka untuk pereka dalaman di Malaysia. Dapatkan kedudukan lebih tinggi apabila klien mencari pereka dalaman di kawasan anda.'
    },
    heroTitle: {
      en: 'SEO for Interior Designers',
      ms: 'SEO untuk Pereka Dalaman'
    },
    heroSubtitle: {
      en: 'When homeowners search "interior designer near me," will they find you? Our SEO services ensure your design studio appears at the top of search results.',
      ms: 'Apabila pemilik rumah mencari "pereka dalaman berhampiran saya," adakah mereka akan menemui anda? Perkhidmatan SEO kami memastikan studio reka bentuk anda muncul di bahagian atas hasil carian.'
    },
    sections: [
      {
        title: { en: 'Why SEO Matters for Interior Designers', ms: 'Mengapa SEO Penting untuk Pereka Dalaman' },
        content: { en: 'Most homeowners start their search for an interior designer on Google. If your website doesn\'t appear on the first page, you\'re losing potential clients to competitors. SEO helps you capture these high-intent searches and turn them into consultations.', ms: 'Kebanyakan pemilik rumah memulakan pencarian mereka untuk pereka dalaman di Google. Jika laman web anda tidak muncul di halaman pertama, anda kehilangan bakal klien kepada pesaing. SEO membantu anda menangkap carian niat tinggi ini dan menukarnya kepada konsultasi.' },
        icon: 'Search'
      },
      {
        title: { en: 'Our Interior Design SEO Strategy', ms: 'Strategi SEO Reka Bentuk Dalaman Kami' },
        content: { en: 'We optimize your website for keywords that matter: "interior designer KL," "condo interior design Malaysia," "modern home renovation." Our approach includes technical SEO, content optimization, and building your authority in the interior design space.', ms: 'Kami mengoptimumkan laman web anda untuk kata kunci yang penting: "pereka dalaman KL," "reka bentuk dalaman kondo Malaysia," "renovasi rumah moden." Pendekatan kami termasuk SEO teknikal, pengoptimuman kandungan, dan membina autoriti anda dalam ruang reka bentuk dalaman.' },
        icon: 'Settings'
      },
      {
        title: { en: 'Portfolio Optimization', ms: 'Pengoptimuman Portfolio' },
        content: { en: 'Your project photos are your biggest asset. We optimize each portfolio piece with proper alt text, descriptions, and schema markup so Google understands and showcases your beautiful work in image searches.', ms: 'Foto projek anda adalah aset terbesar anda. Kami mengoptimumkan setiap karya portfolio dengan teks alt yang betul, penerangan, dan markup skema supaya Google memahami dan mempamerkan kerja indah anda dalam carian imej.' },
        icon: 'Image'
      }
    ],
    features: [
      { en: 'Keyword research for interior design', ms: 'Penyelidikan kata kunci untuk reka bentuk dalaman' },
      { en: 'On-page SEO optimization', ms: 'Pengoptimuman SEO on-page' },
      { en: 'Portfolio & image SEO', ms: 'SEO portfolio & imej' },
      { en: 'Local SEO for your service areas', ms: 'SEO tempatan untuk kawasan perkhidmatan anda' },
      { en: 'Monthly ranking reports', ms: 'Laporan kedudukan bulanan' },
      { en: 'Competitor analysis', ms: 'Analisis pesaing' }
    ],
    ctaText: { en: 'Start Ranking on Google', ms: 'Mula Mendapat Kedudukan di Google' }
  },
  {
    slug: 'local-seo-google-business-interior-designers',
    category: 'service',
    title: {
      en: 'Local SEO & Google Business Profile for Interior Designers | Yokan Digital',
      ms: 'SEO Tempatan & Profil Perniagaan Google untuk Pereka Dalaman | Yokan Digital'
    },
    metaDescription: {
      en: 'Dominate local search results with our Google Business Profile optimization for interior designers. Get more calls and direction requests.',
      ms: 'Dominasi hasil carian tempatan dengan pengoptimuman Profil Perniagaan Google kami untuk pereka dalaman. Dapatkan lebih banyak panggilan dan permintaan arah.'
    },
    heroTitle: {
      en: 'Local SEO & Google Business Profile for Interior Designers',
      ms: 'SEO Tempatan & Profil Perniagaan Google untuk Pereka Dalaman'
    },
    heroSubtitle: {
      en: 'Appear in the Google Maps pack when homeowners search for interior designers nearby. Get more calls, direction requests, and website visits.',
      ms: 'Muncul dalam pek Google Maps apabila pemilik rumah mencari pereka dalaman berhampiran. Dapatkan lebih banyak panggilan, permintaan arah, dan lawatan laman web.'
    },
    sections: [
      {
        title: { en: 'The Power of Local Search', ms: 'Kuasa Carian Tempatan' },
        content: { en: '"Interior designer near me" searches have grown 150% in the past 2 years. When someone searches this on their phone, Google shows local businesses first. A well-optimized Google Business Profile puts you in front of ready-to-hire homeowners.', ms: 'Carian "pereka dalaman berhampiran saya" telah meningkat 150% dalam 2 tahun lepas. Apabila seseorang mencari ini di telefon mereka, Google menunjukkan perniagaan tempatan dahulu. Profil Perniagaan Google yang dioptimumkan dengan baik meletakkan anda di hadapan pemilik rumah yang bersedia untuk mengupah.' },
        icon: 'MapPin'
      },
      {
        title: { en: 'Complete Profile Optimization', ms: 'Pengoptimuman Profil Lengkap' },
        content: { en: 'We optimize every aspect of your Google Business Profile: photos of your best projects, services you offer, service areas, business hours, and Q&A. We also help you generate and respond to reviews that build trust.', ms: 'Kami mengoptimumkan setiap aspek Profil Perniagaan Google anda: foto projek terbaik anda, perkhidmatan yang anda tawarkan, kawasan perkhidmatan, waktu perniagaan, dan Soal Jawab. Kami juga membantu anda menjana dan membalas ulasan yang membina kepercayaan.' },
        icon: 'CheckCircle'
      },
      {
        title: { en: 'Multi-Location Strategy', ms: 'Strategi Berbilang Lokasi' },
        content: { en: 'Serve multiple areas like Bangsar, Damansara, and Mont Kiara? We create a local SEO strategy that helps you rank in all your service areas, not just your office location.', ms: 'Berkhidmat di berbilang kawasan seperti Bangsar, Damansara, dan Mont Kiara? Kami mencipta strategi SEO tempatan yang membantu anda mendapat kedudukan di semua kawasan perkhidmatan anda, bukan sahaja lokasi pejabat anda.' },
        icon: 'Map'
      }
    ],
    features: [
      { en: 'Google Business Profile setup & optimization', ms: 'Persediaan & pengoptimuman Profil Perniagaan Google' },
      { en: 'Photo optimization for projects', ms: 'Pengoptimuman foto untuk projek' },
      { en: 'Review generation strategy', ms: 'Strategi penjanaan ulasan' },
      { en: 'Local citation building', ms: 'Pembinaan sitasi tempatan' },
      { en: 'Multi-area targeting', ms: 'Penyasaran berbilang kawasan' },
      { en: 'Monthly performance reports', ms: 'Laporan prestasi bulanan' }
    ],
    ctaText: { en: 'Dominate Local Search', ms: 'Dominasi Carian Tempatan' }
  },
  {
    slug: 'web-design-for-interior-designers',
    category: 'service',
    title: {
      en: 'Web Design for Interior Designers | Portfolio Websites | Yokan Digital',
      ms: 'Reka Bentuk Web untuk Pereka Dalaman | Laman Web Portfolio | Yokan Digital'
    },
    metaDescription: {
      en: 'Stunning portfolio websites for interior designers that showcase your work and convert visitors into clients. Mobile-friendly, fast, and SEO-ready.',
      ms: 'Laman web portfolio yang memukau untuk pereka dalaman yang mempamerkan kerja anda dan menukar pelawat kepada klien. Mesra mudah alih, pantas, dan sedia SEO.'
    },
    heroTitle: {
      en: 'Web Design for Interior Designers',
      ms: 'Reka Bentuk Web untuk Pereka Dalaman'
    },
    heroSubtitle: {
      en: 'Your website is your digital showroom. We create stunning portfolio websites that showcase your signature style and turn visitors into consultation requests.',
      ms: 'Laman web anda adalah bilik pameran digital anda. Kami mencipta laman web portfolio yang memukau yang mempamerkan gaya khas anda dan menukar pelawat kepada permintaan konsultasi.'
    },
    sections: [
      {
        title: { en: 'Designed for Interior Designers', ms: 'Direka untuk Pereka Dalaman' },
        content: { en: 'We understand that as an interior designer, your website needs to reflect the same level of taste and attention to detail you bring to your projects. Our designs are clean, elegant, and let your portfolio take center stage.', ms: 'Kami memahami bahawa sebagai pereka dalaman, laman web anda perlu mencerminkan tahap citarasa dan perhatian terhadap perincian yang sama yang anda bawa ke projek anda. Reka bentuk kami bersih, elegan, dan membenarkan portfolio anda menjadi tumpuan utama.' },
        icon: 'Layout'
      },
      {
        title: { en: 'Portfolio That Converts', ms: 'Portfolio Yang Menukar' },
        content: { en: 'Beautiful photos alone don\'t get you clients. We design portfolio pages with strategic storytelling—showing the problem, your process, and the stunning result. Each project becomes a case study that builds trust and desire.', ms: 'Foto yang indah sahaja tidak mendapatkan klien anda. Kami mereka bentuk halaman portfolio dengan penceritaan strategik—menunjukkan masalah, proses anda, dan hasil yang memukau. Setiap projek menjadi kajian kes yang membina kepercayaan dan keinginan.' },
        icon: 'Image'
      },
      {
        title: { en: 'Built for Performance', ms: 'Dibina untuk Prestasi' },
        content: { en: 'A slow website loses visitors. We build fast-loading websites that look beautiful on phones, tablets, and desktops. Plus, every site is SEO-optimized so you can rank on Google from day one.', ms: 'Laman web yang perlahan kehilangan pelawat. Kami membina laman web yang memuatkan pantas yang kelihatan indah pada telefon, tablet, dan desktop. Tambahan lagi, setiap laman dioptimumkan SEO supaya anda boleh mendapat kedudukan di Google dari hari pertama.' },
        icon: 'Zap'
      }
    ],
    features: [
      { en: 'Custom portfolio design', ms: 'Reka bentuk portfolio tersuai' },
      { en: 'Mobile-responsive layout', ms: 'Susun atur responsif mudah alih' },
      { en: 'Project case study pages', ms: 'Halaman kajian kes projek' },
      { en: 'Consultation booking forms', ms: 'Borang tempahan konsultasi' },
      { en: 'SEO-optimized structure', ms: 'Struktur dioptimumkan SEO' },
      { en: 'Fast loading speeds', ms: 'Kelajuan pemuatan pantas' }
    ],
    ctaText: { en: 'Get Your Portfolio Website', ms: 'Dapatkan Laman Web Portfolio Anda' }
  },
  {
    slug: 'paid-ads-for-interior-designers',
    category: 'service',
    title: {
      en: 'Paid Ads for Interior Designers | Google & Meta Ads | Yokan Digital',
      ms: 'Iklan Berbayar untuk Pereka Dalaman | Iklan Google & Meta | Yokan Digital'
    },
    metaDescription: {
      en: 'Google Ads and Meta (Facebook/Instagram) advertising for interior designers. Targeted campaigns that reach homeowners ready to renovate.',
      ms: 'Pengiklanan Google Ads dan Meta (Facebook/Instagram) untuk pereka dalaman. Kempen sasaran yang menjangkau pemilik rumah bersedia untuk renovasi.'
    },
    heroTitle: {
      en: 'Paid Ads for Interior Designers',
      ms: 'Iklan Berbayar untuk Pereka Dalaman'
    },
    heroSubtitle: {
      en: 'Reach homeowners actively searching for interior designers or dreaming about their next renovation. Google & Meta ads that deliver qualified leads.',
      ms: 'Jangkau pemilik rumah yang aktif mencari pereka dalaman atau mengimpikan renovasi seterusnya. Iklan Google & Meta yang menghantar petunjuk berkelayakan.'
    },
    sections: [
      {
        title: { en: 'Google Ads for High-Intent Searches', ms: 'Google Ads untuk Carian Niat Tinggi' },
        content: { en: 'When someone searches "interior designer Bangsar" or "condo renovation KL," they\'re ready to hire. Our Google Ads campaigns put you at the top of these searches, capturing clients at the exact moment they\'re looking for your services.', ms: 'Apabila seseorang mencari "pereka dalaman Bangsar" atau "renovasi kondo KL," mereka bersedia untuk mengupah. Kempen Google Ads kami meletakkan anda di bahagian atas carian ini, menangkap klien pada saat tepat mereka mencari perkhidmatan anda.' },
        icon: 'Search'
      },
      {
        title: { en: 'Instagram & Facebook Visual Ads', ms: 'Iklan Visual Instagram & Facebook' },
        content: { en: 'Interior design is visual—and so is Instagram and Facebook. We create stunning ad campaigns showcasing your best projects, targeting homeowners in KL and Selangor who match your ideal client profile.', ms: 'Reka bentuk dalaman adalah visual—begitu juga Instagram dan Facebook. Kami mencipta kempen iklan yang memukau yang mempamerkan projek terbaik anda, menyasarkan pemilik rumah di KL dan Selangor yang sepadan dengan profil klien ideal anda.' },
        icon: 'Instagram'
      },
      {
        title: { en: 'Budget-Friendly Results', ms: 'Hasil Mesra Bajet' },
        content: { en: 'We optimize every ringgit of your ad spend. Our campaigns typically deliver leads at RM50-150 per inquiry, with proper qualification to ensure you\'re getting serious prospects, not tire-kickers.', ms: 'Kami mengoptimumkan setiap ringgit perbelanjaan iklan anda. Kempen kami biasanya menghantar petunjuk pada RM50-150 setiap pertanyaan, dengan kelayakan yang betul untuk memastikan anda mendapat prospek serius, bukan pembazir masa.' },
        icon: 'DollarSign'
      }
    ],
    features: [
      { en: 'Google Search & Display Ads', ms: 'Iklan Carian & Paparan Google' },
      { en: 'Instagram & Facebook campaigns', ms: 'Kempen Instagram & Facebook' },
      { en: 'Retargeting for website visitors', ms: 'Penyasaran semula untuk pelawat laman web' },
      { en: 'A/B testing for best results', ms: 'Ujian A/B untuk hasil terbaik' },
      { en: 'Monthly budget optimization', ms: 'Pengoptimuman bajet bulanan' },
      { en: 'Detailed ROI reporting', ms: 'Pelaporan ROI terperinci' }
    ],
    ctaText: { en: 'Start Getting Leads Today', ms: 'Mula Mendapat Petunjuk Hari Ini' }
  },
  {
    slug: 'content-marketing-for-interior-designers',
    category: 'service',
    title: {
      en: 'Content Marketing for Interior Designers | Yokan Digital',
      ms: 'Pemasaran Kandungan untuk Pereka Dalaman | Yokan Digital'
    },
    metaDescription: {
      en: 'Content marketing that establishes you as the go-to interior designer. Blog posts, project features, and design tips that attract clients.',
      ms: 'Pemasaran kandungan yang menjadikan anda pereka dalaman pilihan. Post blog, ciri projek, dan tips reka bentuk yang menarik klien.'
    },
    heroTitle: {
      en: 'Content Marketing for Interior Designers',
      ms: 'Pemasaran Kandungan untuk Pereka Dalaman'
    },
    heroSubtitle: {
      en: 'Become the authority in interior design. Strategic content that attracts homeowners, showcases your expertise, and keeps you top of mind.',
      ms: 'Menjadi autoriti dalam reka bentuk dalaman. Kandungan strategik yang menarik pemilik rumah, mempamerkan kepakaran anda, dan memastikan anda sentiasa diingati.'
    },
    sections: [
      {
        title: { en: 'Beyond Pretty Pictures', ms: 'Lebih Daripada Gambar Cantik' },
        content: { en: 'Content marketing for interior designers isn\'t just about showing off projects. It\'s about answering the questions homeowners are asking: "How much does interior design cost in Malaysia?" "What\'s trending in condo design?" Strategic content brings you clients.', ms: 'Pemasaran kandungan untuk pereka dalaman bukan sekadar mempamerkan projek. Ia tentang menjawab soalan yang ditanya pemilik rumah: "Berapa kos reka bentuk dalaman di Malaysia?" "Apa yang trending dalam reka bentuk kondo?" Kandungan strategik membawa klien kepada anda.' },
        icon: 'FileText'
      },
      {
        title: { en: 'Project Case Studies', ms: 'Kajian Kes Projek' },
        content: { en: 'We turn your completed projects into compelling stories. Before and after, client challenges, your design solutions—content that helps potential clients see themselves working with you.', ms: 'Kami menukarkan projek yang telah siap anda menjadi cerita yang menarik. Sebelum dan selepas, cabaran klien, penyelesaian reka bentuk anda—kandungan yang membantu bakal klien melihat diri mereka bekerja dengan anda.' },
        icon: 'BookOpen'
      },
      {
        title: { en: 'SEO-Driven Blog Strategy', ms: 'Strategi Blog Didorong SEO' },
        content: { en: 'Every piece of content is designed to rank on Google. We target keywords like "living room design ideas Malaysia" and "how to choose an interior designer" to bring organic traffic to your website.', ms: 'Setiap kandungan direka untuk mendapat kedudukan di Google. Kami menyasarkan kata kunci seperti "idea reka bentuk ruang tamu Malaysia" dan "cara memilih pereka dalaman" untuk membawa trafik organik ke laman web anda.' },
        icon: 'TrendingUp'
      }
    ],
    features: [
      { en: 'Monthly blog content', ms: 'Kandungan blog bulanan' },
      { en: 'Project case studies', ms: 'Kajian kes projek' },
      { en: 'Design trend articles', ms: 'Artikel trend reka bentuk' },
      { en: 'SEO keyword targeting', ms: 'Penyasaran kata kunci SEO' },
      { en: 'Social media content', ms: 'Kandungan media sosial' },
      { en: 'Email newsletter content', ms: 'Kandungan surat berita e-mel' }
    ],
    ctaText: { en: 'Build Your Authority', ms: 'Bina Autoriti Anda' }
  },
  {
    slug: 'social-media-marketing-for-interior-designers',
    category: 'service',
    title: {
      en: 'Social Media Marketing for Interior Designers | Yokan Digital',
      ms: 'Pemasaran Media Sosial untuk Pereka Dalaman | Yokan Digital'
    },
    metaDescription: {
      en: 'Instagram, Facebook, and Pinterest marketing for interior designers. Showcase your portfolio and attract followers who become clients.',
      ms: 'Pemasaran Instagram, Facebook, dan Pinterest untuk pereka dalaman. Pamerkan portfolio anda dan tarik pengikut yang menjadi klien.'
    },
    heroTitle: {
      en: 'Social Media Marketing for Interior Designers',
      ms: 'Pemasaran Media Sosial untuk Pereka Dalaman'
    },
    heroSubtitle: {
      en: 'Instagram, Facebook, Pinterest—your visual playground. We help you build a following of homeowners who love your style and are ready to hire.',
      ms: 'Instagram, Facebook, Pinterest—taman permainan visual anda. Kami membantu anda membina pengikut pemilik rumah yang menyukai gaya anda dan bersedia untuk mengupah.'
    },
    sections: [
      {
        title: { en: 'Instagram for Interior Designers', ms: 'Instagram untuk Pereka Dalaman' },
        content: { en: 'Instagram is where interior design dreams are made. We manage your Instagram presence with stunning posts, engaging Reels, and Stories that give behind-the-scenes glimpses of your creative process. The result? A feed that attracts your ideal clients.', ms: 'Instagram adalah tempat impian reka bentuk dalaman dicipta. Kami menguruskan kehadiran Instagram anda dengan post yang memukau, Reels yang menarik, dan Stories yang memberi gambaran di sebalik tabir proses kreatif anda. Hasilnya? Suapan yang menarik klien ideal anda.' },
        icon: 'Instagram'
      },
      {
        title: { en: 'Pinterest for Long-Term Discovery', ms: 'Pinterest untuk Penemuan Jangka Panjang' },
        content: { en: 'Pinterest users are planners. They\'re saving ideas for future renovations—often 6-12 months before they\'re ready to hire. We position your work where these future clients are looking, planting seeds for tomorrow\'s consultations.', ms: 'Pengguna Pinterest adalah perancang. Mereka menyimpan idea untuk renovasi masa depan—selalunya 6-12 bulan sebelum mereka bersedia untuk mengupah. Kami meletakkan kerja anda di mana bakal klien ini mencari, menanam benih untuk konsultasi esok.' },
        icon: 'Share2'
      },
      {
        title: { en: 'Content Strategy That Converts', ms: 'Strategi Kandungan Yang Menukar' },
        content: { en: 'Pretty pictures get likes. Strategic content gets clients. We create a mix of portfolio showcases, design tips, client testimonials, and calls-to-action that turn passive scrollers into active inquiries.', ms: 'Gambar cantik mendapat suka. Kandungan strategik mendapat klien. Kami mencipta gabungan pameran portfolio, tips reka bentuk, testimoni klien, dan seruan tindakan yang menukar penggulung pasif kepada pertanyaan aktif.' },
        icon: 'Target'
      }
    ],
    features: [
      { en: 'Instagram content & management', ms: 'Kandungan & pengurusan Instagram' },
      { en: 'Facebook page optimization', ms: 'Pengoptimuman halaman Facebook' },
      { en: 'Pinterest strategy', ms: 'Strategi Pinterest' },
      { en: 'Reels & Stories creation', ms: 'Penciptaan Reels & Stories' },
      { en: 'Hashtag strategy', ms: 'Strategi hashtag' },
      { en: 'Engagement & community management', ms: 'Penglibatan & pengurusan komuniti' }
    ],
    ctaText: { en: 'Grow Your Social Presence', ms: 'Kembangkan Kehadiran Sosial Anda' }
  },
  {
    slug: 'lead-generation-funnels-for-interior-designers',
    category: 'service',
    title: {
      en: 'Lead Generation & Funnels for Interior Designers | Yokan Digital',
      ms: 'Penjanaan Petunjuk & Corong untuk Pereka Dalaman | Yokan Digital'
    },
    metaDescription: {
      en: 'Convert website visitors into consultation requests with lead generation funnels designed for interior designers.',
      ms: 'Tukar pelawat laman web kepada permintaan konsultasi dengan corong penjanaan petunjuk yang direka untuk pereka dalaman.'
    },
    heroTitle: {
      en: 'Lead Generation & Funnels for Interior Designers',
      ms: 'Penjanaan Petunjuk & Corong untuk Pereka Dalaman'
    },
    heroSubtitle: {
      en: 'Stop losing website visitors. Our lead funnels capture potential clients and nurture them until they\'re ready to book a consultation.',
      ms: 'Berhenti kehilangan pelawat laman web. Corong petunjuk kami menangkap bakal klien dan memupuk mereka sehingga mereka bersedia untuk menempah konsultasi.'
    },
    sections: [
      {
        title: { en: 'Why Most Websites Fail', ms: 'Mengapa Kebanyakan Laman Web Gagal' },
        content: { en: 'The average interior design website converts less than 2% of visitors. That means 98 out of 100 people leave without contacting you. Lead funnels with strategic offers and follow-up sequences can triple or quadruple that conversion rate.', ms: 'Purata laman web reka bentuk dalaman menukar kurang daripada 2% pelawat. Ini bermakna 98 daripada 100 orang pergi tanpa menghubungi anda. Corong petunjuk dengan tawaran strategik dan urutan susulan boleh menggandakan tiga atau empat kali kadar penukaran itu.' },
        icon: 'AlertTriangle'
      },
      {
        title: { en: 'Value-First Lead Magnets', ms: 'Magnet Petunjuk Nilai-Dahulu' },
        content: { en: 'We create irresistible offers that capture emails: design style quizzes, renovation budget calculators, free consultation guides. These position you as helpful, build trust, and give you permission to follow up.', ms: 'Kami mencipta tawaran yang tidak dapat ditolak yang menangkap e-mel: kuiz gaya reka bentuk, kalkulator bajet renovasi, panduan konsultasi percuma. Ini meletakkan anda sebagai membantu, membina kepercayaan, dan memberi anda kebenaran untuk membuat susulan.' },
        icon: 'Gift'
      },
      {
        title: { en: 'Automated Nurture Sequences', ms: 'Urutan Pemupukan Automatik' },
        content: { en: 'Not every lead is ready to hire immediately. Our email sequences educate, inspire, and warm up prospects over time. When they\'re finally ready to renovate, you\'re the obvious choice.', ms: 'Tidak semua petunjuk bersedia untuk mengupah dengan segera. Urutan e-mel kami mendidik, memberi inspirasi, dan memanaskan prospek dari semasa ke semasa. Apabila mereka akhirnya bersedia untuk renovasi, anda adalah pilihan yang jelas.' },
        icon: 'Mail'
      }
    ],
    features: [
      { en: 'Lead magnet creation', ms: 'Penciptaan magnet petunjuk' },
      { en: 'Landing page design', ms: 'Reka bentuk halaman pendaratan' },
      { en: 'Email nurture sequences', ms: 'Urutan pemupukan e-mel' },
      { en: 'Consultation booking system', ms: 'Sistem tempahan konsultasi' },
      { en: 'Lead qualification', ms: 'Kelayakan petunjuk' },
      { en: 'Conversion optimization', ms: 'Pengoptimuman penukaran' }
    ],
    ctaText: { en: 'Start Capturing More Leads', ms: 'Mula Menangkap Lebih Banyak Petunjuk' }
  },

  // LOCATION PAGES
  {
    slug: 'interior-designer-marketing-kuala-lumpur',
    category: 'location',
    title: {
      en: 'Interior Designer Marketing in Kuala Lumpur | Yokan Digital',
      ms: 'Pemasaran Pereka Dalaman di Kuala Lumpur | Yokan Digital'
    },
    metaDescription: {
      en: 'Digital marketing services for interior designers in Kuala Lumpur. Serving Bangsar, Mont Kiara, KLCC, Damansara & more.',
      ms: 'Perkhidmatan pemasaran digital untuk pereka dalaman di Kuala Lumpur. Berkhidmat di Bangsar, Mont Kiara, KLCC, Damansara & lain-lain.'
    },
    heroTitle: {
      en: 'Interior Designer Marketing in Kuala Lumpur',
      ms: 'Pemasaran Pereka Dalaman di Kuala Lumpur'
    },
    heroSubtitle: {
      en: 'Help homeowners in Bangsar, Mont Kiara, KLCC, and Damansara find your design studio. Local digital marketing built for KL interior designers.',
      ms: 'Bantu pemilik rumah di Bangsar, Mont Kiara, KLCC, dan Damansara mencari studio reka bentuk anda. Pemasaran digital tempatan dibina untuk pereka dalaman KL.'
    },
    sections: [
      {
        title: { en: 'The KL Interior Design Market', ms: 'Pasaran Reka Bentuk Dalaman KL' },
        content: { en: 'Kuala Lumpur is Malaysia\'s most competitive market for interior designers. From luxury condos in KLCC to bungalows in Bangsar, affluent homeowners expect excellence. Standing out requires strategic digital marketing that reaches the right clients.', ms: 'Kuala Lumpur adalah pasaran paling kompetitif di Malaysia untuk pereka dalaman. Dari kondo mewah di KLCC hingga banglo di Bangsar, pemilik rumah mewah mengharapkan kecemerlangan. Menonjol memerlukan pemasaran digital strategik yang menjangkau klien yang betul.' },
        icon: 'Building'
      },
      {
        title: { en: 'Areas We Help You Dominate', ms: 'Kawasan Kami Membantu Anda Mendominasi' },
        content: { en: 'We help you rank and get found in KL\'s most desirable neighborhoods: Bangsar, Damansara Heights, Mont Kiara, KLCC, Bukit Tunku, Kenny Hills, Taman Tun, and Desa ParkCity. Each area has its own search patterns and client profiles.', ms: 'Kami membantu anda mendapat kedudukan dan ditemui di kawasan kejiranan paling diingini di KL: Bangsar, Damansara Heights, Mont Kiara, KLCC, Bukit Tunku, Kenny Hills, Taman Tun, dan Desa ParkCity. Setiap kawasan mempunyai corak carian dan profil klien tersendiri.' },
        icon: 'MapPin'
      },
      {
        title: { en: 'Local Expertise Matters', ms: 'Kepakaran Tempatan Penting' },
        content: { en: 'We understand KL\'s interior design scene. We know what keywords homeowners use, which platforms they browse, and how to position your studio as the premier choice in your specialty—whether that\'s contemporary condos, traditional landed homes, or commercial spaces.', ms: 'Kami memahami dunia reka bentuk dalaman KL. Kami tahu kata kunci yang digunakan pemilik rumah, platform mana yang mereka layari, dan cara meletakkan studio anda sebagai pilihan utama dalam kepakaran anda—sama ada kondo kontemporari, rumah bertanah tradisional, atau ruang komersial.' },
        icon: 'Award'
      }
    ],
    features: [
      { en: 'Google ranking for "interior designer KL"', ms: 'Kedudukan Google untuk "pereka dalaman KL"' },
      { en: 'Neighborhood-specific SEO', ms: 'SEO khusus kejiranan' },
      { en: 'Google Business Profile optimization', ms: 'Pengoptimuman Profil Perniagaan Google' },
      { en: 'Instagram marketing for KL audience', ms: 'Pemasaran Instagram untuk khalayak KL' },
      { en: 'Local paid advertising', ms: 'Pengiklanan berbayar tempatan' },
      { en: 'Reputation management', ms: 'Pengurusan reputasi' }
    ],
    ctaText: { en: 'Get Found in Kuala Lumpur', ms: 'Ditemui di Kuala Lumpur' }
  },
  {
    slug: 'interior-designer-marketing-malaysia',
    category: 'location',
    title: {
      en: 'Interior Designer Marketing in Malaysia | Yokan Digital',
      ms: 'Pemasaran Pereka Dalaman di Malaysia | Yokan Digital'
    },
    metaDescription: {
      en: 'Nationwide digital marketing for interior designers across Malaysia. From KL to Penang to Johor, we help you attract quality clients.',
      ms: 'Pemasaran digital seluruh negara untuk pereka dalaman di seluruh Malaysia. Dari KL ke Pulau Pinang ke Johor, kami membantu anda menarik klien berkualiti.'
    },
    heroTitle: {
      en: 'Interior Designer Marketing in Malaysia',
      ms: 'Pemasaran Pereka Dalaman di Malaysia'
    },
    heroSubtitle: {
      en: 'Digital marketing solutions for interior designers across Malaysia. Whether you serve one city or the entire nation, we help you grow.',
      ms: 'Penyelesaian pemasaran digital untuk pereka dalaman di seluruh Malaysia. Sama ada anda berkhidmat satu bandar atau seluruh negara, kami membantu anda berkembang.'
    },
    sections: [
      {
        title: { en: 'The Malaysian Interior Design Landscape', ms: 'Landskap Reka Bentuk Dalaman Malaysia' },
        content: { en: 'Malaysia\'s interior design industry is booming, driven by new property developments and growing middle-class homeownership. From high-rise condos in KL to landed homes in Johor, Malaysians are investing in their living spaces like never before.', ms: 'Industri reka bentuk dalaman Malaysia sedang berkembang pesat, didorong oleh pembangunan hartanah baharu dan pemilikan rumah kelas pertengahan yang semakin meningkat. Dari kondo bertingkat tinggi di KL hingga rumah bertanah di Johor, rakyat Malaysia melabur dalam ruang kediaman mereka seperti tidak pernah sebelumnya.' },
        icon: 'Globe'
      },
      {
        title: { en: 'Multi-City Strategies', ms: 'Strategi Berbilang Bandar' },
        content: { en: 'We create marketing strategies that scale. If you\'re a national firm, we help you dominate search results in KL, Selangor, Penang, Johor, and beyond. If you\'re local, we ensure you own your city.', ms: 'Kami mencipta strategi pemasaran yang boleh diskala. Jika anda firma nasional, kami membantu anda mendominasi hasil carian di KL, Selangor, Pulau Pinang, Johor, dan seterusnya. Jika anda tempatan, kami memastikan anda memiliki bandar anda.' },
        icon: 'Map'
      },
      {
        title: { en: 'Bilingual Marketing', ms: 'Pemasaran Dwibahasa' },
        content: { en: 'Malaysia\'s diversity is its strength. We create marketing campaigns in both English and Bahasa Malaysia, reaching all segments of your potential client base with culturally relevant messaging.', ms: 'Kepelbagaian Malaysia adalah kekuatannya. Kami mencipta kempen pemasaran dalam Bahasa Inggeris dan Bahasa Malaysia, menjangkau semua segmen pangkalan klien berpotensi anda dengan pemesejan yang relevan secara budaya.' },
        icon: 'Languages'
      }
    ],
    features: [
      { en: 'National SEO strategy', ms: 'Strategi SEO nasional' },
      { en: 'Multi-city Google Ads', ms: 'Google Ads berbilang bandar' },
      { en: 'Bilingual content marketing', ms: 'Pemasaran kandungan dwibahasa' },
      { en: 'Malaysia-wide social media', ms: 'Media sosial seluruh Malaysia' },
      { en: 'Regional targeting', ms: 'Penyasaran serantau' },
      { en: 'National reputation building', ms: 'Pembinaan reputasi nasional' }
    ],
    ctaText: { en: 'Grow Across Malaysia', ms: 'Berkembang di Seluruh Malaysia' }
  },
  {
    slug: 'interior-designer-marketing-selangor',
    category: 'location',
    title: {
      en: 'Interior Designer Marketing in Selangor | Yokan Digital',
      ms: 'Pemasaran Pereka Dalaman di Selangor | Yokan Digital'
    },
    metaDescription: {
      en: 'Digital marketing for interior designers in Selangor & Klang Valley. Reach homeowners in Shah Alam, Subang, Puchong & more.',
      ms: 'Pemasaran digital untuk pereka dalaman di Selangor & Lembah Klang. Jangkau pemilik rumah di Shah Alam, Subang, Puchong & lain-lain.'
    },
    heroTitle: {
      en: 'Interior Designer Marketing in Selangor & Klang Valley',
      ms: 'Pemasaran Pereka Dalaman di Selangor & Lembah Klang'
    },
    heroSubtitle: {
      en: 'Reach homeowners across the Klang Valley—from Shah Alam to Subang Jaya to Puchong. Digital marketing designed for Selangor interior designers.',
      ms: 'Jangkau pemilik rumah di seluruh Lembah Klang—dari Shah Alam ke Subang Jaya ke Puchong. Pemasaran digital direka untuk pereka dalaman Selangor.'
    },
    sections: [
      {
        title: { en: 'Selangor\'s Growing Market', ms: 'Pasaran Selangor Yang Berkembang' },
        content: { en: 'Selangor is Malaysia\'s most developed state, with massive new townships and a growing population of homeowners. From young families in Puchong to executives in Ara Damansara, the demand for interior design services is stronger than ever.', ms: 'Selangor adalah negeri paling maju di Malaysia, dengan perbandaran baharu yang besar dan populasi pemilik rumah yang semakin meningkat. Dari keluarga muda di Puchong hingga eksekutif di Ara Damansara, permintaan untuk perkhidmatan reka bentuk dalaman lebih kuat daripada sebelumnya.' },
        icon: 'TrendingUp'
      },
      {
        title: { en: 'Township-Specific Marketing', ms: 'Pemasaran Khusus Perbandaran' },
        content: { en: 'We help you target specific townships: Kota Damansara, Bandar Utama, SS2, USJ, Bukit Jelutong, Setia Alam, and more. Each area has different demographics and design preferences—we tailor your marketing accordingly.', ms: 'Kami membantu anda menyasarkan perbandaran tertentu: Kota Damansara, Bandar Utama, SS2, USJ, Bukit Jelutong, Setia Alam, dan lain-lain. Setiap kawasan mempunyai demografi dan pilihan reka bentuk yang berbeza—kami menyesuaikan pemasaran anda dengan sewajarnya.' },
        icon: 'MapPin'
      },
      {
        title: { en: 'New Development Opportunities', ms: 'Peluang Pembangunan Baharu' },
        content: { en: 'New condos and townships mean new homeowners looking for interior designers. We help you capture this audience with targeted ads, content marketing, and partnerships with property developers.', ms: 'Kondo dan perbandaran baharu bermakna pemilik rumah baharu mencari pereka dalaman. Kami membantu anda menangkap khalayak ini dengan iklan sasaran, pemasaran kandungan, dan perkongsian dengan pemaju hartanah.' },
        icon: 'Building'
      }
    ],
    features: [
      { en: 'Klang Valley SEO optimization', ms: 'Pengoptimuman SEO Lembah Klang' },
      { en: 'Township-targeted campaigns', ms: 'Kempen sasaran perbandaran' },
      { en: 'New development marketing', ms: 'Pemasaran pembangunan baharu' },
      { en: 'Local Google Business setup', ms: 'Persediaan Perniagaan Google tempatan' },
      { en: 'Selangor-focused content', ms: 'Kandungan berfokus Selangor' },
      { en: 'Community engagement strategies', ms: 'Strategi penglibatan komuniti' }
    ],
    ctaText: { en: 'Dominate Selangor', ms: 'Dominasi Selangor' }
  },
  {
    slug: 'interior-designer-marketing-petaling-jaya',
    category: 'location',
    title: {
      en: 'Interior Designer Marketing in Petaling Jaya (PJ) | Yokan Digital',
      ms: 'Pemasaran Pereka Dalaman di Petaling Jaya (PJ) | Yokan Digital'
    },
    metaDescription: {
      en: 'Digital marketing for interior designers in Petaling Jaya. Get found by homeowners in SS2, Damansara, Bandar Utama & more.',
      ms: 'Pemasaran digital untuk pereka dalaman di Petaling Jaya. Ditemui oleh pemilik rumah di SS2, Damansara, Bandar Utama & lain-lain.'
    },
    heroTitle: {
      en: 'Interior Designer Marketing in Petaling Jaya',
      ms: 'Pemasaran Pereka Dalaman di Petaling Jaya'
    },
    heroSubtitle: {
      en: 'PJ is home to discerning homeowners who value quality design. Get found when they search for interior designers in their neighborhood.',
      ms: 'PJ adalah rumah kepada pemilik rumah yang bijak yang menghargai reka bentuk berkualiti. Ditemui apabila mereka mencari pereka dalaman di kawasan kejiranan mereka.'
    },
    sections: [
      {
        title: { en: 'PJ\'s Diverse Neighborhoods', ms: 'Kejiranan Pelbagai PJ' },
        content: { en: 'From the charming older homes of SS2 and Section 17 to the modern condos of Tropicana and Bandar Utama, PJ offers diverse opportunities for interior designers. Each neighborhood attracts different clients with different needs.', ms: 'Dari rumah lama yang menawan di SS2 dan Section 17 hingga kondo moden di Tropicana dan Bandar Utama, PJ menawarkan peluang pelbagai untuk pereka dalaman. Setiap kejiranan menarik klien berbeza dengan keperluan berbeza.' },
        icon: 'Home'
      },
      {
        title: { en: 'Established Homeowner Base', ms: 'Pangkalan Pemilik Rumah Mapan' },
        content: { en: 'PJ residents tend to be established professionals with the income to invest in quality interior design. They research carefully and expect excellence. Our marketing positions you as the premium choice for these discerning clients.', ms: 'Penduduk PJ cenderung menjadi profesional mapan dengan pendapatan untuk melabur dalam reka bentuk dalaman berkualiti. Mereka menyelidik dengan teliti dan mengharapkan kecemerlangan. Pemasaran kami meletakkan anda sebagai pilihan premium untuk klien bijak ini.' },
        icon: 'Award'
      },
      {
        title: { en: 'Renovation Culture', ms: 'Budaya Renovasi' },
        content: { en: 'PJ\'s older properties mean a strong renovation culture. Many homeowners are updating their 20-30 year old homes, creating perfect opportunities for interior designers who understand both modern updates and heritage preservation.', ms: 'Hartanah lama PJ bermakna budaya renovasi yang kuat. Ramai pemilik rumah mengemas kini rumah berusia 20-30 tahun mereka, mencipta peluang sempurna untuk pereka dalaman yang memahami kedua-dua kemas kini moden dan pemeliharaan warisan.' },
        icon: 'Wrench'
      }
    ],
    features: [
      { en: 'PJ-specific SEO ranking', ms: 'Kedudukan SEO khusus PJ' },
      { en: 'Neighborhood targeting ads', ms: 'Iklan sasaran kejiranan' },
      { en: 'Renovation-focused content', ms: 'Kandungan berfokus renovasi' },
      { en: 'Local review building', ms: 'Pembinaan ulasan tempatan' },
      { en: 'Community partnerships', ms: 'Perkongsian komuniti' },
      { en: 'Premium positioning strategy', ms: 'Strategi kedudukan premium' }
    ],
    ctaText: { en: 'Get Found in PJ', ms: 'Ditemui di PJ' }
  },
  {
    slug: 'interior-designer-marketing-penang',
    category: 'location',
    title: {
      en: 'Interior Designer Marketing in Penang | Yokan Digital',
      ms: 'Pemasaran Pereka Dalaman di Pulau Pinang | Yokan Digital'
    },
    metaDescription: {
      en: 'Digital marketing for interior designers in Penang. Reach homeowners in George Town, Bayan Lepas, Gurney & beyond.',
      ms: 'Pemasaran digital untuk pereka dalaman di Pulau Pinang. Jangkau pemilik rumah di George Town, Bayan Lepas, Gurney & seterusnya.'
    },
    heroTitle: {
      en: 'Interior Designer Marketing in Penang',
      ms: 'Pemasaran Pereka Dalaman di Pulau Pinang'
    },
    heroSubtitle: {
      en: 'Penang\'s unique blend of heritage and modernity creates special opportunities for interior designers. We help you reach homeowners who appreciate thoughtful design.',
      ms: 'Gabungan unik warisan dan kemodenan Pulau Pinang mencipta peluang istimewa untuk pereka dalaman. Kami membantu anda menjangkau pemilik rumah yang menghargai reka bentuk yang bernas.'
    },
    sections: [
      {
        title: { en: 'Heritage Meets Modern', ms: 'Warisan Bertemu Moden' },
        content: { en: 'Penang offers unique interior design challenges and opportunities. From heritage shophouse renovations in George Town to modern seafront condos along Gurney Drive, the island attracts clients who value thoughtful, culturally-aware design.', ms: 'Pulau Pinang menawarkan cabaran dan peluang reka bentuk dalaman yang unik. Dari renovasi rumah kedai warisan di George Town hingga kondo tepi laut moden di sepanjang Gurney Drive, pulau ini menarik klien yang menghargai reka bentuk yang bernas dan sedar budaya.' },
        icon: 'Building'
      },
      {
        title: { en: 'Penang\'s Growing Property Market', ms: 'Pasaran Hartanah Pulau Pinang Yang Berkembang' },
        content: { en: 'With new developments in Bayan Lepas, Batu Ferringhi, and the mainland, Penang\'s property market continues to grow. Young professionals and retirees alike are seeking interior designers who understand the island\'s unique character.', ms: 'Dengan pembangunan baharu di Bayan Lepas, Batu Ferringhi, dan tanah besar, pasaran hartanah Pulau Pinang terus berkembang. Profesional muda dan pesara sama-sama mencari pereka dalaman yang memahami watak unik pulau ini.' },
        icon: 'TrendingUp'
      },
      {
        title: { en: 'Local & Expat Clients', ms: 'Klien Tempatan & Ekspatriat' },
        content: { en: 'Penang attracts both local Malaysians and international expats. We create marketing strategies that reach both audiences, positioning you as the interior designer of choice for the island\'s diverse population.', ms: 'Pulau Pinang menarik kedua-dua rakyat Malaysia tempatan dan ekspatriat antarabangsa. Kami mencipta strategi pemasaran yang menjangkau kedua-dua khalayak, meletakkan anda sebagai pereka dalaman pilihan untuk populasi pelbagai pulau ini.' },
        icon: 'Users'
      }
    ],
    features: [
      { en: 'Penang-specific SEO', ms: 'SEO khusus Pulau Pinang' },
      { en: 'Heritage & modern positioning', ms: 'Kedudukan warisan & moden' },
      { en: 'Expat market targeting', ms: 'Penyasaran pasaran ekspatriat' },
      { en: 'Local Google Business optimization', ms: 'Pengoptimuman Perniagaan Google tempatan' },
      { en: 'Island-wide advertising', ms: 'Pengiklanan seluruh pulau' },
      { en: 'Bilingual content creation', ms: 'Penciptaan kandungan dwibahasa' }
    ],
    ctaText: { en: 'Grow in Penang', ms: 'Berkembang di Pulau Pinang' }
  },
  {
    slug: 'interior-designer-marketing-johor-bahru',
    category: 'location',
    title: {
      en: 'Interior Designer Marketing in Johor Bahru (JB) | Yokan Digital',
      ms: 'Pemasaran Pereka Dalaman di Johor Bahru (JB) | Yokan Digital'
    },
    metaDescription: {
      en: 'Digital marketing for interior designers in Johor Bahru. Reach homeowners in Iskandar, Bukit Indah, Nusajaya & more.',
      ms: 'Pemasaran digital untuk pereka dalaman di Johor Bahru. Jangkau pemilik rumah di Iskandar, Bukit Indah, Nusajaya & lain-lain.'
    },
    heroTitle: {
      en: 'Interior Designer Marketing in Johor Bahru',
      ms: 'Pemasaran Pereka Dalaman di Johor Bahru'
    },
    heroSubtitle: {
      en: 'JB\'s booming property market means growing demand for interior designers. Get found by homeowners in Iskandar, Bukit Indah, and Nusajaya.',
      ms: 'Pasaran hartanah JB yang berkembang pesat bermakna permintaan yang meningkat untuk pereka dalaman. Ditemui oleh pemilik rumah di Iskandar, Bukit Indah, dan Nusajaya.'
    },
    sections: [
      {
        title: { en: 'JB\'s Property Boom', ms: 'Ledakan Hartanah JB' },
        content: { en: 'Johor Bahru is experiencing unprecedented growth. Mega-developments like Forest City, the Iskandar region, and new townships are creating thousands of new homeowners—all potential clients for interior designers.', ms: 'Johor Bahru mengalami pertumbuhan yang tidak pernah terjadi sebelumnya. Pembangunan mega seperti Forest City, wilayah Iskandar, dan perbandaran baharu mencipta ribuan pemilik rumah baharu—semua klien berpotensi untuk pereka dalaman.' },
        icon: 'Building'
      },
      {
        title: { en: 'Singapore Connection', ms: 'Hubungan Singapura' },
        content: { en: 'Many JB homeowners work in Singapore and have Singapore-level expectations for design quality. They\'re willing to invest in premium interior design—but need to find the right designer. We help you reach this affluent audience.', ms: 'Ramai pemilik rumah JB bekerja di Singapura dan mempunyai jangkaan tahap Singapura untuk kualiti reka bentuk. Mereka sanggup melabur dalam reka bentuk dalaman premium—tetapi perlu mencari pereka yang betul. Kami membantu anda menjangkau khalayak mewah ini.' },
        icon: 'DollarSign'
      },
      {
        title: { en: 'New Development Focus', ms: 'Fokus Pembangunan Baharu' },
        content: { en: 'With so many new properties, JB interior designers have a unique opportunity to work with first-time homeowners. We create marketing that captures buyers before they move in, when they\'re most ready to invest in design.', ms: 'Dengan begitu banyak hartanah baharu, pereka dalaman JB mempunyai peluang unik untuk bekerja dengan pemilik rumah kali pertama. Kami mencipta pemasaran yang menangkap pembeli sebelum mereka berpindah masuk, apabila mereka paling bersedia untuk melabur dalam reka bentuk.' },
        icon: 'Home'
      }
    ],
    features: [
      { en: 'JB-specific SEO ranking', ms: 'Kedudukan SEO khusus JB' },
      { en: 'New development targeting', ms: 'Penyasaran pembangunan baharu' },
      { en: 'Singapore commuter marketing', ms: 'Pemasaran penumpang Singapura' },
      { en: 'Township-specific campaigns', ms: 'Kempen khusus perbandaran' },
      { en: 'Developer partnership strategies', ms: 'Strategi perkongsian pemaju' },
      { en: 'Iskandar region focus', ms: 'Fokus wilayah Iskandar' }
    ],
    ctaText: { en: 'Dominate Johor Bahru', ms: 'Dominasi Johor Bahru' }
  },

  // INDUSTRY-SOLUTION PAGES
  {
    slug: 'marketing-condo-apartment-interior-designers',
    category: 'industry',
    title: {
      en: 'Marketing for Condo & Apartment Interior Designers | Yokan Digital',
      ms: 'Pemasaran untuk Pereka Dalaman Kondo & Apartmen | Yokan Digital'
    },
    metaDescription: {
      en: 'Specialized digital marketing for interior designers who work on condos and apartments. Reach homeowners in high-rise developments.',
      ms: 'Pemasaran digital khusus untuk pereka dalaman yang bekerja pada kondo dan apartmen. Jangkau pemilik rumah di pembangunan bertingkat tinggi.'
    },
    heroTitle: {
      en: 'Marketing for Condo & Apartment Interior Designers',
      ms: 'Pemasaran untuk Pereka Dalaman Kondo & Apartmen'
    },
    heroSubtitle: {
      en: 'Specialize in condo and apartment design? We help you reach the growing market of high-rise homeowners looking for space-smart design solutions.',
      ms: 'Mengkhusus dalam reka bentuk kondo dan apartmen? Kami membantu anda menjangkau pasaran pemilik rumah bertingkat tinggi yang semakin meningkat yang mencari penyelesaian reka bentuk bijak ruang.'
    },
    sections: [
      {
        title: { en: 'The Condo Design Niche', ms: 'Niche Reka Bentuk Kondo' },
        content: { en: 'Condo interior design is a specialized skill. Working with compact spaces, dealing with developer handover conditions, and maximizing storage—these require expertise that not every interior designer has. If you specialize in condos, your marketing should too.', ms: 'Reka bentuk dalaman kondo adalah kemahiran khusus. Bekerja dengan ruang padat, berurusan dengan keadaan serahan pemaju, dan memaksimumkan storan—ini memerlukan kepakaran yang tidak dimiliki setiap pereka dalaman. Jika anda mengkhusus dalam kondo, pemasaran anda juga harus begitu.' },
        icon: 'Building'
      },
      {
        title: { en: 'Targeting New Condo Buyers', ms: 'Menyasarkan Pembeli Kondo Baharu' },
        content: { en: 'New condo developments mean new buyers who need interior design—often within a tight timeline before they move in. We help you capture these buyers with targeted ads and content that speaks to their specific concerns.', ms: 'Pembangunan kondo baharu bermakna pembeli baharu yang memerlukan reka bentuk dalaman—selalunya dalam garis masa yang ketat sebelum mereka berpindah masuk. Kami membantu anda menangkap pembeli ini dengan iklan sasaran dan kandungan yang bercakap tentang kebimbangan khusus mereka.' },
        icon: 'Target'
      },
      {
        title: { en: 'Space-Smart Content Marketing', ms: 'Pemasaran Kandungan Bijak-Ruang' },
        content: { en: 'We create content that showcases your condo expertise: small space solutions, storage hacks, before-and-after transformations. This positions you as the go-to designer for condo owners who want to maximize their space.', ms: 'Kami mencipta kandungan yang mempamerkan kepakaran kondo anda: penyelesaian ruang kecil, helah storan, transformasi sebelum-dan-selepas. Ini meletakkan anda sebagai pereka pilihan untuk pemilik kondo yang ingin memaksimumkan ruang mereka.' },
        icon: 'Maximize'
      }
    ],
    features: [
      { en: 'Condo-specific keyword targeting', ms: 'Penyasaran kata kunci khusus kondo' },
      { en: 'New development buyer ads', ms: 'Iklan pembeli pembangunan baharu' },
      { en: 'Space optimization content', ms: 'Kandungan pengoptimuman ruang' },
      { en: 'Before/after portfolio showcase', ms: 'Pameran portfolio sebelum/selepas' },
      { en: 'Developer partnership outreach', ms: 'Jangkauan perkongsian pemaju' },
      { en: 'High-rise community targeting', ms: 'Penyasaran komuniti bertingkat tinggi' }
    ],
    ctaText: { en: 'Attract Condo Clients', ms: 'Tarik Klien Kondo' }
  },
  {
    slug: 'marketing-landed-house-interior-designers',
    category: 'industry',
    title: {
      en: 'Marketing for Landed House Interior Designers | Yokan Digital',
      ms: 'Pemasaran untuk Pereka Dalaman Rumah Bertanah | Yokan Digital'
    },
    metaDescription: {
      en: 'Digital marketing for interior designers specializing in landed homes, bungalows, and terrace houses. Reach affluent homeowners.',
      ms: 'Pemasaran digital untuk pereka dalaman yang mengkhusus dalam rumah bertanah, banglo, dan rumah teres. Jangkau pemilik rumah mewah.'
    },
    heroTitle: {
      en: 'Marketing for Landed House Interior Designers',
      ms: 'Pemasaran untuk Pereka Dalaman Rumah Bertanah'
    },
    heroSubtitle: {
      en: 'Specialize in bungalows, semi-Ds, and terrace houses? We help you reach affluent homeowners who want premium interior design for their landed properties.',
      ms: 'Mengkhusus dalam banglo, semi-D, dan rumah teres? Kami membantu anda menjangkau pemilik rumah mewah yang mahukan reka bentuk dalaman premium untuk hartanah bertanah mereka.'
    },
    sections: [
      {
        title: { en: 'The Landed Home Market', ms: 'Pasaran Rumah Bertanah' },
        content: { en: 'Landed home owners typically have bigger budgets and bigger design needs. From whole-house renovations to extension builds, these projects are more complex—and more valuable. If you\'re an expert in landed homes, your marketing should reflect that expertise.', ms: 'Pemilik rumah bertanah biasanya mempunyai bajet lebih besar dan keperluan reka bentuk lebih besar. Dari renovasi seluruh rumah hingga pembinaan sambungan, projek ini lebih kompleks—dan lebih berharga. Jika anda pakar dalam rumah bertanah, pemasaran anda harus mencerminkan kepakaran itu.' },
        icon: 'Home'
      },
      {
        title: { en: 'Reaching Affluent Homeowners', ms: 'Menjangkau Pemilik Rumah Mewah' },
        content: { en: 'We target high-income neighborhoods and keywords that landed home owners use: "bungalow interior designer," "landed house renovation," "luxury home design Malaysia." These searches indicate serious buyers with serious budgets.', ms: 'Kami menyasarkan kejiranan berpendapatan tinggi dan kata kunci yang digunakan pemilik rumah bertanah: "pereka dalaman banglo," "renovasi rumah bertanah," "reka bentuk rumah mewah Malaysia." Carian ini menunjukkan pembeli serius dengan bajet serius.' },
        icon: 'DollarSign'
      },
      {
        title: { en: 'Showcase Your Premium Work', ms: 'Pamerkan Kerja Premium Anda' },
        content: { en: 'Landed home projects make for stunning portfolio pieces. We help you create marketing that showcases the scale and quality of your work—from dramatic living rooms to custom kitchens to landscaped outdoor spaces.', ms: 'Projek rumah bertanah menjadi karya portfolio yang memukau. Kami membantu anda mencipta pemasaran yang mempamerkan skala dan kualiti kerja anda—dari ruang tamu dramatik hingga dapur tersuai hingga ruang luar yang dilanskap.' },
        icon: 'Star'
      }
    ],
    features: [
      { en: 'Luxury keyword targeting', ms: 'Penyasaran kata kunci mewah' },
      { en: 'High-net-worth audience ads', ms: 'Iklan khalayak bernilai tinggi' },
      { en: 'Premium portfolio presentation', ms: 'Persembahan portfolio premium' },
      { en: 'Neighborhood-specific SEO', ms: 'SEO khusus kejiranan' },
      { en: 'Renovation content marketing', ms: 'Pemasaran kandungan renovasi' },
      { en: 'Architecture partnership content', ms: 'Kandungan perkongsian seni bina' }
    ],
    ctaText: { en: 'Attract Premium Clients', ms: 'Tarik Klien Premium' }
  },
  {
    slug: 'marketing-commercial-interior-designers',
    category: 'industry',
    title: {
      en: 'Marketing for Commercial Interior Designers | Office, Retail & F&B | Yokan Digital',
      ms: 'Pemasaran untuk Pereka Dalaman Komersial | Pejabat, Runcit & F&B | Yokan Digital'
    },
    metaDescription: {
      en: 'Digital marketing for commercial interior designers. Reach businesses looking for office, retail, restaurant, and cafe design services.',
      ms: 'Pemasaran digital untuk pereka dalaman komersial. Jangkau perniagaan yang mencari perkhidmatan reka bentuk pejabat, runcit, restoran, dan kafe.'
    },
    heroTitle: {
      en: 'Marketing for Commercial Interior Designers',
      ms: 'Pemasaran untuk Pereka Dalaman Komersial'
    },
    heroSubtitle: {
      en: 'Specialize in offices, retail spaces, restaurants, or cafes? We help you reach business owners who need professional commercial interior design.',
      ms: 'Mengkhusus dalam pejabat, ruang runcit, restoran, atau kafe? Kami membantu anda menjangkau pemilik perniagaan yang memerlukan reka bentuk dalaman komersial profesional.'
    },
    sections: [
      {
        title: { en: 'B2B Marketing for Designers', ms: 'Pemasaran B2B untuk Pereka' },
        content: { en: 'Commercial interior design requires a different marketing approach. Instead of reaching homeowners, you need to connect with business owners, facility managers, and corporate decision-makers. We create B2B marketing strategies that work.', ms: 'Reka bentuk dalaman komersial memerlukan pendekatan pemasaran yang berbeza. Daripada menjangkau pemilik rumah, anda perlu berhubung dengan pemilik perniagaan, pengurus kemudahan, dan pembuat keputusan korporat. Kami mencipta strategi pemasaran B2B yang berkesan.' },
        icon: 'Briefcase'
      },
      {
        title: { en: 'Industry-Specific Targeting', ms: 'Penyasaran Khusus Industri' },
        content: { en: 'Do you specialize in F&B, retail, or office design? We target your marketing to that specific industry. A restaurant owner and a corporate office manager have very different needs—your marketing should speak to each audience specifically.', ms: 'Adakah anda mengkhusus dalam reka bentuk F&B, runcit, atau pejabat? Kami menyasarkan pemasaran anda kepada industri khusus itu. Pemilik restoran dan pengurus pejabat korporat mempunyai keperluan yang sangat berbeza—pemasaran anda harus bercakap kepada setiap khalayak secara khusus.' },
        icon: 'Target'
      },
      {
        title: { en: 'Case Study Marketing', ms: 'Pemasaran Kajian Kes' },
        content: { en: 'Commercial clients want proof of results. We help you create compelling case studies that show how your designs improved customer experience, enhanced brand image, or boosted employee productivity.', ms: 'Klien komersial mahukan bukti hasil. Kami membantu anda mencipta kajian kes yang menarik yang menunjukkan bagaimana reka bentuk anda meningkatkan pengalaman pelanggan, meningkatkan imej jenama, atau meningkatkan produktiviti pekerja.' },
        icon: 'FileText'
      }
    ],
    features: [
      { en: 'B2B lead generation', ms: 'Penjanaan petunjuk B2B' },
      { en: 'Industry-specific campaigns', ms: 'Kempen khusus industri' },
      { en: 'Commercial portfolio showcase', ms: 'Pameran portfolio komersial' },
      { en: 'LinkedIn marketing', ms: 'Pemasaran LinkedIn' },
      { en: 'Case study development', ms: 'Pembangunan kajian kes' },
      { en: 'Corporate outreach strategies', ms: 'Strategi jangkauan korporat' }
    ],
    ctaText: { en: 'Attract Business Clients', ms: 'Tarik Klien Perniagaan' }
  }
];
