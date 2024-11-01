import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { Toaster } from "sonner";
import Particles from "../../components/aboutme/particles";
// import Contact from "../../components/aboutme/Contact"; // Uncomment if needed in the future

// Font Imports with Custom Properties and Fallbacks
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap", // Ensures fonts load with a fallback until available
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

// Metadata for SEO and Browser Tab Info
export const metadata: Metadata = {
  title: "Venky",
  description: "Auto-generated Portfolio",
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}w-80vh antialiased dark:bg-grid-small-white/[0.3] sm:dark:bg-grid-white/[0.1] overflow-x-hidden sm:overflow-y-auto`}
      >
        {/* Notifications with custom colors */}
        <Toaster richColors />

        {/* Navigation */}
        <Navbar />

        {/* Main content */}
        {children}

        {/* Background Particles */}
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={150}
        />

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
