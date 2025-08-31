'use client'
import { Outfit } from 'next/font/google';
import './globals.css';
import { SidebarProvider } from "@/components/dashboard/context/SidebarContext";
import NextTopLoader from "nextjs-toploader";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
          <SidebarProvider>{children}</SidebarProvider>
      </body>
    </html>
  );
}
