import { forwardRef } from 'react';
import styles from './LivaButton.module.css';

const LivaButton = forwardRef(function LivaButton({ 
  children, 
  icon, 
  type = 'primary', 
  size = 'medium',
  disabled = false,
  onClick,
  className = '',
  ...props 
}, ref) {
  const buttonClasses = [
    styles.button,
    styles[type],
    styles[size],
    disabled ? styles.disabled : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button 
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      ref={ref}
      {...props}
    >
      {icon && (
        <span className={styles.icon}>
          {icon}
        </span>
      )}
      {children && (
        <span className={styles.text}>
          {children}
        </span>
      )}
    </button>
  );
});

export default LivaButton;
