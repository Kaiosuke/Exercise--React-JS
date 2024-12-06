import CartContext from "@/context/CartContext";
import { useContext } from "react";

const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("Error at userCartContext");
  }
  return context;
};

export default useCartContext;
