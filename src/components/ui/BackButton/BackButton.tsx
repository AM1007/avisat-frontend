'use client';

import Link from 'next/link';
import styles from './BackButton.module.css';

interface BackButtonProps {
  href?: string;
  className?: string;
}

export default function BackButton({ 
  href = '/', 
  className = '' 
}: BackButtonProps) {
  return (
    <Link href={href} className={`${styles.backButton} ${className}`}>
      <span className={styles.arrow}>←</span>
      Повернутися на головну
    </Link>
  );
}