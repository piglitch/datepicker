import { createContext } from "react";

export interface Task {
  text: string;
  date: string;
}

interface ContextType {
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  clicked: boolean;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  reminder: string; 
  setReminder: React.Dispatch<React.SetStateAction<string>>;
}
export const Context = createContext<ContextType | undefined>(undefined);