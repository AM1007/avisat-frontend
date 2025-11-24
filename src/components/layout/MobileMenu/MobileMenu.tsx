'use client';

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navLinks } from "../../../data/dataLinks";
import styles from './MobileMenu.module.css';
import ConsultButton from "../../ui/ConsultButton/ConsultButton";

interface MobileMenuProps {
  closeMenu: () => void;
  isOpen?: boolean;
}

export default function MobileMenu({ closeMenu, isOpen }: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [closeMenu, isOpen]);

  return (
    <div className={`${styles.mobileMenuOverlay} ${isOpen ? styles.open : ''}`}>
      <div className={styles.mobileMenuContent}>
        <div className={styles.menuHeader}>
          <div className={styles.phoneContainer}>
            <a href="tel:+380660876571" className={styles.phoneLink}>
              +380 66 087 65 71
            </a>
          </div>
        </div>

        <nav className={styles.menuNavigation}>
          <ul className={styles.menuList}>
            {navLinks.map(({ id, href, label }, index) => (
              <li key={id} className={styles.menuItem} style={{ transitionDelay: `${0.1 + index * 0.05}s` }}>
                <Link
                  href={href}
                  className={`${styles.menuLink} ${pathname === href ? styles.menuLinkActive : ''}`}
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className={styles.menuFooter}>
          <ConsultButton 
            variant="contact"
            onClick={closeMenu}              
            className={styles.consultButton}
          />
        </div>
      </div>
    </div>
  );
}
