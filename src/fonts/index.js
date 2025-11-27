import localFont from "next/font/local";

export const nunito = localFont({
  src: [
    {
      path: "../../public/fonts/Nunito-VariableFont_wght.ttf",
      style: "normal",
    },
  ],
  variable: "--font-nunito",
});

export const strong = localFont({
  src: "../../public/fonts/Strong-Regular.ttf",
  variable: "--font-strong",
});
