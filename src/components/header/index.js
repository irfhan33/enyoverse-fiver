import React, { useState } from "react";
import { Link, useLocation, useRoutes } from "react-router-dom";
import BurguerMenu, { CloseBurguerMenu } from "../BurguerMenu";
import "./styles.css";

const Routes = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Whitepaper",
    url: "/whitepaper",
  },
  {
    name: "Media Enquirers",
    url: "/media-enquirers",
  },
  {
    name: "Become a Partner",
    url: "/become-a-partner",
  },
  {
    name: "Contact us",
    url: "/contact",
  },
];

const Header = () => {
  const location = useLocation();
  const [offset, setOffset] = useState(false);
  return (
    <>
      <header className="nav-header container">
        <div onClick={() => setOffset(true)}>
          <BurguerMenu />
        </div>
        <nav>
          {Routes.map((route) => (
            <Link
              key={route}
              to={route.url}
              className={`nav-link ${
                location.pathname === route.url ? "active" : ""
              }`}
            >
              <span>{route.name}</span>
            </Link>
          ))}
        </nav>
      </header>
      {/* Nav Offset */}
      <div
        className="nav-offset"
        style={{ left: `${offset ? "0px" : "100%"}` }}
      >
        <div className="close-burger" onClick={() => setOffset(false)}>
          <CloseBurguerMenu />
        </div>
        <nav>
          {Routes.map((route) => (
            <Link
              key={route}
              to={route.url}
              className={`nav-link ${
                location.pathname === route.url ? "active" : ""
              }`}
              onClick={() => setOffset(false)}
            >
              <span>{route.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
