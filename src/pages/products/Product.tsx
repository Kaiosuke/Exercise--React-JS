import { useEffect, useState } from "react";
// import { dataList } from "../../dataList";
import ProductList from "./ProductList";
import { CiBoxList } from "react-icons/ci";
import { MdGridView } from "react-icons/md";

interface Products {
  price: number;
  thumbnail: string;
  title: string;
  description: string;
  rating: number;
}

const Product = () => {
  const viewList = ["grid", "list"];

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
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${debouncedSearch}&limit=${limit}&skip=${skip}&sortBy=${sortBy}&order=${order}`
        );
        if (!res.ok) {
          throw new Error(res.status.toString());
        }
        const data: { products: Products[]; total: number; limit: number } =
          await res.json();
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

  const handleView = (value: string) => {
    setView(value);
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
        <div className="flex items-center gap-2">
          {viewList.map((v, index) => (
            <div
              key={index}
              className={`text-3xl w-8 h-8 border border-cyan-600 flex items-center justify-center cursor-pointer ${
                v === view ? "bg-slate-400 text-white" : "text-black"
              }`}
              onClick={() => handleView(v)}
            >
              {v === "list" ? <CiBoxList /> : <MdGridView />}
            </div>
          ))}
        </div>
        <div>
          <input
            className="border border-cyan-600 px-2.5 py-1"
            type="text"
            name="search"
            id="search"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search..."
          />
        </div>

        <div className="flex items-center gap-4">
          <div>
            <div>
              <label className="mr-2" htmlFor="sortPrice">
                Sort by price
              </label>
              <select
                name="sortPrice"
                id="sortPrice"
                className="border border-cyan-600"
                onChange={(e) => handleSortByPrice(e.target.value)}
                defaultValue="all"
              >
                <option value="all">All</option>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
              </select>
            </div>
          </div>
          <div>
            <label className="mr-2" htmlFor="limitProduct">
              Limit Product
            </label>
            <select
              name="limitProduct"
              id="limitProduct"
              className="border border-cyan-600"
              onChange={(e) => handleLimit(e.target.value)}
            >
              <option value="8">8</option>
              <option value="16">16</option>
              <option value="32">32</option>
              <option value="all">All</option>
            </select>
          </div>
        </div>
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
      <div className="flex items-center gap-2 mt-4 justify-center">
        {renderPagination().map((page, index) => (
          <button
            key={index}
            className={`w-10 h-10 border border-black flex items-center justify-center cursor-pointer ${
              page === (Number.isNaN(currentPage) ? 0 : Math.ceil(currentPage))
                ? "bg-blue-500 text-white"
                : "bg-white-200"
            }`}
            onClick={() => page !== "..." && handlePage(page)}
            disabled={page === "..."}
          >
            {page === "..." ? "..." : Number(page) + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Product;
