import React, { useEffect } from "react";
import logo from "../../../../assets/images/logos/RS Logo - Grey.png";
import StickyMenu from "../../../../lib/StickyMenu";
import Navigation from "../../../helpers/Navigation";
import MobileHeaderCom from "../../Mobile/MobileHeaderCom";

export default function HeaderHomeThree() {
  useEffect(() => {
    StickyMenu(".main-header");
  });
  return (
    <>
      <MobileHeaderCom logo={logo} />
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
                      src={logo}
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
