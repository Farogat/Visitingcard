import React from "react";
import { Icon } from "@iconify/react";
import { CardQRCode } from "../common/CardQRCode";

export const ModernProTemplate = ({ info, style }) => {
  const isBack = style.cardSide === "back";
  const isVertical = style.orientation === "vertical";

  const containerStyle = {
    fontFamily: style.fontFamily,
    color: style.textColor,
    backgroundColor: style.bgColor,
    backgroundImage: style.bgType === "image" && style.bgImage ? `url('${style.bgImage}')` : style.bgType === "gradient" ? style.bgGradient : "none",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  if (isBack) {
    return (
      <div className={`card-inner modern-pro back ${isVertical ? "is-vertical" : ""}`} style={containerStyle}>
        <div className="card-overlay" />
        <div className="content back-content">
          {style.logoImage && (
            <img src={style.logoImage} alt="Logo" className="card-logo-large" />
          )}
          <h2 className="company-title" style={{ color: style.accentColor }}>
            {info.companyName || "TechNova Solutions"}
          </h2>
          <p className="company-tagline">{info.tagline}</p>

          <CardQRCode info={info} style={style} size={isVertical ? 76 : 64} />

          <div className="back-website">
            <Icon icon="lucide:globe" className="meta-icon" />
            <span>{info.website}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`card-inner modern-pro front ${isVertical ? "is-vertical" : ""}`} style={containerStyle}>
      <div className="card-overlay" />
      <div className="content front-content">
        <div className="card-header">
          {style.logoImage && (
            <img src={style.logoImage} alt="Logo" className="card-logo" />
          )}
          <div className="header-meta">
            <h4 className="card-company" style={{ color: style.accentColor }}>
              {info.companyName}
            </h4>
            <span className="card-tagline">{info.tagline}</span>
          </div>
        </div>

        <div className="card-body">
          <h2 className="person-name">{info.fullName || "Ism Familiya"}</h2>
          <p className="person-title" style={{ color: style.accentColor }}>
            {info.jobTitle || "Lavozim"}
          </p>
        </div>

        <div className="card-footer">
          <div className="contact-grid">
            {info.phone && (
              <div className="contact-item">
                <Icon icon="lucide:phone" className="icon" style={{ color: style.accentColor }} />
                <span>{info.phone}</span>
              </div>
            )}
            {info.email && (
              <div className="contact-item">
                <Icon icon="lucide:mail" className="icon" style={{ color: style.accentColor }} />
                <span>{info.email}</span>
              </div>
            )}
            {info.telegram && (
              <div className="contact-item">
                <Icon icon="logos:telegram" className="icon" />
                <span>{info.telegram}</span>
              </div>
            )}
            {info.address && (
              <div className="contact-item full-width">
                <Icon icon="lucide:map-pin" className="icon" style={{ color: style.accentColor }} />
                <span>{info.address}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
