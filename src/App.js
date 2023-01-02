import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components";
import { Home, Discover } from "./pages";
import "./style/App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="page">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
