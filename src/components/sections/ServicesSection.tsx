import ServiceCard from "../ui/ServiceCard";

export default function ServicesSection() {
  const services = [
    {
      title: "ОХОРОННА СИГНАЛІЗАЦІЯ",
      description: "Захист вашого об'єкту та контролювання доступу",
      image: "/service-security.jpg",
    },
    {
      title: "ВІДЕОСПОСТЕРЕЖЕННЯ",
      description: "Системи нагляду та контролю доступу",
      image: "/service-video.jpg",
    },
    {
      title: "ОХОРОНА ПЕРИМЕТРУ",
      description: "Захист території, об'єкту та розподілу потоків",
      image: "/service-perimeter.jpg",
    },
    {
      title: "РОЗУМНИЙ ДІМ",
      description: "Автоматизація та управління інженерними системами",
      image: "/service-smart-home.jpg",
    },
    {
      title: "ПОЖЕЖНА СИГНАЛІЗАЦІЯ",
      description: "Системи запобігання пожежам",
      image: "/service-fire.jpg",
    },
    {
      title: "ДИСПЕТЧЕРИЗАЦІЯ",
      description: "Системи моніторингу та контролю",
      image: "/service-monitoring.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center font-semibold text-red-600 mb-12">
          ПОСЛУГИ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
