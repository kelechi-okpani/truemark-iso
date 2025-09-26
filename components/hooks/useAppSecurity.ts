"use client";
import { useEffect } from "react";

export default function useAppSecurity() {
  useEffect(() => {
    // 🔒 Block opening links in new tab (ctrl+click, cmd+click, middle-click)
    const blockNewTab = (e: MouseEvent) => {
      if (e.ctrlKey || e.metaKey || e.button === 1) {
        e.preventDefault();
      }
    };

    // 🔒 Disable right-click
    const preventContextMenu = (e: MouseEvent) => e.preventDefault();

    // 🔒 Disable copy
    const preventCopy = (e: ClipboardEvent) => e.preventDefault();

    // 🔒 Disable text selection via JS (extra layer on top of CSS)
    const preventSelect = (e: Event) => e.preventDefault();

    // 🔒 Detect DevTools
    let devtoolsOpen = false;
    const detectDevTools = () => {
      const threshold = 160; // px difference that hints DevTools is open
      if (
        window.outerWidth - window.innerWidth > threshold ||
        window.outerHeight - window.innerHeight > threshold
      ) {
        if (!devtoolsOpen) {
          devtoolsOpen = true;
          alert("Developer tools are disabled on this site.");
          // Optionally redirect or blank screen
          // window.location.href = "/blocked";
        }
      } else {
        devtoolsOpen = false;
      }
    };

    document.addEventListener("click", blockNewTab);
    document.addEventListener("contextmenu", preventContextMenu);
    document.addEventListener("copy", preventCopy);
    document.addEventListener("selectstart", preventSelect);
    window.addEventListener("resize", detectDevTools);
    const interval = setInterval(detectDevTools, 1000);

    return () => {
      document.removeEventListener("click", blockNewTab);
      document.removeEventListener("contextmenu", preventContextMenu);
      document.removeEventListener("copy", preventCopy);
      document.removeEventListener("selectstart", preventSelect);
      window.removeEventListener("resize", detectDevTools);
      clearInterval(interval);
    };
  }, []);
}
