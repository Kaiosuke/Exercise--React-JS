import { HiInboxIn } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";
import DashBoardAuth from "./DashBoardAuth";
import DashBoardPage from "./DashBoardPage";
import DashBoardProduct from "./DashBoardProduct";
import DashBoardUser from "./DashBoardUser";
import { IoDocumentText } from "react-icons/io5";
import { TbComponents } from "react-icons/tb";
import { IoMdHelpBuoy } from "react-icons/io";

const Dashboard = () => {
  return (
    <div className="flex-[1_0_auto] max-w-[300px] bg-primary border-t border-r h-[calc(100vh-58px)] border-white py-10 overflow-y-auto">
      <div className=" text-white px-4 flex flex-col gap-4">
        <NavLink
          to={"/admin"}
          className="flex items-center hover-pri w-full group"
          style={{ justifyContent: "flex-start" }}
        >
          <MdDashboard className="text-xl text-text-second group-hover:text-white" />
          <span className="text-lg text-text-second font-semibold">
            Dashboard
          </span>
        </NavLink>
        <NavLink
          to={"/admin/inbox"}
          className="flex items-center hover-pri w-full group"
          style={{ justifyContent: "flex-start" }}
        >
          <HiInboxIn className="text-xl text-text-second group-hover:text-white" />
          <span className="text-lg text-text-second font-semibold">Inbox</span>
        </NavLink>
        <DashBoardProduct />
        <DashBoardUser />
        <DashBoardPage />
        <DashBoardAuth />
        <div className="h-[1px] w-full bg-white"></div>
        <NavLink
          to={"#!"}
          className="flex items-center hover-pri w-full group"
          style={{ justifyContent: "flex-start" }}
        >
          <IoDocumentText className="text-xl text-text-second group-hover:text-white" />
          <span className="text-lg text-text-second font-semibold">Docs</span>
        </NavLink>
        <NavLink
          to={"#!"}
          className="flex items-center hover-pri w-full group"
          style={{ justifyContent: "flex-start" }}
        >
          <TbComponents className="text-xl text-text-second group-hover:text-white" />
          <span className="text-lg text-text-second font-semibold">
            Components
          </span>
        </NavLink>
        <NavLink
          to={"#!"}
          className="flex items-center hover-pri w-full group"
          style={{ justifyContent: "flex-start" }}
        >
          <IoMdHelpBuoy className="text-xl text-text-second group-hover:text-white" />
          <span className="text-lg text-text-second font-semibold">Help</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Dashboard;
