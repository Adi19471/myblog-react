import React from "react";

import "./Navbar.css";

import { Link } from "react-router-dom";

import adi from "./images/adi.jpg"

const Navbar = () => {
  return (
    <>
     <>
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg position-sticky-md-top navbar-light bg-dark text-warning">
    {/* Container wrapper */}
    <div className="container-fluid">
      {/* Toggle button */}
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse   " id="navbarSupportedContent">
        {/* Navbar brand */}
        <Link className="navbar-brand mt-2 mt-lg-0 shadow-lg" to="/Home">
          <img
          
            src="https://logodix.com/logo/1880861.png"
            height={15}
            alt="MDB Logo"
            loading="lazy"
            className="img-logo"
          />
        </Link>
        {/* Left links */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">


        <li className="nav-item">
            <Link className="nav-link shadow-lg mx-5 text-white" to="/Home">
             HOME
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link shadow-lg mx-5 text-white" to="/About">
             ABOUT
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link shadow-lg mx-5 text-white" to="/Service">
          SERVICE
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link shadow-lg mx-5 text-white" to="/Contact">
             CONTACT
            </Link>
          </li>
          
        </ul>
        {/* Left links */}
      </div>
      {/* Collapsible wrapper */}
      {/* Right elements */}
      <div className="d-flex align-items-center">
        {/* Icon */}
        <a className="text-reset me-3" href="#">
          <i className="fas fa-shopping-cart" />
        </a>
        {/* Notifications */}
        <div className="dropdown">
          <a
            className="text-reset me-3 dropdown-toggle hidden-arrow"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-bell" />
            <span className="badge ">
              
            </span>
          </a>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <li>
              <a className="dropdown-item" href="#">
            Today Offer
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
             Discount
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
              Contact us
              </a>
            </li>
          </ul>
        </div>
        {/* Avatar */}
        <div className="dropdown">
          <Link
            className="dropdown-toggle d-flex align-items-center hidden-arrow"
            href="https://adi19471.github.io/"
            id="navbarDropdownMenuAvatar"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://adi19471.github.io/images/adi.jpg"
              className="rounded-circle"
              height={25}
              alt="Black and White Portrait of a Man"
              loading="lazy"

           
            />
          </Link>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuAvatar"
          >
            <li>
              <a className="dropdown-item" href="#">
                My profile
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>




      {/* Right elements */}
    </div>
    {/* Container wrapper */}
  </nav>
  {/* Navbar */}
</>

    </>
  );
};

export default Navbar;
