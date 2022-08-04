import React from "react";
import "./CryptoStats.css";
import millify from "millify";

const CryptoStats = ({
  cryptoDetails: {
    marketCapUsd,
    maxSupply,
    name,
    priceUsd,
    rank,
    supply,
    volumeUsd24Hr,
  },
}) => {
  const mainStats = [
    {
      "Price in USD": `$${millify(priceUsd)}`,
      Rank: rank,
      "24h Volume": millify(volumeUsd24Hr),
    },
  ];
  const otherStats = [
    {
      "Market Cap": `$${millify(marketCapUsd)}`,
      Supply: millify(supply),
      "Max Supply": millify(maxSupply),
    },
  ];
  return (
    <div className="cryptoStats">
      <div className="mainStats">
        <h1>{name} Value Statistics</h1>
        <p>Overview of {name} in Market</p>
        {mainStats.map((stat) => (
          <>
            {Object.entries(stat).map(([k, v]) => (
              <p className="stats">
                {k} : <b>{v}</b>
              </p>
            ))}
          </>
        ))}
      </div>
      <div className="otherStats">
        <h1>Other important statistics</h1>
        <p>Other important stats of Bitcoin</p>
        {otherStats.map((stat) => (
          <>
            {Object.entries(stat).map(([k, v]) => (
              <p className="stats">
                {k} : <b>{v}</b>
              </p>
            ))}
          </>
        ))}
      </div>
    </div>
  );
};

export default CryptoStats;
