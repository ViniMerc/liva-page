"use client";

import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
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

          <div className={styles.whatsapp}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappButton}
            >
              <Image
                src="/icons/whatsapp.svg"
                alt="WhatsApp"
                width="20"
                height="20"
              />
              <span>WHATSAPP</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
