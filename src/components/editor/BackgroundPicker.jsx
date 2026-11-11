import React from "react";
import { useCard } from "../../context/CardContext";
import { Icon } from "@iconify/react";

export const BackgroundPicker = () => {
  const { style, updateStyle } = useCard();

  // 29 ta mavjud fon rasmlari ro'yxati
  const backgroundList = Array.from({ length: 29 }, (_, i) => `/img/img${i + 1}.png`);

  const gradients = [
    { label: "Deep Blue", value: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0284c7 100%)" },
    { label: "Purple Nebula", value: "linear-gradient(135deg, #2e0854 0%, #4c1d95 50%, #db2777 100%)" },
    { label: "Emerald Luxury", value: "linear-gradient(135deg, #022c22 0%, #065f46 50%, #059669 100%)" },
    { label: "Sunset Glow", value: "linear-gradient(135deg, #451a03 0%, #b45309 50%, #f59e0b 100%)" },
    { label: "Midnight Carbon", value: "linear-gradient(135deg, #18181b 0%, #27272a 50%, #09090b 100%)" },
  ];

  const handleSelectImage = (path) => {
    updateStyle("bgImage", path);
    updateStyle("bgType", "image");
  };

  const handleSelectGradient = (gradValue) => {
    updateStyle("bgGradient", gradValue);
    updateStyle("bgType", "gradient");
  };

  return (
    <div className="editor-form-section">
      <h3 className="section-title">
        <Icon icon="lucide:image-plus" /> Fon Turi
      </h3>
      <div className="bg-type-selector">
        <button
          type="button"
          className={`type-btn ${style.bgType === "image" ? "active" : ""}`}
          onClick={() => updateStyle("bgType", "image")}
        >
          <Icon icon="lucide:image" /> Dizaynerlik Rasmlari
        </button>
        <button
          type="button"
          className={`type-btn ${style.bgType === "gradient" ? "active" : ""}`}
          onClick={() => updateStyle("bgType", "gradient")}
        >
          <Icon icon="lucide:sparkles" /> Gradient
        </button>
        <button
          type="button"
          className={`type-btn ${style.bgType === "color" ? "active" : ""}`}
          onClick={() => updateStyle("bgType", "color")}
        >
          <Icon icon="lucide:paint-bucket" /> Oddiy Rang
        </button>
      </div>

      {style.bgType === "image" && (
        <>
          <h4 className="sub-title mt-4">Tanlov uchun 29 ta professional fonlar:</h4>
          <div className="bg-grid-gallery">
            {backgroundList.map((bg, index) => (
              <div
                key={index}
                className={`bg-thumb-card ${style.bgImage === bg ? "selected" : ""}`}
                onClick={() => handleSelectImage(bg)}
              >
                <img src={bg} alt={`Fon ${index + 1}`} loading="lazy" />
                {style.bgImage === bg && (
                  <div className="check-badge">
                    <Icon icon="lucide:check" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {style.bgType === "gradient" && (
        <>
          <h4 className="sub-title mt-4">Tayyor Gradientlar:</h4>
          <div className="gradient-list">
            {gradients.map((g, idx) => (
              <div
                key={idx}
                className={`gradient-card ${style.bgGradient === g.value ? "selected" : ""}`}
                style={{ background: g.value }}
                onClick={() => handleSelectGradient(g.value)}
              >
                <span>{g.label}</span>
                {style.bgGradient === g.value && <Icon icon="lucide:check-circle-2" className="grad-check" />}
              </div>
            ))}
          </div>
        </>
      )}

      {style.bgType === "color" && (
        <div className="color-info-box mt-4">
          <p>
            Oddiy rangdan foydalanilmoqda. Fon rangini o'zgartirish uchun <strong>"Dizayn & Ranglar"</strong> bo'limiga o'ting.
          </p>
        </div>
      )}
    </div>
  );
};
