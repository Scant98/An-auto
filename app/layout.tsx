import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "./fonts/Inter-Variable.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

const baseUrl = "https://www.anautotrading.co.tz";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "A.N Auto Trading & General Supplies | Dar es Salaam, Tanzania",
    template: "%s | A.N Auto Trading & General Supplies",
  },
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
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "A.N Auto Trading & General Supplies",
    description:
      "Import-grade spare parts delivered across Tanzania. Motor vehicles, forklifts, trucks & more.",
    url: baseUrl,
    siteName: "A.N Auto Trading & General Supplies",
    images: [
      {
        url: "/logo-full.png",
        width: 1239,
        height: 864,
        alt: "A.N Auto Trading & General Supplies logo",
      },
    ],
    type: "website",
    locale: "en_TZ",
  },
  twitter: {
    card: "summary",
    title: "A.N Auto Trading & General Supplies",
    description:
      "Import-grade spare parts delivered across Tanzania. Motor vehicles, forklifts, trucks & more.",
    images: ["/logo-full.png"],
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
