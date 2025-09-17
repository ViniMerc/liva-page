"use client";

import { useState, forwardRef } from "react";
import styles from "./LivaField.module.css";

const LivaField = forwardRef(function LivaField(
  {
    type = "text",
    id,
    name,
    label,
    value,
    onChange,
    onBlur: onBlurProp,
    onFocus: onFocusProp,
    placeholder,

    rows = 4,
    className = "",
    hasError = false,
    ...props
  },
  ref
) {
  const [isFocused, setIsFocused] = useState(false);
  const isTextarea = type === "textarea";

  const isLabelFloating = isFocused || (value && value.length > 0);

  const handleFocus = (e) => {
    setIsFocused(true);
    if (onFocusProp) onFocusProp(e);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    if (onBlurProp) onBlurProp(e);
  };

  return (
    <div className={`${styles.formGroup} ${className}`}>
      <div
        className={`${styles.inputContainer} ${
          isTextarea ? styles.textareaContainer : ""
        }`}
      >
        <label
          htmlFor={id}
          className={`${styles.label} ${
            isLabelFloating ? styles.labelFloating : styles.labelDefault
          }`}
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
            className={`${styles.textarea} ${isFocused ? styles.focused : ""} ${
              hasError ? styles.error : ""
            }`}
            rows={rows}
            ref={ref}
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
            className={`${styles.input} ${isFocused ? styles.focused : ""} ${
              hasError ? styles.error : ""
            }`}
            ref={ref}
            {...props}
          />
        )}
      </div>
      {hasError && (
        <div className={styles.errorMessage}>
          *por favor, preencha corretamente
        </div>
      )}
    </div>
  );
});

export default LivaField;
