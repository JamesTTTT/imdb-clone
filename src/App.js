import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar, Footer, Searchbar, Header } from "./components";
import { Home, Discover, Inspect, SearchMode } from "./pages";
import "./style/App.css";
import "./style/Responsive.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="page">
          <Sidebar />
          <div className="content">
            <Header />
            <div className="routesnpm">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<SearchMode />} />
                <Route path="/discover" element={<Discover />} />
                <Route path="/inspect" element={<Inspect />} />
              </Routes>
            </div>

            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
