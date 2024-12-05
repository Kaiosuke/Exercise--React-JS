import { useSelector } from "react-redux";
import HeaderTodo from "./HeaderTodo";
import ModelAddAndUpdate from "./ModelAddAndUpdate";
import ModelDelete from "./ModelDelete";
import TableTodoList from "./TableTodoList";
import { authSelector } from "@/redux/selector";
import { useNavigate } from "react-router-dom";

const TodoList = () => {
  const { currentUser } = useSelector(authSelector);

  const { user } = currentUser;

  const nav = useNavigate();

  if (!user) {
    confirm("You must be logged in to view TodoList. Switch to login!") &&
      nav("/users/signIn");
    return;
  }

  return (
    <div className="border border-cyan-600 w-[900px] m-auto rounded-lg text-center p-4">
      <h1 className="text-3xl font-bold">TodoList</h1>
      <HeaderTodo />
      <TableTodoList />
      <ModelAddAndUpdate />
      <ModelDelete />
    </div>
  );
};

export default TodoList;
