"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Menu, X } from "lucide-react"; // Icons for mobile toggle
import SideBar from "@/components/Layout/main/sidebar";
import Header from "@/components/Layout/main/header";
import { useGetUserInfoQuery } from "@/lib/redux/features/auth/authApi";
import { setCredentials, selectCurrentToken } from "@/lib/redux/features/auth/authSlice";
import { GlobalLoader } from "@/components/utility/Loader";
import Unauthorized from "@/components/hooks/Unauthorized";
import Unauthenticated from "@/components/hooks/Unauntheticated";
import { selectIsSidebarOpen, toggleSidebar } from "@/lib/redux/features/courses/courseSlice";

export default function Layout({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  const token = useSelector(selectCurrentToken);
  const currentUser = useSelector((state: any) => state.auth.user);
  
  // ✅ Mobile Sidebar Toggle State
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isSidebarOpen = useSelector(selectIsSidebarOpen);

  const handleClose = () => {
    dispatch(toggleSidebar(false))
  };

  const { 
    data: userInfo, 
    isLoading, 
    isError, 
    isFetching 
  } = useGetUserInfoQuery(undefined, {
    skip: !token, 
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    const shouldUpdate = userInfo && token && (!currentUser || currentUser.id !== userInfo.id);
    if (shouldUpdate && typeof token === 'string') {
      dispatch(setCredentials({ 
        user: userInfo, 
        token: token 
      }));
    }
  }, [userInfo, token, dispatch, currentUser]);

  // 1. LOADING STATE
  if (isLoading || (token && isFetching && !userInfo)) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <GlobalLoader />
      </div>
    );
  } else  if (!token) {
    return <Unauthenticated />;
  }

  // 2. UNAUTHENTICATED
 

  // 3. UNAUTHORIZED
  if (userInfo?.isAdmin === true) return <Unauthorized />;

  return (
    <div className="flex w-full h-screen bg-[#F8FAFB] overflow-hidden" suppressHydrationWarning>
      
      {/* --- MOBILE SIDEBAR OVERLAY (Drawer) --- */}
      {/* Background Dimmer */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
        onClick={handleClose}
        />
      )}

      {/* Sidebar Container */}

      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-100 transition-transform duration-300 ease-in-out
        lg:relative lg:translate-x-0 shrink-0
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <div className="lg:hidden absolute top-5 right-4">
          <button 
          onClick={handleClose} 
          className="p-2 text-gray-400 hover:text-[#387467]">
            <X size={20} />
          </button>
        </div>
        <SideBar />
      </aside>



         {/* <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-100 transition-transform duration-300 ease-in-out
        lg:relative lg:translate-x-0 shrink-0
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <div className="lg:hidden absolute top-5 right-4">
          <button 
          onClick={handleClose} 
          className="p-2 text-gray-400 hover:text-[#387467]">
            <X size={20} />
          </button>
        </div>
        <SideBar />
      </aside> */}

   
      {/* --- MAIN CONTENT SECTION --- */}
      <div className="flex-grow flex flex-col min-w-0 h-full">
        
        {/* Responsive Header */}
        <header className="shrink-0 bg-white border-b border-gray-100 z-30 sticky top-0">
          <div className="flex items-center px-4 md:px-6 h-16 md:h-20">
            {/* Hamburger Button (Visible on Mobile/Tablet only) */}
            <button 
              onClick={() => dispatch(toggleSidebar(true))}
              className="lg:hidden p-2 mr-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <Menu size={22} />
            </button>
            
            <div className="flex-grow">
              <Header data={{ getUserInfo: userInfo }} />
            </div>
          </div>
        </header>

        {/* Scrollable Content Viewport */}
        <main className="flex-grow overflow-y-auto overflow-x-hidden relative custom-scrollbar">
          <div className="max-w-[1800px] mx-auto p-4 md:p-8 lg:p-10 animate-in fade-in slide-in-from-bottom-2 duration-700">
            
            {/* Standard Padding for ISO LMS layout */}
            <div className="min-h-[calc(100vh-160px)]">
              {children}
            </div>

            {/* Professional ISO Footnote */}
            <footer className="mt-20 py-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                © 2026 ISO CERTIFIED LEARNING PLATFORM
              </p>
              <div className="flex gap-6">
                <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest cursor-pointer hover:text-gray-500">Security Policy</span>
                <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest cursor-pointer hover:text-gray-500">Terms of access</span>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}