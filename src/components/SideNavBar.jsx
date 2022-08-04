import React, { useEffect, useState } from "react";
import "../styles/SideNavBar.css";
import { ImStatsDots } from "react-icons/im";
import NavBarMenus from "./NavBarMenus";
import { GiHamburgerMenu } from "react-icons/gi";
import { useWindowSize } from "../hooks/useWindowSize";

const SideNavBar = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const { windowSize } = useWindowSize();

  useEffect(() => {
    if (windowSize <= 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [windowSize]);

  return (
    <div className="navContainer">
      <div className="logoContainer">
        <ImStatsDots size={25} />
        <p>CryptoStats</p>

        <div className="hamburger">
          <GiHamburgerMenu
            onClick={() => setActiveMenu((prevState) => !prevState)}
          />
        </div>
      </div>
      {activeMenu && (
        <div>
          <NavBarMenus />
        </div>
      )}
    </div>
  );
};

export default SideNavBar;
