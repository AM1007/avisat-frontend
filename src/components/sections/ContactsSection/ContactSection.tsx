'use client';

// import styles from "./ContactsSection.module.css"

export default function ContactSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-md">
        <h2 className="text-3xl text-center font-semibold mb-8">
          Звяжіться з нами
        </h2>

          <button
            type="submit"
            className="w-full bg-black text-white p-3 hover:bg-red-600 transition-colors font-semibold"
          >
            ОТРИМАТИ КОНСУЛЬТАЦІЮ
          </button>

      </div>
    </section>
  );
}
