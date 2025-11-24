'use client';

import { useModal } from '@/context/ModalContext';
import styles from './ConsultButton.module.css';

interface ConsultButtonProps {
  variant: 'hero' | 'contact';
  className?: string;
}

export default function ConsultButton({ 
  variant, 
  className = '' 
}: ConsultButtonProps) {
  const { openModal } = useModal();

  const buttonClass = variant === 'hero' 
    ? styles.heroButton 
    : styles.contactButton;

  return (
    <button 
      type="button"
      onClick={openModal}
      className={`${buttonClass} ${className}`}
    >
      ОТРИМАТИ КОНСУЛЬТАЦІЮ
    </button>
  );
}