// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { nunito, strong } from "@/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avisat",
  description: "audio video smart advanced tech",
};

// Добавь export viewport
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5, // Опционально, для доступности
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body 
        className={`${nunito.variable} ${strong.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}