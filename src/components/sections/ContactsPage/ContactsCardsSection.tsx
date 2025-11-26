import Container from '@/components/ui/Container/Container';
import styles from './ContactsCardsSection.module.css';

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

const contactCards = [
  {
    icon: 'mapPin',
    title: 'Адреса',
    content: (
      <>
        просп. Академіка Палладіна, 46/2, корпус 4<br />
        Київ, 03142, Україна
      </>
    ),
    link: null,
  },
  {
    icon: 'phone',
    title: 'Телефон',
    content: '+380 66 087 6571',
    link: 'tel:+380660876571',
  },
  {
    icon: 'mail',
    title: 'Електронна пошта',
    content: 'info@avisat.ua',
    link: 'mailto:info@avisat.ua',
  },
  {
    icon: 'clock',
    title: 'Графік роботи',
    content: (
      <>
        Пн — Пт: 09:00 — 18:00<br />
        Сб — Нд: за домовленістю
      </>
    ),
    link: null,
  },
];

const iconComponents: Record<string, React.FC<{ className?: string }>> = {
  mapPin: MapPinIcon,
  phone: PhoneIcon,
  mail: MailIcon,
  clock: ClockIcon,
};

export default function ContactsCardsSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          {contactCards.map((card, index) => {
            const IconComponent = iconComponents[card.icon];
            return (
              <div key={index} className={styles.card}>
                <div className={styles.iconWrapper}>
                  <IconComponent className={styles.icon} />
                </div>
                <div className={styles.cardContent}>
                  <h2 className={styles.cardTitle}>{card.title}</h2>
                  {card.link ? (
                    <a href={card.link} className={styles.cardLink}>
                      {card.content}
                    </a>
                  ) : (
                    <p className={styles.cardText}>{card.content}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}