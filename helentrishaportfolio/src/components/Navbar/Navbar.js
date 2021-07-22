import { useState } from "react";
import * as GoIcons from "react-icons/go";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";

const NavBar = () => {
  const MenuLinks = [
    {
      title: "Home",
      url: "/",
      cName: "nav-links",
    },

    {
      title: "Aboutme",
      url: "/aboutme",
      cName: "nav-links",
    },

    {
      title: "Services",
      url: "/services",
      cName: "nav-links",
    },
    {
      title: "Portfolio",
      url: "/portfolio",
      cName: "nav-links",
    },
    {
      title: "Contact",
      url: "/contactme",
      cName: "nav-links",
    },
  ];

  const [menuList, setMenuList] = useState(false);
  const showHide = () => setMenuList(!menuList);
  return (
    <div>
      <nav className="navbar-items">
        <div className="logo-container">
          <a href="/">
            <img
              src="https://res.cloudinary.com/dnefeccae/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1626881950/helenpictures/checkpoint_4/Unknown_izqzj8.jpg"
              className="logo"
            />
          </a>
        </div>
        <div className="menu-icon" onClick={showHide}>
          {!menuList ? <GoIcons.GoThreeBars /> : <AiIcons.AiOutlineClose />}
        </div>
        <div className="menu-list">
          <ul className={menuList ? "nav-menu active" : "nav-menu"}>
            {MenuLinks.map((item, index) => {
              return (
                <li className="NavBar-li" key={index}>
                  <Link
                    to={item.url}
                    className={item.cName}
                    onClick={() => showHide(menuList)}
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
