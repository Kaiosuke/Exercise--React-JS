import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import DbAuth from "./pages/Admin/DbAuth/DbAuth";
import DbInbox from "./pages/Admin/DbInbox/DbInbox";
import Pages from "./pages/Admin/DbPages/Pages";
import DbProduct from "./pages/Admin/DbProduct/DbProduct";
import DbUser from "./pages/Admin/DbUser/DbUser";
import RootAdmin from "./pages/Admin/RootAdmin";
import Home from "./pages/Home/Home";
import Root from "./pages/Root";
import Products from "./pages/Products/Products";
import ProductDetail from "./pages/Products/ProductDetail/ProductDetail";
import Service from "./pages/Services/Service";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="services" element={<Service />} />
        </Route>
        <Route path="/admin" element={<RootAdmin />}>
          <Route path="inbox" element={<DbInbox />} />
          <Route path="product" element={<DbProduct />} />
          <Route path="user" element={<DbUser />} />
          <Route path="page" element={<Pages />} />
          <Route path="auth" element={<DbAuth />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
