import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import DateTimeDisplay from "./date";
import { useSelector } from "react-redux";

const Header = () => {
  const login = useSelector((state) => state.login.loggedIn);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-custom">
        <div className="container-fluid">
          <Link className="navbar-brand malayalam-text fw-bold" to="/">
            ദിനവാർത്ത
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/articles">
                  Articles
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/authors">
                  Authors
                </Link>
              </li>
            </ul>
            <DateTimeDisplay />
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Sign Up
                </Link>
              </li>
              {login ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/logout">
                    Logout
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
