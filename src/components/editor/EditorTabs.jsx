import React, { useState } from "react";
import { InfoForm } from "./InfoForm";
import { DesignForm } from "./DesignForm";
import { BackgroundPicker } from "./BackgroundPicker";
import { TemplatePicker } from "./TemplatePicker";
import { Icon } from "@iconify/react";

export const EditorTabs = () => {
  const [activeTab, setActiveTab] = useState("info");

  const tabs = [
    { id: "info", label: "Ma'lumotlar", icon: "lucide:edit-3" },
    { id: "template", label: "Shablonlar", icon: "lucide:layout" },
    { id: "background", label: "Fonlar (29)", icon: "lucide:image" },
    { id: "design", label: "Dizayn & Rang", icon: "lucide:palette" },
  ];

  return (
    <div className="editor-container">
      <div className="editor-tab-nav">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <Icon icon={tab.icon} />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="editor-tab-content">
        {activeTab === "info" && <InfoForm />}
        {activeTab === "template" && <TemplatePicker />}
        {activeTab === "background" && <BackgroundPicker />}
        {activeTab === "design" && <DesignForm />}
      </div>
    </div>
  );
};
