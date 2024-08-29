import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";
import "./globals.css";
import { cn } from "@/utils/cn";

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
      <body
        className={cn(
          "flex flex-col justify-between h-screen",
          inter.className
        )}
      >
        <Nav />
        <main className="flex w-full max-w-screen-2xl m-auto flex-col items-center justify-between p-8 lg:px-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
