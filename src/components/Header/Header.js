import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="sticky top-0">
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 ">
        <div className="container flex flex-wrap justify-between items-center mx-auto md:w-1/3">
          <div
            className="justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <NavLink
                  to="/home"
                  className=" underline underline-offset-8  font-bold md:text-lg block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="reviews"
                  className=" underline underline-offset-8  font-bold md:text-lg block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  REVIEWS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className="  underline underline-offset-8 font-bold md:text-lg block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  DASHBOARD
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blogs"
                  className=" underline underline-offset-8  font-bold md:text-lg block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  BLOGS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className=" underline underline-offset-8  font-bold md:text-lg block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
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
