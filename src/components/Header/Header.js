import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <Image src="/logos/liva 1.png" alt="Liva Logo" width="80" height="32" />
          </div>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#sobre">SOBRE A LIVA</a>
            </li>
            <li>
              <a href="#empreendimentos">EMPREENDIMENTOS</a>
            </li>
            <li>
              <a href="#noticias">NOTÍCIAS</a>
            </li>
            <li>
              <a href="#contato">CONTATO</a>
            </li>
          </ul>
        </nav>

        <div className={styles.rightSection}>
          <div className={styles.social}>
            <a href="#" aria-label="Facebook">
              <Image src="/icons/Vector (2).svg" alt="Facebook" width="25" height="25" />
            </a>
            <a href="#" aria-label="Instagram">
              <Image src="/icons/Vector.svg" alt="Instagram" width="26" height="25" />
            </a>
          </div>

          <div className={styles.whatsapp}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappButton}
            >
              <Image src="/icons/whatsapp.svg" alt="WhatsApp" width="20" height="20" />
              <span>WHATSAPP</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
