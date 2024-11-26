import React from "react";

interface Products {
  price: number;
  thumbnail: string;
  title: string;
  description: string;
  rating: number;
}

const ProductList: React.FC<{ data: Products; view: string }> = ({
  data,
  view,
}) => {
  const { thumbnail, price, title, description, rating }: Products = data;
  const formatMoney = (money: Number) => {
    return money.toLocaleString("it-IT", {
      style: "currency",
      currency: "USD",
    });
  };
  return (
    <>
      <div
        className={`border-2 border-cyan-400 text-center rounded-lgn ${
          view === "list" ? "flex" : ""
        }`}
      >
        <div className="h-[230px]">
          <a href="#!">
            <img
              className="h-full w-full object-cover"
              src={thumbnail}
              alt={title}
            />
          </a>
        </div>
        <div className="p-2">
          <div
            className={`flex flex-col gap-4 ${
              view === "list" ? "text-left" : ""
            }`}
          >
            <div className="flex flex-col h-20">
              <a href="#!" className="hover:underline h-16">
                <h2 className="text-xl font-bold dark:text-white">{title}</h2>
              </a>
              <span className="font-semibold dark:text-white">
                {formatMoney(price)}
              </span>
            </div>
            <div className="flex flex-col h-[160px]">
              <span className="dark:text-white">{description}</span>
            </div>
            <div className="flex flex-col">
              <span
                className={`px-2.5 py-1 bg-red-300 text-white rounded-xl w-fit ${
                  view === "list" ? "" : "m-auto"
                }`}
              >
                {rating}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
