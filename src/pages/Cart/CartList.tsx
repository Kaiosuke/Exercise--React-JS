import useCartContext from "@/hooks/useCartContext";
import CartItems from "./CartItems";

const CartList = () => {
  const { carts } = useCartContext();

  return (
    <div className="flex-[1_0_auto] max-w-[70%] p-14 shadow-lg shadow-gray-500/50 rounded-l-xl h-[660px] overflow-y-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Shopping Cart</h1>
        <span>{carts.length} items</span>
      </div>
      <div className="flex flex-col gap-4 mt-10">
        {carts.length ? (
          carts.map((cart, id: number) => <CartItems key={id} cart={cart} />)
        ) : (
          <div>Cart is empty</div>
        )}
      </div>
    </div>
  );
};

export default CartList;
