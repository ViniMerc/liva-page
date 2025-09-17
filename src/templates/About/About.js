import Image from "next/image";
import styles from "./About.module.css";
import LivaButton from "@/components/LivaButton/LivaButton";

export default function About() {
  return (
    <section id="sobre" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Coluna esquerda - Imagem */}
          <div className={styles.imagesColumn}>
            <Image
              src="/images/about/about-main.png"
              alt="Sobre a Liva - Construímos confiança e realizamos sonhos"
              width={472}
              height={472}
              className={styles.aboutImage}
              priority
            />
          </div>

          <div className={styles.textColumn}>
            <br />
            <div className={styles.textContent}>
              <h2 className={styles.title}>
                Construímos confiança <br />e&nbsp;
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
              <LivaButton type="blackOutline">SAIBA MAIS</LivaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
