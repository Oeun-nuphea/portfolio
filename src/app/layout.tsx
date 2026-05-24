import type { Metadata } from "next";
import { Inter, Poppins, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import FooterCTA from "@/components/layout/FooterCTA";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
});

export const metadata: Metadata = {
  title: "FlowStack - Scalable Digital Products",
  description: "FlowStack is a premium freelance collective specializing in modern web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} ${dmSerif.variable} antialiased`}>
        <Navbar />
        <main className="pt-28 pb-10">
          {children}
        </main>
        <FooterCTA />
      </body>
    </html>
  );
}
