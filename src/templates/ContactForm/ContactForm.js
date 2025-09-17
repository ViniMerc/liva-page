"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";
import LivaField from "../../components/LivaField/LivaField";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    setTimeout(() => {
      console.log("Dados do formulário:", formData);
      setSubmitStatus("success");
      setIsSubmitting(false);

      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1000);
  };

  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Coluna esquerda - Texto promocional */}
          <div className={styles.promoColumn}>
            <div className={styles.promoContent}>
              <h2 className={styles.promoTitle}>
                Fale agora com um consultor de vendas
              </h2>
              <p className={styles.promoSubtitle}>
                Tire suas dúvidas e conheça de perto o seu novo jeito de morar.
              </p>

              <div className={styles.consultantsSection}>
                <p className={styles.consultantsLabel}>Consultores online</p>
                <div className={styles.consultantsList}>
                  <div className={styles.consultant}>
                    <div className={styles.consultantAvatar}>A</div>
                  </div>
                  <div className={styles.consultant}>
                    <div className={styles.consultantAvatar}>B</div>
                  </div>
                  <div className={styles.consultant}>
                    <div className={styles.consultantAvatar}>C</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna direita - Formulário com imagem de fundo */}
          <div className={styles.formColumn}>
            <div className={styles.formBackground}>
              <div className={styles.formContent}>
                <h3 className={styles.formTitle}>
                  Fale agora mesmo com a Liva
                </h3>

                <form onSubmit={handleSubmit} className={styles.form}>
                  <LivaField
                    type="text"
                    id="name"
                    name="name"
                    label="Nome"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />

                  <LivaField
                    type="tel"
                    id="phone"
                    name="phone"
                    label="Telefone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(11) 99999-9999"
                    required
                  />

                  <LivaField
                    type="email"
                    id="email"
                    name="email"
                    label="E-mail"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    required
                  />

                  <LivaField
                    type="textarea"
                    id="message"
                    name="message"
                    label="Mensagem"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Conte-nos sobre seu interesse..."
                    required
                  />

                  <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "ENVIAR MENSAGEM"}
                  </button>

                  {submitStatus === "success" && (
                    <div className={styles.successMessage}>
                      ✅ Mensagem enviada com sucesso! Entraremos em contato em
                      breve.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
