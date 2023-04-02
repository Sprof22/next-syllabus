import { create } from "zustand";
import { toast } from 'react-toastify';
import { createJSONStorage, persist } from "zustand/middleware";
import { loginFunction } from "../../apis/auth";
import { Access, IAuthStore, User } from '../../data/auth';

export const useAuthStore = create(
    persist<IAuthStore>(
        (set, get) => ({
            plans: [],
            setUser: (obj) => set({ user: obj }),
            setAccess: (obj) => set({ access: obj }),
            Login: async (obj) => {
                await loginFunction(obj)
            },
            logoutAccount: async function () { },
            Signup: async (params) => { },
        }),
        {
            name: "auth-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
