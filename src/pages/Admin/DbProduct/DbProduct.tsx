import { useEffect, useRef, useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { FaHome, FaPlus, FaTrash } from "react-icons/fa";
import { ImBookmarks } from "react-icons/im";
import { IoIosSettings } from "react-icons/io";
import { Link } from "react-router-dom";
import DbProductList from "./DbProductList";

import {
  addDbProduct,
  deleteDbProduct,
  getProducts,
  updateDbProduct,
} from "@/api/productApi";
import DbModelAdd from "@/components/DbModelAdd";
import DbModelDelete from "@/components/DbModelDelete";
import DbModelUpdate from "@/components/DbModelUpdate";
import Loading from "@/components/Loading";
import { IProducts } from "@/interfaces";
import { productListSelector } from "@/redux/selector";
import { AppDispatch } from "@/redux/store";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";

const DbProduct = () => {
  const [productId, setProductId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 16;

  const refAdd = useRef<HTMLDialogElement | null>(null);
  const refDelete = useRef<HTMLDialogElement | null>(null);
  const refUpdate = useRef<HTMLDialogElement | null>(null);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProducts({ path: "products" }));
  }, [dispatch]);

  const { dataList, isLoading } = useSelector(productListSelector);

  const [products, setProducts] = useState(dataList);

  useEffect(() => {
    setProducts(dataList);
  }, [dataList]);

  const handleShowAddProduct = () => {
    refAdd.current && refAdd.current.showModal();
  };

  const handleAdd = async (product: IProducts) => {
    dispatch(addDbProduct({ path: "products", data: product }));
  };

  const handleShowUpdate = (id: number) => {
    setProductId(id);
    refUpdate.current && refUpdate.current.showModal();
  };

  const handleUpdate = async (product: IProducts) => {
    if (productId) {
      dispatch(
        updateDbProduct({ path: "products", id: productId, data: product })
      );
    }
    setProductId(null);
  };

  const handleShowMdDelete = (id: number) => {
    setProductId(id);
    refDelete.current && refDelete.current.showModal();
  };

  const handleDelete = async () => {
    if (productId) {
      dispatch(deleteDbProduct({ path: "products", id: productId }));
    }
    setProductId(null);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = products.slice(offset, offset + itemsPerPage);

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  if (isLoading) {
    return (
      <div className="text-center h-screen">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <div className="flex-[1_0_auto] ] bg-primary pt-10 text-white">
        <div className="px-4">
          <div className="breadcrumbs text-lg  font-semibold">
            <ul>
              <li>
                <Link to={"/admin"}>
                  <FaHome />
                  <span className="ml-2">Home</span>
                </Link>
              </li>
              <li>
                <Link to={"/admin/product"}>Product</Link>
              </li>
            </ul>
          </div>
          <div className="mt-2 flex  items-center gap-4">
            <label className="input input-bordered flex items-center gap-2 h-10 w-[380px]  bg-second border-gray-500 ">
              <input
                type="text"
                className="text-white grow placeholder:text-white opacity-70"
                placeholder="Search for product"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-5 w-5 opacity-70 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            <div className="flex items-center">
              <Link className="hover-pri" to={"#!"}>
                <IoIosSettings className="text-xl text-white" />
              </Link>
              <Link className="hover-pri" to={"#!"}>
                <FaTrash className="text-xl text-white" />
              </Link>
              <Link className="hover-pri" to={"#!"}>
                <ImBookmarks className="text-xl text-white" />
              </Link>
              <Link className="hover-pri" to={"#!"}>
                <CiMenuKebab className="text-xl text-white" />
              </Link>
            </div>
            <div className="ml-auto">
              <button
                className="btn btn-primary text-white flex items-center text-base"
                onClick={() => handleShowAddProduct()}
              >
                <FaPlus />
                <span>Add product</span>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4 overflow-y-auto max-h-[440px]">
          <table className="table">
            <thead className="bg-second">
              <tr className=" text-base text-text-second">
                <th>
                  <input type="checkbox" className="checkbox border-white" />
                </th>
                <th>PRODUCT NAME</th>
                <th>CATEGORY</th>
                <th>QUANTITY</th>
                <th>PRICE</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {currentItems &&
                currentItems.map((product, index) => (
                  <DbProductList
                    key={index}
                    product={product}
                    onShowUpdate={handleShowUpdate}
                    onShowMdDelete={handleShowMdDelete}
                  />
                ))}
            </tbody>
          </table>
        </div>
        <div className="flex">
          <ReactPaginate
            previousLabel={<GrFormPrevious />}
            nextLabel={<GrFormNext />}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={Math.ceil(products.length / itemsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            pageLinkClassName={"page-link"}
            containerClassName={"pagination"}
          />
        </div>
      </div>
      <DbModelDelete ref={refDelete} name={"product"} onDelete={handleDelete} />
      <DbModelAdd ref={refAdd} name={"product"} onAdd={handleAdd} />
      <DbModelUpdate
        ref={refUpdate}
        name={"product"}
        id={productId}
        onUpdate={handleUpdate}
      />
    </>
  );
};

export default DbProduct;
