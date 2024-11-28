import { CiBoxList } from "react-icons/ci";
import { MdGridView } from "react-icons/md";

const ProductViews = ({
  view,
  setView,
}: {
  view: string;
  setView: (value: string) => void;
}) => {
  const viewList = ["grid", "list"];

  const handleView = (value: string) => {
    setView(value);
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
