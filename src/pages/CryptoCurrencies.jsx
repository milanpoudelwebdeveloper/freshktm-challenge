import React, { useEffect, useState } from 'react'
import '../styles/CryptoCurrencies.css'
import Card from '../components/Common/Card/Card'
import SearchContainer from '../components/SearchContainer'
import LoadingSkeleton from '../components/Common/LoadingSkeleton/LoadingSkeleton'
import Footer from '../components/Footer'
import { get } from '../services/http'

const AllCryptoCurrencies = () => {
  const [cryptoCurrencies, setCryptoCurrencies] = useState([])
  const [searchKeyword, setSearchKeyword] = useState('')
  const [loading, setLoading] = useState(false)

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

  //filteredCurrencies returns the arrays of cryptoCurrencies that match the searchKeyword
  const filteredCurrencies = cryptoCurrencies.filter((item) =>
    item.name.toLowerCase().includes(searchKeyword.toLowerCase())
  )

  return (
    <div className="cryptoContainer">
      <SearchContainer keyword={searchKeyword} setKeyword={setSearchKeyword} />
      <div className="cryptoItems">
        {loading && <LoadingSkeleton />}
        {!loading &&
          filteredCurrencies?.map((item, i) => <Card item={item} key={i} />)}
      </div>
      <Footer />
    </div>
  )
}

export default AllCryptoCurrencies
