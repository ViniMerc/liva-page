import styles from './LivaButton.module.css';

export default function LivaButton({ 
  children, 
  icon, 
  type = 'primary', 
  size = 'medium',
  disabled = false,
  onClick,
  className = '',
  ...props 
}) {
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
}
