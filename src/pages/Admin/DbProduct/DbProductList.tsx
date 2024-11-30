import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

interface PropsType {
  onShowMdDelete: (id: number) => void;
  onShowUpdate: (id: number) => void;
  product: {
    id: number;
    title: string;
    category: string;
    stock: number;
    price: number;
  };
}

const DbProductList = ({
  onShowMdDelete,
  onShowUpdate,
  product,
}: PropsType) => {
  return (
    <tr className="font-bold text-base">
      <th>
        <input type="checkbox" className="checkbox border-white" />
      </th>
      <td>{product.title}</td>
      <td>{product.category}</td>
      <td>{product.stock}</td>
      <th>{product.price}</th>
      <th className="flex items-center gap-2">
        <button
          className="btn btn-info text-white flex items-center text-base"
          onClick={() => onShowUpdate(product.id)}
        >
          <FaEdit />
        </button>
        <button
          className="btn btn-error text-white flex items-center text-base"
          onClick={() => onShowMdDelete(product.id)}
        >
          <MdDelete />
        </button>
      </th>
    </tr>
  );
};

export default DbProductList;
