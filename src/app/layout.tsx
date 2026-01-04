import type { Metadata } from "next";
import { Geist, Geist_Mono, Lustria,  Archivo_Black} from "next/font/google";
import { Toaster } from "@/components/ui/sonner"
import AppProviders from "@/components/providers/AppProvider"

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

const archivo_black = Archivo_Black({
  weight: "400",
  variable: "--font-archivo",
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
        className={`${geistSans.variable} ${geistMono.variable} ${lustria.variable} ${archivo_black.variable} antialiased`}
      >
        <AppProviders>
          {children}
          <Toaster />
        </AppProviders>
      </body>
    </html>
  );
}
