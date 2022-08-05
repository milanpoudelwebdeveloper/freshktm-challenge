import React, { useEffect, useState } from 'react'
import '../styles/SideNavBar.css'
import { ImStatsDots } from 'react-icons/im'
import NavBarMenus from './NavBarMenus'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useWindowSize } from '../hooks/useWindowSize'

const SideNavBar = () => {
  const [activeMenu, setActiveMenu] = useState(false)

  const {
    typeOfDevice: { isMobile },
  } = useWindowSize()

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
        <ImStatsDots size={20} />
        <p>CryptoStats</p>

        <div className="hamburger">
          <GiHamburgerMenu
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
