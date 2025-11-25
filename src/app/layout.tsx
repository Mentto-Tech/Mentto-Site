import type { Metadata } from "next";
import { Merriweather, Nunito } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Mentto - Inovação e Gestão",
  description: "Aceleramos a Inovação, da Estratégia à Entrega",
  icons: {
    icon: "https://i0.wp.com/mentto.com.br/wp-content/uploads/2020/04/cropped-simbolo_cor.png?fit=32%2C32&ssl=1",
    apple: "https://i0.wp.com/mentto.com.br/wp-content/uploads/2020/04/cropped-simbolo_cor.png?fit=180%2C180&ssl=1",
  },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${merriweather.variable} ${nunito.variable} antialiased font-sans flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
