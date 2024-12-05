import { createContext } from "react";

interface TodoContextType {
  todoList: any[];
  todoId: number | null;
  setTodoId: any;
  refAddAndUpdate: any;
  refDelete: any;
  stateTodo: boolean;
  setStateTodo: any;
  onModelDelete: (id: number) => void;
  onOpenModelAddAndUpdate: (id: number | null) => void;
}

const TodoContext = createContext<TodoContextType | null>(null);

export default TodoContext;
