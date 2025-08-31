import { create } from "zustand";
import { client } from "@/lib/graphqlClient";
import { GET_USERS } from "@/lib/Query/queries";
import { CREATE_USERS, LOGIN_USERS } from "@/lib/Mutation/mutation";


type User = {
  id: string;
  email: string;
  fullname: string;
  isAdmin: string;
  createdAt: string;
  updatedAt: string;
};

type UserStore = {
  users: User[];
  loading: boolean;
  error: string | null;

  fetchUsers: () => Promise<void>;
  createUser: (fullname: string, email: string, password: string) => Promise<void>;
  loginUser: (email: string, password: string) => Promise<void>;
};

export const useUserStore = create<UserStore>((set) => ({
  users: [],
  loading: false,
  error: null,

  fetchUsers: async () => {
    set({ loading: true, error: null });
    try {
      const data = await client.request<{ users: User[] }>(GET_USERS);
      set({ users: data.users, loading: false });
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },

  createUser: async (fullname, email,password) => {
    set({ loading: true, error: null });
    try {
      const data = await client.request<{ createUser: User }>(CREATE_USERS, {
        fullname,
        email,
        password
      });
      set((state) => ({
        users: [...state.users, data.createUser],
        loading: false,
      }));
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },

  loginUser: async ( email,password) => {
    set({ loading: true, error: null });
    try {
      const data = await client.request<{ createUser: User }>(LOGIN_USERS, {
        email,
        password
      });
      set((state) => ({
        users: [...state.users, data.createUser],
        loading: false,
      }));
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },
}));
