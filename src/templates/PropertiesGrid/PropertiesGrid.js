"use client";

import { useState } from "react";
import Image from "next/image";
import LivaButton from "../../components/LivaButton/LivaButton";
import styles from "./PropertiesGrid.module.css";

export default function PropertiesGrid() {
  const [showFilters, setShowFilters] = useState(false);
  const [properties, setProperties] = useState([
    {
      id: 1,
      name: "HORIZONTE RESIDENCE",
      image: "/images/properties/Rectangle 6.png",
      status: "PRÉ LANÇAMENTO",
      description: "Apartamentos de 2 e 3 dormitórios com vista panorâmica",
      price: "A partir de R$ 450.000",
      featured: true,
    },
    {
      id: 2,
      name: "ONE TOWER",
      image: "/images/properties/Rectangle 6-1.png",
      status: "LANÇAMENTO",
      description: "Apartamentos de 2 dormitórios com área de lazer completa",
      price: "A partir de R$ 380.000",
      featured: false,
    },
    {
      id: 3,
      name: "INFINITY COAST",
      image: "/images/properties/Rectangle 6-2.png",
      status: "EM CONSTRUÇÃO",
      description: "Apartamentos de 3 dormitórios com vista para o mar",
      price: "A partir de R$ 520.000",
      featured: false,
    },
    {
      id: 4,
      name: "SKYLINE TOWER",
      image: "/images/properties/Rectangle 6-3.png",
      status: "PRÉ LANÇAMENTO",
      description:
        "Apartamentos de 2 e 3 dormitórios em localização privilegiada",
      price: "A partir de R$ 480.000",
      featured: false,
    },
    {
      id: 5,
      name: "GRANDE PLACE TOWER",
      image: "/images/properties/Rectangle 6-4.png",
      status: "LANÇAMENTO",
      description: "Apartamentos de 2 dormitórios no centro da cidade",
      price: "A partir de R$ 320.000",
      featured: false,
    },
    {
      id: 6,
      name: "IMPERIUM TOWER",
      image: "/images/properties/Rectangle 6-5.png",
      status: "PRÉ LANÇAMENTO",
      description: "Apartamentos de 3 dormitórios com vista panorâmica",
      price: "A partir de R$ 650.000",
      featured: false,
    },
    {
      id: 7,
      name: "TITANIUM TOWER",
      image: "/images/properties/Rectangle 6-6.png",
      status: "EM CONSTRUÇÃO",
      description: "Apartamentos de 2 e 3 dormitórios com acabamento premium",
      price: "A partir de R$ 580.000",
      featured: false,
    },
    {
      id: 8,
      name: "BLUE COST TOWER",
      image: "/images/properties/Rectangle 6-7.png",
      status: "LANÇAMENTO",
      description: "Apartamentos de 2 dormitórios com vista para o mar",
      price: "A partir de R$ 420.000",
      featured: false,
    },
    {
      id: 9,
      name: "PLATINUM RESIDENCE",
      image: "/images/properties/Rectangle 6-1.png",
      status: "PRÉ LANÇAMENTO",
      description: "Apartamentos de 2 e 3 dormitórios com área gourmet",
      price: "A partir de R$ 390.000",
      featured: false,
    },
  ]);

  const [visibleProperties, setVisibleProperties] = useState(12);

  const loadMore = () => {
    setVisibleProperties((prev) => Math.min(prev + 3, properties.length));
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <section id="empreendimentos" className={styles.properties}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Confira todos os <br />
            <span className={styles.titleHighlight}>
              empreendimentos da Liva
            </span>
          </h2>

          <div className={styles.controls}>
            <LivaButton
              type="outline"
              onClick={toggleFilters}
              className={styles.customFilterButton}
              icon={
                <Image
                  src="/icons/filters-svg.svg"
                  alt="Filtros"
                  width={19}
                  height={19}
                />
              }
            >
              FILTROS
            </LivaButton>
          </div>
        </div>

        {/* Filtros */}
        {showFilters && (
          <div className={styles.filters}>
            <div className={styles.filterContent}>
              <div className={styles.filterRow}>
                <div className={styles.filterField}>
                  <label htmlFor="estagio">Estágio do empreendimento</label>
                  <select id="estagio" className={styles.filterSelect}>
                    <option value="">Selecione o estágio</option>
                    <option value="pre-lancamento">Pré Lançamento</option>
                    <option value="lancamento">Lançamento</option>
                    <option value="em-construcao">Em Construção</option>
                    <option value="pronto">Pronto</option>
                  </select>
                </div>

                <div className={styles.filterField}>
                  <label htmlFor="localizacao">Localização</label>
                  <select id="localizacao" className={styles.filterSelect}>
                    <option value="">Selecione a localização</option>
                    <option value="centro">Centro</option>
                    <option value="zona-sul">Zona Sul</option>
                    <option value="zona-norte">Zona Norte</option>
                    <option value="zona-oeste">Zona Oeste</option>
                    <option value="zona-leste">Zona Leste</option>
                  </select>
                </div>

                <div className={styles.filterField}>
                  <label htmlFor="tipo">Tipo de imóvel</label>
                  <select id="tipo" className={styles.filterSelect}>
                    <option value="">Selecione o tipo</option>
                    <option value="apartamento">Apartamento</option>
                    <option value="casa">Casa</option>
                    <option value="cobertura">Cobertura</option>
                    <option value="studio">Studio</option>
                    <option value="loft">Loft</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Grid de Propriedades */}
        <div className={styles.grid}>
          {properties.slice(0, visibleProperties).map((property) => (
            <div
              key={property.id}
              className={`${styles.propertyCard} ${
                property.featured ? styles.featuredCard : ""
              }`}
            >
              <div className={styles.cardImage}>
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  className={styles.propertyImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {property.featured && (
                  <div className={styles.statusTag}>{property.status}</div>
                )}
                <div className={styles.propertyNameOverlay}>
                  {property.name}
                </div>
                
                {/* Overlay com informações no hover */}
                <div className={styles.hoverOverlay}>
                  <div className={styles.overlayContent}>
                    <div className={styles.overlayTop}>
                      <div className={styles.overlayStatus}>{property.status}</div>
                    </div>
                    
                    <div className={styles.overlayBottom}>
                      <h3 className={styles.overlayTitle}>{property.name}</h3>
                      
                      <div className={styles.overlayInfo}>
                        <div className={styles.locationInfo}>
                          <span className={styles.cityLabel}>Cidade</span>
                          <span className={styles.cityName}>Barra Velha</span>
                          <span className={styles.neighborhoodLabel}>Bairro</span>
                          <span className={styles.neighborhoodName}>Tabuleiro</span>
                        </div>
                        
                        <div className={styles.propertyDetails}>
                          <div className={styles.detailItem}>
                            <span className={styles.detailText}>{property.description}</span>
                          </div>
                          <div className={styles.detailItem}>
                            <span className={styles.detailText}>Condomínio Fechado</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botão Carregar Mais */}
        <div className={styles.loadMoreContainer}>
          <button className={styles.loadMoreButton} onClick={loadMore}>
            CARREGAR MAIS
          </button>
        </div>
      </div>
    </section>
  );
}
