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

  return (
    <header
      className={`fixed left-0 top-0 z-[999] w-full transition-all duration-300 ${
        stickyMenu 
          ? "bg-white border-b border-gray-200 py-2 shadow-sm" 
          : "bg-white border-b border-transparent py-4"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-4 md:px-8 xl:flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center justify-between xl:w-auto">
          <Link href="/" className="flex shrink-0">
            <Image
              src="/images/Green-Logo.png"
              alt="LMS Logo"
              width={140}
              height={40}
              className="object-contain"
              priority
            />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden p-2 text-gray-600"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            {navigationOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation Menu */}
        <div
          className={`absolute left-0 top-full w-full bg-white xl:static xl:flex xl:w-auto xl:items-center xl:justify-between transition-all duration-300 ${
            navigationOpen ? "opacity-100 visible border-b border-gray-100" : "opacity-0 invisible xl:visible xl:opacity-100"
          }`}
        >
          <nav className="p-4 xl:p-0">
            <ul className="flex flex-col gap-2 xl:flex-row xl:items-center xl:gap-8">
              {menuData.map((menuItem, key) => (
                <li key={key} className="relative group">
                  {menuItem.submenu ? (
                    <div className="xl:py-2">
                      <button
                        onClick={() => setActiveDropdownIndex(activeDropdownIndex === key ? null : key)}
                        className="flex w-full items-center justify-between gap-1 text-[15px] font-medium text-gray-700 hover:text-[#387467] transition-colors"
                      >
                        {menuItem.title}
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform duration-200 ${activeDropdownIndex === key ? "rotate-180" : ""}`} 
                        />
                      </button>

                      {/* Dropdown Menu - Coursera Style */}
                      <ul
                        className={`xl:absolute xl:top-[120%] xl:left-0 min-w-[220px] rounded-lg bg-white xl:border xl:border-gray-100 xl:shadow-xl p-2 flex-col gap-1 ${
                          activeDropdownIndex === key ? "flex" : "hidden xl:group-hover:flex"
                        }`}
                      >
                        {menuItem.submenu.map((item, subKey) => (
                          <li key={subKey}>
                            <Link
                              href={item.path || "#"}
                              className="block rounded-md px-4 py-2.5 text-[14px] text-gray-600 hover:bg-[#387467]/5 hover:text-[#387467] transition-all"
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
                      className={`text-[15px] font-medium transition-colors hover:text-[#387467] ${
                        pathUrl === menuItem.path ? "text-[#387467]" : "text-gray-700"
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
          <div className="flex flex-col gap-4 p-4 xl:flex-row xl:items-center xl:gap-6 xl:p-0 xl:ml-12 border-t border-gray-50 xl:border-0">
            <Link
              href="/signin"
              className="text-[15px] font-semibold text-gray-700 hover:text-[#387467] transition-colors"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="flex items-center justify-center rounded-md bg-[#387467] px-6 py-2.5 text-[15px] font-bold text-white shadow-sm hover:bg-[#2d5e53] transition-all"
            >
              Join for Free
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;