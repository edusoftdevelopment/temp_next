import "./globals.css";

import { Montserrat } from "next/font/google";

import React from "react";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
