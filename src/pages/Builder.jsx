import React from "react";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import { EditorTabs } from "../components/editor/EditorTabs";
import { CardPreview } from "../components/preview/CardPreview";
import { Icon } from "@iconify/react";

export const Builder = () => {
  return (
    <div className="builder-page">
      <Navbar />

      <div className="builder-subbar">
        <div className="container subbar-content">
          <div>
            <h1 className="builder-title">
              <Icon icon="lucide:sliders" /> Vizitka Konstruktori
            </h1>
            <p className="builder-subtitle">
              Ma'lumotlarni kiriting, rang va fonni moslashtiring hamda natijani jonli tarzda ko'ring.
            </p>
          </div>
        </div>
      </div>

      <main className="container builder-main-layout">
        {/* Chap tomon: Tahrirlash paneli */}
        <section className="builder-editor-col">
          <EditorTabs />
        </section>

        {/* O'ng tomon: Jonli Ko'rinish va Yuklab olish */}
        <section className="builder-preview-col">
          <div className="sticky-preview-wrapper">
            <CardPreview />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Builder;
