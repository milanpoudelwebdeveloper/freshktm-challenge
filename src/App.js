import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import About from './pages/About'
import CryptoCurrencies from './pages/CryptoCurrencies'
import CryptoDetail from './pages/CryptoDetails'
import SideNavBar from './components/SideNavBar'

import {
  HOME,
  CRYPTO_CURRENCIES,
  ABOUT,
  CURRENCY_DETAILS,
} from '../src/constants/routes'

function App() {
  return (
    <div className="app">
      <div className="navBar">
        <SideNavBar />
      </div>
      <div className="main">
        <Routes>
          <Route path={HOME} element={<HomePage />} />
          <Route path={CRYPTO_CURRENCIES} element={<CryptoCurrencies />} />
          <Route path={ABOUT} element={<About />} />
          <Route path={CURRENCY_DETAILS} element={<CryptoDetail />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
