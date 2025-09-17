"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

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
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={styles.input}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.label}>
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={styles.input}
                      placeholder="(11) 99999-9999"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={styles.input}
                      placeholder="seu@email.com"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={styles.textarea}
                      rows="4"
                      placeholder="Conte-nos sobre seu interesse..."
                      required
                    />
                  </div>

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
