import Container from '@/components/ui/Container/Container';
import styles from './SecurityCardsSection.module.css';

const solutions = [
  {
    title: 'Охоронна сигналізація',
    description: 'миттєве сповіщення про проникнення',
    icon: 'shield',
  },
  {
    title: 'Відеоспостереження',
    description: 'постійний візуальний контроль',
    icon: 'video',
  },
  {
    title: 'Контроль доступу',
    description: 'керування тим, хто і коли має доступ',
    icon: 'key',
  },
  {
    title: 'Захист периметру',
    description: 'сенсори руху, бар\'єри, розумні бар\'єри',
    icon: 'fence',
  },
  {
    title: 'Інтеграція з розумним домом',
    description: 'все під одним керуванням',
    icon: 'home',
  },
  {
    title: 'Пожежна сигналізація',
    description: 'тепло, дим, тривога, реагування',
    icon: 'flame',
  },
];

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function VideoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 8-6 4 6 4V8Z" />
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
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

function FenceIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 3v18" />
      <path d="M12 3v18" />
      <path d="M20 3v18" />
      <path d="M4 8h16" />
      <path d="M4 14h16" />
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

function FlameIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}

const iconComponents: Record<string, React.FC<{ className?: string }>> = {
  shield: ShieldIcon,
  video: VideoIcon,
  key: KeyIcon,
  fence: FenceIcon,
  home: HomeIcon,
  flame: FlameIcon,
};

export default function SecurityCardsSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          {solutions.map((solution, index) => {
            const IconComponent = iconComponents[solution.icon];
            return (
              <div key={index} className={styles.card}>
                <div className={styles.iconWrapper}>
                  <IconComponent className={styles.icon} />
                </div>
                <h3 className={styles.cardTitle}>{solution.title}</h3>
                <p className={styles.cardDescription}>{solution.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}