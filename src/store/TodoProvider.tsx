import { getDataList } from "@/api/requestApi";
import TodoContext from "@/context/TodoContext";
import { AppDispatch } from "@/redux/store";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const todoList: any[] = [];

  const [todoId, setTodoId] = useState<number | undefined>();
  const [stateTodo, setStateTodo] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getDataList("todos"));
  }, [stateTodo]);

  const refAddAndUpdate = useRef<HTMLDialogElement | undefined>(undefined);
  const refDelete = useRef<HTMLDialogElement | undefined>(undefined);

  const handleOpenModelAddAndUpdate = (id: number | null) => {
    id && setTodoId(id);
    refAddAndUpdate.current && refAddAndUpdate.current.showModal();
  };

  const handleOpenModeDelete = (id: number) => {
    setTodoId(id);
    refDelete.current && refDelete.current.showModal();
  };

  return (
    <TodoContext.Provider
      value={{
        todoList,
        refAddAndUpdate,
        refDelete,
        todoId,
        stateTodo,
        setStateTodo,
        onModelDelete: handleOpenModeDelete,
        onOpenModelAddAndUpdate: handleOpenModelAddAndUpdate,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
