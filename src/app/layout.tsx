import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nur Al-Amira | Bespoke Abaya Atelier",
  description:
    "Discover Nur Al-Amira, a digital atelier featuring occasion-ready abayas, curated experiences, and an intelligent stylist to tailor looks to your world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
