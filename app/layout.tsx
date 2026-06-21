import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AmbientGlow from "@/components/AmbientGlow";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E2I — Engineering to Intelligence",
  description:
    "Mühendislikten yapay zekaya kesintisiz geçiş. AI otomasyon, sistem optimizasyonu ve özel yazılım çözümleri.",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
    shortcut: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-dvh flex-col overflow-x-hidden">
        <AmbientGlow />
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
