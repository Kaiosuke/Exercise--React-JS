import { viewProducts } from "@/redux/slices/productsSlice";
import { AppDispatch } from "@/redux/store";
import { CiBoxList } from "react-icons/ci";
import { MdGridView } from "react-icons/md";
import { useDispatch } from "react-redux";

const ProductViews = ({ view }: { view: string }) => {
  const viewList = ["grid", "list"];

  const dispatch = useDispatch<AppDispatch>();

  const handleView = (value: string) => {
    dispatch(viewProducts(value));
  };
  return (
    <div className="flex items-center gap-2">
      {viewList.map((v, index) => (
        <div
          key={index}
          className={`text-3xl w-8 h-8 border border-cyan-600 flex items-center justify-center cursor-pointer ${
            v === view ? "bg-slate-400 text-white" : "text-black"
          }`}
          onClick={() => handleView(v)}
        >
          {v === "list" ? <CiBoxList /> : <MdGridView />}
        </div>
      ))}
    </div>
  );
};

export default ProductViews;
