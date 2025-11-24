import Image from "next/image";
import styles from './MobileMenuButton.module.css';

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export default function MobileMenuButton({ 
  isOpen, 
  onClick, 
  className = '' 
}: MobileMenuButtonProps) {
  return (
    <button
      className={`${styles.menuButton} ${className}`}
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {isOpen ? (
        
          <Image
            src="/icons/Cross.svg"
            alt="Close"
            width={24}
            height={24}
            className={styles.crossIcon}
          />

      ) : (
        <Image
          src="/icons/Burger.svg"
          alt="Menu"
          width={30}
          height={24}
          className="object-contain"
        />
      )}
    </button>
  );
}