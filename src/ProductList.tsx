import React from "react";

interface Data {
  final_price: number;
  image: string;
  meta_title: string;
  meta_description: string;
  name: string;
  short_description: string;
  status: number;
  url_path?: string;
  sku: string;
  slug: string;
  stock: number;
  materials?: string;
  main_category: string;
  instruction?: string;
  is_pre_order?: boolean;
}

const ProductList: React.FC<{ data: Data }> = ({ data }) => {
  const {
    final_price,
    image,
    meta_description,
    name,
    sku,
    stock,
    materials,
    main_category,
    instruction,
  }: Data = data;
  const formatMoney = (money: Number) => {
    return money.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
  };

  return (
    <>
      <div className="flex gap-4 pt-4">
        <div className="flex-[1_0_auto] max-w-[25%]">
          <a href="#!">
            <img src={image} alt={name} />
          </a>
        </div>
        <div className="flex-[1_0_auto] max-w[75%]">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <a href="#!" className="hover:underline">
                <h2 className="text-2xl font-bold">{name}</h2>
              </a>
              <span className="font-semibold ">{formatMoney(final_price)}</span>
            </div>
            <div className="flex flex-col">
              <span>Sku: {sku}</span>
              <span>Stock: {stock}</span>
              <span>{meta_description}</span>
            </div>
            <div className="flex flex-col">
              <span className="px-2.5 py-1 bg-gray-400 text-white rounded-xl w-fit">
                Materials: {materials}
              </span>
              <span>Stock: {stock}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-medium">{instruction}</span>
              <span className="px-2.5 py-1 bg-red-300 text-white rounded-xl w-fit">
                {main_category}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
