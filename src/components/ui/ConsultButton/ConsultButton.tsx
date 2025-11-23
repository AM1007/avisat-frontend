'use client';

import styles from './ConsultButton.module.css';

interface ConsultButtonProps {
  variant: 'hero' | 'contact';
  onClick?: () => void;
  className?: string;
}

export default function ConsultButton({ 
  variant, 
  onClick,
  className = '' 
}: ConsultButtonProps) {
  const buttonClass = variant === 'hero' 
    ? styles.heroButton 
    : styles.contactButton;

  return (
    <button 
      type="button"
      onClick={onClick}
      className={`${buttonClass} ${className}`}
    >
      ОТРИМАТИ КОНСУЛЬТАЦІЮ
    </button>

  );
}