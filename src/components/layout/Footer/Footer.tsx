'use client';

import Image from "next/image";
import Container from "@/components/ui/Container/Container";
import styles from "./Footer.module.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContent}>
          <div className={styles.leftSection}>

            <button 
              type="button"
              onClick={scrollToTop}
              className={styles.logoButton}
              aria-label="Прокрутити на початок сторінки"
            >
              <div className={styles.logoMobile}>
                <Image
                  src="/icons/logo-mobile.svg"
                  alt="АвіSat logo"
                  width={90}
                  height={28}
                  priority
                />
              </div>
              <div className={styles.logoDesktop}>
                <Image
                  src="/icons/logo-desktop.svg"
                  alt="АвіSat logo"
                  width={213}
                  height={80}
                  priority
                />
              </div>
            </button>

          </div>

          <address className={styles.rightSection}>
            <p className={styles.adressText}>Київ, Україна</p>
            <a className={styles.adressText} href="tel:+380660876571">+380 66 087 6571</a>
            <a className={styles.adressText} href="mailto:info@avisat.ua">info@avisat.ua</a>
          </address>

          <div className={styles.copyright}>
                <p className={styles.adressText}>© 2025 АвіСат.</p>
                <p className={styles.adressText}>Всі права захищені.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}