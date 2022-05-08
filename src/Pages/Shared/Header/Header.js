import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { GiMountainClimbing } from "react-icons/gi";
import { ImCross, ImMenu } from "react-icons/im";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../img/logo.png"
export default function Header({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [user] = useAuthState(auth);
  const logOut = () => {
    signOut(auth);
  };
  return (
    <>
      <nav className=" flex flex-wrap items-center justify-between px-2 py-3  shadow-md bg-white sticky top-0 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-kala"
              to="/"
            >
              <span>
                <img src={logo} alt="" />
              </span>
            </Link>
            <button
              className="text-kala cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? <ImCross /> : <ImMenu />}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto items-center">
              <li className="nav-item">
                <Link
                  to="/"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-kala hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-kala opacity-75"></i>
                  <span className="ml-2">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/inventory"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-kala hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-kala opacity-75"></i>
                  <span className="ml-2">Inventory</span>
                </Link>
              </li>

              {user ? (
                <>
                  <li className="nav-item">
                    <Link
                      to="/myItems"
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-kala hover:opacity-75"
                      href="#pablo"
                    >
                      <span className="ml-2">My Items</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/items/add"
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-kala hover:opacity-75"
                      href="#pablo"
                    >
                      <span className="ml-2">Add an Item</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/inventory"
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-kala hover:opacity-75"
                      href="#pablo"
                    >
                      <i className="fab fa-twitter text-lg leading-lg text-kala opacity-75"></i>
                      <span className="ml-2">{user.displayName}</span>{" "}
                      <span
                        className="ml-2   hover:bg-blue-dark text-komola rounded-full  font-bold py-2 px-4   hover:text-white hover:bg-komola border border-komola"
                        onClick={logOut}
                      >
                        log out
                      </span>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to="/login"
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-kala hover:opacity-75"
                      href="#pablo"
                    >
                      
                      <span className="ml-2   hover:bg-blue-dark text-komola rounded-full  font-bold py-2 px-4   hover:text-white hover:bg-komola border border-komola">
                        Login
                      </span>
                    </Link>
                  </li>
        
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
