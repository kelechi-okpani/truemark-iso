"use client";
import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

// Components
import SideBar from "@/components/Layout/main/sidebar";
import Header from "@/components/Layout/main/header";
import { GlobalLoader } from "@/components/utility/Loader";
import Unauthorized from "@/components/hooks/Unauthorized";
import Unauthenticated from "@/components/hooks/Unauntheticated";

// State & API
import { useGetUserInfoQuery } from "@/lib/redux/features/auth/authApi";
import { setCredentials, selectCurrentToken } from "@/lib/redux/features/auth/authSlice";
import { selectIsSidebarOpen, toggleSidebar, selectActiveCourseId } from "@/lib/redux/features/courses/courseSlice";

export default function Layout({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const router = useRouter();
  
  // Selectors
  const token = useSelector(selectCurrentToken);
  const currentUser = useSelector((state: any) => state.auth.user);
  const isSidebarOpen = useSelector(selectIsSidebarOpen);
  const activeCourseId = useSelector(selectActiveCourseId);
  
  const [isReady, setIsReady] = useState(false);

  // API Call
  const { 
    data: userInfo, 
    isLoading, 
    isFetching 
  } = useGetUserInfoQuery(undefined, {
    skip: !token, 
    refetchOnMountOrArgChange: true,
  });

  // 1. SECURE ROUTE ENFORCEMENT
  // Prevent URL pasting for sensitive course paths
  useEffect(() => {
    const isCoursePath = pathname.includes("/enrolled-course/course");
    
    if (isCoursePath && !activeCourseId && !isLoading && !isFetching) {
      // If they try to access the course player without a Redux ID, boot them.
      router.replace("/overview");
    }
  }, [pathname, activeCourseId, isLoading, isFetching, router]);

  // 2. CREDENTIAL HYDRATION
  useEffect(() => {
    if (userInfo && token && (!currentUser || currentUser.id !== userInfo.id)) {
      dispatch(setCredentials({ user: userInfo, token }));
    }
  }, [userInfo, token, dispatch, currentUser]);

  // 3. SMOOTH TRANSITION TIMER
  useEffect(() => {
    if (!isLoading && !isFetching) {
      const timer = setTimeout(() => setIsReady(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading, isFetching]);

  // Handlers
  const handleCloseSidebar = () => dispatch(toggleSidebar(false));
  const handleOpenSidebar = () => dispatch(toggleSidebar(true));

  // --- RENDER LOGIC ---

  // Loading State (Global)
  if (!isReady || isLoading || (token && isFetching && !userInfo)) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white transition-all duration-500">
        <GlobalLoader />
        <p className="mt-4 text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] animate-pulse">
          Secure Environment Loading
        </p>
      </div>
    );
  }

  // Auth Protection
  if (!token) return <Unauthenticated />;
  if (userInfo?.isAdmin) return <Unauthorized />;

  return (
    <div className="flex w-full h-screen bg-[#F8FAFB] overflow-hidden" suppressHydrationWarning>
      
      {/* MOBILE SIDEBAR OVERLAY */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60] lg:hidden transition-opacity duration-300"
          onClick={handleCloseSidebar}
        />
      )}

      {/* SIDEBAR */}
      <aside className={`
        fixed inset-y-0 left-0 z-[70] w-72 bg-white border-r border-gray-100 
        transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1)
        lg:relative lg:translate-x-0 shrink-0
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <div className="lg:hidden absolute top-6 right-4">
          <button onClick={handleCloseSidebar} className="p-2 text-gray-400 hover:text-red-500">
            <X size={20} />
          </button>
        </div>
        <SideBar />
      </aside>

      {/* MAIN VIEWPORT */}
      <div className="flex-grow flex flex-col min-w-0 h-full">
        
        {/* HEADER */}
        <header className="shrink-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-50 sticky top-0">
          <div className="flex items-center px-4 md:px-8 h-16 md:h-20">
            <button 
              onClick={handleOpenSidebar}
              className="lg:hidden p-2 mr-4 text-gray-600 hover:bg-gray-100 rounded-xl transition-all"
            >
              <Menu size={22} />
            </button>
            
            <div className="flex-grow">
              <Header data={{ getUserInfo: userInfo }} />
            </div>
          </div>
        </header>

        {/* SCROLLABLE CONTENT */}
        <main className="flex-grow overflow-y-auto overflow-x-hidden relative custom-scrollbar">
          <div className="max-w-[1600px] mx-auto p-4 md:p-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            
            <div className="min-h-[calc(100vh-220px)]">
              {children}
            </div>

            {/* FOOTER */}
            <footer className="mt-24 py-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-col gap-1 items-center md:items-start">
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.25em]">
                  © {new Date().getFullYear()} ISO CERTIFIED LEARNING MANAGEMENT
                </p>
                <p className="text-[9px] text-gray-400">System Version 2.0.4 - Secure Session Active</p>
              </div>
              
              <div className="flex gap-8">
                <FooterLink label="Security Policy" />
                <FooterLink label="Terms of Access" />
                <FooterLink label="Audit Log" />
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}

const FooterLink = ({ label }: { label: string }) => (
  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest cursor-pointer hover:text-[#387467] transition-all hover:translate-y-[-1px]">
    {label}
  </span>
);