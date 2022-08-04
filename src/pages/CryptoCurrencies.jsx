import React, { useEffect, useState } from "react";
import "../styles/CryptoCurrencies.css";
import axios from "axios";
import Card from "../components/Common/Card/Card";
import SearchContainer from "../components/SearchContainer";
import LoadingSkeleton from "../components/Common/LoadingSkeleton/LoadingSkeleton";
import Footer from "../components/Footer";

const AllCryptoCurrencies = () => {
  const [cryptoCurrencies, setCryptoCurrencies] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [loading, setLoading] = useState(false);

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

  const filteredCurrencies = cryptoCurrencies.filter((item) =>
    item.name.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div className="cryptoContainer">
      <SearchContainer keyword={searchKeyword} setKeyword={setSearchKeyword} />
      <div className="cryptoItems">
        {loading && <LoadingSkeleton />}
        {!loading && filteredCurrencies?.map((item) => <Card item={item} />)}
      </div>
      <Footer />
    </div>
  );
};

export default AllCryptoCurrencies;
