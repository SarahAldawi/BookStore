import { FC } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.webp";
import { Outlet } from "react-router-dom";
const Navbar: FC = () => {
  return (
    <>
      <div className="bg-offWhite navbar">
        <div className="flex-1 max-w-screen-xl flex-wrap items-center justify-between mx-auto p-4">
          <NavLink className="flex items-center space-x-3" to="/">
            <img
              src={logo}
              alt="logo"
              className="h-20 btn bg-inherit border-none"
            />
          </NavLink>
        </div>
        <div className="text-ReddenedEarth space-x-3 mr-10">
          <NavLink to="/" className="block py-2 px-3">
            Home
          </NavLink>
          <NavLink to="Browse" className="block py-2 px-3">
            Browse
          </NavLink>
          <NavLink to="YourBooks" className="block py-2 px-3">
            Your Books
          </NavLink>
          <NavLink to="About" className="block py-2 px-3">
            About
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
