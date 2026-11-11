import React from "react";
import { Icon } from "@iconify/react";
import { CardQRCode } from "../common/CardQRCode";

export const CreativeTemplate = ({ info, style }) => {
  const isBack = style.cardSide === "back";
  const isVertical = style.orientation === "vertical";

  const containerStyle = {
    fontFamily: style.fontFamily,
    color: style.textColor,
    background: style.bgGradient || "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #db2777 100%)",
  };

  if (isBack) {
    return (
      <div className={`card-inner creative back ${isVertical ? "is-vertical" : ""}`} style={containerStyle}>
        <div className="creative-glow" />
        <div className="creative-back-content">
          {style.logoImage && (
            <img src={style.logoImage} alt="Logo" className="card-logo-large glass-card" />
          )}
          <h2 className="creative-title">{info.companyName}</h2>
          <p className="creative-tagline">{info.tagline}</p>

          <CardQRCode info={info} style={style} size={isVertical ? 76 : 64} />

          <span className="creative-link">{info.website}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`card-inner creative front ${isVertical ? "is-vertical" : ""}`} style={containerStyle}>
      <div className="creative-glow" />
      <div className="creative-left">
        <div className="creative-brand">
          {style.logoImage && (
            <img src={style.logoImage} alt="Logo" className="creative-logo" />
          )}
          <span className="creative-brand-name">{info.companyName}</span>
        </div>
        <div className="creative-hero">
          <h2 className="creative-name">{info.fullName || "Ism Familiya"}</h2>
          <span className="creative-role-pill">{info.jobTitle}</span>
        </div>
      </div>

      <div className="creative-right glass-panel">
        <div className="creative-contacts">
          {info.phone && (
            <div className="creative-item">
              <Icon icon="lucide:phone-call" className="icon" />
              <span>{info.phone}</span>
            </div>
          )}
          {info.email && (
            <div className="creative-item">
              <Icon icon="lucide:mail" className="icon" />
              <span>{info.email}</span>
            </div>
          )}
          {info.telegram && (
            <div className="creative-item">
              <Icon icon="logos:telegram" className="icon" />
              <span>{info.telegram}</span>
            </div>
          )}
          {info.website && (
            <div className="creative-item">
              <Icon icon="lucide:globe" className="icon" />
              <span>{info.website}</span>
            </div>
          )}
          {info.address && (
            <div className="creative-item">
              <Icon icon="lucide:map-pin" className="icon" />
              <span className="small-text">{info.address}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
