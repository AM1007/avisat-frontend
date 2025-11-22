'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../../../data/dataLinks";
import MobileMenu from "../MobileMenu/MobileMenu";
import MobileMenuButton from "../../ui/MobileMenuButton";
import styles from './Header.module.css';
import Container from "@/components/ui/Container/Container";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const leftNavLinks = navLinks.filter(link => [2, 3].includes(link.id)); 
  const rightNavLinks = navLinks.filter(link => [4, 5].includes(link.id)); 

  return (
    <header className={styles.header}>
      <Container className="container">
        {/* Мобильная версия хедера (до 768px) */}
        <div className={styles.mobileHeader}>
          <div className={styles.mobileContainer}>
            <Link href="/" className={`${styles.logoLink} ${mobileMenuOpen ? styles.logoHidden : ''}`}>
              <Image
                src="/icons/logo-mobile.svg"
                alt="АvіSat logo"
                width={70}
                height={28}
                priority
                className="pt-[10px]"
              />
            </Link>

            <div className={styles.flagButtonContainer}> 
              <div className={styles.flagMobile}>
                <Image
                  src="/icons/flag-mobile.svg"
                  alt="Flag"
                  width={30}
                  height={30}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
              <div className={styles.headerRight}>
                <MobileMenuButton 
                  isOpen={mobileMenuOpen} 
                  onClick={toggleMobileMenu} 
                  className="w-[30px]" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Десктопная версия хедера (от 768px) */}
        <div className={styles.desktopHeader}>
          {/* Левая часть хедера (черная) */}
          <div className={styles.leftHeader}>
            <div className={styles.leftContent}>
              <div className={styles.logo}>
                <Link href="/">
                  <div className={styles.logoMobileInDesktop}>
                    <Image
                      src="/icons/logo-mobile.svg"
                      alt="АvіSat logo"
                      width={70}
                      height={28}
                      priority
                    />
                  </div>
                  <div className={styles.logoDesktop}>
                    <Image
                      src="/icons/logo-desktop.svg"
                      alt="АvіSat logo"
                      width={213}
                      height={80}
                      priority
                    />
                  </div>
                </Link>
              </div>

              <nav className={styles.leftNavigation}>
                <div className={styles.navList}>
                  {leftNavLinks.map(({ id, href, label }) => (
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
            </div>
          </div>

          {/* Правая часть хедера (белая) */}
          <div className={styles.rightHeader}>
            <div className={styles.rightContent}>
              <nav className={styles.rightNavigation}>
                <div className={styles.navList}>
                  {rightNavLinks.map(({ id, href, label }) => (
                    <Link 
                      key={id}
                      href={href} 
                      className={`${styles.navLink} ${styles.navLinkLight}`}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </nav>

              <div className={styles.flagDesktopContainer}>
                <div className={styles.flagDesktopSmall}>
                  <Image
                    src="/icons/flag-mobile.svg"
                    alt="Flag"
                    width={30}
                    height={30}
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
                
                <div className={styles.flagDesktop}>
                  <Image
                    src="/icons/flag-desktop.svg"
                    alt="Flag"
                    width={33}
                    height={65}
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>

                <a href="tel:+380444066970" className={styles.phoneLink}>
                  +380 44 406 69 70
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Мобильное меню - всегда рендерим, управляем видимостью через CSS */}
      <MobileMenu closeMenu={() => setMobileMenuOpen(false)} isOpen={mobileMenuOpen} />
    </header>
  );
}