import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import useAppContext from "@/hooks/useAppContext";
import {
  limitProducts,
  searchProducts,
  sortPriceProducts,
} from "@/redux/slices/productsSlice";
import ProductArrange from "./ProductArrange";
import ProductList from "./ProductList";
import ProductSearch from "./ProductSearch";
import ProductViews from "./ProductViews";
import { productsSelector } from "@/redux/selector";
import Loading from "@/components/Loading";

const Product = () => {
  const [view, setView] = useState("grid");
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const { products } = useAppContext();

  const { loading } = useSelector(productsSelector);

  const handleLimit = (value: number | string) => {
    if (value === "all") {
      dispatch(limitProducts(0));
    } else {
      dispatch(limitProducts(value));
    }
  };

  const handleSearch = (value: string) => {
    setSearch(value);
    dispatch(searchProducts(value));
  };

  const handleSortByPrice = (value: string) => {
    if (value === "all") {
      dispatch(sortPriceProducts(""));
    } else {
      dispatch(sortPriceProducts(value));
    }
  };

  if (loading) {
    return (
      <div className="text-center h-screen">
        <Loading />
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] m-auto">
      <div className="flex items-center justify-between">
        <ProductViews view={view} setView={setView} />
        <ProductSearch search={search} handleSearch={handleSearch} />
        <ProductArrange
          handleSortByPrice={handleSortByPrice}
          handleLimit={handleLimit}
        />
      </div>
      <div
        className={`mt-4 dark:bg-black ${
          view === "grid"
            ? "grid grid-cols-4 gap-4 mt-4 "
            : "flex flex-col gap-4"
        }`}
      >
        {products.length > 0 ? (
          products.map((data, index) => (
            <ProductList key={index} data={data} view={view} />
          ))
        ) : (
          <div>No products found!</div>
        )}
      </div>
    </div>
  );
};

export default Product;
