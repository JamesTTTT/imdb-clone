import React from "react";
import "../style/App.css";
import { NavLink } from "react-router-dom";
import { sidebarData } from "../data";

const Sidebar = () => {
  const activeLink = "activeLink";
  const normalLink = "normalLink";

  const SidebarItems = () => {
    return sidebarData.map((item) => {
      return (
        <NavLink
          key={item.title}
          to={item.directory}
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <div className="navbox">
            <span className="icon">{item.icon}</span>
            <span>{item.title}</span>
          </div>
        </NavLink>
      );
    });
  };

  return (
    <div className="sidebar">
      <h3>Movie</h3>
      {SidebarItems()}
    </div>
  );
};

export default Sidebar;
