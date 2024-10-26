import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { Toaster } from "sonner";
import Particles from "../../components/aboutme/particles";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Venky",
  description: "Auto generated Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-grid-small-white/[0.3] sm:dark:bg-grid-white/[0.1] overflow-x-hidden overflow-y-hidden sm:overflow-y-auto`}
      >
        <Toaster richColors />
        <Navbar />
        {children}
        <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={150} />
        <Footer />
      </body>
    </html>
  );
}
