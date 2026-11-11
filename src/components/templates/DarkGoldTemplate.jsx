import React from "react";
import { Icon } from "@iconify/react";
import { CardQRCode } from "../common/CardQRCode";

export const DarkGoldTemplate = ({ info, style }) => {
  const isBack = style.cardSide === "back";
  const isVertical = style.orientation === "vertical";

  const goldAccent = "#d4af37";
  const containerStyle = {
    fontFamily: style.fontFamily,
    color: "#f8fafc",
    backgroundColor: "#09090b",
    backgroundImage: "radial-gradient(circle at 50% 0%, #27272a 0%, #09090b 70%)",
  };

  if (isBack) {
    return (
      <div className={`card-inner dark-gold back ${isVertical ? "is-vertical" : ""}`} style={containerStyle}>
        <div className="gold-border-frame">
          <div className="gold-corner top-left" />
          <div className="gold-corner top-right" />
          <div className="gold-corner bottom-left" />
          <div className="gold-corner bottom-right" />
          
          <div className="gold-back-body">
            {style.logoImage && (
              <img src={style.logoImage} alt="Logo" className="card-logo-large gold-glow" />
            )}
            <h2 className="gold-text-gradient">{info.companyName}</h2>
            <div className="gold-line" />

            <CardQRCode info={info} style={style} size={isVertical ? 74 : 60} />

            <p className="gold-tagline">{info.tagline}</p>
            <span className="gold-sub">{info.website}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`card-inner dark-gold front ${isVertical ? "is-vertical" : ""}`} style={containerStyle}>
      <div className="gold-border-frame">
        <div className="gold-corner top-left" />
        <div className="gold-corner top-right" />
        <div className="gold-corner bottom-left" />
        <div className="gold-corner bottom-right" />

        <div className="gold-header">
          <div>
            <h4 className="gold-text-gradient company-title">{info.companyName}</h4>
            <span className="gold-tagline-sm">{info.tagline}</span>
          </div>
          {style.logoImage && (
            <img src={style.logoImage} alt="Logo" className="gold-logo" />
          )}
        </div>

        <div className="gold-center">
          <h2 className="gold-person-name">{info.fullName || "Ism Familiya"}</h2>
          <p className="gold-job-title" style={{ color: goldAccent }}>{info.jobTitle}</p>
          <div className="gold-line-center" />
        </div>

        <div className="gold-footer">
          <div className="gold-contacts">
            {info.phone && (
              <div className="gold-item">
                <Icon icon="lucide:phone" className="gold-icon" />
                <span>{info.phone}</span>
              </div>
            )}
            {info.email && (
              <div className="gold-item">
                <Icon icon="lucide:mail" className="gold-icon" />
                <span>{info.email}</span>
              </div>
            )}
            {info.website && (
              <div className="gold-item">
                <Icon icon="lucide:globe" className="gold-icon" />
                <span>{info.website}</span>
              </div>
            )}
            {info.address && (
              <div className="gold-item gold-full">
                <Icon icon="lucide:map-pin" className="gold-icon" />
                <span>{info.address}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
