"use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });
const disableNavbar = ["/login", "/register"]


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const usePath = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        {!disableNavbar.includes(usePath) && <Navbar></Navbar> }
        {children}
      </body>
    </html>
  );
}
