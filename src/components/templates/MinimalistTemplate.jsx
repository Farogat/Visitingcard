import React from "react";
import { Icon } from "@iconify/react";
import { CardQRCode } from "../common/CardQRCode";

export const MinimalistTemplate = ({ info, style }) => {
  const isBack = style.cardSide === "back";
  const isVertical = style.orientation === "vertical";

  const containerStyle = {
    fontFamily: style.fontFamily,
    color: style.textColor,
    backgroundColor: style.bgColor || "#ffffff",
  };

  if (isBack) {
    return (
      <div className={`card-inner minimalist back ${isVertical ? "is-vertical" : ""}`} style={containerStyle}>
        <div className="mini-back-center">
          {style.logoImage && (
            <img src={style.logoImage} alt="Logo" className="card-logo-large" />
          )}
          <h2 style={{ letterSpacing: "3px", textTransform: "uppercase" }}>
            {info.companyName}
          </h2>
          <div className="divider-line" style={{ backgroundColor: style.accentColor }} />
          
          <CardQRCode info={info} style={style} size={isVertical ? 76 : 60} />

          <p style={{ opacity: 0.8, fontSize: "11px" }}>{info.website}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`card-inner minimalist front ${isVertical ? "is-vertical" : ""}`} style={containerStyle}>
      <div className="minimal-left">
        <div className="minimal-brand">
          <h4 className="minimal-company" style={{ color: style.accentColor }}>
            {info.companyName}
          </h4>
        </div>
        <div className="minimal-name-group">
          <h2 className="minimal-name">{info.fullName || "Ism Familiya"}</h2>
          <p className="minimal-title">{info.jobTitle}</p>
          <div className="accent-bar" style={{ backgroundColor: style.accentColor }} />
        </div>
      </div>

      <div className="minimal-right">
        {style.logoImage && (
          <img src={style.logoImage} alt="Logo" className="minimal-logo" />
        )}
        <div className="minimal-contacts">
          {info.phone && (
            <div className="mini-item">
              <span className="mini-label">T:</span>
              <span>{info.phone}</span>
            </div>
          )}
          {info.email && (
            <div className="mini-item">
              <span className="mini-label">E:</span>
              <span>{info.email}</span>
            </div>
          )}
          {info.telegram && (
            <div className="mini-item">
              <span className="mini-label">TG:</span>
              <span>{info.telegram}</span>
            </div>
          )}
          {info.website && (
            <div className="mini-item">
              <span className="mini-label">W:</span>
              <span>{info.website}</span>
            </div>
          )}
          {info.address && (
            <div className="mini-item">
              <span className="mini-label">A:</span>
              <span className="mini-address">{info.address}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
