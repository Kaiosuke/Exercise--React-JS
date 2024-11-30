import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { MdGamepad } from "react-icons/md";
import { NavLink } from "react-router-dom";

const DashBoardProduct = () => {
  const [showProduct, setShowProduct] = useState(false);

  return (
    <div className="flex flex-col " style={{ justifyContent: "flex-start" }}>
      <div
        className="flex items-center hover-pri w-full group"
        onClick={() => setShowProduct(!showProduct)}
      >
        <MdGamepad className="text-xl text-text-second group-hover:text-white" />
        <span className="text-lg text-text-second font-semibold">
          E-commerce
        </span>
        <FaChevronDown className="text-white ml-auto" />
      </div>
      <div
        className={`mt-2 flex flex-col gap-2 overflow-hidden ${
          showProduct ? "h-100px" : "h-0"
        }`}
      >
        <NavLink
          to="/admin/product"
          className="hover-pri w-full "
          style={{ justifyContent: "flex-start" }}
        >
          <span className="text-lg text-text-second font-semibold pl-8">
            Product
          </span>
        </NavLink>
        <NavLink
          to="#!"
          className="hover-pri w-full "
          style={{ justifyContent: "flex-start" }}
        >
          <span className="text-lg text-text-second font-semibold pl-8">
            Billing
          </span>
        </NavLink>
        <NavLink
          to="#!"
          className="hover-pri w-full "
          style={{ justifyContent: "flex-start" }}
        >
          <span className="text-lg text-text-second font-semibold pl-8">
            Invoice
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default DashBoardProduct;
