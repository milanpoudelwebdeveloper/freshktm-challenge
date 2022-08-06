import React from 'react'
import './Card.css'
import millify from 'millify'
import { useNavigate } from 'react-router-dom'

//Reusable Card to show the overview of cryptocurrency used

interface props {
  item: ICurrencyDetails
}

const Card: React.FC<props> = ({
  item: { name, rank, priceUsd, changePercent24Hr, marketCapUsd, symbol, id },
}) => {
  const navigate = useNavigate()
  return (
    <div
      className="cryptoItem"
      onClick={() => navigate(`/cryptoCurrency/${id}`)}
    >
      <div className="cryptoName">
        <h4>{`${rank}.${name}`}</h4>
        <h4 style={{ color: 'red', fontSize: '12px' }}>{symbol}</h4>
      </div>
      <div className="cryptoDetails">
        <p>Price: {millify(Number(priceUsd))}</p>
        <p>Market Cap: {millify(Number(marketCapUsd))}</p>
        <p>Daily Change: {millify(Number(changePercent24Hr))} %</p>
      </div>
    </div>
  )
}

export default Card
