import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { SiPagerduty } from "react-icons/si";
import { NavLink } from "react-router-dom";

const DashBoardPage = () => {
  const [showPage, setShowPage] = useState(false);

  return (
    <div className="flex flex-col " style={{ justifyContent: "flex-start" }}>
      <div
        className="flex items-center hover-pri w-full group"
        onClick={() => setShowPage(!showPage)}
      >
        <SiPagerduty className="text-xl text-text-second group-hover:text-white" />
        <span className="text-lg text-text-second font-semibold">Pages</span>
        <FaChevronDown className="text-white ml-auto" />
      </div>
      <div
        className={`mt-2 flex flex-col gap-2 overflow-hidden ${
          showPage ? "h-100px" : "h-0"
        }`}
      >
        <NavLink
          to="/admin/page"
          className="hover-pri w-full "
          style={{ justifyContent: "flex-start" }}
        >
          <span className="text-lg text-text-second font-semibold pl-8">
            Pricing
          </span>
        </NavLink>
        <NavLink
          to="#!"
          className="hover-pri w-full "
          style={{ justifyContent: "flex-start" }}
        >
          <span className="text-lg text-text-second font-semibold pl-8">
            Maintenance
          </span>
        </NavLink>
        <NavLink
          to="#!"
          className="hover-pri w-full "
          style={{ justifyContent: "flex-start" }}
        >
          <span className="text-lg text-text-second font-semibold pl-8">
            404 not found
          </span>
        </NavLink>
        <NavLink
          to="#!"
          className="hover-pri w-full "
          style={{ justifyContent: "flex-start" }}
        >
          <span className="text-lg text-text-second font-semibold pl-8">
            500 server error
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default DashBoardPage;
