/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const TopNavigationBar = ({ isAuthenticated, username, handleLogout }) => {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="bg-white text-slate-800 shadow-md fixed left-0 top-0 right-0 z-[9999]">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold">
          <img
            src="https://phinconacademy.com/front/assets/img/academy-logo.png"
            alt=""
            className="w-32"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <Link to="/" className="hover:text-green-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/my-courses" className="hover:text-blue-500">
              MyCourses
            </Link>
          </li>
          {isAuthenticated ? (
            <>
              <li>{username}</li>
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white font-bold py-1 px-1 rounded"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/register"
                  className="hover:bg-green-600 bg-green-500 py-7 px-1 rounded-b-3xl text-white"
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="hover:bg-blue-600 bg-blue-500 py-7 px-2 rounded-bl-3xl text-white"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {navOpen ? (
            <AiOutlineClose size={30} onClick={() => setNavOpen(false)} />
          ) : (
            <AiOutlineMenu size={30} onClick={() => setNavOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 left-0 w-full bg-white md:hidden transform ${
          navOpen ? "translate-y-0 mt-16" : "-translate-y-full"
        } transition-transform duration-300`}
      >
        <ul className="flex flex-col items-center space-y-6 py-6 text-lg">
          <li>
            <Link
              to="/"
              className="hover:text-gray-300"
              onClick={() => setNavOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/my-courses"
              className="hover:text-gray-300"
              onClick={() => setNavOpen(false)}
            >
              MyCourses
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="hover:bg-green-600 bg-green-500 py-1 px-1 text-white rounded-md"
              onClick={() => {
                navigate("/register");
              }}
            >
              Register
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="hover:bg-blue-600 bg-blue-500 py-1 px-1 rounded-md text-white"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNavigationBar;
