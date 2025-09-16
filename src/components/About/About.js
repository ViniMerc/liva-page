import Image from 'next/image';
import styles from "./About.module.css";

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

          {/* Coluna direita - Texto e CTA */}
          <div className={styles.textColumn}>
            <div className={styles.textContent}>
              <h2 className={styles.title}>
                Construímos confiança e realizamos sonhos!
              </h2>

              <p className={styles.description}>
                Na Liva, cada projeto é planejado para facilitar a vida dos
                moradores, trazendo uma sensação máxima de bem-estar. Espaços
                que abrigam histórias de vida e que são desenvolvidos para que
                você viva momentos incríveis ao lado da sua família.
              </p>

              <button className={styles.ctaButton}>Saiba mais</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
