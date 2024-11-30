import { useState } from "react";
import { FaBars, FaBell, FaMoon, FaSun } from "react-icons/fa";
import { PiSquaresFourFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const DBHeader = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <header className="fixed bg-primary p-4 w-full border-b border-red-200">
      <div className="flex items-center">
        <div className="hover-pri">
          <FaBars className="text-text-second text-2xl" />
        </div>
        <div className="ml-4 ">
          <div className="flex items-center gap-2">
            <NavLink to="/" className="w-14 rounded-full">
              <img
                className="object-contain"
                src="https://img.pikbest.com/origin/10/50/46/10ppIkbEsTtgD.png!bw700"
              />
            </NavLink>
            <span className="text-white text-2xl">The Store</span>
          </div>
        </div>
        <div className="ml-20">
          <label className="input input-bordered flex items-center gap-2 h-10 w-[380px] bg-second border-gray-500 ">
            <input
              type="text"
              className="text-white grow placeholder:text-white opacity-70"
              placeholder="Search"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-5 w-5 opacity-70 text-white"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <div className="ml-auto flex items-center]">
          <div className="hover-pri group">
            <FaBell className="text-text-second text-xl group-hover:text-white" />
          </div>
          <div className="hover-pri group">
            <PiSquaresFourFill className="text-text-second text-xl group-hover:text-white" />
          </div>
          <div className="hover-pri group" onClick={handleDarkMode}>
            {darkMode ? (
              <FaMoon className="text-text-second text-xl group-hover:text-white" />
            ) : (
              <FaSun className="text-text-second text-xl group-hover:text-white" />
            )}
          </div>
          <div className="avatar ml-2">
            <div className="w-8 rounded-full">
              <NavLink to="#!">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="Tailwind-CSS-Avatar-component"
                />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DBHeader;
