import React, { useEffect, useState } from "react";
import "./CryptoCurrencies.css";
import axios from "axios";
import Card from "./Card";

const CryptoCurrencies = () => {
  const [cryptoCurrencies, setCryptoCurrencies] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.coincap.io/v2/assets")
      .then(({ data: { data } }) => {
        setCryptoCurrencies(data);
        console.log(data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="cryptoContainer">
      <h1>Top 50 cryptocurrencies in the world</h1>
      <div className="cryptoItems">
        {cryptoCurrencies?.slice(0, 50).map((item) => (
          <Card item={item} />
        ))}
      </div>
    </div>
  );
};

export default CryptoCurrencies;
