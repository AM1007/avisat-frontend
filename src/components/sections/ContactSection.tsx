export default function ContactSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-md">
        <h2 className="text-3xl text-center font-semibold mb-8">
          Звяжіться з нами
        </h2>

        <form className="space-y-4">
          <div>
            <input
              type="tel"
              placeholder="Ваш +38 та мобільний телефон"
              className="w-full p-3 border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white p-3 hover:bg-red-600 transition-colors font-semibold"
          >
            ОТРИМАТИ КОНСУЛЬТАЦІЮ
          </button>
        </form>
      </div>
    </section>
  );
}
