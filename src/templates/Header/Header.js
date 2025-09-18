"use client";

import { useState } from "react";
import Image from "next/image";
import LivaButton from "../../components/LivaButton/LivaButton";
import styles from "./Header.module.css";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
    closeMobileMenu(); // Fecha o menu mobile após clicar
  };
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <Image
              src="/logos/liva 1.png"
              alt="Liva Logo"
              width="108"
              height="43"
            />
          </div>
        </div>

        {/* Menu Desktop */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <a href="#home" onClick={(e) => handleNavClick(e, "home")}>
                HOME
              </a>
            </li>
            <li>
              <a href="#sobre" onClick={(e) => handleNavClick(e, "sobre")}>
                SOBRE A LIVA
              </a>
            </li>
            <li>
              <a
                href="#empreendimentos"
                onClick={(e) => handleNavClick(e, "empreendimentos")}
              >
                EMPREENDIMENTOS
              </a>
            </li>
            <li>
              <a
                href="#noticias"
                onClick={(e) => handleNavClick(e, "noticias")}
              >
                NOTÍCIAS
              </a>
            </li>
            <li>
              <a href="#contato" onClick={(e) => handleNavClick(e, "contato")}>
                CONTATO
              </a>
            </li>
          </ul>
        </nav>

        {/* Botão Menu Mobile */}
        {!isMobileMenuOpen && (
          <button
            className={styles.mobileMenuButton}
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            <Image
              src="/icons/menu-burger.svg"
              alt="Menu"
              width="24"
              height="24"
            />
          </button>
        )}

        <div className={styles.rightSection}>
          <div className={styles.social}>
            <a href="#" aria-label="Facebook">
              <Image
                src="/icons/Vector (2).svg"
                alt="Facebook"
                width="25"
                height="25"
              />
            </a>
            <a href="#" aria-label="Instagram">
              <Image
                src="/icons/Vector.svg"
                alt="Instagram"
                width="26"
                height="25"
              />
            </a>
          </div>

          <LivaButton
            type="primary"
            size="medium"
            icon={
              <Image
                src="/icons/whatsapp.svg"
                alt="Ícone do WhatsApp"
                width="20"
                height="20"
              />
            }
            className={styles.whatsappButton}
          >
            WHATSAPP
          </LivaButton>
        </div>
      </div>

      {/* Menu Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenuOverlay}>
          <div className={styles.mobileMenuContent}>
            <div className={styles.mobileMenuHeader}>
              <div className={styles.logo}>
                <Image
                  src="/logos/liva 1.png"
                  alt="Liva Logo"
                  width="108"
                  height="43"
                />
              </div>
              <button
                className={styles.mobileMenuClose}
                onClick={closeMobileMenu}
                aria-label="Fechar Menu"
              >
                <Image
                  src="/icons/cross-svg.svg"
                  alt="Fechar"
                  width="24"
                  height="24"
                />
              </button>
            </div>

            <nav className={styles.mobileNav}>
              <ul className={styles.mobileNavList}>
                <li>
                  <a href="#home" onClick={(e) => handleNavClick(e, "home")}>
                    HOME
                  </a>
                </li>
                <li>
                  <a href="#sobre" onClick={(e) => handleNavClick(e, "sobre")}>
                    SOBRE A LIVA
                  </a>
                </li>
                <li>
                  <a
                    href="#empreendimentos"
                    onClick={(e) => handleNavClick(e, "empreendimentos")}
                  >
                    EMPREENDIMENTOS
                  </a>
                </li>
                <li>
                  <a
                    href="#noticias"
                    onClick={(e) => handleNavClick(e, "noticias")}
                  >
                    NOTÍCIAS
                  </a>
                </li>
                <li>
                  <a
                    href="#contato"
                    onClick={(e) => handleNavClick(e, "contato")}
                  >
                    CONTATO
                  </a>
                </li>
              </ul>
            </nav>

            <div className={styles.mobileMenuFooter}>
              <p className={styles.socialLabel}>Acompanhe nas redes</p>
              <div className={styles.mobileSocial}>
                <a href="#" aria-label="Facebook">
                  <Image
                    src="/icons/Vector (2).svg"
                    alt="Facebook"
                    width="25"
                    height="25"
                  />
                </a>
                <a href="#" aria-label="Instagram">
                  <Image
                    src="/icons/Vector.svg"
                    alt="Instagram"
                    width="26"
                    height="25"
                  />
                </a>
              </div>

              <div className={styles.mobileWhatsapp}>
                <LivaButton
                  type="primary"
                  size="medium"
                  icon={
                    <Image
                      src="/icons/whatsapp.svg"
                      alt="WhatsApp"
                      width="20"
                      height="20"
                    />
                  }
                  className={styles.mobileWhatsappButton}
                >
                  WHATSAPP
                </LivaButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
