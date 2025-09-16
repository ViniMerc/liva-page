'use client';

import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Dados do empreendimento
  const slides = [
    {
      id: 1,
      image: '/images/carousel/barra-view-1.png',
      alt: 'Barra View - Vista externa do empreendimento'
    },
    {
      id: 2,
      image: '/images/carousel/barra-view-2.png',
      alt: 'Barra View - Área de lazer'
    },
    {
      id: 3,
      image: '/images/carousel/barra-view-3.png',
      alt: 'Barra View - Apartamento modelo'
    }
  ];

  // Auto-play do carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.carousel}>
        {/* Imagens do carrossel */}
        <div className={styles.slides}>
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
            >
              <div className={styles.imageContainer}>
                <img 
                  src={slide.image} 
                  alt={slide.alt}
                  className={styles.slideImage}
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
            
            <button className={styles.ctaButton}>
              SAIBA MAIS
            </button>
          </div>
        </div>

        {/* Controles de navegação */}
        <button 
          className={`${styles.navButton} ${styles.prev}`}
          onClick={prevSlide}
          aria-label="Imagem anterior"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
        </button>
        
        <button 
          className={`${styles.navButton} ${styles.next}`}
          onClick={nextSlide}
          aria-label="Próxima imagem"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
          </svg>
        </button>

        {/* Indicadores */}
        <div className={styles.indicators}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === currentSlide ? styles.active : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
