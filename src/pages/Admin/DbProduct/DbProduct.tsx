import { useEffect, useRef, useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { FaHome, FaPlus, FaTrash } from "react-icons/fa";
import { ImBookmarks } from "react-icons/im";
import { IoIosSettings } from "react-icons/io";
import { Link } from "react-router-dom";
import DbModelDelete from "../../../components/DbModelDelete";
import {
  addData,
  deleteData,
  getDataList,
  updateData,
} from "../../../api/requestApi";
import DbProductList from "./DbProductList";

import DbModelAdd from "../../../components/DbModelAdd";
import DbModelUpdate from "../../../components/DbModelUpdate";
import ReactPaginate from "react-paginate";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const DbProduct = () => {
  const [products, setProducts] = useState([]);
  const [stateProduct, setStateProduct] = useState(false);
  const [productId, setProductId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 16;

  const refAdd = useRef<HTMLDialogElement | null>(null);
  const refDelete = useRef<HTMLDialogElement | null>(null);
  const refUpdate = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    (async () => {
      const data = await getDataList("products");
      setProducts(data);
    })();
  }, [stateProduct]);

  const handleShowAddProduct = () => {
    refAdd.current && refAdd.current.showModal();
  };

  const handleAdd = async (product: any) => {
    const isAdd = addData("products", product);
    if (await isAdd) {
      setStateProduct(!stateProduct);
    }
  };

  const handleShowUpdate = (id: number) => {
    setProductId(id);
    refUpdate.current && refUpdate.current.showModal();
  };

  const handleUpdate = async (product: any) => {
    if (productId) {
      const isUpdate = updateData("products", productId, product);
      if (await isUpdate) {
        const newProducts: any = products.map((item: { id: number }) => {
          if (item.id === product.id) {
            return { ...product };
          }
          return { ...item };
        });
        setProducts(newProducts);
      }
    }
  };

  const handleShowMdDelete = (id: number) => {
    setProductId(id);
    refDelete.current && refDelete.current.showModal();
  };

  const handleDelete = async () => {
    if (productId) {
      const isDelete = deleteData("products", productId);
      if (await isDelete) {
        const newProducts = products.filter((product: { id: number }) => {
          return product.id !== productId;
        });
        setProducts(newProducts);
      }
    }
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = products.slice(offset, offset + itemsPerPage);

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

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
            activeClassName={"active"}
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
