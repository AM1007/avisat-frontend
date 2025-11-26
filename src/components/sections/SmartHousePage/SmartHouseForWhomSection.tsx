import Container from '@/components/ui/Container/Container';
import styles from './SmartHouseForWhomSection.module.css';

const targetAudience = [
  {
    text: 'Квартири у новобудовах',
    icon: 'building',
  },
  {
    text: 'Приватні будинки',
    icon: 'home',
  },
  {
    text: 'Таунхауси, дуплекси',
    icon: 'building2',
  },
  {
    text: 'Апартаменти для оренди',
    icon: 'key',
  },
  {
    text: 'Офіси або комерційні приміщення',
    icon: 'briefcase',
  },
  {
    text: 'Невеликі готелі та апарт-комплекси',
    icon: 'hotel',
  },
];

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M8 10h.01" />
      <path d="M16 10h.01" />
      <path d="M8 14h.01" />
      <path d="M16 14h.01" />
    </svg>
  );
}

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function Building2Icon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  );
}

function KeyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="7.5" cy="15.5" r="5.5" />
      <path d="m21 2-9.6 9.6" />
      <path d="m15.5 7.5 3 3L22 7l-3-3" />
    </svg>
  );
}

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function HotelIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
      <path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16" />
      <path d="M8 7h.01" />
      <path d="M16 7h.01" />
      <path d="M12 7h.01" />
      <path d="M12 11h.01" />
      <path d="M16 11h.01" />
      <path d="M8 11h.01" />
    </svg>
  );
}

const iconComponents: Record<string, React.FC<{ className?: string }>> = {
  building: BuildingIcon,
  home: HomeIcon,
  building2: Building2Icon,
  key: KeyIcon,
  briefcase: BriefcaseIcon,
  hotel: HotelIcon,
};

export default function SmartHouseForWhomSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Для кого?</h2>
          
          <div className={styles.grid}>
            {targetAudience.map((item, index) => {
              const IconComponent = iconComponents[item.icon];
              return (
                <div key={index} className={styles.card}>
                  <IconComponent className={styles.icon} />
                  <span className={styles.cardText}>{item.text}</span>
                </div>
              );
            })}
          </div>
          
          <div className={styles.footer}>
            <p className={styles.footerText}>
              Якщо ви хочете <span className={styles.footerHighlight}>менше думати про побут</span> і{' '}
              <span className={styles.footerHighlight}>більше керувати своїм часом</span> — це рішення для вас.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}