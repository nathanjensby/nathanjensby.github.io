import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nathan Jensby",
  description: "Nathan Jensby's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <main className="flex min-h-screen flex-col items-center justify-between px-8 lg:p-24 ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
