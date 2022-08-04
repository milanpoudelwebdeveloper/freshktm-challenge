import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { sideNavBarItems } from "../constants/sideNavbarItems";

const NavBarMenus = () => {
  const { pathname } = useLocation();
  const [activeMenu, setActiveMenu] = useState("");

  useEffect(() => {
    setActiveMenu(pathname);
  }, [pathname]);
  return (
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
  );
};

export default NavBarMenus;
