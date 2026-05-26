import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "AZIAN RENTAL — Аренда спецтехники в Казахстане",
  description:
    "Аренда спецтехники в Павлодаре, Астане и Алматы. Экскаваторы, краны, самосвалы, бульдозеры с машинистом. Выезд за 2 часа. Документы для бухгалтерии с НДС.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col font-[family-name:var(--font-manrope)]`}>
        {children}
      </body>
    </html>
  );
}
