import Image from "next/image";
import Container from "@/components/ui/Container/Container";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContent}>
          <div className={styles.leftSection}>

            <div className={styles.logoContainer}>
              <div className={styles.logoMobile}>
                <Image
                  src="/icons/logo-mobile.svg"
                  alt="АвіSat logo"
                  width={70}
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
              {/* <span className={styles.tagline}>
                audio video smart advanced tech
              </span> */}
            </div>

          </div>

          <address className={styles.rightSection}>
            <p className={styles.adressText}>Київ, Україна</p>
            <a className={styles.adressText} href="tel:+380444066970">+380 44 406 69 70</a>
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