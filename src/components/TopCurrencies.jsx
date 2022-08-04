import React, { useEffect, useState } from "react";
import "../styles/CryptoCurrencies.css";
import axios from "axios";
import Card from "./Common/Card/Card";
import LoadingSkeleton from "./Common/LoadingSkeleton/LoadingSkeleton";
import { useNavigate } from "react-router-dom";

const TopCurrencies = () => {
  const [cryptoCurrencies, setCryptoCurrencies] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

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
      <div className="titleContainer">
        <h2>Top 50 cryptocurrencies :</h2>
        <button
          className="showBtn"
          onClick={() => navigate("/cryptocurrencies")}
        >
          Show more
        </button>
      </div>
      <div className="cryptoItems">
        {loading && <LoadingSkeleton />}
        {!loading &&
          cryptoCurrencies?.slice(0, 50).map((item) => <Card item={item} />)}
      </div>
    </div>
  );
};

export default TopCurrencies;
