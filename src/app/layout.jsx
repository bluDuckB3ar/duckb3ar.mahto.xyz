"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en" className={`${inter.className} bg-duck-night text-rachel`}>
      <body>
        <div className="min-h-screen min-w-scrren ">
          <main>
              {children}
          </main>
        </div>
      </body>
    </html>
  );
}
  