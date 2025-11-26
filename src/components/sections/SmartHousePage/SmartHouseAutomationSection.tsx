import Container from '@/components/ui/Container/Container';
import styles from './SmartHouseAutomationSection.module.css';

const automationItems = [
  {
    title: 'Освітлення',
    description: 'Дім сам знає, коли вмикати/вимикати світло',
    icon: 'lightbulb',
  },
  {
    title: 'Клімат',
    description: 'Температура регулюється автоматично під ваш графік',
    icon: 'thermometer',
  },
  {
    title: 'Штори і жалюзі',
    description: 'Відкриваються разом із будильником або заходом сонця',
    icon: 'blinds',
  },
  {
    title: 'Мультимедіа',
    description: 'Улюблена музика в кожній кімнаті без зусиль',
    icon: 'music',
  },
  {
    title: 'Безпека',
    description: 'Сигналізація, камери, замки, інтерком — усе під контролем',
    icon: 'shield',
  },
  {
    title: 'Електроприлади',
    description: 'Повна енергоменеджмент-система: вимикається те, що не використовується',
    icon: 'zap',
  },
];

function LightbulbIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

function ThermometerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
    </svg>
  );
}

function BlindsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M3 15h18" />
      <path d="M12 3v18" />
    </svg>
  );
}

function MusicIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function ZapIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

const iconComponents: Record<string, React.FC<{ className?: string }>> = {
  lightbulb: LightbulbIcon,
  thermometer: ThermometerIcon,
  blinds: BlindsIcon,
  music: MusicIcon,
  shield: ShieldIcon,
  zap: ZapIcon,
};

export default function SmartHouseAutomationSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Що ми автоматизуємо?</h2>
          
          <div className={styles.grid}>
            {automationItems.map((item, index) => {
              const IconComponent = iconComponents[item.icon];
              return (
                <div key={index} className={styles.card}>
                  <div className={styles.iconWrapper}>
                    <IconComponent className={styles.icon} />
                  </div>
                  <div className={styles.cardContent}>
                    <h4 className={styles.cardTitle}>{item.title}</h4>
                    <p className={styles.cardDescription}>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}