"use client";
import Footer from "components/Layout/Footer";
import Header from "components/Layout/Header";
import Lines from "components/Website/Lines";
import ScrollToTop from "components/Website/ScrollToTop";
import "../globals.css";
import ToasterContext from "../context/ToastContext";
import NextTopLoader from "nextjs-toploader";
import useAppSecurity from "@/components/hooks/useAppSecurity";

export default function RootLayout({
  children, }: { children: React.ReactNode; }) {
  useAppSecurity();

  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
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
