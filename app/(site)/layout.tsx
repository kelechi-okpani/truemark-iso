"use client";

import Footer from "components/Layout/Footer";
import Header from "components/Layout/Header";
import Lines from "components/Website/Lines";
import ScrollToTop from "components/Website/ScrollToTop";
import { Inter } from "next/font/google";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });

import ToasterContext from "../context/ToastContext";
import NextTopLoader from "nextjs-toploader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` ${inter.className}`} suppressHydrationWarning>
      <NextTopLoader
        color="#387467"
        initialPosition={0.08}
        crawlSpeed={200}
        height={2}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={200}
        shadow="0 0 10px #2299DD,0 0 5px #2299DD"
      />

        {/*<ThemeProvider*/}
        {/*  enableSystem={false}*/}
        {/*  attribute="class"*/}
        {/*  defaultTheme="light"*/}
        {/*>*/}

          <Lines />
          <Header />
          <ToasterContext />
          {children}
          <Footer />
          <ScrollToTop />
        {/*</ThemeProvider>*/}
      </body>
    </html>
  );
}
