import type { Metadata } from "next";
import { Header } from "../components/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ben.Imob - Gestão de Imóveis",
  description: "Sistema de gestão de imóveis para corretores e imobiliárias.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Header/>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
