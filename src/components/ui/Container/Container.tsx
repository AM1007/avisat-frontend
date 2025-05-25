// Container.tsx
import { ReactNode } from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  children?: ReactNode;
  className?: string;
  fluid?: boolean;
  noGutter?: boolean;
}

export default function Container({ 
  children, 
  className = '', 
  fluid = false,
  noGutter = false 
}: ContainerProps) {
  // Определяем классы на основе пропсов
  const containerClass = fluid 
    ? styles.containerFluid 
    : styles.container;
    
  const gutterClass = noGutter 
    ? styles.containerNoGutter 
    : '';

  return (
    <div className={`${containerClass} ${gutterClass} ${className}`}>
      {children}
    </div>
  );
}