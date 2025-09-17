import "./globals.css";

export const metadata = {
  title: "Liva - Construímos confiança e realizamos sonhos!",
  description: "Descubra os melhores empreendimentos imobiliários com a Liva. Apartamentos de qualidade em localizações privilegiadas.",
  keywords: "imóveis, apartamentos, empreendimentos, construção, Liva",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
