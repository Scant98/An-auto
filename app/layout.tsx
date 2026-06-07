import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "A.N Auto Trading & General Supplies | Dar es Salaam, Tanzania",
  description:
    "Import-grade spare parts for motor vehicles, forklifts, trucks, industrial machines, and building materials. Based in Dar es Salaam, Tanzania.",
  keywords: [
    "spare parts Tanzania",
    "auto parts Dar es Salaam",
    "forklift parts Tanzania",
    "truck parts Tanzania",
    "industrial parts Tanzania",
    "building materials Tanzania",
  ],
  openGraph: {
    title: "A.N Auto Trading & General Supplies",
    description:
      "Import-grade spare parts delivered across Tanzania. Motor vehicles, forklifts, trucks & more.",
    type: "website",
    locale: "en_TZ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
