import React from "react";
import { Icon } from "@iconify/react";
import { CardQRCode } from "../common/CardQRCode";

export const CorporateTemplate = ({ info, style }) => {
  const isBack = style.cardSide === "back";
  const isVertical = style.orientation === "vertical";

  const containerStyle = {
    fontFamily: style.fontFamily,
    color: style.textColor,
    backgroundColor: style.bgColor || "#0f172a",
  };

  if (isBack) {
    return (
      <div className={`card-inner corporate back ${isVertical ? "is-vertical" : ""}`} style={containerStyle}>
        <div className="corp-accent-stripe" style={{ backgroundColor: style.accentColor }} />
        <div className="corp-back-content">
          {style.logoImage && (
            <img src={style.logoImage} alt="Logo" className="card-logo-large" />
          )}
          <h2 className="corp-company-name">{info.companyName}</h2>
          <p className="corp-company-tagline">{info.tagline}</p>

          <CardQRCode info={info} style={style} size={isVertical ? 76 : 64} />

          <div className="corp-badge" style={{ borderColor: style.accentColor, color: style.accentColor }}>
            {info.website}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`card-inner corporate front ${isVertical ? "is-vertical" : ""}`} style={containerStyle}>
      <div className="corp-accent-stripe" style={{ backgroundColor: style.accentColor }} />
      <div className="corp-main">
        <div className="corp-top">
          <div className="corp-identity">
            <h2 className="corp-name">{info.fullName || "Ism Familiya"}</h2>
            <div className="corp-title-wrapper">
              <span className="corp-title">{info.jobTitle}</span>
              <span className="corp-dot" style={{ backgroundColor: style.accentColor }} />
              <span className="corp-company">{info.companyName}</span>
            </div>
          </div>
          {style.logoImage && (
            <img src={style.logoImage} alt="Logo" className="corp-logo" />
          )}
        </div>

        <div className="corp-divider" />

        <div className="corp-bottom">
          <div className="corp-grid">
            {info.phone && (
              <div className="corp-contact">
                <span className="corp-icon-box" style={{ color: style.accentColor }}>
                  <Icon icon="lucide:phone" />
                </span>
                <span>{info.phone}</span>
              </div>
            )}
            {info.email && (
              <div className="corp-contact">
                <span className="corp-icon-box" style={{ color: style.accentColor }}>
                  <Icon icon="lucide:mail" />
                </span>
                <span>{info.email}</span>
              </div>
            )}
            {info.website && (
              <div className="corp-contact">
                <span className="corp-icon-box" style={{ color: style.accentColor }}>
                  <Icon icon="lucide:globe" />
                </span>
                <span>{info.website}</span>
              </div>
            )}
            {info.telegram && (
              <div className="corp-contact">
                <span className="corp-icon-box" style={{ color: style.accentColor }}>
                  <Icon icon="lucide:send" />
                </span>
                <span>{info.telegram}</span>
              </div>
            )}
            {info.address && (
              <div className="corp-contact corp-full">
                <span className="corp-icon-box" style={{ color: style.accentColor }}>
                  <Icon icon="lucide:map-pin" />
                </span>
                <span>{info.address}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
