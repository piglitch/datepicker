import { createContext } from "react";

interface DateContextType {
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
}
export const DateContext = createContext<DateContextType | undefined>(undefined);