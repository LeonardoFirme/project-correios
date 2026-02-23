// src/app/layout.tsx
import type { Metadata } from "next";
import { Header } from "@/layouts/Header";
import { Footer } from "@/layouts/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Correios: encomendas, rastreamento, telegramas, cep, cartas...",
  description: "Empresa Brasileira de Correios e Telégrafos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-white antialiased min-h-screen flex flex-col font-sans text-gray-800">
        <Header />
        <main className="flex-1 w-full flex flex-col items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}