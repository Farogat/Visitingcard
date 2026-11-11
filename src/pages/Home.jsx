import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import { CardTemplateRenderer } from "../components/templates/CardTemplateRenderer";

export const Home = () => {
  const sampleCard = {
    info: {
      fullName: "Jasur Mirzayev",
      jobTitle: "Raqamli Marketing Mutaxassisi",
      companyName: "Apex Growth Agency",
      tagline: "Biznesingizni yangi bosqichga olib chiqamiz",
      phone: "+998 97 765 43 21",
      email: "jasur@apex.uz",
      website: "apex.uz",
      address: "Toshkent sh., Yunusobod 4-mavze",
      telegram: "@jasur_marketing",
    },
    style: {
      template: "modern",
      bgType: "image",
      bgImage: "/img/img6.png",
      bgColor: "#0f172a",
      textColor: "#ffffff",
      accentColor: "#38bdf8",
      logoImage: "/img/cube.png",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      cardSide: "front",
    },
  };

  const features = [
    {
      icon: "lucide:zap",
      title: "Tez va Oson",
      desc: "Dizayn bilimlari shart emas. Bir necha daqiqada tayyor va professional vizitkaga ega bo'ling.",
    },
    {
      icon: "lucide:image",
      title: "29+ Eksklyuziv Fonlar",
      desc: "Har qanday soha va kasbga mos zamonaviy 3D va abstrakt fon rasmlari to'plami.",
    },
    {
      icon: "lucide:download",
      title: "Yuqori Sifat (HD 300 DPI)",
      desc: "Vizitkangizni bosmaxonada chop etishga yoki messenjerlarda yuborishga tayyor formatda yuklab oling.",
    },
    {
      icon: "lucide:smartphone",
      title: "Mobil Moslashuvchan",
      desc: "Telefoningizdan turib ham hech qanday qiyinchiliksiz vizitka yasang va yuklab oling.",
    },
  ];

  return (
    <div className="home-page">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-text-content">
            <div className="hero-badge">
              <Icon icon="lucide:sparkles" />
              <span>O'zbekistondagi №1 Vizitka Konstruktori</span>
            </div>
            <h1 className="hero-main-title">
              O'z Vizitkangizni <span>Bir Necha Daqiqada</span> Yarating
            </h1>
            <p className="hero-description">
              Dizayner yollashingiz shart emas! Shaxsiy ma'lumotlaringizni kiriting, zamonaviy shablon va fonlardan tanlang hamda darhol yuqori sifatli rasm sifatida yuklab oling.
            </p>
            <div className="hero-cta-buttons">
              <Link to="/builder" className="btn-primary-hero">
                <Icon icon="lucide:arrow-right-circle" /> Konstruktorni Ochish
              </Link>
              <Link to="/gallery" className="btn-secondary-hero">
                <Icon icon="lucide:layout-grid" /> Shablonlarni Ko'rish
              </Link>
            </div>
          </div>

          <div className="hero-preview-wrapper">
            <div className="demo-card-frame">
              <CardTemplateRenderer customInfo={sampleCard.info} customStyle={sampleCard.style} />
            </div>
            <div className="floating-badge badge-1">
              <Icon icon="lucide:check-circle-2" className="badge-icon" />
              <span>Chop etishga tayyor</span>
            </div>
            <div className="floating-badge badge-2">
              <Icon icon="lucide:sparkles" className="badge-icon" />
              <span>29 ta premium fon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow">Afzalliklarimiz</span>
            <h2 className="section-title">Nega VisitCard.uz ni tanlashadi?</h2>
            <p className="section-subtitle">
              Sizga eng yaxshi foydalanish tajribasi va eng yuqori sifatli vizitkalarni taqdim etish uchun ishlab chiqilgan.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feat, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon-wrapper">
                  <Icon icon={feat.icon} width={30} />
                </div>
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Preview Showcase */}
      <section className="showcase-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow">Dizaynlar</span>
            <h2 className="section-title">Har Qanday Didga Mos Shablonlar</h2>
            <p className="section-subtitle">
              Biznesmenlar, dasturchilar, shifokorlar, o'qituvchilar va ijodkorlar uchun maxsus tayyorlangan uslublar.
            </p>
          </div>

          <div className="showcase-grid">
            {[
              { title: "Modern Pro", desc: "Zamonaviy IT va marketing uchun", bg: "/img/img5.png" },
              { title: "Corporate Executive", desc: "Katta tashkilotlar va banklar uchun", bg: "/img/img10.png" },
              { title: "Dark & Gold Premium", desc: "Hashamatli VIP xizmatlar uchun", bg: "/img/img15.png" },
            ].map((item, idx) => (
              <div key={idx} className="showcase-card">
                <div className="showcase-img" style={{ backgroundImage: `url('${item.bg}')` }} />
                <div className="showcase-info">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                  <Link to="/builder" className="showcase-link">
                    Ushbu shablonda yaratish <Icon icon="lucide:arrow-right" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/gallery" className="btn-view-all">
              Barcha Shablonlarni Ko'rish <Icon icon="lucide:arrow-right" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="cta-banner-section">
        <div className="container">
          <div className="cta-banner-inner">
            <h2>O'z Vizitkangizni Hoziroq Yarating!</h2>
            <p>Ro'yxatdan o'tish shart emas. Mutlaqo bepul va oson.</p>
            <Link to="/builder" className="btn-banner-cta">
              <Icon icon="lucide:sparkles" /> Hoziroq Boshlash
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
