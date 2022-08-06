import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { sideNavBarItems } from '../constants/sideNavbarItems'
import { useWindowSize } from '../hooks/useWindowSize'
import { AiOutlineHome } from 'react-icons/ai'
import { HiOutlineCurrencyDollar } from 'react-icons/hi'
import { AiOutlineInfoCircle } from 'react-icons/ai'

interface props {
  closeSideMenu: () => void
}

const NavBarMenus: React.FC<props> = ({ closeSideMenu }) => {
  const { pathname } = useLocation()
  const [activeMenu, setActiveMenu] = useState('')

  const {
    typeOfDevice: { isMobile },
  } = useWindowSize()

  useEffect(() => {
    setActiveMenu(pathname)
  }, [pathname])

  const icons = [
    <AiOutlineHome key="home" />,
    <HiOutlineCurrencyDollar key="currency" />,
    <AiOutlineInfoCircle key="about" />,
  ]

  const sideNavBarItemsWithIcon = sideNavBarItems.map((item, index) => ({
    ...item,
    icon: icons[index],
  }))

  return (
    <div className="menuItems">
      {sideNavBarItemsWithIcon.map(({ id, title, href, icon }) => (
        <Link to={href} key={id} style={{ textDecoration: 'none' }}>
          <div
            className={
              //setting the active menu with className
              activeMenu === href ? 'menuItem menuItem-active' : 'menuItem'
            }
            onClick={() => {
              if (isMobile) {
                // when clicking on any menu, close the side menu
                closeSideMenu()
              }
            }}
          >
            <div>{icon}</div>
            <p>{title}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default NavBarMenus
