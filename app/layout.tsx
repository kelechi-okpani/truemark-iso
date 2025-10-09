'use client'
import { Outfit } from 'next/font/google';
import './globals.css';
import { SidebarProvider } from "@/components/dashboard/context/SidebarContext";
import NextTopLoader from "nextjs-toploader";
import { ApolloProvider } from "@apollo/client/react";

import { client } from "@/lib/apolloClient";
import useAppSecurity from "@/components/hooks/useAppSecurity";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // useAppSecurity();
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="bg-[#f8fefb]">
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
          {/*<SidebarProvider>{children}</SidebarProvider>*/}
      <ApolloProvider client={client}>
        <SidebarProvider>{children}</SidebarProvider>
      </ApolloProvider>
      </body>
    </html>
  );
}
