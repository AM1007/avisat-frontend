'use client';

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../../../data/dataLinks";
import MobileMenu from "../MobileMenu/MobileMenu";
import MobileMenuButton from "../../ui/MobileMenuButton/MobileMenuButton";
import styles from './Header.module.css';
import Container from "@/components/ui/Container/Container";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const isNotHome = pathname !== '/';
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const filteredNavLinks = navLinks.filter(link => link.id !== 1);
  
  const leftNavLinks = filteredNavLinks.filter(link => [2, 3].includes(link.id)); 
  const rightNavLinks = filteredNavLinks.filter(link => [4, 5].includes(link.id)); 

  return (
    <header className={styles.header}>
      <Container className="container">
        <div className={styles.mobileHeader}>
          <div className={styles.mobileContainer}>
            <Link href="/" className={`${styles.logoLink} ${mobileMenuOpen ? styles.logoHidden : ''}`}>
              <Image
                src={isNotHome ? "/icons/logo-mobile-dark.svg" : "/icons/logo-mobile.svg"}
                alt="АвіSat logo"
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

        <div className={styles.desktopHeader}>
          <div className={styles.leftHeader}>
            <div className={styles.leftContent}>
              <div className={styles.logo}>
                <Link href="/">
                  <div className={styles.logoMobileInDesktop}>
                    <Image
                      src={isNotHome ? "/icons/logo-mobile-dark.svg" : "/icons/logo-mobile.svg"}
                      alt="АвіSat logo"
                      width={70}
                      height={28}
                      priority
                    />
                  </div>
                  <div className={styles.logoDesktop}>
                    <Image
                      src={isNotHome ? "/icons/logo-desktop-dark.svg" : "/icons/logo-desktop.svg"}
                      alt="АвіSat logo"
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
                      className={`${styles.navLink} ${isNotHome ? styles.navLinkDark : ''} ${pathname === href ? styles.navLinkActive : ''}`}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </nav>
            </div>
          </div>

          <div className={styles.rightHeader}>
            <div className={styles.rightContent}>
              <nav className={styles.rightNavigation}>
                <div className={styles.navList}>
                  {rightNavLinks.map(({ id, href, label }) => (
                    <Link 
                      key={id}
                      href={href} 
                      className={`${styles.navLink} ${styles.navLinkLight} ${pathname === href ? styles.navLinkActive : ''}`}
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

                <a href="tel:+380660876571" className={styles.phoneLink}>
                  +380 66 087 65 71
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <MobileMenu closeMenu={() => setMobileMenuOpen(false)} isOpen={mobileMenuOpen} />
    </header>
  );
}



