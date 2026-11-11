import React from "react";
import { useCard } from "../../context/CardContext";
import { Icon } from "@iconify/react";

export const InfoForm = () => {
  const { info, updateInfo } = useCard();

  return (
    <div className="editor-form-section">
      <h3 className="section-title">
        <Icon icon="lucide:user-check" /> Asosiy Ma'lumotlar
      </h3>
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="fullName">To'liq ismingiz</label>
          <div className="input-wrapper">
            <Icon icon="lucide:user" className="field-icon" />
            <input
              id="fullName"
              type="text"
              placeholder="Masalan: Sardor Rahimov"
              value={info.fullName}
              onChange={(e) => updateInfo("fullName", e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="jobTitle">Kasbingiz / Lavozim</label>
          <div className="input-wrapper">
            <Icon icon="lucide:briefcase" className="field-icon" />
            <input
              id="jobTitle"
              type="text"
              placeholder="Masalan: Grafika va Web Dizayner"
              value={info.jobTitle}
              onChange={(e) => updateInfo("jobTitle", e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="companyName">Kompaniya / Brend nomi</label>
          <div className="input-wrapper">
            <Icon icon="lucide:building-2" className="field-icon" />
            <input
              id="companyName"
              type="text"
              placeholder="Masalan: Nova Studio"
              value={info.companyName}
              onChange={(e) => updateInfo("companyName", e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="tagline">Shior yoki Qisqa Tavsif</label>
          <div className="input-wrapper">
            <Icon icon="lucide:quote" className="field-icon" />
            <input
              id="tagline"
              type="text"
              placeholder="Masalan: Biz bilan biznesingiz rivojlanadi"
              value={info.tagline}
              onChange={(e) => updateInfo("tagline", e.target.value)}
            />
          </div>
        </div>
      </div>

      <h3 className="section-title mt-4">
        <Icon icon="lucide:contact" /> Bog'lanish Ma'lumotlari
      </h3>
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="phone">Telefon raqam</label>
          <div className="input-wrapper">
            <Icon icon="lucide:phone" className="field-icon" />
            <input
              id="phone"
              type="text"
              placeholder="+998 90 123 45 67"
              value={info.phone}
              onChange={(e) => updateInfo("phone", e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Elektron pochta (Email)</label>
          <div className="input-wrapper">
            <Icon icon="lucide:mail" className="field-icon" />
            <input
              id="email"
              type="email"
              placeholder="example@gmail.com"
              value={info.email}
              onChange={(e) => updateInfo("email", e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="telegram">Telegram username</label>
          <div className="input-wrapper">
            <Icon icon="logos:telegram" className="field-icon" />
            <input
              id="telegram"
              type="text"
              placeholder="@username"
              value={info.telegram}
              onChange={(e) => updateInfo("telegram", e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="website">Veb-sayt</label>
          <div className="input-wrapper">
            <Icon icon="lucide:globe" className="field-icon" />
            <input
              id="website"
              type="text"
              placeholder="www.saytingiz.uz"
              value={info.website}
              onChange={(e) => updateInfo("website", e.target.value)}
            />
          </div>
        </div>

        <div className="form-group full-col">
          <label htmlFor="address">Manzil</label>
          <div className="input-wrapper">
            <Icon icon="lucide:map-pin" className="field-icon" />
            <input
              id="address"
              type="text"
              placeholder="Toshkent shahri, Chilonzor tumani..."
              value={info.address}
              onChange={(e) => updateInfo("address", e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
