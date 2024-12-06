import useCartContext from "@/hooks/useCartContext";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

interface CartsType {
  id: number;
  userId: number;
  productId: number;
  title: string;
  price: number;
  quantity: number;
  thumbnail: string;
  stock: number;
}

const CartItems = ({ cart }: { cart: CartsType }) => {
  const { id, title, price, quantity, thumbnail, stock } = cart;
  const [quantityProduct, setQuantityProduct] = useState(quantity);

  const { onIncreaseProduct, onDecreaseProduct, onDeleteProduct } =
    useCartContext();

  const handleIncreaseProduct = (id: number) => {
    if (stock >= 1) {
      onIncreaseProduct(id);
      setQuantityProduct((prev) => prev + 1);
    } else {
      window.alert("Cannot increase more products");
    }
  };

  const handleDecreaseProduct = (id: number) => {
    if (quantity > 0) {
      onDecreaseProduct(id);
      setQuantityProduct((prev) => prev - 1);
    } else {
      window.alert("Cannot decrease more products");
    }
  };

  const handleChangeQuantity = (quantity: number) => {
    console.log(quantity);
    // if (stock ) setQuantityProduct(quantity);
  };

  const handleDeleteProduct = (id: number) => {
    onDeleteProduct(id);
  };

  return (
    <>
      <div className="w-full h-[1px] bg-gray-400 my-4 rounded-xl" />
      <div className="flex justify-between items-center">
        <div className="avatar">
          <div className="w-24">
            <img src={thumbnail} alt={title} />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl ">{title}</h2>
          <span>Quantity: {stock}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaMinus
            className="text-base cursor-pointer"
            onClick={() => handleDecreaseProduct(id)}
          />
          <div>
            <input
              type="text"
              className="w-8 h-5 border border-black text-center"
              value={quantityProduct}
              onChange={(e) => handleChangeQuantity(Number(e.target.value))}
            />
          </div>
          <FaPlus
            className="text-base cursor-pointer"
            onClick={() => handleIncreaseProduct(id)}
          />
        </div>
        <div>
          <span>{price}</span>
        </div>

        <MdCancel
          className="text-2xl cursor-pointer"
          onClick={() => handleDeleteProduct(id)}
        />
      </div>
    </>
  );
};

export default CartItems;
