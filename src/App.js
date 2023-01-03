import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar, Footer, Searchbar } from "./components";
import { Home, Discover } from "./pages";
import "./style/App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="page">
          <Sidebar />
          <div className="content">
            <Searchbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/discover" element={<Discover />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
