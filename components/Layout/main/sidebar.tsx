"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { mainSideBar } from "@/lib/json";
import { Logo, PrimaryLogo } from "@/components/molecules/logo";
import { ChevronLeft, LogOut, Loader2, Sparkles } from "lucide-react";
import { logout } from "@/lib/redux/features/auth/authSlice"; 
import { toggleSidebar } from "@/lib/redux/features/courses/courseSlice";


function SideBar() {
  const router = useRouter();
  const dispatch = useDispatch();
  const pathname = usePathname();
  
  const [isOpen, setIsOpen] = useState(true);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  
  const toggleSideBar = () => {
    setIsOpen(!isOpen)
    if (window.innerWidth < 1024) {
      dispatch(toggleSidebar(false));
    }
  };

  const isRouteActive = (menuLink: string) => {
    if (menuLink === "/overview") return pathname === menuLink;
    return pathname.startsWith(menuLink);
  };

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      dispatch(logout()); 
      router.push("/signin");
    } catch (err) {
      console.error("Logout failed:", err);
    } finally {
      setIsLoggingOut(false);
    }
  };



  return (
    <div
      className={cn(
        "h-full bg-white transition-all duration-300 flex flex-col border-r border-gray-100 relative",
        isOpen ? "w-72" : "w-20"
      )}
    >
      {/* --- Logo Section --- */}
      <div className="h-[72px] flex items-center px-6 mb-4">
        <Link href="/overview" className="transition-opacity hover:opacity-80">
          {isOpen ? <PrimaryLogo /> : <Logo />}
        </Link>
        
        {/* Toggle Button: Hidden on Mobile, Managed by Layout drawer instead */}
        <button
          onClick={toggleSideBar}
          className="hidden lg:flex absolute -right-3 top-8 bg-white border border-gray-200 w-6 h-6 justify-center items-center rounded-full z-50 text-gray-400 hover:text-[#387467] transition-all shadow-sm"
        >
          <ChevronLeft size={14} className={cn("transition-transform", !isOpen && "rotate-180")} />
        </button>
      </div>

      {/* --- Navigation Links --- */}
      <nav className="flex-grow px-3 space-y-1 overflow-y-auto custom-scrollbar">
        <div className={cn("px-3 mb-2", !isOpen && "text-center px-0")}>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[2px]">
            {isOpen ? "Main Menu" : "•••"}
          </p>
        </div>

        {mainSideBar.map((menu, index) => {
          const active = isRouteActive(menu.link);
          return (
            <Link
              key={index}
              href={menu.link}
              className={cn(
                "group flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200",
                active 
                  ? "bg-[#387467]/5 text-[#387467]" 
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <div className={cn(
                "w-8 h-8 flex items-center justify-center rounded-md transition-colors",
                active ? "text-[#387467]" : "text-gray-400 group-hover:text-gray-600"
              )}>
                {active ? menu.active_icon : menu.icon}
              </div>
              
              {isOpen && (
                <span className="text-[14px] font-bold tracking-tight whitespace-nowrap">
                  {menu.label}
                </span>
              )}
              
              {active && isOpen && (
                <div className="ml-auto w-1 h-4 bg-[#387467] rounded-full animate-in fade-in zoom-in" />
              )}
            </Link>
          );
        })}

        <div className={cn("px-3 mt-10 mb-2", !isOpen && "text-center px-0")}>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[2px]">
             {isOpen ? "Account" : "•••"}
          </p>
        </div>

        <button
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="w-full group flex items-center gap-3 px-3 py-3 rounded-xl text-gray-500 hover:bg-red-50 hover:text-red-600 transition-all duration-200"
        >
          <div className="w-8 h-8 flex items-center justify-center">
            {isLoggingOut ? <Loader2 size={18} className="animate-spin text-red-600" /> : <LogOut size={18} />}
          </div>
          {isOpen && <span className="text-[14px] font-bold whitespace-nowrap">Sign Out</span>}
        </button>
      </nav>

      {/* --- Upgrade Card --- */}
      {isOpen && (
        <div className="p-4 mt-auto border-t border-gray-50">
          <div className="bg-[#387467] rounded-2xl p-5 text-center relative overflow-hidden group shadow-md shadow-[#387467]/20">
            <div className="relative z-10">
              <Sparkles className="mx-auto mb-2 text-white/50" size={20} />
              <p className="text-[10px] font-black text-white/70 uppercase mb-1 tracking-[0.2em]">ISO Pro Access</p>
              <p className="text-[11px] text-white/90 mb-4 font-medium leading-relaxed">Unlock advanced labs and technical certifications.</p>
              <button className="bg-white text-[#387467] text-[11px] font-black py-2.5 px-4 rounded-lg w-full transition-all active:scale-95 hover:bg-slate-900 hover:text-white uppercase tracking-wider">
                Upgrade Now
              </button>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
          </div>
        </div>
      )}
    </div>
  );
}

export default SideBar;