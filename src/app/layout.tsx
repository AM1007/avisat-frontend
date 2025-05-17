import type { Metadata } from "next";
import { nunito, strong } from "@/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avisat",
  description: "audio video smart advanced tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${strong.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
