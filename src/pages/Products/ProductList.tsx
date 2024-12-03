import React, { useState } from "react";
import { NavLink } from "react-router-dom";

interface Products {
  id: number;
  price: number;
  thumbnail: string;
  title: string;
  description: string;
}

const ProductList: React.FC<{ data: Products; view: string }> = ({
  data,
  view,
}) => {
  const { id, thumbnail, price, title, description }: Products = data;

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
          <figure className="relative">
            {loading && <div className="skeleton h-[300px] w-[300px]"></div>}
            <NavLink to={`/products/${id}`}>
              <img
                src={thumbnail}
                alt={title}
                onLoad={handleImageLoad}
                className={`transition-opacity duration-300 ${
                  loading ? "opacity-0" : "opacity-100"
                }`}
              />
            </NavLink>
          </figure>
          <div className="card-body">
            <NavLink to={`/products/${id}`}>
              <h2 className="card-title hover:underline">{title}</h2>
            </NavLink>
            <p>{description}</p>
            <div className="card-actions flex items-center justify-between">
              <span className="font-bold">{formatMoney(price)}</span>
              <button className="btn btn-primary btn-sm">Buy Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="card card-side bg-base-100 shadow-xl">
          <figure className="relative">
            {loading && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            )}
            <img
              src={thumbnail}
              alt={title}
              onLoad={handleImageLoad}
              className={`transition-opacity duration-300 ${
                loading ? "opacity-0" : "opacity-100"
              }`}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <span className="font-bold">{formatMoney(price)}</span>
            <div className="card-actions justify-start">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductList;
