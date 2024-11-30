import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const DashBoardAuth = () => {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <div className="flex flex-col " style={{ justifyContent: "flex-start" }}>
      <div
        className="flex items-center hover-pri w-full group"
        onClick={() => setShowAuth(!showAuth)}
      >
        <RiGitRepositoryPrivateFill className="text-xl text-text-second group-hover:text-white" />
        <span className="text-lg text-text-second font-semibold">
          Authentication
        </span>
        <FaChevronDown className="text-white ml-auto" />
      </div>
      <div
        className={`mt-2 flex flex-col gap-2 overflow-hidden ${
          showAuth ? "h-100px" : "h-0"
        }`}
      >
        <NavLink
          to="/admin/auth"
          className="hover-pri w-full "
          style={{ justifyContent: "flex-start" }}
        >
          <span className="text-lg text-text-second font-semibold pl-8">
            Sign in
          </span>
        </NavLink>
        <NavLink
          to="#!"
          className="hover-pri w-full "
          style={{ justifyContent: "flex-start" }}
        >
          <span className="text-lg text-text-second font-semibold pl-8">
            Sign up
          </span>
        </NavLink>
        <NavLink
          to="#!"
          className="hover-pri w-full "
          style={{ justifyContent: "flex-start" }}
        >
          <span className="text-lg text-text-second font-semibold pl-8">
            Forgot password
          </span>
        </NavLink>
        <NavLink
          to="#!"
          className="hover-pri w-full "
          style={{ justifyContent: "flex-start" }}
        >
          <span className="text-lg text-text-second font-semibold pl-8">
            Reset password
          </span>
        </NavLink>
        <NavLink
          to="#!"
          className="hover-pri w-full "
          style={{ justifyContent: "flex-start" }}
        >
          <span className="text-lg text-text-second font-semibold pl-8">
            Profile lock
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default DashBoardAuth;
