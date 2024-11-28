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
    <div className=" text-white px-4 flex flex-col gap-4 h-[calc(100vh-138px)]">
      <NavLink
        to={"/admin"}
        className="flex items-center hover-pri w-full group"
        style={{ justifyContent: "flex-start" }}
      >
        <MdDashboard className="text-2xl text-text-second group-hover:text-white" />
        <span className="text-xl text-text-second font-semibold">
          Dashboard
        </span>
      </NavLink>
      <NavLink
        to={"/admin/inbox"}
        className="flex items-center hover-pri w-full group"
        style={{ justifyContent: "flex-start" }}
      >
        <HiInboxIn className="text-2xl text-text-second group-hover:text-white" />
        <span className="text-xl text-text-second font-semibold">Inbox</span>
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
        <IoDocumentText className="text-2xl text-text-second group-hover:text-white" />
        <span className="text-xl text-text-second font-semibold">Docs</span>
      </NavLink>
      <NavLink
        to={"#!"}
        className="flex items-center hover-pri w-full group"
        style={{ justifyContent: "flex-start" }}
      >
        <TbComponents className="text-2xl text-text-second group-hover:text-white" />
        <span className="text-xl text-text-second font-semibold">
          Components
        </span>
      </NavLink>
      <NavLink
        to={"#!"}
        className="flex items-center hover-pri w-full group"
        style={{ justifyContent: "flex-start" }}
      >
        <IoMdHelpBuoy className="text-2xl text-text-second group-hover:text-white" />
        <span className="text-xl text-text-second font-semibold">Help</span>
      </NavLink>
    </div>
  );
};

export default Dashboard;
