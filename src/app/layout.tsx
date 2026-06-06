import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const clashDisplay = localFont({
  src: "../../public/fonts/ClashDisplay-Variable.woff2",
  variable: "--font-clash",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://matsveiyakubovich.com"),
  title: "Matsvei Yakubovich | Personal Website",
  description: "Personal website and portfolio. More details coming soon.",
  openGraph: {
    title: "Matsvei Yakubovich | Personal Website",
    description: "Personal website and portfolio. More details coming soon.",
    url: "https://matsveiyakubovich.com",
    type: "website",
    locale: "en_US",
    siteName: "Matsvei Yakubovich",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matsvei Yakubovich | Personal Website",
    description: "Personal website and portfolio. More details coming soon.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${clashDisplay.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
