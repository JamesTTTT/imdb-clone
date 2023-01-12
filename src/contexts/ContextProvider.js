import React, { createContext, Profiler, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  // const [isClicked, setisClicked] = useState(initialState)
  const [screenSize, setScreenSize] = useState(undefined);
  const [searchPhrase, setSearchPhrase] = useState("");

  // const handleClick = (clicked) => {
  //     setisClicked({ ...initialState, [clicked]: true});
  // }

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        searchPhrase,
        setSearchPhrase,
        // isClicked,
        // setisClicked,
        // handleClick,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
