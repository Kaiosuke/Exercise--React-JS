import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Root = () => {
  return (
    <>
      <Header />
      <div className="max-w-[1200px] m-auto p-6">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
