import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import DbAuth from "./pages/Admin/DbAuth/DbAuth";
import DbInbox from "./pages/Admin/DbInbox/DbInbox";
import Pages from "./pages/Admin/DbPages/Pages";
import DbProduct from "./pages/Admin/DbProduct/DbProduct";
import DbUser from "./pages/Admin/DbUser/DbUser";
import LayoutAdmin from "./pages/Admin/LayouAdmin";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import ProductDetail from "./pages/Products/ProductDetail/ProductDetail";
import Products from "./pages/Products/Products";
import Root from "./pages/Root";
import Service from "./pages/Services/Service";
import LayoutAuth from "./pages/auth/LayoutAth";
import Register from "./pages/auth/register/Register";
import SignIn from "./pages/auth/signIn/SignIn";
import TodoList from "./pages/todoList/TodoList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="services" element={<Service />} />
          <Route path="todoList" element={<TodoList />} />
          <Route path="carts" element={<Cart />} />
        </Route>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route path="inbox" element={<DbInbox />} />
          <Route path="product" element={<DbProduct />} />
          <Route path="user" element={<DbUser />} />
          <Route path="page" element={<Pages />} />
          <Route path="auth" element={<DbAuth />} />
        </Route>
        <Route path="/users" element={<LayoutAuth />}>
          <Route path="signIn" element={<SignIn />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
