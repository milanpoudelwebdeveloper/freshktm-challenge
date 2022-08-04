import React from "react";
import CryptoCurrencies from "../CryptoCurrencies/CryptoCurrencies";
import Footer from "../Footer/Footer";
import TopSection from "./TopSection/TopSection";

const HomePage = () => {
  return (
    <div>
      <TopSection />
      <CryptoCurrencies />
      <Footer />
    </div>
  );
};

export default HomePage;
