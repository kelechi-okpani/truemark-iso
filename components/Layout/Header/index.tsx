"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [activeDropdownIndex, setActiveDropdownIndex] = useState<number | null>(null);
  const [stickyMenu, setStickyMenu] = useState(false);
  const pathUrl = usePathname();

  const handleStickyMenu = () => {
    setStickyMenu(window.scrollY >= 20);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  useEffect(() => {
    setNavigationOpen(false);
    setActiveDropdownIndex(null);
  }, [pathUrl]);

  return (
    <header
      className={`fixed left-0 top-0 z-[999] w-full transition-all duration-300 ${
        stickyMenu 
          ? "bg-white border-b border-gray-100 py-1.5 shadow-sm" 
          : "bg-white border-b border-transparent py-3"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-4 md:px-8 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center justify-between w-full xl:w-auto">
          <Link href="/" className="flex shrink-0">
            <Image
              src="/images/Green-Logo.png"
              alt="TMGSS Logo"
              width={120} // Slightly smaller logo for balance
              height={35}
              className="object-contain"
              priority
            />
          </Link>

          <button
            className="xl:hidden p-2 text-gray-600 focus:outline-none"
            onClick={() => setNavigationOpen(!navigationOpen)}
            aria-label="Toggle Menu"
          >
            {navigationOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation Menu */}
        <div
          className={`absolute left-0 top-full w-full bg-white xl:static xl:flex xl:w-full xl:items-center xl:justify-end gap-10 transition-all duration-300 ${
            navigationOpen 
              ? "translate-y-0 opacity-100 visible border-b border-gray-100" 
              : "-translate-y-10 opacity-0 invisible xl:translate-y-0 xl:visible xl:opacity-100"
          }`}
        >
          <nav className="p-4 xl:p-0">
            <ul className="flex flex-col gap-1 xl:flex-row xl:items-center xl:gap-7">
              {menuData.map((menuItem, key) => (
                <li key={key} className="relative group">
                  {menuItem.submenu ? (
                    <div className="xl:py-4"> 
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveDropdownIndex(activeDropdownIndex === key ? null : key);
                        }}
                        className="flex w-full items-center justify-between gap-1 text-[13.5px] font-semibold text-slate-600 hover:text-[#387467] transition-colors"
                      >
                        {menuItem.title}
                        <ChevronDown 
                          size={14} 
                          className={`transition-transform duration-200 ${
                            activeDropdownIndex === key ? "rotate-180" : ""
                          }`} 
                        />
                      </button>

                      {/* Dropdown Menu */}
                      <ul
                        className={`xl:absolute xl:top-full xl:left-0 min-w-[220px] rounded-xl bg-white xl:border xl:border-gray-100 xl:shadow-lg p-1.5 flex-col gap-0.5 z-50 ${
                          activeDropdownIndex === key ? "flex mt-2 xl:mt-0" : "hidden xl:group-hover:flex"
                        }`}
                      >
                        {menuItem.submenu.map((item, subKey) => (
                          <li key={subKey}>
                            <Link
                              href={item.path || "#"}
                              className="block rounded-lg px-3.5 py-2 text-[12.5px] font-medium text-slate-500 hover:bg-[#387467]/5 hover:text-[#387467] transition-all"
                              onClick={() => {
                                setNavigationOpen(false);
                                setActiveDropdownIndex(null);
                              }}
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link
                      href={`${menuItem.path}`}
                      className={`block py-2 xl:py-0 text-[13.5px] font-semibold transition-colors hover:text-[#387467] ${
                        pathUrl === menuItem.path ? "text-[#387467]" : "text-slate-600"
                      }`}
                      onClick={() => setNavigationOpen(false)}
                    >
                      {menuItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Auth Buttons */}
          <div className="flex flex-col gap-3 p-4 xl:flex-row xl:items-center xl:gap-5 xl:p-0 border-t border-gray-50 xl:border-0">
            <Link
              href="/signin"
              className="text-[13.5px] font-bold text-slate-600 hover:text-[#387467] text-center transition-colors"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="flex items-center justify-center rounded-lg bg-[#387467] px-5 py-2 text-[13.5px] font-bold text-white shadow-sm hover:bg-[#2d5e53] transition-all"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;