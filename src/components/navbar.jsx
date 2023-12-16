import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand colors" to="/">
          Vidly
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              className="nav-link nav-item colors active"
              aria-current="page"
              to="/movies"
            >
              Movies
            </NavLink>
            <NavLink className="nav-link nav-item colors" to="/customers">
              Customers
            </NavLink>
            <NavLink className="nav-link nav-item colors" to="/rentals">
              Rentals
            </NavLink>
            {!user && (
              <React.Fragment>
                <NavLink className="nav-link nav-item colors" to="/login">
                  Login
                </NavLink>
                <NavLink className="nav-link nav-item colors" to="/register">
                  Register
                </NavLink>
              </React.Fragment>
            )}
            {user && (
              <React.Fragment>
                <NavLink className="nav-link nav-item colors" to="/profile">
                  {user.name}
                </NavLink>
                <NavLink className="nav-link nav-item colors" to="/logout">
                  Logout
                </NavLink>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
