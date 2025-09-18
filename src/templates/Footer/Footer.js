import styles from "./Footer.module.css";
import Image from "next/image";
import LivaButton from "../../components/LivaButton/LivaButton";

export default function Footer() {
  return (
    <footer id="noticias" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.column}>
            <div className={styles.logo}>
              <Image
                src="/images/footer/logo-grey.png"
                alt="Liva Logo"
                width={108}
                height={43}
                className={styles.logoImage}
              />
            </div>
            <p className={styles.description}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>

          <div className={styles.column}>
            <h2 className={styles.columnTitle}>NAVEGUE NO SITE</h2>
            <ul className={styles.links}>
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
          </div>

          {/* Coluna 3 - Redes Sociais */}
          <div className={styles.column}>
            <div className={styles.socialSection}>
              <p className={styles.socialTitle}>Acompanhe nas redes</p>
              <div className={styles.social}>
                <a href="#" aria-label="Facebook" className={styles.socialIcon}>
                  <Image
                    src="/icons/facebook-icon.svg"
                    alt="Facebook"
                    width="25"
                    height="25"
                    className={styles.socialImage}
                  />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className={styles.socialIcon}
                >
                  <Image
                    src="/icons/instagram-icon.svg"
                    alt="Instagram"
                    width="26"
                    height="25"
                    className={styles.socialImage}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Coluna 4 - Contato */}
          <div className={styles.column}>
            <p className={styles.contactTitle}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore
            </p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span>(11) 9909-9091</span>
              </div>
              <div className={styles.contactItem}>
                <span>contato@liva.com.br</span>
              </div>
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

        <div className={styles.copyright}>
          <div className={styles.copyrightContent}>
            <p>Liva © 2022 Todos os direitos reservados.</p>
            <Image
              src="/logos/Logo-feba 1.svg"
              alt="FEBACAPITAL Logo"
              width={120}
              height={30}
              className={styles.febaLogo}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
