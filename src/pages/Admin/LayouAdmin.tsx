import NotAdmin from "@/components/NotAdmin";
import { authSelector } from "@/redux/selector";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import AdminHeader from "../../components/Header/AdminHeader";
import Dashboard from "./Dashboard/Dashboard";
import NotFound from "@/components/NotFound";

const LayoutAdmin = () => {
  const { currentUser } = useSelector(authSelector);

  const { user } = currentUser;

  if (!user) {
    return <NotFound />;
  }

  if (user && !user.isAdmin) {
    return <NotAdmin />;
  }

  return (
    <>
      <AdminHeader />
      <div className="flex pt-14">
        <Dashboard />
        <Outlet />
      </div>
    </>
  );
};

export default LayoutAdmin;
