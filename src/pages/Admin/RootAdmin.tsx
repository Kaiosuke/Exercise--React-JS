import { Outlet, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import DBHeader from "./DBHeader";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { authSelector } from "@/redux/selector";

const RootAdmin = () => {
  const { currentUser } = useSelector(authSelector);

  const { user } = currentUser;

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      window.alert("You need to login to view dashboard");
      navigate("/");
    }
  });

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
