import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="sticky top-0 ">
      <nav className="bg-emerald-200 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 ">
        <div className="container flex flex-wrap justify-between items-center mx-auto md:w-1/3">
          <div
            className="justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <NavLink
                  to="/home"
                  className=" underline underline-offset-8  font-bold md:text-lg block py-2 pr-4 pl-3  md:bg-transparent  md:p-0 dark:text-white"
                  aria-current="page"
                  style={({ isActive }) =>
                    isActive ? { color: "red" } : { color: "black" }
                  }
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="reviews"
                  className=" underline underline-offset-8  font-bold md:text-lg block py-2 pr-4 pl-3 border-b md:hover:bg-transparent md:border-0  md:p-0 md:dark:hover:bg-transparent "
                  style={({ isActive }) =>
                    isActive ? { color: "red" } : { color: "black" }
                  }
                >
                  REVIEWS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className="  underline underline-offset-8 font-bold md:text-lg block py-2 pr-4 pl-3 border-b  md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:bg-transparent "
                  style={({ isActive }) =>
                    isActive ? { color: "red" } : { color: "black" }
                  }
                >
                  DASHBOARD
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blogs"
                  className=" underline underline-offset-8  font-bold md:text-lg block py-2 pr-4 pl-3 md:hover:bg-transparent md:border-0  md:p-0 md:dark:hover:bg-transparent "
                  style={({ isActive }) =>
                    isActive ? { color: "red" } : { color: "black" }
                  }
                >
                  BLOGS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className=" underline underline-offset-8  font-bold md:text-lg block py-2 pr-4 pl-3  md:hover:bg-transparent md:border-0 md:p-0 md:dark:hover:bg-transparent "
                  style={({ isActive }) =>
                    isActive ? { color: "red" } : { color: "black" }
                  }
                >
                  ABOUT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
