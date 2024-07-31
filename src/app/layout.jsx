"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import Navbar from "../components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en" className={`${inter.className} bg-duck-night text-rachel`}>
      <head>
        <link rel="icon" href="/public/logo.svg" />
      </head>
      <body>
        <div className="min-h-screen">
          <main className="flex flex-col-auto row-span-2 min-h-screen">
            {pathname !== "/" && (
              <header>
                <Navbar />
              </header>
            )}
           <div className="m-10">

           {children}

           </div>
          </main>
        </div>
      </body>
    </html>
  );
}
