import React from "react";
import { useNavigate } from "react-router-dom";
import { useCard } from "../context/CardContext";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import { CardTemplateRenderer } from "../components/templates/CardTemplateRenderer";
import { Icon } from "@iconify/react";

export const Gallery = () => {
  const { updateStyle } = useCard();
  const navigate = useNavigate();

  const sampleInfo = {
    fullName: "Nodir Mahmudov",
    jobTitle: "Loyiha Menejeri & Biznes Konsultant",
    companyName: "Global Vision Consulting",
    tagline: "Biznesingiz samaradorligini oshiramiz",
    phone: "+998 90 987 65 43",
    email: "nodir@globalvision.uz",
    website: "globalvision.uz",
    address: "Toshkent shahri, Mustaqillik shox ko'chasi, 24",
    telegram: "@nodir_consult",
  };

  const galleryTemplates = [
    {
      id: "modern",
      title: "Modern Pro",
      desc: "Zamonaviy IT, marketing va startaplar uchun dinamik fonli shablon.",
      style: {
        template: "modern",
        bgType: "image",
        bgImage: "/img/img3.png",
        bgColor: "#0f172a",
        textColor: "#ffffff",
        accentColor: "#38bdf8",
        logoImage: "/img/cube.png",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        cardSide: "front",
      },
    },
    {
      id: "minimal",
      title: "Minimalist Oq/Qora",
      desc: "Toza dizayn, nozik shriftlar va ortiqcha bezaklarsiz shaxsiy brending.",
      style: {
        template: "minimal",
        bgColor: "#ffffff",
        textColor: "#0f172a",
        accentColor: "#0284c7",
        logoImage: "/img/cube_black.png",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        cardSide: "front",
      },
    },
    {
      id: "corporate",
      title: "Corporate Executive",
      desc: "Bankir, yurist, rahbar va rasmiy tashkilotlar vakillari uchun mukammal uslub.",
      style: {
        template: "corporate",
        bgColor: "#091428",
        textColor: "#f8fafc",
        accentColor: "#3b82f6",
        logoImage: "/img/cube.png",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        cardSide: "front",
      },
    },
    {
      id: "creative",
      title: "Creative Glass",
      desc: "Dizaynerlar, rassomlar va fotograflar uchun zamonaviy shaffof gradient effektlar.",
      style: {
        template: "creative",
        bgGradient: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #db2777 100%)",
        textColor: "#ffffff",
        accentColor: "#f472b6",
        logoImage: "/img/cube.png",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        cardSide: "front",
      },
    },
    {
      id: "darkgold",
      title: "Dark & Gold VIP",
      desc: "Hashamatli qora fon va oltin hoshiyalar — yuqori toifadagi xizmatlar uchun.",
      style: {
        template: "darkgold",
        bgColor: "#09090b",
        textColor: "#ffffff",
        accentColor: "#d4af37",
        logoImage: "/img/cube.png",
        fontFamily: "'Playfair Display', serif",
        cardSide: "front",
      },
    },
  ];

  const handleSelectTemplate = (tpl) => {
    updateStyle("template", tpl.id);
    if (tpl.style.bgImage) updateStyle("bgImage", tpl.style.bgImage);
    if (tpl.style.bgColor) updateStyle("bgColor", tpl.style.bgColor);
    if (tpl.style.textColor) updateStyle("textColor", tpl.style.textColor);
    if (tpl.style.accentColor) updateStyle("accentColor", tpl.style.accentColor);
    if (tpl.style.fontFamily) updateStyle("fontFamily", tpl.style.fontFamily);
    navigate("/builder");
  };

  return (
    <div className="gallery-page">
      <Navbar />

      <div className="container gallery-hero">
        <h1 className="gallery-title">Tayyor Vizitka Shablonlari</h1>
        <p className="gallery-subtitle">
          O'zingizga yoqqan dizaynni tanlang va bitta tugma bilan uni o'zingizning ma'lumotlaringiz bilan to'ldirishni boshlang.
        </p>
      </div>

      <div className="container gallery-grid">
        {galleryTemplates.map((item) => (
          <div key={item.id} className="gallery-card-item">
            <div className="card-mockup-wrapper">
              <CardTemplateRenderer customInfo={sampleInfo} customStyle={item.style} />
            </div>
            <div className="gallery-item-footer">
              <div className="item-text">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
              <button
                type="button"
                className="btn-select-template"
                onClick={() => handleSelectTemplate(item)}
              >
                <Icon icon="lucide:pencil" /> Ushbu Dizaynda Yaratish
              </button>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
