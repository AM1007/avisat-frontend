import styles from './ServiceCard.module.css';
import Image from "next/image";
// import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ServiceCard({ title, description, image }: ServiceCardProps) {
  return (
      <div className={styles.serviceCard}>
        <div className={styles.imageContainer}>
          <Image
             src={image}
             alt={title}
             fill
             sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) calc(50vw - 32px), calc(33vw - 27px)"
             className={styles.serviceImage}   
          />
        </div>
           <div className={styles.cardContent}>
            <h3 className={styles.imageTitle}>{title}</h3>
            <p className={styles.cardDescription}>{description}</p>
           </div>
      </div>
  );
}