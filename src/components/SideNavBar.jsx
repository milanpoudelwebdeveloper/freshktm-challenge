import React, { useEffect, useState } from 'react'
import '../styles/SideNavBar.css'
import { ImStatsDots } from 'react-icons/im'
import NavBarMenus from './NavBarMenus'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useWindowSize } from '../hooks/useWindowSize'
import { useNavigate } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'

const SideNavBar = () => {
  const [activeMenu, setActiveMenu] = useState(false)

  const navigate = useNavigate()

  const {
    typeOfDevice: { isMobile },
  } = useWindowSize()

  //we want to hide the sidemenu in mobile view until the user clicks on the hamburger menu icon
  useEffect(() => {
    if (isMobile) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  }, [isMobile])

  const closeSideMenu = () => {
    setActiveMenu(false)
  }

  return (
    <div className="navContainer">
      <div className="logoContainer">
        <div className="back">
          <BiArrowBack color="white" onClick={() => navigate(-1)} size={18} />
        </div>
        <ImStatsDots size={20} onClick={() => navigate('/')} />

        <p>CryptoStats</p>
        <div className="hamburger">
          <GiHamburgerMenu
            //this opens and clicks the sideMenu according to the previous state
            onClick={() => setActiveMenu((prevState) => !prevState)}
          />
        </div>
      </div>
      {activeMenu && (
        <div>
          <NavBarMenus closeSideMenu={closeSideMenu} />
        </div>
      )}
    </div>
  )
}

export default SideNavBar
