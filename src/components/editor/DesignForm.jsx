import React, { useRef } from "react";
import { useCard } from "../../context/CardContext";
import { Icon } from "@iconify/react";

export const DesignForm = () => {
  const { style, updateStyle, info } = useCard();
  const fileInputRef = useRef(null);

  const handleLogoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("Logotip hajmi 2MB dan oshmasligi kerak!");
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        updateStyle("logoImage", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveLogo = () => {
    updateStyle("logoImage", "");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="editor-form-section">
      {/* 1. Ranglar va Bezaklar */}
      <h3 className="section-title">
        <Icon icon="lucide:palette" /> Ranglar va Bezaklar
      </h3>

      <div className="colors-row">
        <div className="color-field">
          <label htmlFor="textColor">Matn rangi</label>
          <div className="color-picker-box">
            <input
              id="textColor"
              type="color"
              value={style.textColor}
              onChange={(e) => updateStyle("textColor", e.target.value)}
            />
            <span>{style.textColor}</span>
          </div>
        </div>

        <div className="color-field">
          <label htmlFor="accentColor">Urg'u (Accent) rangi</label>
          <div className="color-picker-box">
            <input
              id="accentColor"
              type="color"
              value={style.accentColor}
              onChange={(e) => updateStyle("accentColor", e.target.value)}
            />
            <span>{style.accentColor}</span>
          </div>
        </div>

        <div className="color-field">
          <label htmlFor="bgColor">Asosiy fon rangi</label>
          <div className="color-picker-box">
            <input
              id="bgColor"
              type="color"
              value={style.bgColor}
              onChange={(e) => {
                updateStyle("bgColor", e.target.value);
                updateStyle("bgType", "color");
              }}
            />
            <span>{style.bgColor}</span>
          </div>
        </div>
      </div>

      {/* 2. QR-Kod Sozlamalari (Yangi qo'shildi) */}
      <h3 className="section-title mt-4">
        <Icon icon="lucide:qr-code" /> Avtomatik QR-Kod
      </h3>
      <div className="qr-settings-card">
        <div className="qr-toggle-row">
          <div className="toggle-label">
            <h4>Vizitkada QR-kodni ko'rsatish</h4>
            <p>Skaner qilinganda mijoz to'g'ridan-to'g'ri profilingizga o'tadi</p>
          </div>
          <label className="switch">
            <input
              type="checkbox"
              checked={style.showQr !== false}
              onChange={(e) => updateStyle("showQr", e.target.checked)}
            />
            <span className="slider round"></span>
          </label>
        </div>

        {style.showQr !== false && (
          <div className="qr-options-panel">
            <label className="sub-label">QR-kod qayerga yo'naltirsin?</label>
            <div className="qr-target-tabs">
              {[
                { id: "website", label: "Veb-sayt", icon: "lucide:globe" },
                { id: "telegram", label: "Telegram", icon: "logos:telegram" },
                { id: "phone", label: "Telefon raqam", icon: "lucide:phone" },
                { id: "custom", label: "Maxsus havola", icon: "lucide:link" },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`qr-target-btn ${style.qrTarget === item.id ? "active" : ""}`}
                  onClick={() => updateStyle("qrTarget", item.id)}
                >
                  <Icon icon={item.icon} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {style.qrTarget === "custom" && (
              <div className="custom-qr-input mt-2">
                <input
                  type="url"
                  placeholder="https://t.me/mening_kanalim yoki boshqa havola"
                  value={style.qrCustomUrl || ""}
                  onChange={(e) => updateStyle("qrCustomUrl", e.target.value)}
                />
              </div>
            )}

            <div className="qr-destination-preview">
              <Icon icon="lucide:arrow-up-right" />
              <span>
                Hozirgi manzil:{" "}
                <strong>
                  {style.qrTarget === "telegram"
                    ? `https://t.me/${(info.telegram || "").replace("@", "") || "telegram"}`
                    : style.qrTarget === "phone"
                    ? `tel:${info.phone || "+998901234567"}`
                    : style.qrTarget === "custom"
                    ? style.qrCustomUrl || "Havola kiritilmagan"
                    : info.website || "www.saytingiz.uz"}
                </strong>
              </span>
            </div>
          </div>
        )}
      </div>

      {/* 3. Shrift Uslubi */}
      <h3 className="section-title mt-4">
        <Icon icon="lucide:type" /> Shrift Uslubi
      </h3>
      <div className="font-options">
        {[
          { label: "Zamonaviy (Plus Jakarta Sans)", value: "'Plus Jakarta Sans', sans-serif" },
          { label: "Klassik & Elegant (Playfair)", value: "'Playfair Display', serif" },
          { label: "Texnologik (Space Grotesk)", value: "'Space Grotesk', sans-serif" },
        ].map((font, idx) => (
          <button
            key={idx}
            type="button"
            className={`font-pill ${style.fontFamily === font.value ? "active" : ""}`}
            style={{ fontFamily: font.value }}
            onClick={() => updateStyle("fontFamily", font.value)}
          >
            {font.label}
          </button>
        ))}
      </div>

      {/* 4. Logotipni Sozlash */}
      <h3 className="section-title mt-4">
        <Icon icon="lucide:image" /> Logotipni Sozlash
      </h3>
      <div className="logo-upload-card">
        {style.logoImage ? (
          <div className="logo-preview-box">
            <img src={style.logoImage} alt="Yuklangan logotip" />
            <div className="logo-actions">
              <button
                type="button"
                className="btn-sm btn-danger"
                onClick={handleRemoveLogo}
              >
                <Icon icon="lucide:trash" /> O'chirish
              </button>
              <button
                type="button"
                className="btn-sm btn-secondary"
                onClick={() => fileInputRef.current?.click()}
              >
                <Icon icon="lucide:refresh-cw" /> Almashtirish
              </button>
            </div>
          </div>
        ) : (
          <div
            className="logo-dropzone"
            onClick={() => fileInputRef.current?.click()}
          >
            <Icon icon="lucide:upload-cloud" className="upload-icon" />
            <p>Logotip yuklash uchun shu yerni bosing</p>
            <span>PNG, JPG yoki SVG (maksimal 2MB)</span>
          </div>
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={handleLogoUpload}
        />
      </div>
    </div>
  );
};
