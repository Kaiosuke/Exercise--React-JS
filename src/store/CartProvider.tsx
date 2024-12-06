import { getCartList } from "@/api/cartApi";
import { addData, deleteData, updateData } from "@/api/requestApi";
import CartContext from "@/context/CartContext";
import { authSelector, cartListSelector } from "@/redux/selector";
import {
  addProduct,
  decreaseProduct,
  deleteProduct,
  increaseProduct,
} from "@/redux/slices/cartSlice";
import { AppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { currentUser } = useSelector(authSelector);
  const { user }: any = currentUser;
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    user && dispatch(getCartList({ id: user.id }));
  }, [dispatch]);

  const { carts } = useSelector(cartListSelector);

  const handleAddToCart = async (id: number, data: any) => {
    const exist = carts.find((cart) => cart.productId === id);

    const cloneCarts = structuredClone(carts);

    const newData: any = {
      ...data,
      stock: data.stock - 1,
      productId: id,
      userId: user.id,
      quantity: 1,
    };

    if (!exist) {
      const isAdd = addData("carts", newData);
      if (await isAdd) {
        dispatch(addProduct(newData));
      }
    } else {
      const newProduct = cloneCarts.find((cart) => cart.productId === id);
      if (newProduct.stock >= 1) {
        newProduct.quantity += 1;
        newProduct.stock -= 1;
      } else {
        window.alert("Đã hết sản phẩm");
        return;
      }
      const isAddCart = updateData("carts", id, newProduct);
      if (await isAddCart) {
        dispatch(addProduct(newData));
      }
    }
  };

  const handleIncreaseProduct = async (id: number) => {
    let cloneCarts: any[] = structuredClone(carts);
    const newProduct = cloneCarts.find((cart) => cart.id === id);

    if (newProduct.stock > 0) {
      newProduct.quantity += 1;
      newProduct.stock -= 1;
    }
    const isUpdate = updateData("carts", id, newProduct);
    if (await isUpdate) {
      dispatch(increaseProduct({ id: id, product: newProduct }));
    }
  };

  const handleDecreaseProduct = async (id: number) => {
    let cloneCarts: any[] = structuredClone(carts);
    const newProduct = cloneCarts.find((cart) => cart.id === id);

    if (newProduct.quantity > 0) {
      console.log(newProduct.stock);
      newProduct.quantity -= 1;
      newProduct.stock += 1;
    }

    const isUpdate = updateData("carts", id, newProduct);
    if (await isUpdate) {
      dispatch(decreaseProduct({ id: id, product: newProduct }));
    }
  };

  const handleDeleteProduct = async (id: number) => {
    const isDelete = await deleteData("carts", id);

    if (isDelete) {
      dispatch(deleteProduct(id));
    }
  };

  return (
    <CartContext.Provider
      value={{
        carts,
        onAddToCart: handleAddToCart,
        onDeleteProduct: handleDeleteProduct,
        onDecreaseProduct: handleDecreaseProduct,
        onIncreaseProduct: handleIncreaseProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
