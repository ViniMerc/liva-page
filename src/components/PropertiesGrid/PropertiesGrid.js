"use client";

import { useState } from "react";
import Image from "next/image";
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
  ]);

  const [visibleProperties, setVisibleProperties] = useState(9);

  const loadMore = () => {
    setVisibleProperties((prev) => Math.min(prev + 3, properties.length));
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <section className={styles.properties}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Confira todos os{" "}
            <span className={styles.titleHighlight}>
              empreendimentos da Liva
            </span>
          </h2>

          <div className={styles.controls}>
            <button className={styles.filterButton} onClick={toggleFilters}>
              FILTROS
            </button>
          </div>
        </div>

        {/* Filtros (será implementado depois) */}
        {showFilters && (
          <div className={styles.filters}>
            <div className={styles.filterContent}>
              <h3>Filtros</h3>
              <p>Em breve - funcionalidade de filtros será implementada</p>
              <button
                className={styles.closeFilters}
                onClick={() => setShowFilters(false)}
              >
                Fechar
              </button>
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
