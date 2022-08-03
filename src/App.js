import React from "react";
import { Routes, Route } from "react-router-dom";
import SideNavBar from "./components/SideNavbar/SideNavBar";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import CryptoCurrencies from "./components/CryptoCurrencies/CryptoCurrencies";
import About from "./components/About/About";
import CryptoDetail from "./components/CryptoDetails/CryptoDetail";

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
