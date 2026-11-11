import html2canvas from "html2canvas";

/**
 * Bitta elementni yuqori sifatda (HD) PNG qilib yuklab olish
 */
export const downloadSingleSide = async (element, fileName = "vizitka.png") => {
  if (!element) return;
  try {
    const canvas = await html2canvas(element, {
      scale: 3,
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
      logging: false,
    });

    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (err) {
    console.error("Yuklab olishda xatolik:", err);
    alert("Kechirasiz, yuklab olishda xatolik yuz berdi.");
  }
};

/**
 * Ikkala tomonni (Oldi va Orqasi) alohida 2 ta fayl sifatida yuklab olish (Bosmaxona uchun)
 */
export const downloadBothSides = async (frontEl, backEl, baseName = "vizitka") => {
  if (!frontEl || !backEl) return;
  try {
    // 1. Old tomonini yuklash
    await downloadSingleSide(frontEl, `${baseName}-oldi.png`);

    // Brauzer bir vaqtda 2 ta yuklashni bloklamasligi uchun kichik pauza (500ms)
    await new Promise((resolve) => setTimeout(resolve, 500));

    // 2. Orqa tomonini yuklash
    await downloadSingleSide(backEl, `${baseName}-orqasi.png`);
  } catch (err) {
    console.error("Ikkala tomonni yuklashda xatolik:", err);
  }
};

/**
 * Ikkala tomonni bitta rasmda yonma-yon birlashtirib yuklab olish (Taqdimot / Messenjerlar uchun)
 */
export const downloadSideBySide = async (frontEl, backEl, fileName = "vizitka-taqdimot.png") => {
  if (!frontEl || !backEl) return;
  try {
    const [frontCanvas, backCanvas] = await Promise.all([
      html2canvas(frontEl, { scale: 3, useCORS: true, backgroundColor: null, logging: false }),
      html2canvas(backEl, { scale: 3, useCORS: true, backgroundColor: null, logging: false }),
    ]);

    const gap = 60;
    const paddingX = 80;
    const paddingY = 80;

    const combinedCanvas = document.createElement("canvas");
    combinedCanvas.width = frontCanvas.width + backCanvas.width + gap + (paddingX * 2);
    combinedCanvas.height = Math.max(frontCanvas.height, backCanvas.height) + (paddingY * 2);

    const ctx = combinedCanvas.getContext("2d");

    // Zamonaviy to'q fon
    ctx.fillStyle = "#090d16";
    ctx.fillRect(0, 0, combinedCanvas.width, combinedCanvas.height);

    // Nozik markaziy gradient nuri
    const gradient = ctx.createRadialGradient(
      combinedCanvas.width / 2,
      combinedCanvas.height / 2,
      50,
      combinedCanvas.width / 2,
      combinedCanvas.height / 2,
      combinedCanvas.width / 1.5
    );
    gradient.addColorStop(0, "rgba(2, 132, 199, 0.15)");
    gradient.addColorStop(1, "transparent");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, combinedCanvas.width, combinedCanvas.height);

    // Oldi va Orqasiga soya (shadow) berish
    ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
    ctx.shadowBlur = 40;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 20;

    // Old tomonini chizish
    ctx.drawImage(frontCanvas, paddingX, paddingY);

    // Orqa tomonini chizish
    ctx.drawImage(backCanvas, paddingX + frontCanvas.width + gap, paddingY);

    // Sarlavha yozuvi (Watermark/Brand)
    ctx.shadowColor = "transparent";
    ctx.font = "bold 32px 'Plus Jakarta Sans', sans-serif";
    ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
    ctx.textAlign = "center";
    ctx.fillText("VisitCard.uz — Online Vizitka Konstruktori", combinedCanvas.width / 2, combinedCanvas.height - 30);

    const link = document.createElement("a");
    link.href = combinedCanvas.toDataURL("image/png");
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (err) {
    console.error("Yonma-yon rasm yaratishda xatolik:", err);
    alert("Kechirasiz, taqdimot rasmini yaratishda xatolik yuz berdi.");
  }
};

/**
 * Chop etish oynasini ochish
 */
export const printCard = async (element) => {
  if (!element) return;
  try {
    const canvas = await html2canvas(element, { scale: 3, useCORS: true });
    const dataUrl = canvas.toDataURL("image/png");
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head>
          <title>Vizitka Chop Etish</title>
          <style>
            body { margin: 0; display: flex; align-items: center; justify-content: center; height: 100vh; background: #fff; }
            img { width: 90mm; height: 50mm; box-shadow: 0 0 5px rgba(0,0,0,0.2); }
            @media print {
              body { margin: 0; }
              img { width: 90mm; height: 50mm; box-shadow: none; }
            }
          </style>
        </head>
        <body onload="window.print(); window.close();">
          <img src="${dataUrl}" alt="Vizitka" />
        </body>
      </html>
    `);
    printWindow.document.close();
  } catch (err) {
    console.error("Chop etishda xatolik:", err);
  }
};
