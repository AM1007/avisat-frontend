'use client';

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "../../../data/dataLinks";
import styles from './MobileMenu.module.css';

interface MobileMenuProps {
  closeMenu: () => void;
  isOpen?: boolean;
}

export default function MobileMenu({ closeMenu, isOpen }: MobileMenuProps) {
  useEffect(() => {
    // Только выполняем действия если меню открыто
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);

    // Блокируем прокрутку страницы ТОЛЬКО при открытом меню
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      // Возвращаем прокрутку при закрытии
      document.body.style.overflow = "auto";
    };
  }, [closeMenu, isOpen]); // Добавляем isOpen в зависимости

  return (
    <div className={`${styles.mobileMenuOverlay} ${isOpen ? styles.open : ''}`}>
      <div className={styles.mobileMenuContent}>
        <div className={styles.menuHeader}>
          <div className={styles.flagContainer}>
            <Image
              src="/icons/FlagMobile.svg"
              alt="Український прапор"
              width={16}
              height={20}
              className="object-contain transform -rotate-90"
            />
          </div>
          
          <div className={styles.phoneContainer}>
            <a href="tel:+380444066970" className={styles.phoneLink}>
              +380 44 406 69 70
            </a>
          </div>
          
          <div className={styles.closeButtonContainer}>
            <button
              className={styles.closeButton}
              onClick={closeMenu}
              aria-label="Закрыть меню"
            >
              <Image
                src="/icons/Cross.svg"
                alt="Закрыть"
                width={16}
                height={16}
                className="object-contain"
              />
            </button>
          </div>
        </div>

        <nav className={styles.menuNavigation}>
          <ul className={styles.menuList}>
            {navLinks.map(({ id, href, label }, index) => (
              <li key={id} className={styles.menuItem} style={{ transitionDelay: `${0.1 + index * 0.05}s` }}>
                <Link
                  href={href}
                  className={styles.menuLink}
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.menuFooter}>
          <button 
            className={styles.consultButton}
            onClick={closeMenu}
          >
            ОТРИМАТИ КОНСУЛЬТАЦІЮ
          </button>
        </div>
      </div>
    </div>
  );
}