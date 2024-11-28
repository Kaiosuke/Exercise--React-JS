import { Outlet } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import DBHeader from "./DBHeader";

const RootAdmin = () => {
  return (
    <>
      <DBHeader />
      <div className="flex pt-14">
        <div className="flex-[1_0_auto] max-w-[20%] bg-primary h-full border-t border-r border-white py-10">
          <Dashboard />
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default RootAdmin;
