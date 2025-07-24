import Image from "next/image";
import Link from "next/link";
import styles from './ArticleCard.module.css';

interface ArticleCardProps {
  title: string;
  image: string;
  url: string;
}

export default function ArticleCard({ title, image, url }: ArticleCardProps) {
  return (
    <div className={styles.articleCard}>
      <div className={styles.imageContainer}>
        <Image 
          src={image} 
          alt={title} 
          fill 
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className={styles.overlay}>
          <h3 className={styles.title}>
            {title}
          </h3>
          <Link
            href={url}
            className={styles.button}
          >
            Детальніше
          </Link>
        </div>
      </div>
    </div>
  );
}