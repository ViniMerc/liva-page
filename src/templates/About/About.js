import Image from "next/image";
import styles from "./About.module.css";
import LivaButton from "@/components/LivaButton/LivaButton";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Coluna esquerda - Collage de imagens */}
          <div className={styles.imagesColumn}>
            <div className={styles.imageGrid}>
              <div className={`${styles.imageItem} ${styles.large}`}>
                <div className={styles.imageContainer}>
                  <Image
                    src="/images/about/about-main.png"
                    alt="Sobre a Liva - Construímos confiança e realizamos sonhos"
                    fill
                    className={styles.aboutImage}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.textColumn}>
            <br />
            <div className={styles.textContent}>
              <h2 className={styles.title}>
                Construímos confiança e<br />
                <span className={styles.titleHighlight}>
                  realizamos sonhos!
                </span>
              </h2>
              <p className={styles.description}>
                Na Liva, cada projeto é planejado para facilitar a vida dos
                moradores, trazendo uma sensação máxima de bem-estar. Espaços
                que abrigam histórias de vida e que são desenvolvidos para que
                você viva momentos incríveis ao lado da sua família.
              </p>
              <LivaButton type="outline">Saiba mais</LivaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
