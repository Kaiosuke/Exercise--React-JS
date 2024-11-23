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
      <div className="border-2 border-cyan-400 p-2 text-center mt-4 rounded-lg">
        <div>
          <a href="#!">
            <img className="w-40 m-auto" src={image} alt={name} />
          </a>
        </div>
        <div className="">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col h-20">
              <a href="#!" className="hover:underline h-16">
                <h2 className="text-xl font-bold dark:text-white">{name}</h2>
              </a>
              <span className="font-semibold dark:text-white">
                {formatMoney(final_price)}
              </span>
            </div>
            <div className="flex flex-col h-[140px]">
              <span className="dark:text-white">Sku: {sku}</span>
              <span className="dark:text-white">Stock: {stock}</span>
              <span className="dark:text-white">{meta_description}</span>
            </div>
            <div className="flex flex-col m-auto h-18">
              <span className="w-fit px-2.5 h-16 bg-gray-400 text-white rounded-xl flex items-center justify-center">
                Materials: {materials}
              </span>
              <span className="dark:text-white">Stock: {stock}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-medium h-40 dark:text-white">
                {instruction}
              </span>
              <span className="px-2.5 py-1 bg-red-300 text-white rounded-xl w-fit m-auto">
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
