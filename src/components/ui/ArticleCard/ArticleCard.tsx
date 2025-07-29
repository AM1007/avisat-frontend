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
  screenPosition?: number; // Новый пропс для позиции на экране
  direction?: 'forward' | 'backward'; // Направление движения для анимации
}

export default function ArticleCard({ 
  title, 
  image, 
  url, 
  index = 0, 
  screenPosition,
  direction = 'forward'
}: ArticleCardProps) {
  // Используем screenPosition если он передан, иначе fallback на index
  const positionForAlignment = screenPosition !== undefined ? screenPosition : index;
  const alignmentClass = positionForAlignment % 2 === 0 ? styles.titleLinkOdd : styles.titleLinkEven;
  
  // Добавляем класс для направления анимации
  const directionClass = direction === 'forward' ? styles.animateForward : styles.animateBackward;
  
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
            className={`${styles.titleLink} ${alignmentClass} ${directionClass}`}
          >
            докладніше...
          </Link>
    </div>
  );
}

// 'use client';
// import { useRouter } from 'next/navigation';
// import Image from "next/image";
// import Link from "next/link";
// import styles from './ArticleCard.module.css';

// interface ArticleCardProps {
//   title: string;
//   image: string;
//   url: string;
//   index?: number;
//   screenPosition?: number; // Новый пропс для позиции на экране
// }

// export default function ArticleCard({ 
//   title, 
//   image, 
//   url, 
//   index = 0, 
//   screenPosition 
// }: ArticleCardProps) {
//   // Используем screenPosition если он передан, иначе fallback на index
//   const positionForAlignment = screenPosition !== undefined ? screenPosition : index;
//   const alignmentClass = positionForAlignment % 2 === 0 ? styles.titleLinkOdd : styles.titleLinkEven;
  
//   const router = useRouter();

//   const handleClick = () => {
//     router.push(url);
//   }

//   return (
//     <div className={styles.articleCard} onClick={handleClick}>
//       <div className={styles.imageContainer}>
//         <Image 
//           src={image} 
//           alt={title} 
//           fill 
//           className={styles.image}
//           sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
//         />
//         <div className={styles.overlay}>
//         </div>
//       </div>
//         <div className={styles.titleBox}>
//           <h3 className={styles.title}>
//             {title}
//           </h3>
//         </div>
//           <Link
//             href={url}
//             className={`${styles.titleLink} ${alignmentClass}`}
//           >
//             докладніше...
//           </Link>
//     </div>
//   );
// }
