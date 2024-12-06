import useCartContext from "@/hooks/useCartContext";
import { cartListSelector } from "@/redux/selector";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

interface Products {
  id: number;
  price: number;
  thumbnail: string;
  title: string;
  description: string;
  stock: number;
}

const ProductList: React.FC<{ data: Products; view: string }> = ({
  data,
  view,
}) => {
  const { id, thumbnail, price, title, description, stock }: Products = data;

  const { carts } = useSelector(cartListSelector);

  const findProduct = carts.find((cart) => cart.id === id);

  const { onAddToCart } = useCartContext();

  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  const formatMoney = (money: number) => {
    return money.toLocaleString("it-IT", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <>
      {view === "grid" ? (
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure className="">
            {loading && <div className="skeleton h-[276px] w-[276px]"></div>}
            <NavLink to={`/products/${id}`}>
              <img
                src={thumbnail}
                alt={title}
                onLoad={handleImageLoad}
                className={`${loading ? "hidden" : "block"}`}
              />
            </NavLink>
          </figure>
          <div className="card-body">
            <NavLink to={`/products/${id}`}>
              <h2 className="card-title hover:underline">{title}</h2>
              <span>Quantity: {stock}</span>
            </NavLink>
            <p>{description}</p>
            <div className="card-actions flex items-center justify-between">
              <span className="font-bold">{formatMoney(price)}</span>
              {findProduct ? (
                <NavLink to="/carts" className="btn btn-primary btn-sm">
                  View to Cart
                </NavLink>
              ) : (
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => onAddToCart(id, data)}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="card card-side bg-base-100 shadow-xl flex p-4">
          <figure className="flex-[1_0_auto] max-w-[400px]">
            {loading && <div className="skeleton w-[300px] h-[300px] "></div>}
            <img
              src={thumbnail}
              alt={title}
              onLoad={handleImageLoad}
              className={`${loading ? "hidden" : "block"}`}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <span className="font-bold">{formatMoney(price)}</span>
            <div className="card-actions justify-start">
              <button className="btn btn-primary">Add To Cart</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductList;
