import { useState } from "react";
import { dataList } from "./dataList";
import ProductList from "./ProductList";

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

const Product = () => {
  const productList = dataList.slice(0, 10);

  const [products, setProducts] = useState(productList);
  const [showProduct, setShowProduct] = useState(false);
  const [loadMore, setLoadMore] = useState(10);
  const [arrange, setArrange] = useState("all");

  const handleShowProduct = () => {
    setShowProduct((prev) => !prev);
  };

  const handleLoadMore = () => {
    const newLoadMore = loadMore + 10;
    const updateLoadMore = dataList.slice(0, newLoadMore);
    setLoadMore(newLoadMore);
    setProducts(sortProducts(updateLoadMore, arrange));
  };

  const sortProducts = (products: Data[], value: string): Data[] => {
    const sortedData = [...products];
    switch (value) {
      case "low-to-high":
        sortedData.sort((a, b) => a.final_price - b.final_price);
        break;
      case "high-to-low":
        sortedData.sort((a, b) => b.final_price - a.final_price);
        break;
      default:
        break;
    }
    return sortedData;
  };

  const handleArrange = (value: string) => {
    setArrange(value);
    setProducts(sortProducts(dataList.slice(0, loadMore), value));
  };

  return (
    <div className="pt-4 dark:bg-black">
      <div
        className="px-2.5 py-1 bg-orange-300 w-fit rounded-lg m-auto cursor-pointer hover:bg-orange-500 transition-all ease-in-out duration-200 text-white "
        onClick={() => handleShowProduct()}
      >
        {showProduct ? "Hidden" : "Show Product"}
      </div>
      {showProduct ? (
        <>
          <div className="flex items-center gap-2 w-fit m-auto mt-4 text-black ">
            <label className=" dark:text-white" htmlFor="arrange">
              Arrange
            </label>
            <select
              name="arrange"
              id="arrange"
              className="border border-orange-500 px-2.5 py-1 rounded-lg cursor-pointer"
              onChange={(e) => handleArrange(e.target.value)}
            >
              <option className=" dark:text-white" value="default">
                Default
              </option>
              <option value="low-to-high">Price: Low-to-High</option>
              <option value="high-to-low">Price: high-to-Low</option>
            </select>
          </div>
          <div className="grid grid-cols-4 gap-2 p-2">
            {products.map((data, index) => (
              <ProductList key={index} data={data} />
            ))}
          </div>
          {loadMore < dataList.length ? (
            <div
              className="px-2.5 py-1 bg-blue-300 w-fit rounded-lg mt-5 m-auto cursor-pointer hover:bg-blue-500 transition-all ease-in-out duration-200 text-white"
              onClick={() => handleLoadMore()}
            >
              Load more
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        <div className="text-center mt-4 dark:text-white">
          Product is empty!!
        </div>
      )}
    </div>
  );
};

export default Product;
