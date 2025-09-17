"use client";

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
  const isTextarea = type === "textarea";

  return (
    <div className={`${styles.formGroup} ${className}`}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      {isTextarea ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={styles.textarea}
          rows={rows}
          placeholder={placeholder}
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
          className={styles.input}
          placeholder={placeholder}
          required={required}
          {...props}
        />
      )}
    </div>
  );
}
