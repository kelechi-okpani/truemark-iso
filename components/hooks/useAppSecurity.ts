"use client";
import { useEffect } from "react";

export default function useAppSecurity() {
  useEffect(() => {
    // 1. Block opening links in new tab / middle click
    const blockNewTab = (e: MouseEvent) => {
      if (e.ctrlKey || e.metaKey || e.button === 1) {
        // Only prevent if the target is an anchor tag or inside one
        if ((e.target as HTMLElement).closest("a")) {
          e.preventDefault();
        }
      }
    };

    // 2. Disable right-click (Context Menu)
    const preventContextMenu = (e: MouseEvent) => e.preventDefault();

    // 3. Disable copy (Clipboard)
    const preventCopy = (e: ClipboardEvent) => e.preventDefault();

    // 4. Disable text selection
    const preventSelect = (e: Event) => e.preventDefault();

    // 5. Block Keyboard Shortcuts (ISO Standard for secure exams)
    const preventShortcuts = (e: KeyboardEvent) => {
      // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S, Ctrl+P
      if (
        e.key === "F12" ||
        ((e.ctrlKey || e.metaKey) && (e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C"))) ||
        ((e.ctrlKey || e.metaKey) && (e.key === "u" || e.key === "s" || e.key === "p"))
      ) {
        e.preventDefault();
        return false;
      }
    };

    // 6. Modern DevTools Detection (Debugger Loop)
    // This is more effective than window resizing
    const detectDevTools = () => {
      const start = new Date().getTime();
      debugger; // This only pauses if DevTools is open
      const end = new Date().getTime();
      if (end - start > 100) {
        // If it took more than 100ms, a debugger hit occurred
        console.clear();
        // window.location.href = "/security-alert";
      }
    };

    // Attach Listeners
    document.addEventListener("mousedown", blockNewTab); // mousedown handles button 1 better
    document.addEventListener("contextmenu", preventContextMenu);
    document.addEventListener("copy", preventCopy);
    document.addEventListener("selectstart", preventSelect);
    document.addEventListener("keydown", preventShortcuts);
    
    const interval = setInterval(detectDevTools, 2000);

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", blockNewTab);
      document.removeEventListener("contextmenu", preventContextMenu);
      document.removeEventListener("copy", preventCopy);
      document.removeEventListener("selectstart", preventSelect);
      document.removeEventListener("keydown", preventShortcuts);
      clearInterval(interval);
    };
  }, []);
}