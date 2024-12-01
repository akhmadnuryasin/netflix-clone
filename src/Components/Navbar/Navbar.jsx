import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import { logout } from "../../firebase";

const Navbar = () => {
  const navRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    });
  }, []);

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src="/logo.png" alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src="/search_icon.svg" alt="search_icon" className="icons" />
        <p>Children</p>
        <img src="/bell_icon.svg" alt="bell_icon" className="icons" />
        <div className="navbar-profile">
          <img src="/profile_img.png" alt="profile_icon" className="profile" />
          <img src="/caret_icon.svg" alt="caret_icon" />
          <div className="dropdown">
            <p
              onClick={() => {
                logout();
              }}
            >
              Sign Out of Netflix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
