import { createContext } from "react";

interface CartContextType {
  carts: any[];
  onAddToCart: (id: number, data: any) => void;
  onIncreaseProduct: (id: number) => void;
  onDecreaseProduct: (id: number) => void;
  onDeleteProduct: (id: number) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export default CartContext;
