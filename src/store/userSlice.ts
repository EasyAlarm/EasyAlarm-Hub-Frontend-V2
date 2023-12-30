import { StateCreator } from "zustand";
import { User } from "../views/Login/loginTypes";

interface UserSlice 
{
    user: User | null;
    setUser: (user: User) => void;
}

export const createUserSlice: StateCreator<UserSlice> = (set) => 
({
    user: null,
    setUser: (user) => set({user})
})