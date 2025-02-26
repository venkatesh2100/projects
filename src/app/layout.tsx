import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../../components/navbar";
// import Footer from "../../components/footer"; 
import { Toaster } from "sonner";
import Particles from "../../components/aboutme/particles";

// Font Imports with Custom Properties and Fallbacks
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

// Default Metadata
export const metadata: Metadata = {
  title: "VENKY",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/samuri.png" type="image" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} w-80vh antialiased dark:bg-grid-small-white/[0.1] sm:dark:bg-grid-white/[0] overflow-x-hidden sm:overflow-y-auto`}
      >
        <Toaster richColors />

        {/* Navigation with custom logo */}
        <Navbar />

        {children}

        <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={150} />

        {/* <Footer /> */}
      </body>
    </html>
  );
}
