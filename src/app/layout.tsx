import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Lustria } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lustria = Lustria({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lustria",
});

export const metadata: Metadata = {
  title: "Uji-Brew",
  description: "E-commerce for Japanese tea brand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lustria.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
