import { createContext } from "react";

interface AppContextType {
  products: string[];
}

const AppContext = createContext<AppContextType | null>(null);

export default AppContext;
