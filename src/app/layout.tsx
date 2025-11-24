import type { Metadata, Viewport } from "next";
import { nunito, strong } from "@/fonts";
import { ModalProvider } from "@/context/ModalContext";
import ContactModal from "@/components/ui/ContactModal/ContactModal";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avisat",
  description: "audio video smart advanced tech",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
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
        <ModalProvider>
          {children}
          <ContactModal />
        </ModalProvider>
      </body>
    </html>
  );
}