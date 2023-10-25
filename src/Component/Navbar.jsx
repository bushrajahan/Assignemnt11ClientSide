import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { FaProductHunt } from 'react-icons/fa';

import { AuthContext } from '../AuthProvider/AuthProvider';
import Profile from './Profile';

function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { user } = useContext(AuthContext);

  const navitems = () => (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? 'bg-black md:bg-inherit md:border-b-2 md:border-b-green-700' : ''
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/mycart"
        className={`md:flex md:justify-center md:items-center md:gap-1 ${
          ({ isActive }) =>
            isActive ? 'bg-black md:bg-inherit md:border-b-2 md:border-b-green-700' : ''
        }`}
      >
        <FaCartShopping className='text-green-700'/> MyCart
      </NavLink>
      <NavLink
        to="/addproduct"
        className={`md:flex md:justify-center md:items-center md:gap-1 ${
          ({ isActive }) =>
            isActive ? 'bg-black md:bg-inherit md:border-b-2 md:border-b-green-700' : ''
        }`}
      >
        <FaProductHunt className='text-green-700'/> Addproduct
      </NavLink>
    </>
  );

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <nav className="w-full bg-green-200 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className=" md:flex flex-wrap items-center justify-between ">
        <a href="#" className="flex items-center">
          <img src="/public/sitelogo.png" className="h-8 mr-3" alt="Flowbite Logo" />
        </a>
        <button
          onClick={toggleMobileNav}
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover-bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded={isMobileNavOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`md:hidden w-full shadow-xl -mt-10 bg-green-700 text-black md:w-auto ${isMobileNavOpen ? 'block' : 'hidden'}`} id="navbar-dropdown">
          <button onClick={closeMobileNav} className="absolute md:hidden">
            <span className="sr-only">Close mobile menu</span>
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ul className="flex shadow-xl mt-0 text-white flex-col font-medium p-4 md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navitems()}
          </ul>
        </div>
        <div className={`w-full hidden md:block text-black md:w-auto`} id="navbar-dropdown">
          <ul className="flex mt-4 flex-col font-medium p-4 md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navitems()}
          </ul>
        </div>
        <div>
          {!user ? (
            <button className='md:block bg-green-500 text-black rounded-lg font-semibold p-2 shadow-xl'>
              <Link to="/login">Login</Link>
            </button>
          ) : (
            <Profile />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
