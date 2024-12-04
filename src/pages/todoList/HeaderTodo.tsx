import useTodoContext from "@/hooks/useTodoContext";
import { todoListSelector } from "@/redux/selector";
import {
  filterByPriority,
  filterBySearch,
  filterByStatus,
} from "@/redux/slices/todoSlice";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { MdDoneAll } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

interface Data {
  search: string;
  status: string;
  priority: string[];
}

const HeaderTodo = () => {
  const { onOpenModelAddAndUpdate } = useTodoContext();
  const [search, setSearch] = useState("");

  const { filters } = useSelector(todoListSelector);

  const { status, priority }: Data = filters;

  const dispatch = useDispatch();

  const handleFilterBySearch = (value: string) => {
    setSearch(value);
    dispatch(filterBySearch(value));
  };

  const handleFilterByStatus = (value: string) => {
    dispatch(filterByStatus(value));
  };

  const handleFilterByPriority = (value: string) => {
    dispatch(filterByPriority(value));
  };

  return (
    <div className="flex gap-2 justify-center mt-4 items-center">
      <label className="input input-bordered input-info input-sm  flex items-center gap-2">
        <input
          type="text"
          className="grow "
          placeholder="Search"
          value={search}
          onChange={(e) => handleFilterBySearch(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => onOpenModelAddAndUpdate(null)}
      >
        <FaPlus />
        Add Todo
      </button>
      <select
        className="select select-sm select-info max-w-xs"
        defaultValue={status}
        onChange={(e) => handleFilterByStatus(e.target.value)}
      >
        <option disabled>Filter</option>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Doing">Doing</option>
      </select>
      <div className="flex items-center gap-1">
        <input
          type="checkbox"
          value="Low"
          defaultChecked={priority.includes("Low")}
          onClick={() => handleFilterByPriority("Low")}
          className="checkbox [--chkbg:green] [--chkfg:white]"
        />
        <input
          type="checkbox"
          value="Medium"
          defaultChecked={priority.includes("Medium")}
          onClick={() => handleFilterByPriority("Medium")}
          className="checkbox border-orange-400 [--chkbg:orange] [--chkfg:white] "
        />
        <input
          type="checkbox"
          value="High"
          defaultChecked={priority.includes("High")}
          onClick={() => handleFilterByPriority("High")}
          className="checkbox [--chkbg:red] [--chkfg:white]"
        />
      </div>
      <div className="flex items-center gap-1 ml-4">
        <button className="btn btn-outline btn-success btn-sm">
          <MdDoneAll />
          10
        </button>
        <button className="btn btn-outline btn-warning btn-sm">
          <AiOutlineLoading3Quarters />
          10
        </button>
      </div>
    </div>
  );
};

export default HeaderTodo;
