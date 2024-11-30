import { useState } from "react";
import { FaChevronDown, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const DashBoardUser = () => {
  const [showUser, setShowUser] = useState(false);

  return (
    <div className="flex flex-col " style={{ justifyContent: "flex-start" }}>
      <div
        className="flex items-center hover-pri w-full group"
        onClick={() => setShowUser(!showUser)}
      >
        <FaUser className="text-xl text-text-second group-hover:text-white" />
        <span className="text-lg text-text-second font-semibold">Users</span>
        <FaChevronDown className="text-white ml-auto" />
      </div>
      <div
        className={`mt-2 flex flex-col gap-2 overflow-hidden ${
          showUser ? "h-100px" : "h-0"
        }`}
      >
        <NavLink
          to="/admin/user"
          className="hover-pri w-full "
          style={{ justifyContent: "flex-start" }}
        >
          <span className="text-lg text-text-second font-semibold pl-8">
            Users list
          </span>
        </NavLink>
        <NavLink
          to="#!"
          className="hover-pri w-full "
          style={{ justifyContent: "flex-start" }}
        >
          <span className="text-lg text-text-second font-semibold pl-8">
            Profile
          </span>
        </NavLink>
        <NavLink
          to="#!"
          className="hover-pri w-full "
          style={{ justifyContent: "flex-start" }}
        >
          <span className="text-lg text-text-second font-semibold pl-8">
            Feed
          </span>
        </NavLink>
        <NavLink
          to="#!"
          className="hover-pri w-full "
          style={{ justifyContent: "flex-start" }}
        >
          <span className="text-lg text-text-second font-semibold pl-8">
            Settings
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default DashBoardUser;
