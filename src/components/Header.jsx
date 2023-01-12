import React from "react";
import { Searchbar } from "./";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useStateContext } from "../contexts/ContextProvider";
const Header = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();
  return (
    <div>
      {screenSize <= 900 ? (
        <div className="flex-b icon">
          <h1>Movies</h1>
          <button
            className="menu-button"
            onClick={() => {
              setActiveMenu(!activeMenu);
            }}
          >
            {activeMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      ) : null}
      <div className="flex-start ">
        <Searchbar />
      </div>
    </div>
  );
};

export default Header;
