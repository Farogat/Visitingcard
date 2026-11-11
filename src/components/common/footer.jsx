import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-col brand-col">
          <div className="footer-brand">
            <Icon icon="lucide:credit-card" className="footer-logo-icon" />
            <span className="brand-name">VisitCard.uz</span>
          </div>
          <p className="footer-desc">
            O'zbekistondagi zamonaviy va bepul online vizitka konstruktori. Bir necha daqiqada o'z shaxsiy yoki kompaniya vizitkangizni yarating va HD formatda yuklab oling.
          </p>
          <div className="social-links">
            <a href="https://t.me" target="_blank" rel="noreferrer" className="social-pill">
              <Icon icon="logos:telegram" /> Telegram
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-pill">
              <Icon icon="lucide:instagram" /> Instagram
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Bo'limlar</h4>
          <ul>
            <li><Link to="/">Bosh sahifa</Link></li>
            <li><Link to="/builder">Vizitka Konstruktori</Link></li>
            <li><Link to="/gallery">Shablonlar Galereyasi</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Shablonlar</h4>
          <ul>
            <li><Link to="/builder">Modern Pro</Link></li>
            <li><Link to="/builder">Minimalist</Link></li>
            <li><Link to="/builder">Corporate Executive</Link></li>
            <li><Link to="/builder">Creative Glass</Link></li>
            <li><Link to="/builder">Dark Gold VIP</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Bog'lanish</h4>
          <p className="support-hours">
            Dushanba – Shanba: 09:00 dan 18:00 gacha
          </p>
          <div className="contact-meta">
            <Icon icon="lucide:mail" />
            <span>info@visitcard.uz</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>© 2026 VisitCard.uz — Barcha huquqlar himoyalangan.</p>
        <p className="footer-made">Zamonaviy Web Texnologiyalari bilan yaratildi</p>
      </div>
    </footer>
  );
};

export default Footer;
