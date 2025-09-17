"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./ContactForm.module.css";
import LivaField from "../../components/LivaField/LivaField";
import LivaButton from "../../components/LivaButton/LivaButton";

export default function ContactForm() {
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const submitRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    email: false,
    message: false,
  });

  const formatPhoneBR = (digits) => {
    if (!digits) return "";
    const only = String(digits).replace(/\D/g, "").slice(0, 11);
    const d = only;
    if (d.length <= 2) return `(${d}`;
    if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
    if (d.length <= 10)
      return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
    return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7, 11)}`;
  };

  const handleInputChange = (e) => {
    const { name } = e.target;
    let { value } = e.target;

    if (name === "phone") {
      // Mantém apenas números
      value = value.replace(/\D/g, "").slice(0, 11);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Ao digitar, limpa erro do campo
    setErrors((prev) => ({ ...prev, [name]: false }));
  };
  const handleFieldKeyDown = (e, current, nextRef) => {
    if (e.key !== "Enter") return;
    const isTextarea = current === "message";
    if (isTextarea && e.shiftKey) return; // Shift+Enter mantém quebra de linha
    e.preventDefault();

    if (nextRef && nextRef.current) {
      nextRef.current.focus();
      if (nextRef.current.tagName === "BUTTON") {
        nextRef.current.click();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedName = String(formData.name).trim();
    const trimmedEmail = String(formData.email).trim();
    const trimmedMessage = String(formData.message).trim();
    const digitsPhone = String(formData.phone).replace(/\D/g, "");

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const newErrors = {
      name: trimmedName.length === 0,
      email: !isValidEmail(trimmedEmail),
      phone: digitsPhone.length < 10,
      message: trimmedMessage.length === 0,
    };

    setErrors(newErrors);

    const hasAnyError = Object.values(newErrors).some(Boolean);
    if (hasAnyError) return;

    setIsSubmitting(true);

    // Simular envio do formulário
    setTimeout(() => {
      console.log("Dados do formulário:", formData);
      setSubmitStatus("success");
      setIsSubmitting(false);

      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1000);
  };

  const handleBlurValidate = (e) => {
    const { name, value } = e.target;
    const trimmed = String(value).trim();

    if (name === "email") {
      const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      const invalid = trimmed.length > 0 ? !isValidEmail(trimmed) : false;
      setErrors((prev) => ({ ...prev, email: invalid }));
      return;
    }

    if (name === "phone") {
      const digits = trimmed.replace(/\D/g, "");
      const invalid = digits.length > 0 ? digits.length < 10 : false;
      setErrors((prev) => ({ ...prev, phone: invalid }));
      return;
    }
  };

  return (
    <section id="contato" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Coluna esquerda - Texto promocional */}
          <div className={styles.promoColumn}>
            <div className={styles.promoContent}>
              <h2 className={styles.promoTitle}>
                Fale agora <br /> com um consultor <br /> de vendas
              </h2>
              <p className={styles.promoSubtitle}>
                Tire suas dúvidas e conheça de perto o seu <br /> novo jeito de
                morar.
              </p>

              <div className={styles.consultantsSection}>
                <p className={styles.consultantsLabel}>Consultores online</p>
                <div className={styles.consultantsList}>
                  <div className={styles.consultant}>
                    <div className={styles.consultantAvatar}>
                      <Image
                        src="/images/contact/avatares.png"
                        alt="Consultor 1"
                        width={54}
                        height={54}
                      />
                    </div>
                  </div>
                  <div className={styles.consultant}>
                    <div className={styles.consultantAvatar}>
                      <Image
                        src="/images/contact/avatares (1).png"
                        alt="Consultor 2"
                        width={54}
                        height={54}
                      />
                    </div>
                  </div>
                  <div className={styles.consultant}>
                    <div className={styles.consultantAvatar}>
                      <Image
                        src="/images/contact/avatares (2).png"
                        alt="Consultor 3"
                        width={54}
                        height={54}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
                    onKeyDown={(e) => handleFieldKeyDown(e, "name", phoneRef)}
                    onBlur={handleBlurValidate}
                    hasError={errors.name}
                    maxLength={60}
                    ref={nameRef}
                  />

                  <LivaField
                    type="tel"
                    id="phone"
                    name="phone"
                    label="Telefone"
                    value={formatPhoneBR(formData.phone)}
                    onChange={handleInputChange}
                    onKeyDown={(e) => handleFieldKeyDown(e, "phone", emailRef)}
                    onBlur={handleBlurValidate}
                    hasError={errors.phone}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={16}
                    ref={phoneRef}
                  />

                  <LivaField
                    type="email"
                    id="email"
                    name="email"
                    label="E-mail"
                    value={formData.email}
                    onChange={handleInputChange}
                    onKeyDown={(e) =>
                      handleFieldKeyDown(e, "email", messageRef)
                    }
                    onBlur={handleBlurValidate}
                    hasError={errors.email}
                    maxLength={120}
                    ref={emailRef}
                  />

                  <LivaField
                    type="textarea"
                    id="message"
                    name="message"
                    label="Mensagem"
                    value={formData.message}
                    onChange={handleInputChange}
                    onKeyDown={(e) =>
                      handleFieldKeyDown(e, "message", submitRef)
                    }
                    onBlur={handleBlurValidate}
                    hasError={errors.message}
                    ref={messageRef}
                    rows={4}
                    maxLength={500}
                  />

                  <LivaButton
                    type="primary"
                    size="large"
                    disabled={isSubmitting}
                    className={styles.submitButton}
                    ref={submitRef}
                  >
                    {isSubmitting ? "Enviando..." : "ENVIAR MENSAGEM"}
                  </LivaButton>

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

          {/* Seção de consultores - separada para mobile */}
          <div className={styles.consultantsSectionMobile}>
            <p className={styles.consultantsLabel}>Consultores online</p>
            <div className={styles.consultantsList}>
              <div className={styles.consultant}>
                <div className={styles.consultantAvatar}>
                  <Image
                    src="/images/contact/avatares.png"
                    alt="Consultor 1"
                    width={54}
                    height={54}
                  />
                </div>
              </div>
              <div className={styles.consultant}>
                <div className={styles.consultantAvatar}>
                  <Image
                    src="/images/contact/avatares (1).png"
                    alt="Consultor 2"
                    width={54}
                    height={54}
                  />
                </div>
              </div>
              <div className={styles.consultant}>
                <div className={styles.consultantAvatar}>
                  <Image
                    src="/images/contact/avatares (2).png"
                    alt="Consultor 3"
                    width={54}
                    height={54}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
