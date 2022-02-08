import React, { useEffect, useState } from "react";
import { useLocation, Link as LinkRoute } from "react-router-dom";
import { Link } from "react-scroll";
import Logo from "../../Assets/Image/logo.png";
import "./Header.scss";

function Header() {
  const [addClass, setAddClass] = useState();

  const location = useLocation();
  const path = location.pathname.split("/")[1];

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if(path === "detailproduct" || path === "product"){
      if (window.scrollY > 600) {
        setAddClass(true);
      } else {
        setAddClass(false);
      }
    }
  };

  return path === "detailproduct" || path === "product" ? (
    <div className="header">
      <nav
        onScroll={handleScroll}
        className={`navbar navbar-expand-lg navbar-light bg-light scroll`}
      >
        <div className="container-fluid">
          <LinkRoute to="/" className="navbar-brand">
            <img src={Logo} alt="img-logo" className="img-logo" width="100%" />
            <div>
              <div>CV. Heaven Sentosa</div>
              <div>SarenOne</div>
            </div>
          </LinkRoute>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <div className="navbar-nav me-auto mb-2 mb-lg-0"></div>
            <form className="d-flex">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <LinkRoute to="/">
                  <li> Home</li>
                </LinkRoute>
                <LinkRoute to="/">
                  <li> Product</li>
                </LinkRoute>
                <LinkRoute to="/">
                  <li> Team</li>
                </LinkRoute>
                <LinkRoute to="/">
                  <li> About</li>
                </LinkRoute> */}
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  ) : (
    <div className="header">
      <nav
        onScroll={handleScroll}
        className={`navbar navbar-expand-lg navbar-light bg-light fixed-top ${
          addClass ? "scroll" : ""
        }`}
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={Logo} alt="img-logo" className="img-logo" width="100%" />
            <div>
              <div>CV. Heaven Sentosa</div>
              <div>SarenOne</div>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <div className="navbar-nav me-auto mb-2 mb-lg-0"></div>
            <form className="d-flex">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <Link
                  activeClass="link-active"
                  to="section-home"
                  spy={true}
                  smooth={true}
                  offset={-25}
                  duration={100}
                >
                  <li> Home</li>
                </Link>
                <Link
                  activeClass="link-active"
                  to="section-product"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={100}
                >
                  <li> Product</li>
                </Link>
                <Link
                  activeClass="link-active"
                  to="section-team"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={100}
                >
                  <li> Team</li>
                </Link>
                <Link
                  activeClass="link-active"
                  to="section-about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={100}
                >
                  <li> About</li>
                </Link>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
