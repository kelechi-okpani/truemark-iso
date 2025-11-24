"use client";
import { create } from "zustand";
import { client } from "@/lib/apolloClient"; // ✅ use the exported client
import { GET_USERS } from "@/lib/Query/queries";
import { persist } from "zustand/middleware";

type User = {
  id: string;
  email: string;
  fullname?: string;
  isAdmin?: string;
  createdAt?: string;
  updatedAt?: string;
};

type UserStore = {
  currentUser: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;

  hydrated: boolean;
  setAuth: (currentUser: User, token?: string | null) => void;

  fetchUsers: () => Promise<void>;
  logout: () => void;
};


export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      currentUser: null,
      token: null,
      // token: typeof window !== "undefined" ? localStorage.getItem("token") : null,
      loading: false,
      error: null,
      hydrated: false,

      setAuth: (currentUser, token) => {
         if(token && typeof window !== "undefined") {
             localStorage.setItem("token", token);
           }
        set((state) => ({
          currentUser: currentUser ?? state.currentUser,
          token: token ?? state.token ?? null,
        }));
      },

      fetchUsers: async () => {
        set({ loading: true, error: null });
        try {
          const res: any = await client.query<{ getUserInfo: User }>({
            query: GET_USERS as any,
            fetchPolicy: "network-only",
          });
          set({
            currentUser: {
              email: res?.data?.getUserInfo.email,
              id: res?.data?.getUserInfo.id,
              fullname: res?.data?.getUserInfo.fullname,
            },
            loading: false,
          });
        } catch (err: any) {
          set({ error: err.message, loading: false });
        }
      },

      // logout: () => {
      //   set({ currentUser: null, token: null });
      //   if (typeof window !== "undefined") {
      //     localStorage.removeItem("token");
      //   }
      // },

      logout: () => {
        if (typeof window !== "undefined") {
          localStorage.removeItem("token"); // remove token from storage
        }
        // Reset Zustand auth state
        set({
          currentUser: null,
          token: null,
        });
        // Completely reset Apollo cache (important!)
        client.clearStore().catch(() => {});
      }

    }),
    {
      name: "user-storage", // 👈 saves to localStorage
      onRehydrateStorage: () => (state) => {
        if (state) state.hydrated = true;
      },
    }
  )
);

