import React from "react";
import { Routes, Route } from "react-router-dom";
import SideNavBar from "./components/SideNavbar/SideNavBar";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import About from "./components/About/About";
import CryptoDetail from "./components/CryptoDetails/CryptoDetail";
import AllCryptoCurrencies from "./components/AllCryptoCurrencies/AllCryptoCurrencies";

function App() {
  return (
    <div className="app">
      <div className="navBar">
        <SideNavBar />
      </div>
      <div className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cryptoCurrencies" element={<AllCryptoCurrencies />} />
          <Route path="/about" element={<About />} />
          <Route path="/cryptoCurrency/:id" element={<CryptoDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
