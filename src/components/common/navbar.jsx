import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="site-header">
      <div className="header-inner container">
        <Link to="/" className="site-brand">
          <div className="brand-logo-icon">
            <Icon icon="lucide:credit-card" width={24} />
          </div>
          <span className="brand-title">
            VisitCard<span>.uz</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
            Bosh sahifa
          </Link>
          <Link
            to="/builder"
            className={`nav-link ${isActive("/builder") ? "active" : ""}`}
          >
            Vizitka Konstruktori
          </Link>
          <Link
            to="/gallery"
            className={`nav-link ${isActive("/gallery") ? "active" : ""}`}
          >
            Shablonlar
          </Link>
        </nav>

        <div className="header-actions">
          <Link to="/builder" className="btn-cta-nav">
            <Icon icon="lucide:plus-circle" /> Vizitka Yaratish
          </Link>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menyu"
          >
            <Icon icon={mobileMenuOpen ? "lucide:x" : "lucide:menu"} width={26} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <nav className="mobile-nav-links">
            <Link
              to="/"
              className={`mobile-link ${isActive("/") ? "active" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Icon icon="lucide:home" /> Bosh sahifa
            </Link>
            <Link
              to="/builder"
              className={`mobile-link ${isActive("/builder") ? "active" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Icon icon="lucide:sparkles" /> Vizitka Konstruktori
            </Link>
            <Link
              to="/gallery"
              className={`mobile-link ${isActive("/gallery") ? "active" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Icon icon="lucide:grid" /> Shablonlar
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
