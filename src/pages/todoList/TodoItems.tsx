import { updateData } from "@/api/requestApi";
import useTodoContext from "@/hooks/useTodoContext";
import { updateTodo } from "@/redux/slices/todoSlice";
import { AiFillEdit } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";

interface TodoType {
  id: number;
  title: string;
  description: string;
  priority: string;
  status: boolean;
  userId: number;
}

const TodoItems = ({ todo }: { todo: TodoType }) => {
  const { onOpenModelAddAndUpdate, onModelDelete } = useTodoContext();
  const { id, title, description, status, priority } = todo;

  const dispatch = useDispatch();

  const handleChangeStatus = async () => {
    const newTodo: any = { ...todo, status: !todo.status };
    const isUpdate = updateData("todos", todo.id, newTodo);
    if (await isUpdate) {
      dispatch(updateTodo(newTodo));
    }
  };

  return (
    <tr className={`${status && "bg-cyan-100"}`}>
      <th>{id}</th>
      <td>{title}</td>
      <td>{description}</td>
      <td>
        {priority === "Low" ? (
          <button className="btn text-green-600 font-semibold btn-sm">
            Low
          </button>
        ) : priority === "Medium" ? (
          <button className="btn text-yellow-600 font-semibold btn-sm">
            Medium
          </button>
        ) : (
          <button className="btn text-red-600 font-semibold btn-sm">
            High
          </button>
        )}
      </td>
      <td>
        <button
          className={`btn btn-outline btn-sm ${
            status ? "btn-success" : "btn-warning"
          }`}
          onClick={handleChangeStatus}
        >
          {status ? "Completed" : "Doing"}
        </button>
      </td>
      <td className="flex items-center gap-1">
        <button
          className="btn btn-outline btn-sm btn-primary"
          onClick={() => onOpenModelAddAndUpdate(id)}
        >
          <AiFillEdit />
        </button>
        <button
          className="btn btn-outline btn-sm btn-error"
          onClick={() => onModelDelete(id)}
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default TodoItems;
