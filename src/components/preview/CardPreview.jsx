import React, { useRef, useState } from "react";
import { useCard } from "../../context/CardContext";
import { CardTemplateRenderer } from "../templates/CardTemplateRenderer";
import { Icon } from "@iconify/react";
import {
  downloadSingleSide,
  downloadBothSides,
  downloadSideBySide,
  printCard,
} from "../../utils/exporter";

export const CardPreview = () => {
  const { style, lastSaved, toggleSide, toggleOrientation, resetToSample, clearAll } = useCard();
  const [isExporting, setIsExporting] = useState(false);
  const [exportMessage, setExportMessage] = useState("");

  const isVertical = style.orientation === "vertical";

  // Foydalanuvchi ko'rib turgan faol karta
  const activeCardRef = useRef(null);

  // Orqa fonda tayyor turadigan maxsus sifatli DOM nusxalari (Oldi va Orqasi)
  const frontStagingRef = useRef(null);
  const backStagingRef = useRef(null);

  const handleDownloadActive = async () => {
    setIsExporting(true);
    setExportMessage("Rasm yuklanmoqda...");
    try {
      const filename = `vizitka-${style.cardSide}-${style.orientation}.png`;
      await downloadSingleSide(
        style.cardSide === "front" ? frontStagingRef.current : backStagingRef.current,
        filename
      );
    } finally {
      setIsExporting(false);
      setExportMessage("");
    }
  };

  const handleDownloadBothSeparate = async () => {
    setIsExporting(true);
    setExportMessage("Ikkala tomon alohida fayl qilib tayyorlanmoqda...");
    try {
      await downloadBothSides(frontStagingRef.current, backStagingRef.current, `vizitka-${style.orientation}`);
    } finally {
      setIsExporting(false);
      setExportMessage("");
    }
  };

  const handleDownloadCombined = async () => {
    setIsExporting(true);
    setExportMessage("Taqdimot rasmi (yonma-yon) yig'ilmoqda...");
    try {
      await downloadSideBySide(frontStagingRef.current, backStagingRef.current, `vizitka-taqdimot-${style.orientation}.png`);
    } finally {
      setIsExporting(false);
      setExportMessage("");
    }
  };

  const handlePrint = () => {
    printCard(style.cardSide === "front" ? frontStagingRef.current : backStagingRef.current);
  };

  return (
    <div className="preview-container">
      {/* Yuqori boshqaruv paneli */}
      <div className="preview-top-toolbar">
        {/* Oldi / Orqasi almashtirish */}
        <div className="side-toggle-group">
          <button
            type="button"
            className={`btn-side ${style.cardSide === "front" ? "active" : ""}`}
            onClick={() => style.cardSide !== "front" && toggleSide()}
          >
            <Icon icon="lucide:layout-template" /> Old tomoni
          </button>
          <button
            type="button"
            className={`btn-side ${style.cardSide === "back" ? "active" : ""}`}
            onClick={() => style.cardSide !== "back" && toggleSide()}
          >
            <Icon icon="lucide:flip-horizontal" /> Orqa tomoni
          </button>
        </div>

        {/* Vertikal / Gorizontal yo'nalish almashtirish */}
        <div className="orientation-toggle-group">
          <button
            type="button"
            className={`btn-orient ${!isVertical ? "active" : ""}`}
            onClick={() => isVertical && toggleOrientation()}
            title="Gorizontal format (90x50 mm)"
          >
            <Icon icon="lucide:rectangle-horizontal" /> Gorizontal
          </button>
          <button
            type="button"
            className={`btn-orient ${isVertical ? "active" : ""}`}
            onClick={() => !isVertical && toggleOrientation()}
            title="Vertikal format (50x90 mm)"
          >
            <Icon icon="lucide:rectangle-vertical" /> Vertikal
          </button>
        </div>

        {/* Tezkor amallar */}
        <div className="quick-actions">
          <button
            type="button"
            className="btn-quick"
            title="Namuna ma'lumotlar bilan to'ldirish"
            onClick={resetToSample}
          >
            <Icon icon="lucide:sparkles" /> Namuna
          </button>
          <button
            type="button"
            className="btn-quick text-danger"
            title="Barchasini tozalash"
            onClick={clearAll}
          >
            <Icon icon="lucide:trash-2" /> Tozalash
          </button>
        </div>
      </div>

      {/* Auto-save ko'rsatkichi */}
      <div className="autosave-bar">
        <span className="autosave-status">
          <Icon icon="lucide:check-circle" className="save-icon" />
          Xotirada avtomatik saqlanmoqda {lastSaved && `(${lastSaved})`}
        </span>
        <span className="format-tag">
          {isVertical ? "Vertikal (50×90 mm)" : "Gorizontal (90×50 mm)"}
        </span>
      </div>

      {/* Jonli karta maydoni */}
      <div className="card-stage">
        <div className={`card-wrapper ${isVertical ? "is-vertical" : ""}`} ref={activeCardRef}>
          <CardTemplateRenderer />
        </div>
      </div>

      {/* Yuklanayotgan vaqtdagi xabarnoma */}
      {isExporting && (
        <div className="export-loading-indicator">
          <Icon icon="lucide:loader-2" className="spin-icon" />
          <span>{exportMessage}</span>
        </div>
      )}

      {/* Yuklab Olish Variantlari Menyusi */}
      <div className="download-options-card">
        <h4 className="download-title">
          <Icon icon="lucide:download-cloud" /> Yuklab Olish Variantlari:
        </h4>

        <div className="download-grid">
          {/* Variant 1: Ikkala tomon alohida (Bosmaxona uchun eng ma'quli) */}
          <button
            type="button"
            className="download-card-btn primary-feat"
            disabled={isExporting}
            onClick={handleDownloadBothSeparate}
          >
            <div className="btn-icon-circle">
              <Icon icon="lucide:layers" width={22} />
            </div>
            <div className="btn-text">
              <span className="btn-heading">
                Ikkala tomonni yuklash <small className="badge-rec">Tavsiya etiladi</small>
              </span>
              <span className="btn-subtext">2 ta alohida fayl (Oldi va Orqasi) — Bosmaxona uchun</span>
            </div>
          </button>

          {/* Variant 2: Yonma-yon (Taqdimot / Messenjerlar uchun) */}
          <button
            type="button"
            className="download-card-btn secondary-feat"
            disabled={isExporting}
            onClick={handleDownloadCombined}
          >
            <div className="btn-icon-circle">
              <Icon icon="lucide:presentation" width={22} />
            </div>
            <div className="btn-text">
              <span className="btn-heading">Taqdimot formati (Yonma-yon)</span>
              <span className="btn-subtext">Ikkala tomon bitta chiroyli rasmda — Telegram va ijtimoiy tarmoqlar uchun</span>
            </div>
          </button>

          {/* Variant 3 & 4: Faqat Hozirgi Tomon va Chop Etish */}
          <div className="quick-download-row">
            <button
              type="button"
              className="btn-quick-download"
              disabled={isExporting}
              onClick={handleDownloadActive}
            >
              <Icon icon="lucide:download" /> Faqat {style.cardSide === "front" ? "Old" : "Orqa"} tomoni (PNG)
            </button>
            <button
              type="button"
              className="btn-quick-download"
              disabled={isExporting}
              onClick={handlePrint}
            >
              <Icon icon="lucide:printer" /> Chop Etish
            </button>
          </div>
        </div>
      </div>

      <p className="preview-hint">
        <Icon icon="lucide:shield-check" /> 300 DPI yuqori sifatli HD eksport kafolatlangan.
      </p>

      {/* Ekrandan tashqarida yashirin turadigan professional sifatli Staging elementlar */}
      <div className="offscreen-staging-box" aria-hidden="true">
        <div className={`staging-card ${isVertical ? "is-vertical" : ""}`} ref={frontStagingRef}>
          <CardTemplateRenderer customStyle={{ ...style, cardSide: "front" }} />
        </div>
        <div className={`staging-card ${isVertical ? "is-vertical" : ""}`} ref={backStagingRef}>
          <CardTemplateRenderer customStyle={{ ...style, cardSide: "back" }} />
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
