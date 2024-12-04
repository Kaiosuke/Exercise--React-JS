import { authSelector, todoListSelector } from "@/redux/selector";
import { useSelector } from "react-redux";
import TodoItems from "./TodoItems";

interface TodoType {
  id: number;
  title: string;
  description: string;
  priority: string;
  status: boolean;
  userId: number;
}

const TableTodoList = () => {
  const { currentUser } = useSelector(authSelector);

  const { user } = currentUser;

  const { todoList } = useSelector(todoListSelector);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Priority</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((todo: TodoType) => {
            if (todo.userId === user?.id) {
              return <TodoItems key={todo.id} todo={todo} />;
            }
            return null;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableTodoList;
