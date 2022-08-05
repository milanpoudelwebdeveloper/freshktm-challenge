import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import LineChart from '../components/LineChart'
import '../styles/CryptoDetails.css'
import millify from 'millify'
import CryptoStats from '../components/CryptoStats'
import Footer from '../components/Footer'
import BarChart from '../components/BarChart'

const CryptoDetail = () => {
  const [cryptoDetails, setCryptoDetails] = useState([])
  const [cryptoHistory, setCryptoHistory] = useState([])

  let { id } = useParams()

  const getCryptoDetails = async () => {
    try {
      const {
        data: { data },
      } = await axios.get('https://api.coincap.io/v2/assets/' + id)
      setCryptoDetails(data)
      console.log(data)
    } catch (e) {
      console.log(e)
    }
  }

  const getCryptoHistory = async () => {
    try {
      const {
        data: { data },
      } = await axios.get(
        `https://api.coincap.io/v2/assets/${id}/history?interval=d1`
      )
      setCryptoHistory(data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getCryptoDetails()
    getCryptoHistory()
  }, [id])

  const { name, symbol, priceUsd, changePercent24Hr } = cryptoDetails

  return (
    <div className="cryptoDetail">
      <div className="cryptoTitle">
        <h1>
          {name} {symbol} Price
        </h1>
        <p>Find the {id} live price and stats here</p>
      </div>
      <div className="priceDetails">
        <h2>{name} Price Chart</h2>
        <div className="currentDetail">
          <h4>Change: {millify(Number(changePercent24Hr))} %</h4>
          <h4>Current Price: {millify(Number(priceUsd))} </h4>
        </div>
      </div>
      <LineChart cryptoDetails={cryptoHistory && cryptoHistory} />
      <BarChart cryptoDetails={cryptoHistory && cryptoHistory} />
      <CryptoStats cryptoDetails={cryptoDetails} />
      <Footer />
    </div>
  )
}

export default CryptoDetail
