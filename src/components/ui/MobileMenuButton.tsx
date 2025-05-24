'use client';

import Image from "next/image";

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
      className={`flex items-center justify-center ${className}`}
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {isOpen ? (
        <Image
          src="/icons/Cross.svg"
          alt="Close"
          width={16}
          height={16}
          className="object-contain"
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