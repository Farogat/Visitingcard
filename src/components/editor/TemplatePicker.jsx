import React from "react";
import { useCard } from "../../context/CardContext";
import { Icon } from "@iconify/react";

export const TemplatePicker = () => {
  const { style, updateStyle } = useCard();

  const templates = [
    {
      id: "modern",
      title: "Modern Pro",
      desc: "Fon rasmlari bilan boyitilgan, zamonaviy va IT/Media sohasi uchun a'lo tanlov.",
      icon: "lucide:sparkles",
      color: "#38bdf8",
    },
    {
      id: "minimal",
      title: "Minimalist Oq/Qora",
      desc: "Toza, nafis va ortiqcha bezaklarsiz shaxsiy brend vizitkasi.",
      icon: "lucide:square",
      color: "#ffffff",
    },
    {
      id: "corporate",
      title: "Corporate Executive",
      desc: "Katta tashkilotlar, banklar va korporativ rahbarlar uchun rasmiy uslub.",
      icon: "lucide:briefcase",
      color: "#60a5fa",
    },
    {
      id: "creative",
      title: "Creative Glass",
      desc: "Yorqin ranglar, shaffof shisha effekti (glassmorphism) va ijodiy ruh.",
      icon: "lucide:palette",
      color: "#ec4899",
    },
    {
      id: "darkgold",
      title: "Dark & Gold Premium",
      desc: "Hashamatli qora fon va oltin hoshiyalar — VIP xizmatlar va brendlar uchun.",
      icon: "lucide:crown",
      color: "#d4af37",
    },
  ];

  return (
    <div className="editor-form-section">
      <h3 className="section-title">
        <Icon icon="lucide:layout" /> Vizitka Shablonlari
      </h3>
      <p className="section-desc">
        Biznesingiz yoki faoliyatingizga mos shablonni tanlang. Kiritilgan ma'lumotlaringiz avtomatik yangi dizaynga moslashadi.
      </p>

      <div className="template-list">
        {templates.map((tpl) => {
          const isSelected = style.template === tpl.id;
          return (
            <div
              key={tpl.id}
              className={`template-select-card ${isSelected ? "selected" : ""}`}
              onClick={() => updateStyle("template", tpl.id)}
            >
              <div className="tpl-icon-box" style={{ color: tpl.color }}>
                <Icon icon={tpl.icon} width={28} />
              </div>
              <div className="tpl-details">
                <div className="tpl-header">
                  <h4>{tpl.title}</h4>
                  {isSelected && (
                    <span className="selected-badge">
                      <Icon icon="lucide:check" /> Tanlangan
                    </span>
                  )}
                </div>
                <p>{tpl.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
