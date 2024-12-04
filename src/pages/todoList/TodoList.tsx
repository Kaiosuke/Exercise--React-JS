import HeaderTodo from "./HeaderTodo";
import ModelAddAndUpdate from "./ModelAddAndUpdate";
import ModelDelete from "./ModelDelete";
import TableTodoList from "./TableTodoList";

const TodoList = () => {
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
