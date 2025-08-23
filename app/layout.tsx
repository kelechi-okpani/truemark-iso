import { Outfit } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from "@/components/dashboard/context/ThemeContext";
import { SidebarProvider } from "@/components/dashboard/context/SidebarContext";
import NextTopLoader from "nextjs-toploader";


const outfit = Outfit({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.className} `}>
      {/*<body className={`${outfit.className} dark:bg-gray-900`}>*/}
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
        {/*<ThemeProvider>*/}
          <SidebarProvider>{children}</SidebarProvider>
        {/*</ThemeProvider>*/}
      </body>
    </html>
  );
}
