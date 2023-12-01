import React from "react";

export const Header = () => {
  return (
    <header>
      <div className="header-links">
        <a href="#">

          <img
            src={process.env.PUBLIC_URL + "/assets/logo/Logo_Milenijsko.png"}
            alt="milenijsko-natjecanje"
            className="main-logo"
          />
        </a>
      </div>
      <div className="header-links">
        <div className="header-social-links">
          <a href="https://www.facebook.com/" target="_blank">
            <img
              className="header-social-link"
              src={process.env.PUBLIC_URL + "/assets/social/facebook.png"}
              alt="facebook-link"
            />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img
              className="header-social-link"
              src={process.env.PUBLIC_URL + "/assets/social/instagram.png"}
              alt="instagram-link"
            />
          </a>
          <a href="https://kreativna-riznica.com/" target="_blank">
            <img
              className="header-social-link"
              src={
                process.env.PUBLIC_URL + "/assets/social/kreativna-riznica.png"
              }
              alt="x-link"
            />
          </a>
          <div className="language-picker">
            <select name="languages" id="language-select">
              <option value="hrvatski">Hrvatski</option>
              <option value="english">English</option>
              <option value="内斯基">内斯基</option>
            </select>
          </div>
        </div>
      </div>
      <nav className="main-nav">
        <a href="/#home" className="nav-link" id="active">
          Početna
        </a>
        <a href="/#accordion-menu" className="nav-link">
          Hrvatska kulturna putovnica
        </a>
        <a href="/#kruzna-kreativnost-box" className="nav-link">
          Kružna kreativnost
        </a>
        <a href="/#poziv-na-suradnju-box" className="nav-link">
          Kontakt
        </a>
      </nav>
    </header>
  );
};
