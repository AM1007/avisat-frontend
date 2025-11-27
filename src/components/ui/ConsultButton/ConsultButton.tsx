'use client';

import { useModal } from '@/context/ModalContext';
import styles from './ConsultButton.module.css';

interface ConsultButtonProps {
  variant: 'hero' | 'contact';
  className?: string;
  onClick?: () => void;
}

export default function ConsultButton({ 
  variant, 
  className = '',
  onClick
}: ConsultButtonProps) {
  const { openModal } = useModal();

  const buttonClass = variant === 'hero' 
    ? styles.heroButton 
    : styles.contactButton;

  const handleClick = () => {
    openModal();           
    if (onClick) onClick(); 
  };

  return (
    <button 
      type="button"
      onClick={handleClick}
      className={`${buttonClass} ${className}`}
    >
      <span className={styles.textContainer}>
        <span className={styles.defaultText}>Залишити запит</span>
        <span className={styles.hoverText}>Готові діяти?</span>
      </span>
    </button>
  );
}
