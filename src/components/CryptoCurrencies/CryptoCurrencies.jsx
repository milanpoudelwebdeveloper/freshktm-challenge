import React, { useEffect, useState } from "react";
import "./CryptoCurrencies.css";
import axios from "axios";
import Card from "./Card";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";

const CryptoCurrencies = () => {
  const [cryptoCurrencies, setCryptoCurrencies] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCryptoCurrencies = async () => {
    setLoading(true);
    try {
      const {
        data: { data },
      } = await axios.get("https://api.coincap.io/v2/assets");
      setCryptoCurrencies(data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCryptoCurrencies();
  }, []);

  return (
    <div className="cryptoContainer">
      <h1>Top 50 cryptocurrencies in the world</h1>
      <div className="cryptoItems">
        {loading && <LoadingSkeleton />}
        {!loading &&
          cryptoCurrencies?.slice(0, 50).map((item) => <Card item={item} />)}
      </div>
    </div>
  );
};

export default CryptoCurrencies;
