import { useEffect, useState } from "react";

import { getAllProducts } from "../../api/requestApi";
import ProductArrange from "./ProductArrange";
import ProductList from "./ProductList";
import ProductPagination from "./ProductPagination";
import ProductSearch from "./ProductSearch";
import ProductViews from "./ProductViews";

interface Products {
  id: number;
  price: number;
  thumbnail: string;
  title: string;
  description: string;
  rating: number;
}

const Product = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [view, setView] = useState("grid");
  const [limit, setLimit] = useState(8);
  const [skip, setSkip] = useState(0);
  const [pages, setPages] = useState(0);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [order, setOrder] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  useEffect(() => {
    let ignore = false;
    (async () => {
      try {
        const dataList = await getAllProducts(
          "products",
          debouncedSearch,
          limit,
          skip,
          sortBy,
          order
        );
        const data: { products: Products[]; total: number; limit: number } =
          dataList;

        if (!ignore) setProducts(data.products);
        if (limit > 0) {
          if (!ignore) setPages(Math.ceil(data.total / limit));
        } else {
          if (!ignore) setPages(1);
        }
      } catch (error) {
        if (!ignore) console.log(error);
      }
    })();
    return () => {
      ignore = true;
    };
  }, [debouncedSearch, skip, limit, order]);

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

  const handleLimit = (value: number | string) => {
    if (value === "all") {
      setSkip(0);
      setLimit(0);
    } else {
      setSkip(0);
      setLimit(Number(value));
    }
  };

  const handlePage = (page: number | string) => {
    setSkip(Number(page) * limit);
  };

  const handleSearch = (value: string) => {
    setSkip(0);
    setSearch(value);
  };

  const handleSortByPrice = (value: string) => {
    if (value === "all") {
      setSortBy("");
      setOrder("");
    } else {
      setSortBy("price");
      setOrder(value);
    }
  };

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
      <ProductPagination
        renderPagination={renderPagination}
        handlePage={handlePage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Product;
