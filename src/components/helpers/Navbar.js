import React, { useEffect } from "react";
import rsLogo from "../../assets/images/logos/rs-logo-white.svg";
import StickyMenu from "../../lib/StickyMenu";
import MobileHeaderCom from "../partials/Mobile/MobileHeaderCom";
import Navigation from "./Navigation";

export default function Navbar() {
  useEffect(() => {
    StickyMenu(".main-header");
  });
  return (
    <>
      <MobileHeaderCom logo={rsLogo} />
      <header className="main-header header-six">
        <div className="header-upper">
          <div className="container clearfix">
            <div className="header-inner d-flex align-items-center">
              <div className="logo-outer">
                <div className="logo">
                  <a href="/">
                    <img
                      width="170px"
                      height="50px"
                      src={rsLogo}
                      alt="Logo"
                      title="Logo"
                    />
                  </a>
                </div>
              </div>

              <div className="nav-outer clearfix d-flex align-items-center">
                <nav className="main-menu navbar-expand-lg">
                  <Navigation className="nav-home-six" />
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
