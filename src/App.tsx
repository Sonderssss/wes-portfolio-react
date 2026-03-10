import React from "react";
import { NavLink } from "react-router-dom";
import AppRouter from "./router";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <nav>
        <div className="container">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "router-link-exact-active" : ""
            }
          >
            HOME
          </NavLink>
          <span>WES</span>
          <div className="other-links">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "router-link-exact-active" : ""
              }
            >
              PROJECTS
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "router-link-exact-active" : ""
              }
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "router-link-exact-active" : ""
              }
            >
              CONTACT
            </NavLink>
          </div>
        </div>
      </nav>
      <AppRouter />
    </>
  );
};

export default App;
