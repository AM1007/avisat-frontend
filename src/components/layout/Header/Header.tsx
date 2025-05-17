'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../../../data/dataLinks";
import MobileMenu from "../MobileMenu/MobileMenu";
import MobileMenuButton from "../../ui/MobileMenuButton";
import styles from './Header.module.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

const filteredNavLinks = navLinks.filter(link => link.id !== 1);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.flexBetween}>
          <div className={styles.logo}>
            <Link href="/" className={styles.logo}>
              <div className={styles.logoMobile}>
                <Image
                  src="/icons/logoMobile.svg"
                  alt="АvіSat logo"
                  width={70}
                  height={28}
                  priority
                />
              </div>
              
              {/* Десктопный логотип */}
              <div className={styles.logoDesktop}>
                <Image
                  src="/icons/LogoDesktop.svg"
                  alt="АvіSat logo"
                  width={213}
                  height={80}
                  priority
                />
              </div>

            </Link>
          </div>

          {/* Центральная часть - навигационное меню для десктопа */}
          <nav className={styles.navigation}>
            <div className={styles.navList}>
              {filteredNavLinks.map(({ id, href, label }) => (
                <Link 
                  key={id}
                  href={href} 
                  className={styles.navLink}
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Правая часть хедера */}
          <div className={styles.headerRight}>
            {/* Мобильная версия: флаг */}
            <div className={styles.flagMobile}>
              <Image
                src="/icons/FlagMobile.svg"
                alt="Flag"
                width={30}
                height={30}
                className="object-contain"
              />
            </div>
            
            {/* Десктопная версия: флаг и телефон */}
            <div className={styles.flagDesktopContainer}>
              <div className={styles.flagDesktop}>
                <Image
                  src="/icons/FlagMobile.svg"
                  alt="Flag"
                  width={24}
                  height={16}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
              <a href="tel:+380444066970" className={styles.phoneLink}>
                +380 44 406 69 70
              </a>
            </div>

            {/* Кнопка мобильного меню */}
            <MobileMenuButton 
              isOpen={mobileMenuOpen} 
              onClick={toggleMobileMenu} 
              className="md:hidden w-[30px]" 
            />
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {mobileMenuOpen && <MobileMenu closeMenu={() => setMobileMenuOpen(false)} />}
    </header>
  );
}