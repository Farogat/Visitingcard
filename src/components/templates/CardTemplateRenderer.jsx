import React from "react";
import { useCard } from "../../context/CardContext";
import { ModernProTemplate } from "./ModernProTemplate";
import { MinimalistTemplate } from "./MinimalistTemplate";
import { CorporateTemplate } from "./CorporateTemplate";
import { CreativeTemplate } from "./CreativeTemplate";
import { DarkGoldTemplate } from "./DarkGoldTemplate";

export const CardTemplateRenderer = ({ customInfo, customStyle }) => {
  const context = useCard();
  const info = customInfo || context.info;
  const style = customStyle || context.style;

  switch (style.template) {
    case "minimal":
      return <MinimalistTemplate info={info} style={style} />;
    case "corporate":
      return <CorporateTemplate info={info} style={style} />;
    case "creative":
      return <CreativeTemplate info={info} style={style} />;
    case "darkgold":
      return <DarkGoldTemplate info={info} style={style} />;
    case "modern":
    default:
      return <ModernProTemplate info={info} style={style} />;
  }
};
