import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { sideNavBarItems } from "../../constants/sideNavbarItems";
import "./SideNavBar.css";
import { ImStatsDots } from "react-icons/im";
const SideNavBar = () => {
  const { pathname } = useLocation();
  const [activeMenu, setActiveMenu] = useState("");

  useEffect(() => {
    setActiveMenu(pathname);
  }, [pathname]);

  return (
    <div className="navContainer">
      <div className="logoContainer">
        <ImStatsDots size={25} />
        <p>CryptoStats</p>
      </div>
      <div className="menuItems">
        {sideNavBarItems.map(({ id, title, href, icon }) => (
          <Link to={href} key={id} style={{ textDecoration: "none" }}>
            <div
              className={
                activeMenu === href ? "menuItem menuItem-active" : "menuItem"
              }
            >
              <div>{icon}</div>
              <p>{title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideNavBar;
