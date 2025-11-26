import Container from '@/components/ui/Container/Container';
import styles from './SmartHouseHowItLooksSection.module.css';

const features = [
  {
    title: 'Зручний додаток',
    description: 'Керування в кілька кліків',
    icon: 'smartphone',
  },
  {
    title: 'Повна інтеграція',
    description: "Усі системи з'єднані в одну екосистему",
    icon: 'link',
  },
  {
    title: 'Голосове управління',
    description: 'Працює з Alexa, Google Assistant, Siri',
    icon: 'mic',
  },
  {
    title: 'Автоматизація без кодингу',
    description: 'Усе вже налаштовано',
    icon: 'settings',
  },
  {
    title: 'Безпека на рівні банку',
    description: "Зашифровані з'єднання, хмарні сервіси, резервні копії",
    icon: 'lock',
  },
  {
    title: 'Гнучке масштабування',
    description: 'Пристрої, сценарії, зони, без перебудов',
    icon: 'maximize',
  },
];

function SmartphoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

function LinkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function MicIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  );
}

function SettingsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function MaximizeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 3 21 3 21 9" />
      <polyline points="9 21 3 21 3 15" />
      <line x1="21" x2="14" y1="3" y2="10" />
      <line x1="3" x2="10" y1="21" y2="14" />
    </svg>
  );
}

const iconComponents: Record<string, React.FC<{ className?: string }>> = {
  smartphone: SmartphoneIcon,
  link: LinkIcon,
  mic: MicIcon,
  settings: SettingsIcon,
  lock: LockIcon,
  maximize: MaximizeIcon,
};

export default function SmartHouseHowItLooksSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Як це виглядає?</h2>
          
          <div className={styles.grid}>
            {features.map((feature, index) => {
              const IconComponent = iconComponents[feature.icon];
              return (
                <div key={index} className={styles.card}>
                  <div className={styles.iconWrapper}>
                    <IconComponent className={styles.icon} />
                  </div>
                  <h4 className={styles.cardTitle}>{feature.title}</h4>
                  <p className={styles.cardDescription}>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}