import { useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
const Navbar = () => {
  const [open, isOpen] = useState(false);
  const [showToken, setShowToken] = useState(false);
  //   const { user } = useAuth();
  const user = true;
  console.log(showToken);
  return (
    <nav className="relative w-full shadow bg-gray-800">
      <div className="max-w-screen-2xl p-3 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <a className="text-3xl font-semibold text-white" href="#">
              Neighbors
            </a>
            <div className="flex lg:hidden">
              <RxHamburgerMenu
                onClick={() => isOpen(!open)}
                className={`text-white text-2xl ${
                  open ? "hidden" : ""
                } cursor-pointer`}
              />
              <RxCross1
                onClick={() => isOpen(!open)}
                className={`text-white text-2xl ${
                  open ? "" : "hidden"
                } cursor-pointer`}
              />
            </div>
          </div>
          <div
            className={`${
              open ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
            } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-gray-800  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}
          >
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
              <Link
                className="px-3 py-2 mx-3 mt-2 transition-colors duration-300 transform rounded-md lg:mt-0 text-gray-200  dark:hover:bg-gray-700"
                to="/"
              >
                Home
              </Link>
              <Link
                className="px-3 py-2 mx-3 mt-2 transition-colors duration-300 transform rounded-md lg:mt-0 text-gray-200  dark:hover:bg-gray-700"
                to="/"
              >
                Membership
              </Link>
            </div>

            <div className="flex items-center gap-4 mt-4 lg:mt-0 relative">
              <FaRegBell className="text-xl text-white cursor-pointer" />
              <div
                className={`absolute pt-4  w-48 bg-slate-200 ${
                  showToken
                    ? "top-14 opacity-100 pointer-events-auto"
                    : "top-20 opacity-0 pointer-events-none"
                } duration-150`}
              >
                <h1 className="font-medium text-center p-2">
                  Abdur Rahamn Rahi
                </h1>
                <div className="">
                  <Link
                    className="block py-3 px-5 text-left border-b border-white hover:bg-slate-500 hover:text-gray-100"
                    to="/"
                  >
                    Dashboard
                  </Link>
                  <button className=" w-full py-3 px-5 text-left hover:bg-slate-500 hover:text-gray-100">
                    Sign Out
                  </button>
                </div>
              </div>
              {user ? (
                <div
                  onClick={() => setShowToken(!showToken)}
                  className="w-10 h-10  overflow-hidden border-2 p-0.5  border-gray-400 rounded-full"
                >
                  <img
                    className="w-full h-full rounded-full cursor-pointer"
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    alt=""
                  />
                </div>
              ) : (
                <Link
                  to="/"
                  className="cursor-pointer py-2 px-5 rounded-lg bg-[#83cc79] text-lg font-semibold text-[#020f02]"
                >
                  Join Us
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
