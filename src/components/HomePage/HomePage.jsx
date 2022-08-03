import React from "react";
import CryptoCurrencies from "../CryptoCurrencies/CryptoCurrencies";
import TopSection from "./TopSection/TopSection";

const HomePage = () => {
  return (
    <div style={{ padding: "10px 30px", backgroundColor: "#F0F2F5" }}>
      <TopSection />
      <CryptoCurrencies />
    </div>
  );
};

export default HomePage;
