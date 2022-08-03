import React from "react";
import CryptoCurrencies from "../CryptoCurrencies/CryptoCurrencies";
import TopSection from "./TopSection/TopSection";

const HomePage = () => {
  return (
    <div style={{ padding: "10px 20px" }}>
      <TopSection />
      <CryptoCurrencies />
    </div>
  );
};

export default HomePage;
