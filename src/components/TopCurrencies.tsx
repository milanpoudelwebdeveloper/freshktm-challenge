import React, { useEffect, useState } from 'react'
import '../styles/CryptoCurrencies.css'
import Card from './Common/Card/Card'
import LoadingSkeleton from './Common/LoadingSkeleton/LoadingSkeleton'
import { useNavigate } from 'react-router-dom'
import { get } from '../services/http'

const TopCurrencies = () => {
  const [cryptoCurrencies, setCryptoCurrencies] = useState([])
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const getCryptoCurrencies = async () => {
    setLoading(true)
    try {
      const { data } = await get('/assets')
      setCryptoCurrencies(data)
      setLoading(false)
    } catch (e) {
      console.log(e)
      setLoading(false)
    }
  }

  useEffect(() => {
    getCryptoCurrencies()
  }, [])

  return (
    <div className="cryptoContainer">
      <div className="titleContainer">
        <h2>Top 50 cryptocurrencies :</h2>
        <button
          className="showBtn"
          onClick={() => navigate('/cryptocurrencies')}
        >
          Show more
        </button>
      </div>
      <div className="cryptoItems">
        {loading && <LoadingSkeleton />}
        {!loading &&
          cryptoCurrencies
            ?.slice(0, 50)
            .map((item, i) => <Card item={item} key={i} />)}
      </div>
    </div>
  )
}

export default TopCurrencies
