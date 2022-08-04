import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";
import About from "./pages/About";

import CryptoCurrencies from "./pages/CryptoCurrencies";
import CryptoDetail from "./pages/CryptoDetails";
import SideNavBar from "../src/components/SideNavBar/SideNavBar";

function App() {
  return (
    <div className="app">
      <div className="navBar">
        <SideNavBar />
      </div>
      <div className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cryptoCurrencies" element={<CryptoCurrencies />} />
          <Route path="/about" element={<About />} />
          <Route path="/cryptoCurrency/:id" element={<CryptoDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
