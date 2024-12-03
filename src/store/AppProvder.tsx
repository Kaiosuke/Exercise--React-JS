import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../api/requestApi";
import AppContext from "../context/AppContext";
import { productsSelector } from "../redux/selector";
import { AppDispatch } from "../redux/store";

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    products,
    search,
    limit,
    skip,
    order,
    sortBy,
  }: {
    products: string[] | undefined;
    search: string;
    limit: number;
    skip: number;
    order: string;
    sortBy: string;
  } = useSelector(productsSelector);

  const [debouncedSearch, setDebouncedSearch] = useState(search);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  useEffect(() => {
    dispatch(
      getAllProducts({
        path: "products",
        search: debouncedSearch,
        limit,
        skip,
        sortBy,
        order,
      })
    );
  }, [dispatch, debouncedSearch, limit, sortBy, order]);

  return (
    <AppContext.Provider value={{ products: products }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
