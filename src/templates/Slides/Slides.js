"use client";

import { useState } from "react";
import Image from "next/image";
import LivaButton from "../../components/LivaButton/LivaButton";
import styles from "./Slides.module.css";

export default function Slides() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Dados do empreendimento
  const slides = [
    {
      id: 1,
      image: "/images/carousel/barra-view-1.png",
      alt: "Barra View - Vista externa do empreendimento",
    },
    {
      id: 2,
      image: "/images/carousel/barra-view-2.png",
      alt: "Barra View - Área de lazer",
    },
    {
      id: 3,
      image: "/images/carousel/barra-view-3.png",
      alt: "Barra View - Apartamento modelo",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className={styles.slidesContainer}>
      <div className={styles.carousel}>
        {/* Imagens do carrossel */}
        <div className={styles.slides}>
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`${styles.slide} ${
                index === currentSlide ? styles.active : ""
              }`}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className={styles.slideImage}
                  sizes="100vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Overlay com informações */}
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            <div className={styles.tag}>
              <span>PRÉ LANÇAMENTO</span>
            </div>

            <h1 className={styles.title}>Barra View</h1>

            <div className={styles.descriptionBox}>
              <span>Apartamento com 3 dormitórios sendo 1 suíte</span>
            </div>

            <LivaButton type="outlineWhite" size="medium" className={styles.ctaButton}>
              SAIBA MAIS
            </LivaButton>
          </div>
        </div>

        <button
          className={`${styles.navButton} ${styles.prev}`}
          onClick={prevSlide}
          aria-label="Imagem anterior"
        >
          <Image
            src="/icons/arrow-left.svg"
            alt="Seta anterior"
            width="24"
            height="24"
          />
        </button>

        <button
          className={`${styles.navButton} ${styles.next}`}
          onClick={nextSlide}
          aria-label="Próxima imagem"
        >
          <Image
            src="/icons/arrow-right.svg"
            alt="Seta próxima"
            width="24"
            height="24"
          />
        </button>
      </div>
    </section>
  );
}
