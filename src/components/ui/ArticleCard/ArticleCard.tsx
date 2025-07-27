'use client';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";
import styles from './ArticleCard.module.css';

interface ArticleCardProps {
  title: string;
  image: string;
  url: string;
  index?: number;
}

export default function ArticleCard({ title, image, url, index = 0 }: ArticleCardProps) {
  const alignmentClass = index % 2 === 0 ? styles.titleLinkOdd : styles.titleLinkEven;
  const router = useRouter();

  const handleClick = () => {
    router.push(url);
  }


  return (
    <div className={styles.articleCard} onClick={handleClick}>
      <div className={styles.imageContainer}>
        <Image 
          src={image} 
          alt={title} 
          fill 
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className={styles.overlay}>
        </div>
      </div>
        <div className={styles.titleBox}>
          <h3 className={styles.title}>
            {title}
          </h3>
        </div>
          <Link
            href={url}
            className={`${styles.titleLink} ${alignmentClass}`}
          >
            докладніше...
          </Link>
    </div>
  );
}