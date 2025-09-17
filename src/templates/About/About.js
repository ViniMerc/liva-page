import Image from 'next/image';
import styles from "./About.module.css";
import LivaButton from '../components/LivaButton/LivaButton';

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
          <div className={styles.textColumn}> <br />
            <div className={styles.textContent}>
              <h2 className={styles.title}>
                Construímos confiança e<br />
                realizamos sonhos!
              </h2>

              <p className={styles.description}>
                Na Liva, cada projeto é planejado para facilitar a vida dos
                moradores, trazendo uma sensação máxima de bem-estar. Espaços
                que abrigam histórias de vida e que são desenvolvidos para que
                você viva momentos incríveis ao lado da sua família.
              </p>

              <LivaButton 
                type="primary"
                icon={
                  <svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.12 13.88L23.54 8.28999L22.12 9.70999L27.41 15H2V17H27.41L22.12 22.29L23.54 23.71L29.12 18.12C29.6818 17.5575 29.9974 16.795 29.9974 16C29.9974 15.205 29.6818 14.4425 29.12 13.88Z" fill="currentColor"/>
                  </svg>
                }
              >
                Saiba mais
              </LivaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
