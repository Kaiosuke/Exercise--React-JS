import { addData, getData, updateData } from "@/api/requestApi";
import useTodoContext from "@/hooks/useTodoContext";
import { todoForm } from "@/reactHookForm";
import { authSelector } from "@/redux/selector";
import { updateTodo } from "@/redux/slices/todoSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const ModelAddAndUpdate = () => {
  const { refAddAndUpdate, todoId, setStateTodo, stateTodo, setTodoId } =
    useTodoContext();
  const [priority, setPriority] = useState("Low");

  const { currentUser } = useSelector(authSelector);

  const { user } = currentUser;

  const dispatch = useDispatch();

  const methods = useForm({
    resolver: zodResolver(todoForm),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  useEffect(() => {
    if (todoId) {
      (async () => {
        const data = await getData("todos", todoId);
        setPriority(data.priority);
        methods.reset(data);
      })();
    } else {
      methods.reset({
        title: "",
        description: "",
      });
      setPriority("Low");
    }
  }, [todoId]);

  const handleCloseModel = () => {
    refAddAndUpdate.current.close();
    setTodoId(null);
  };

  const handleGetData = async (data: any) => {
    if (todoId) {
      const newData = { ...data, priority };
      const isUpdate = updateData("todos", todoId, newData);
      if (await isUpdate) {
        dispatch(updateTodo({ ...newData, id: todoId }));
        handleCloseModel();
      }
    } else {
      const userId = user && user.id;
      const newData = { ...data, priority, status: false, userId };
      const isAdd = addData("todos", newData);
      if (await isAdd) {
        setStateTodo(!stateTodo);
        handleCloseModel();
        methods.reset();
        setPriority("Low");
      }
    }
  };

  return (
    <dialog ref={refAddAndUpdate} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-2xl">{todoId ? "Update" : "Add"}</h3>
        <FormProvider {...methods}>
          <form
            className="flex flex-col gap-2 mt-4"
            onSubmit={methods.handleSubmit((data) => {
              handleGetData(data);
            })}
          >
            <div className="form-input">
              <input
                type="text"
                className="grow input input-bordered w-full"
                placeholder="Daisy"
                {...methods.register("title")}
              />
              <span className="text-red-400 flex justify-start">
                {methods.formState.errors.title?.message}
              </span>
            </div>
            <div className="form-input">
              <textarea
                className="textarea textarea-bordered w-full h-full"
                placeholder="Description"
                {...methods.register("description")}
              ></textarea>
              <span className="text-red-400 flex justify-start">
                {methods.formState.errors.description?.message}
              </span>
            </div>
            <div className="form-input">
              <select
                className="select select-bordered w-full"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option disabled>Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div>
              <button type="submit" className="btn btn-error mr-2 text-white">
                {todoId ? "Update" : "Add"}
              </button>
              <button type="button" className="btn" onClick={handleCloseModel}>
                Close
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </dialog>
  );
};

export default ModelAddAndUpdate;
