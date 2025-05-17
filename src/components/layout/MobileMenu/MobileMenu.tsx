'use client';

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "../../../data/dataLinks";

interface MobileMenuProps {
  closeMenu: () => void;
}

export default function MobileMenu({ closeMenu }: MobileMenuProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [closeMenu]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 z-10">
      <div className="container mx-auto h-full flex flex-col">
        
        <div className="py-6 border-b border-gray-800 flex justify-between items-center px-4">
          
          <div className="flex items-center w-8">
            <Image
              src="/icons/FlagMobile.svg"
              alt="Український прапор"
              width={20}
              height={16}
              className="object-contain transform -rotate-90"
            />
          </div>
          
          <div className="flex-1 text-center">
            <a href="tel:+380444066970" className="text-white text-lg ml-3 sm:ml-4 md:ml-6 lg:ml-8">
              +380 44 406 69 70
            </a>
          </div>
          
          <div className="flex items-center w-8 justify-end">
            <button
              className="text-white hover:text-red-500 transition-colors"
              onClick={closeMenu}
              aria-label="Закрыть меню"
            >
              <Image
                src="/icons/Cross.svg"
                alt="Закрыть"
                width={16}
                height={16}
                className="object-contain"
              />
            </button>
          </div>
        </div>

        <nav className="flex-1 flex flex-col justify-center">
          <ul className="space-y-6 text-center">
            {navLinks.map(({ id, href, label }) => (
              <li key={id}>
                <Link
                  href={href}
                  className="text-2xl text-white hover:text-red-500 transition-colors block py-2"
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="py-6 border-t border-gray-800 flex justify-center">
          <button 
            className="bg-white text-black px-6 py-3 hover:bg-red-600 hover:text-white transition-colors font-medium"
            onClick={closeMenu}
          >
            ОТРИМАТИ КОНСУЛЬТАЦІЮ
          </button>
        </div>
      </div>
    </div>
  );
}