import localFont from "next/font/local";

// Подключение Nunito как переменного шрифта
export const nunito = localFont({
  src: [
    {
      path: "../../public/fonts/Nunito-VariableFont_wght.ttf",
      style: "normal",
    },
  ],
  variable: "--font-nunito", // CSS переменная для использования
});

// Подключение Strong Regular
export const strong = localFont({
  src: "../../public/fonts/Strong-Regular.ttf",
  variable: "--font-strong",
});
