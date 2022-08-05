import React from 'react'
import '../styles/CryptoStats.css'
import millify from 'millify'

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
      'Price in USD': `$${millify(priceUsd || 0)}`,
      Rank: rank,
      '24h Volume': millify(volumeUsd24Hr || 0),
    },
  ]
  const otherStats = [
    {
      'Market Cap': `$${millify(marketCapUsd || 0)}`,
      Supply: millify(supply),
      'Max Supply': millify(maxSupply || 0),
    },
  ]
  return (
    <div className="cryptoStats">
      <div className="mainStats">
        <h1>{name} Value Statistics</h1>
        <p>Overview of {name} </p>
        {mainStats.map((stat) => (
          <>
            {Object.entries(stat).map(([k, v], i) => (
              <p className="stats" key={i}>
                {k} : <b>{v}</b>
              </p>
            ))}
          </>
        ))}
      </div>
      <div className="otherStats">
        <h1>Other important statistics</h1>
        <p>Other important stats</p>
        {otherStats.map((stat) => (
          <>
            {Object.entries(stat).map(([k, v], i) => (
              <p className="stats" key={i}>
                {k} : <b>{v}</b>
              </p>
            ))}
          </>
        ))}
      </div>
    </div>
  )
}

export default CryptoStats
