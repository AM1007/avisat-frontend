import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="relative h-8 w-20">
              <Image
                src="/logo.svg" // Убедитесь, что у вас есть этот файл в папке public
                alt="АвіSat logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xs ml-2 hidden sm:block">
              audio video smart advanced tech
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-red-500 transition-colors">
            Головна
          </Link>
          <Link
            href="/security"
            className="hover:text-red-500 transition-colors"
          >
            Системи безпеки
          </Link>
          <Link
            href="/smart-home"
            className="hover:text-red-500 transition-colors"
          >
            Розумний дім
          </Link>
          <Link href="/about" className="hover:text-red-500 transition-colors">
            Про компанію
          </Link>
          <Link
            href="/contacts"
            className="hover:text-red-500 transition-colors"
          >
            Контакти
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:block">
            <div className="flex items-center">
              <div className="h-4 w-6 mr-2">
                <Image
                  src="/flag.svg" // Украинский флаг SVG
                  alt="Українский прапор"
                  width={24}
                  height={16}
                />
              </div>
              <a href="tel:+380444066970" className="text-sm">
                +380 44 406 69 70
              </a>
            </div>
          </div>

          <button className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
