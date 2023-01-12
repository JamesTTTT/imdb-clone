import React, { useEffect } from "react";
import "../style/App.css";
import { NavLink } from "react-router-dom";
import { sidebarData } from "../data";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, setScreenSize } =
    useStateContext();

  const activeLink = "activeLink";
  const normalLink = "normalLink";

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const SidebarItems = () => {
    return sidebarData.map((item) => {
      return (
        <NavLink
          key={item.title}
          to={item.directory}
          onClick={handleCloseSideBar}
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

  if (!activeMenu) {
    return null;
  }

  return (
    <nav className="sidebar">
      {screenSize > 900 ? <h3>Movie</h3> : null}
      {SidebarItems()}
    </nav>
  );
};

export default Sidebar;
