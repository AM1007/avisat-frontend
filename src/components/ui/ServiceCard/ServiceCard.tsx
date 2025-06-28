import styles from './ServiceCard.module.css';
import Image from "next/image";
// import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ServiceCard({ title, description, image }: ServiceCardProps) {
   // Отладка: проверяем получаемые пропсы
  console.log('ServiceCard props:', { title, image });
  return (
      <div className={styles.serviceCard}>
        <div className={styles.imageContainer}>
          <Image
             src={image}
             alt={title}
             fill
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