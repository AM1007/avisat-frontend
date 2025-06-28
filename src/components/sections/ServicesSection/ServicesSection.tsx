import servicesLinks from "../../../data/servicesLinks";
import Container from "@/components/ui/Container/Container";
import styles from './ServicesSection.module.css';
import ServiceCard from "@/components/ui/ServiceCard/ServiceCard";

export default function ServicesSection() {

  return (
    <section className={styles.servicesSection}>
      <Container>
        <div className={styles.servicesWrapper}>
          <h2 className={styles.servicesTitle}>Послуги</h2>

          <div className={styles.servicesCardWrapper}>
              {servicesLinks.map((service) => {
              // Отладка: логируем каждый рендер
              console.log(`Rendering service with ID: ${service.id}`);
              
              return (
                <ServiceCard
                  key={service.id}  // ✅ Привязка к ID (уникальный ключ)
                  title={service.title}
                  description={service.description}
                  image={service.image}
                />
              );
            })}
            
          </div>
        </div>

      </Container>
    </section>
  );
}