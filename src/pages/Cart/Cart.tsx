import { useSelector } from "react-redux";
import CartList from "./CartList";
import Summary from "./Summary";
import { cartListSelector } from "@/redux/selector";
import Loading from "@/components/Loading";

const Cart = () => {
  const { isLoading } = useSelector(cartListSelector);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="max-w-full rounded-lg ">
      <div className="flex">
        <CartList />
        <Summary />
      </div>
    </div>
  );
};

export default Cart;
