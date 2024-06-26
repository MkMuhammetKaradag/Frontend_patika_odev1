
import { Link, Outlet } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
const Header = () => {
  return (
    <div className="w-full flex  relative  flex-col items-center">
      <nav className="bg-white sticky top-0  z-20 w-full border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <>BMI</>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  to={"/"}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  to={"/history"}
                >
                  hello
                </Link>
              </li>
              <li className=" flex   relative items-end  ">
                <Link to={"/basket"}>
                  <SlBasket
                    size={24}
                    className=" text-white hover:text-blue-500"
                  />
                  {/* <span className=" absolute   -right-0 top-0 inline-flex items-end rounded-xl bg-gray-50 px-1 py-1 text-xs  text-gray-600 ring-1 ring-inset ring-gray-500/10">
                    2
                  </span> */}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container flex flex-row  justify-center h-full  mt-11">
        <Outlet />
      </div>
    </div>
  );
};

export default Header;
