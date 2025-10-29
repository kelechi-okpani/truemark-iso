"use client";
import React from "react";
import SideBar from "@/components/Layout/main/sidebar";
import Header from "@/components/Layout/main/header";
import { useQuery } from "@apollo/client/react";
import { GET_USERS } from "@/lib/Query/queries";
import { useUserStore } from "@/store/useUserStore";
import CenteredLoader from "@/components/utility/Loader";
import useAppSecurity from "@/components/hooks/useAppSecurity";
import Unauthorized from "@/components/hooks/Unauthorized";
import Unauthenticated from "@/components/hooks/Unauntheticated";



export default function Layout({ children }: { children: React.ReactNode }) {
  // useAppSecurity();
  const { token } = useUserStore();
  const { data, loading, error } = useQuery(GET_USERS, {
    fetchPolicy: "cache-and-network",
    skip: !token, // 🚀 prevents firing query if no token
  }) as any;

  // While loading — show a smooth loader instead of flicker
  if (loading) {
    return (

      <div className="flex items-center justify-center gap-6">
        <CenteredLoader />
        <h1 className="text-2xl font-bold animate-pulse text-gray-600 mb-4 text-sm">
          Checking authorization...
        </h1>
      </div>

    );
  }

  // If query errored or user not found
  if (error || !data?.getUserInfo) {
    return <Unauthenticated />;
  }

  // If user exists but not admin
  if (data?.getUserInfo?.isAdmin === true) {
    return <Unauthorized />;
  }

  // ✅ Only render dashboard once user is confirmed
  return (
    <div className="flex w-full h-screen">
      {/* Sidebar fixed full height */}
      <SideBar />

      {/* Main content area */}
      <div className="flex-grow flex flex-col overflow-hidden">
        {/* Sticky header at the top */}
        <div className="shrink-0 ">
          <Header data={data} />
        </div>

        {/* Scrollable content below header */}
        <main className="px-4 pb-10  flex-grow mt-5 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

