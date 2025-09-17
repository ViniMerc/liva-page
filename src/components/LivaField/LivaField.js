"use client";

import { useState } from "react";
import styles from "./LivaField.module.css";

export default function LivaField({
  type = "text",
  id,
  name,
  label,
  value,
  onChange,
  placeholder,
  required = false,
  rows = 4,
  className = "",
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);
  const isTextarea = type === "textarea";
  
  // Determina se o label deve estar "flutuando" (no topo)
  const isLabelFloating = isFocused || (value && value.length > 0);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={`${styles.formGroup} ${className}`}>
      <div className={`${styles.inputContainer} ${isTextarea ? styles.textareaContainer : ''}`}>
        <label 
          htmlFor={id} 
          className={`${styles.label} ${isLabelFloating ? styles.labelFloating : styles.labelDefault}`}
        >
          {label}
        </label>
        {isTextarea ? (
          <textarea
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={`${styles.textarea} ${isFocused ? styles.focused : ''}`}
            rows={rows}
            required={required}
            {...props}
          />
        ) : (
          <input
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={`${styles.input} ${isFocused ? styles.focused : ''}`}
            required={required}
            {...props}
          />
        )}
      </div>
    </div>
  );
}
