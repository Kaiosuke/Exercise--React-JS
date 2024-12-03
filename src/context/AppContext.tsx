import { createContext } from "react";

interface AppContextType {
  products: any[];
}

const AppContext = createContext<AppContextType | null>(null);

export default AppContext;
