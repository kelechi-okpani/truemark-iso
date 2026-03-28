
// src/app/layout.tsx
import './globals.css';
import NextTopLoader from "nextjs-toploader";
import { ReduxProvider } from "@/lib/redux/Provider"; // Recommended: wrap the provider in a client component

export const metadata = {
  title: 'TrueMark Ltd | ISO LMS',
  description: 'Enterprise Compliance & Training Management',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
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
        
          <ReduxProvider>
              {children}
         </ReduxProvider>
        
      </body>
    </html>
  );
}


// 'use client'
// import './globals.css';
// import { SidebarProvider } from "@/components/dashboard/context/SidebarContext";
// import NextTopLoader from "nextjs-toploader";
// // import { ApolloProvider } from "@apollo/client/react";
// // import { client } from "@/lib/apolloClient";
// import { Toaster } from "react-hot-toast";
// import useAppSecurity from "@/components/hooks/useAppSecurity";
// import AnimatedCursor from "@/components/utility/AnimatedCursor";
// import { Provider as ReduxProvider } from "react-redux";
// import { store } from "@/lib/redux/store";

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   useAppSecurity();
//   return (
//     <html lang="en" suppressHydrationWarning>
//       {/*<body suppressHydrationWarning className="bg-[#f8fefb]">*/}
//       {/*<body suppressHydrationWarning className="bg-linear-to-t from-[#F8F9FF] to-[#71b7a6]">*/}
//       <body suppressHydrationWarning className="">
//       <NextTopLoader
//         color="#387467"
//         initialPosition={0.08}
//         crawlSpeed={200}
//         height={2}
//         crawl={true}
//         showSpinner={true}
//         easing="ease"
//         speed={200}
//         shadow="0 0 10px #2299DD,0 0 5px #2299DD"
//       />
//           {/*<SidebarProvider>{children}</SidebarProvider>*/}
//       <Toaster position="top-right" />
//         <ReduxProvider store={store}>
//           {/* <ApolloProvider client={client}> */}
//             <SidebarProvider>{children}</SidebarProvider>
//           {/* </ApolloProvider> */}
//       </ReduxProvider>
//       <AnimatedCursor/>
//       </body>
//     </html>
//   );
// }


