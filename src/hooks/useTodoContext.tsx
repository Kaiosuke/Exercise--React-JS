import TodoContext from "@/context/TodoContext";
import { useContext } from "react";

const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("Error at todoContext");
  }
  return context;
};

export default useTodoContext;
