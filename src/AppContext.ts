import { createContext } from "react";

export interface UserInputContextType {
    amount: number;
    setAmount: (val: number) => void;
    tenure: number;
    setTenure: (val: number) => void;
}

export const UserInputContext = createContext<UserInputContextType | null>(
    null
);
