import { Outlet, useNavigate } from "react-router-dom";
import { authSelector } from "../../redux/selector";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const LayoutAuth = () => {
  const { currentUser } = useSelector(authSelector);

  const { user } = currentUser;

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });

  return (
    <div className="bg-primary w-screen h-screen  flex items-center justify-center">
      <Outlet />
    </div>
  );
};

export default LayoutAuth;
