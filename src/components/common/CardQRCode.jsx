import React from "react";
import { QRCodeCanvas } from "qrcode.react";

export const getQrValue = (info, style) => {
  const target = style.qrTarget || "website";

  if (target === "telegram") {
    const tg = (info.telegram || "").trim().replace("@", "");
    return tg ? `https://t.me/${tg}` : "https://t.me";
  }

  if (target === "phone") {
    return info.phone ? `tel:${info.phone}` : "tel:+998901234567";
  }

  if (target === "custom") {
    return style.qrCustomUrl || "https://visitcard.uz";
  }

  // Standart vebsayt
  const site = (info.website || "").trim();
  if (!site) return "https://visitcard.uz";
  return site.startsWith("http") ? site : `https://${site}`;
};

export const CardQRCode = ({ info, style, size = 68, className = "" }) => {
  if (style.showQr === false) return null;

  const value = getQrValue(info, style);

  return (
    <div className={`card-qr-box ${className}`} title={`QR-kod: ${value}`}>
      <QRCodeCanvas
        value={value}
        size={size}
        level="M"
        bgColor="#ffffff"
        fgColor="#000000"
        marginSize={1}
      />
      <span className="qr-scan-label">SCAN ME</span>
    </div>
  );
};

export default CardQRCode;
