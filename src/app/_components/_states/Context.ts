import { createContext } from "react";

interface ContextType {
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  clicked: boolean;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Context = createContext<ContextType | undefined>(undefined);