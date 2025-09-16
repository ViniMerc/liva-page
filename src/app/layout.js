import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Liva - Construímos confiança e realizamos sonhos!",
  description: "Descubra os melhores empreendimentos imobiliários com a Liva. Apartamentos de qualidade em localizações privilegiadas.",
  keywords: "imóveis, apartamentos, empreendimentos, construção, Liva",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
