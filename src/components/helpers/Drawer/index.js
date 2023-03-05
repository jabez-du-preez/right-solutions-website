import NextLink from "next/link";
import { useEffect, useState } from "react";
import logo from "../../../assets/images/logos/RS Logo - Blue.png";
import StickyMenu from "../../../lib/StickyMenu";

function Drawer({ drawer, action }) {
  const [itemSize, setSize] = useState("0px");
  const [item, setItem] = useState("");
  const handler = (e, value) => {
    // e.preventDefault();
    const getItems = document.querySelechrefrAll(`#${value} li`).length;
    if (getItems > 0) {
      if (item !== value) {
        setSize(`${50 * getItems}px`);
        setItem(value);
      } else {
        setItem("");
      }
    }
  };
  useEffect(() => {
    StickyMenu(".off_canvars_overlay");
  });
  return (
    <>
      <div
        onClick={(e) => action(e)}
        className={`off_canvars_overlay ${drawer ? "active" : ""}`}
      ></div>
      <div className="offcanvas_menu">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div
                className={`offcanvas_menu_wrapper ${drawer ? "active" : ""}`}
              >
                <a
                  href="/"
                  className="offcanvas-brand text-center mb-40 d-block"
                >
                  <img src={logo} alt="" />
                </a>
                <div id="menu" className="text-left ">
                  <ul className="offcanvas_main_menu">
                    <li
                      onClick={(e) => handler(e, "home")}
                      id="home"
                      className="menu-item-has-children active"
                    >
                      <span className="menu-expand"></span>
                      <a href="/">Home</a>
                    </li>
                    <li
                      onClick={(e) => handler(e, "Services")}
                      id="Services"
                      className="menu-item-has-children active"
                    >
                      <span className="menu-expand">
                        <i className="fa fa-angle-down"></i>
                      </span>
                      <a href="#">Solutions</a>
                      <ul
                        className="sub-menu"
                        style={{
                          height: item === "Services" ? itemSize : "0px",
                        }}
                      >
                        <li>
                          <NextLink href="/server-infrastructure">
                            Server Infrastructure
                          </NextLink>
                        </li>
                        <li>
                          <NextLink href="/endpoint-security">
                            End Point Security
                          </NextLink>
                        </li>
                        <li>
                          <NextLink href="/network-infrastructure">
                            Network Infrastructure
                          </NextLink>
                        </li>
                        <li>
                          <NextLink href="/modern-workplace">
                            Modern Workplace
                          </NextLink>
                        </li>
                        <li>
                          <NextLink href="/strategy-and-consulting">
                            Strategy and Consulting
                          </NextLink>
                        </li>
                        <li>
                          <NextLink href="/voice-solutions">
                            Voice Solutions
                          </NextLink>
                        </li>
                        <li>
                          <NextLink href="/backup-solutions">
                            Backup Solutions
                          </NextLink>
                        </li>
                        <li>
                          <NextLink href="/email-security">
                            Email Security
                          </NextLink>
                        </li>
                        <li>
                          <NextLink href="/outsourced-it">
                            Outsourced IT
                          </NextLink>
                        </li>
                        <li>
                          <NextLink href="/co-managed-it">
                            Co-Managed IT
                          </NextLink>
                        </li>
                      </ul>
                    </li>
                    <li
                      onClick={(e) => handler(e, "ManagedServices")}
                      id="ManagedServices"
                      className="menu-item-has-children active"
                    >
                      <span className="menu-expand">
                        <i className="fa fa-angle-down"></i>
                      </span>
                      <a href="#">Managed Services</a>
                      <ul
                        className="sub-menu"
                        style={{
                          height: item === "ManagedServices" ? itemSize : "0px",
                        }}
                      >
                        <li>
                          <NextLink href="/pentesting">Pentesting</NextLink>
                        </li>
                        <li>
                          <NextLink href="/cyber-incident-response">
                            Cyber Incidient Response
                          </NextLink>
                        </li>
                        <li>
                          <NextLink href="/managed-siem-and-soc">
                            Managed SIEM and SOC
                          </NextLink>
                        </li>
                        <li>
                          <NextLink href="/vulnerability-management">
                            Vulnerability Management
                          </NextLink>
                        </li>
                        <li>
                          <NextLink href="/cyber-security-awareness-training">
                            Cyber Security Awareness Training
                          </NextLink>
                        </li>
                        <li>
                          <NextLink href="/phishing-simulation">
                            Phishing Simulation
                          </NextLink>
                        </li>
                        <li>
                          <NextLink href="/dark-web-monihrefring">
                            Dark Web Monihrefring
                          </NextLink>
                        </li>
                        <li>
                          <NextLink href="/firewall-management">
                            Firewall Management
                          </NextLink>
                        </li>
                        <li>
                          <NextLink href="/threat-hunting">
                            Threat Hunting
                          </NextLink>
                        </li>
                      </ul>
                    </li>
                    <li
                      onClick={(e) => handler(e, "cloud-services")}
                      id="cloud-services"
                      className="menu-item-has-children active"
                    >
                      <span className="menu-expand">
                        <i className="fa fa-angle-down"></i>
                      </span>
                      <a href="#">Cloud Services</a>
                      <ul
                        className="sub-menu"
                        style={{
                          height: item === "cloud-services" ? itemSize : "0px",
                        }}
                      >
                        <li>
                          <NextLink href="/microsoft-365">
                            Microsoft 365
                          </NextLink>
                        </li>
                        <li>
                          <NextLink href="/microsoft-azure">
                            Microsoft Azure
                          </NextLink>
                        </li>
                        <li>
                          <NextLink href="/amazon-web-services">
                            Amazon Web Services
                          </NextLink>
                        </li>
                      </ul>
                    </li>
                    <li
                      onClick={(e) => handler(e, "About")}
                      id="About"
                      className="menu-item-has-children active"
                    >
                      <span className="menu-expand">
                        <i className="fa fa-angle-down"></i>
                      </span>
                      <a href="#">About</a>
                      <ul
                        className="sub-menu"
                        style={{
                          height: item === "About" ? itemSize : "0px",
                        }}
                      >
                        <li>
                          <NextLink href="/our-shrefry">About Us</NextLink>
                        </li>

                        <li>
                          <NextLink href="/contact-us">Contact Us</NextLink>
                        </li>
                      </ul>
                    </li>
                    {/* <li
                      onClick={(e) => handler(e, "Blogs")}
                      id="Blogs"
                      className="menu-item-has-children active"
                    >
                      <span className="menu-expand">
                        <i className="fa fa-angle-down"></i>
                      </span>
                      <a href="#">Blog</a>
                      <ul
                        className="sub-menu"
                        style={{
                          height: item === "Blogs" ? itemSize : "0px",
                        }}
                      >
                        <li>
                          <NextLink href="/blog">Blog Page</NextLink>
                        </li>
                        <li>
                          <NextLink href="/blog/blog-details">Blog Details</NextLink>
                        </li>
                      </ul>
                    </li>
                    <li
                      onClick={(e) => handler(e, "contact")}
                      id="contact"
                      className="menu-item-has-children active"
                    >
                      <NextLink href="/contact">Contact</NextLink>
                    </li> */}
                  </ul>
                </div>
                {/* <div className="offcanvas-social">
                  <ul className="text-center">
                    <li>
                      <a href="$">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="$">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="$">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="$">
                        <i className="fab fa-dribbble"></i>
                      </a>
                    </li>
                  </ul>
                </div> */}
                <div className="footer-widget-info">
                  <ul>
                    <li className="mb-1">
                      <a href="mailhref:info@rightsolutions.co.za">
                        <i className="fa fa-envelope mr-2"></i>
                        info@rightsolutions.co.za
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#">
                        <i className="fa fa-phone mr-2"></i> +(642) 342 762 44
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#">
                        <i className="fa fa-map-marker-alt mr-2"></i> Cape Town
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Drawer;
