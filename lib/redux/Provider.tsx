'use client';
import { Provider } from "react-redux";
import { store } from "./store";
import { Toaster } from "react-hot-toast";
import { SidebarProvider } from "@/components/dashboard/context/SidebarContext";
import useAppSecurity from "@/components/hooks/useAppSecurity";
import AnimatedCursor from "@/components/utility/AnimatedCursor";

function SecurityLogic({ children }: { children: React.ReactNode }) {
  // This hook now runs inside the Redux context
  // It can use useAppSelector() to check for tokens/user roles
  
  // useAppSecurity(); 
  return <>{children}</>;
}

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <SecurityLogic>
        <SidebarProvider>
          {children}
              <Toaster position="bottom-right" />
          <AnimatedCursor />
        </SidebarProvider>
      </SecurityLogic>
    </Provider>
  );
}