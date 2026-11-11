import React, { createContext, useContext, useState, useEffect } from "react";

const CardContext = createContext();

export const defaultCardData = {
  info: {
    fullName: "Alisher Usmonov",
    jobTitle: "Bosh Dasturchi & Dizayner",
    companyName: "TechNova Solutions",
    tagline: "Raqamli yechimlar va IT innovatsiyalar",
    phone: "+998 90 123 45 67",
    email: "alisher@technova.uz",
    website: "technova.uz",
    address: "Toshkent shahri, Amir Temur shox ko'chasi, 12",
    telegram: "@alisher_dev",
  },
  style: {
    template: "modern", // 'modern', 'minimal', 'corporate', 'creative', 'darkgold'
    bgType: "image", // 'image', 'color', 'gradient'
    bgColor: "#0f172a",
    textColor: "#ffffff",
    accentColor: "#38bdf8",
    bgGradient: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0284c7 100%)",
    bgImage: "/img/img5.png",
    logoImage: "/img/cube.png",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    cardSide: "front", // 'front' | 'back'
    orientation: "horizontal", // 'horizontal' | 'vertical'
    showQr: true,
    qrTarget: "website", // 'website', 'telegram', 'phone', 'custom'
    qrCustomUrl: "",
  },
};

// LocalStorage dan xavfsiz yuklab olish
const loadInitialInfo = () => {
  try {
    const saved = localStorage.getItem("visitcard_info");
    return saved ? JSON.parse(saved) : defaultCardData.info;
  } catch {
    return defaultCardData.info;
  }
};

const loadInitialStyle = () => {
  try {
    const saved = localStorage.getItem("visitcard_style");
    if (!saved) return defaultCardData.style;
    const parsed = JSON.parse(saved);
    return { ...defaultCardData.style, ...parsed };
  } catch {
    return defaultCardData.style;
  }
};

export const CardProvider = ({ children }) => {
  const [info, setInfo] = useState(loadInitialInfo);
  const [style, setStyle] = useState(loadInitialStyle);
  const [lastSaved, setLastSaved] = useState(null);

  // Auto-save: har safar info yoki style o'zgarganda localStorage ga yozish
  useEffect(() => {
    try {
      localStorage.setItem("visitcard_info", JSON.stringify(info));
      localStorage.setItem("visitcard_style", JSON.stringify(style));
      setLastSaved(new Date().toLocaleTimeString("uz-UZ", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    } catch (e) {
      console.warn("Auto-save xatosi:", e);
    }
  }, [info, style]);

  const updateInfo = (key, value) => {
    setInfo((prev) => ({ ...prev, [key]: value }));
  };

  const updateStyle = (key, value) => {
    setStyle((prev) => ({ ...prev, [key]: value }));
  };

  const resetToSample = () => {
    setInfo(defaultCardData.info);
    setStyle(defaultCardData.style);
    localStorage.removeItem("visitcard_info");
    localStorage.removeItem("visitcard_style");
  };

  const clearAll = () => {
    setInfo({
      fullName: "",
      jobTitle: "",
      companyName: "",
      tagline: "",
      phone: "",
      email: "",
      website: "",
      address: "",
      telegram: "",
    });
  };

  const toggleSide = () => {
    setStyle((prev) => ({
      ...prev,
      cardSide: prev.cardSide === "front" ? "back" : "front",
    }));
  };

  const toggleOrientation = () => {
    setStyle((prev) => ({
      ...prev,
      orientation: prev.orientation === "horizontal" ? "vertical" : "horizontal",
    }));
  };

  return (
    <CardContext.Provider
      value={{
        info,
        style,
        lastSaved,
        updateInfo,
        updateStyle,
        resetToSample,
        clearAll,
        toggleSide,
        toggleOrientation,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export const useCard = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("useCard CardProvider ichida ishlatilishi kerak");
  }
  return context;
};
