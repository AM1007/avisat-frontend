import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center justify-center md:justify-start">
              <div className="relative h-10 w-24">
                <Image
                  src="/logo.svg" // Убедитесь, что у вас есть этот файл в папке public
                  alt="АвіSat logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xs ml-2">
                audio video smart advanced tech
              </span>
            </div>
            <div className="text-xs mt-2 text-center md:text-left">
              © 2023 АвіСат. Всі права захищені.
            </div>
          </div>

          <div className="text-sm text-center md:text-right">
            <p>Київ, Україна</p>
            <p>+380 44 406 69 70</p>
            <p>info@avisat.ua</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
