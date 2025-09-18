"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "./SuccessModal.module.css";

export default function SuccessModal({ isOpen, onClose, autoCloseDelay = 5000 }) {
  useEffect(() => {
    if (isOpen && autoCloseDelay > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, autoCloseDelay);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose, autoCloseDelay]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.iconContainer}>
          <div className={styles.checkIcon}>
            <Image
              src="/icons/check.svg"
              alt="Sucesso"
              width={93}
              height={93}
              priority
            />
          </div>
        </div>
        
        <h3 className={styles.title}>Mensagem enviada com sucesso!</h3>
        <p className={styles.message}>
          Aguarde que em instantes entraremos em contato.
        </p>
      </div>
    </div>
  );
}
