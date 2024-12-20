import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import useAppContext from "@/hooks/useAppContext";
import {
  limitProducts,
  searchProducts,
  skipProducts,
  sortPriceProducts,
} from "@/redux/slices/productsSlice";
import ProductArrange from "./ProductArrange";
import ProductList from "./ProductList";
import ProductSearch from "./ProductSearch";
import ProductViews from "./ProductViews";
import { productsSelector } from "@/redux/selector";
import Loading from "@/components/Loading";
import ProductPagination from "./ProductPagination";

const Product = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const { products } = useAppContext();

  const { loading, view, skip, limit, pages } = useSelector(productsSelector);

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
    dispatch(sortPriceProducts(value));
  };

  // Pagination
  const currentPage = skip / limit;

  const renderPagination = () => {
    const pagination = [];

    for (let i = 0; i < 3 && i < pages; i++) {
      pagination.push(i);
    }

    if (currentPage > 3) {
      pagination.push("...");
    }
    for (
      let i = Math.max(3, currentPage - 1);
      i <= Math.min(pages - 4, currentPage + 1);
      i++
    ) {
      pagination.push(i);
    }

    if (currentPage < pages - 4) {
      pagination.push("...");
    }

    for (let i = Math.max(pages - 3, 3); i < pages; i++) {
      pagination.push(i);
    }

    return pagination;
  };

  const handlePage = (page: number | string) => {
    dispatch(skipProducts(Number(page) * limit));
  };

  return (
    <div className="max-full m-auto">
      <div className="flex items-center justify-between">
        <ProductViews view={view} />
        <ProductSearch search={search} handleSearch={handleSearch} />
        <ProductArrange
          handleSortByPrice={handleSortByPrice}
          handleLimit={handleLimit}
        />
      </div>
      {loading ? (
        <div className="text-center mt-4">
          <Loading />
        </div>
      ) : (
        <div
          className={`mt-4 dark:bg-black ${
            view === "grid"
              ? "grid grid-cols-4 gap-4 mt-4 "
              : "flex flex-col gap-4"
          }`}
        >
          {products.length ? (
            products.map((data, index) => (
              <ProductList key={index} data={data} view={view} />
            ))
          ) : (
            <div>No products found!</div>
          )}
        </div>
      )}
      <ProductPagination
        renderPagination={renderPagination}
        handlePage={handlePage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Product;
