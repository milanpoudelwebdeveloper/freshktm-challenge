import React from 'react'
import '../styles/CryptoStats.css'
import millify from 'millify'

interface props {
  cryptoDetails: ICurrencyDetails
}

const CryptoStats: React.FC<props> = ({
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
  //created the array of objects from the api data, with this, it will be easy to map and apply styles for similar elements
  const mainStats = [
    {
      'Price in USD': `$${millify(Number(priceUsd))}`,
      Rank: rank,
      '24h Volume': millify(Number(volumeUsd24Hr)),
    },
  ]

  const otherStats = [
    {
      'Market Cap': `$${millify(Number(marketCapUsd))}`,
      Supply: millify(Number(supply)),
      'Max Supply': millify(Number(maxSupply)),
    },
  ]
  return (
    <div className="cryptoStats">
      <div className="mainStats">
        <h1>{name} Value Statistics</h1>
        <p>Overview of {name} </p>

        {mainStats.map((stat, i) => (
          <div key={i}>
            {Object.entries(stat).map(([k, v], i) => (
              <p className="stats" key={i}>
                {k} : <b>{v}</b>
              </p>
            ))}
          </div>
        ))}
      </div>
      <div className="otherStats">
        <h1>Other important statistics</h1>
        <p>Other important stats</p>
        {otherStats.map((stat, i) => (
          <div key={i}>
            {Object.entries(stat).map(([k, v], i) => (
              <p className="stats" key={i}>
                {k} : <b>{v}</b>
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CryptoStats
