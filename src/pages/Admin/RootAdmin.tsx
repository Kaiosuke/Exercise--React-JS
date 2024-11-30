import { Outlet } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import DBHeader from "./DBHeader";

const RootAdmin = () => {
  return (
    <>
      <DBHeader />
      <div className="flex pt-14">
        <Dashboard />
        <Outlet />
      </div>
    </>
  );
};

export default RootAdmin;
