import ServiceCard from "../../ui/ServiceCard/ServiceCard";
import servicesLinks from "../../../data/servicesLinks"


export default function ServicesSection() {

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center font-semibold text-red-600 mb-12">
          ПОСЛУГИ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesLinks.map((service, index) => (
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
