import { deleteData } from "@/api/requestApi";
import useTodoContext from "@/hooks/useTodoContext";
import { deleteTodo } from "@/redux/slices/todoSlice";
import { useDispatch } from "react-redux";

const ModelDelete = () => {
  const { todoId, refDelete } = useTodoContext();

  const handleCloseModel = () => {
    refDelete.current.close();
  };

  const dispatch = useDispatch();

  const handleDelete = async () => {
    const isDelete = todoId && deleteData("todos", todoId);
    if (isDelete) {
      dispatch(deleteTodo(todoId));
      handleCloseModel();
    }
  };

  return (
    <dialog ref={refDelete} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Delete</h3>
        <p className="py-4">Are you sure you want to delete this Todo?</p>
        <div className="modal-action">
          <button className="btn btn-error" onClick={handleDelete}>
            Delete
          </button>
          <button className="btn" onClick={handleCloseModel}>
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default ModelDelete;
