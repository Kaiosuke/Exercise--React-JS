import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="navbar bg-cyan-500">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
            >
              <li>
                <NavLink className="text-white" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/products">Product</NavLink>
              </li>
              <li>
                <NavLink to="/services">Service</NavLink>
              </li>
            </ul>
          </div>
          <a href="#!" className="">
            <div className="avatar">
              <div className="w-10">
                <img
                  className="object-cover"
                  src="https://imgs.search.brave.com/PRoQ23kipL9jBkPL2YaOe3IM5oSKppVDnGHXQGIsjz4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vemVuYnVzaW5l/c3MvcV9hdXRvL3Yx/L2xvZ2FzdGVyL2xv/Z2FzdGVyLTIwMTgt/MDQtbmFzYS1sb2dv/LWhpc3RvcnkucG5n"
                  alt="Logo"
                />
              </div>
            </div>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-xl text-white">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-xl text-white">
              <NavLink to="/products">Product</NavLink>
            </li>
            <li className="text-xl text-white">
              <NavLink to="/services">Service</NavLink>
            </li>
            <li className="text-xl text-white">
              <NavLink to="/admin">Dashboard</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-sm">Sign In</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
