import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Header />
      <div className="max-w-[1400px] m-auto p-6">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
