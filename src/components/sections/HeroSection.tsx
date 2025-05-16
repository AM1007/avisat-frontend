import Image from "next/image";
// import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] flex flex-col md:flex-row">
      <div className="bg-black flex-1 relative flex items-center justify-center p-8">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/monitor-center.jpg" // Убедитесь, что у вас есть это изображение
            alt="Моніторинговий центр"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 text-white max-w-md mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 mb-4">
            Комплексні рішення
            <br />з безпеки та автоматизації
          </h1>
          <button className="bg-white text-black px-6 py-3 mt-4 hover:bg-red-600 hover:text-white transition-colors">
            ОТРИМАТИ КОНСУЛЬТАЦІЮ
          </button>
        </div>
      </div>

      <div className="bg-gray-100 flex-1 relative hidden md:block">
        <Image
          src="/security-fence.jpg" // Убедитесь, что у вас есть это изображение
          alt="Система безпеки"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
