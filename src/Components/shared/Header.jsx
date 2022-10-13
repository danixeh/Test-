import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isLogged, setIsLogged] = useState("");

  useEffect(() => {
    const isThereToken = localStorage.getItem("token");
    setIsLogged(isThereToken);
  }, [isLogged]);

  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <header className="header">
      <NavLink to="/store">
        <img className="home-img-one" src="/logow.svg" alt="" />
      </NavLink>
      <nav className="header_nav">
        <ul className="header_list">
          {isLogged ? (
            <li className="header_item">
              <NavLink
                className={({ isActive }) => (isActive ? "active-link" : "")}
                to="/store/login"
                onClick={logOut}
              >
                Log Out
              </NavLink>
            </li>
          ) : (
            <li className="header_item">
              <NavLink
                className={({ isActive }) => (isActive ? "active-link" : "")}
                to="/store/login"
              >
                login
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
