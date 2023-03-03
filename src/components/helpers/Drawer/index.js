import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logos/RS Logo - Blue.png";
import StickyMenu from "../../../lib/StickyMenu";
import "./style.css";

function Drawer({ drawer, action }) {
  const [itemSize, setSize] = useState("0px");
  const [item, setItem] = useState("");
  const handler = (e, value) => {
    // e.preventDefault();
    const getItems = document.querySelectorAll(`#${value} li`).length;
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
                          <Link to="/server-infrastructure">
                            Server Infrastructure
                          </Link>
                        </li>
                        <li>
                          <Link to="/endpoint-security">
                            End Point Security
                          </Link>
                        </li>
                        <li>
                          <Link to="/network-infrastructure">
                            Network Infrastructure
                          </Link>
                        </li>
                        <li>
                          <Link to="/modern-workplace">Modern Workplace</Link>
                        </li>
                        <li>
                          <Link to="/strategy-and-consulting">
                            Strategy and Consulting
                          </Link>
                        </li>
                        <li>
                          <Link to="/voice-solutions">Voice Solutions</Link>
                        </li>
                        <li>
                          <Link to="/backup-solutions">Backup Solutions</Link>
                        </li>
                        <li>
                          <Link to="/email-security">Email Security</Link>
                        </li>
                        <li>
                          <Link to="/outsourced-it">Outsourced IT</Link>
                        </li>
                        <li>
                          <Link to="/co-managed-it">Co-Managed IT</Link>
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
                          <Link to="/pentesting">Pentesting</Link>
                        </li>
                        <li>
                          <Link to="/cyber-incident-response">
                            Cyber Incidient Response
                          </Link>
                        </li>
                        <li>
                          <Link to="/managed-siem-and-soc">
                            Managed SIEM and SOC
                          </Link>
                        </li>
                        <li>
                          <Link to="/vulnerability-management">
                            Vulnerability Management
                          </Link>
                        </li>
                        <li>
                          <Link to="/cyber-security-awareness-training">
                            Cyber Security Awareness Training
                          </Link>
                        </li>
                        <li>
                          <Link to="/phishing-simulation">
                            Phishing Simulation
                          </Link>
                        </li>
                        <li>
                          <Link to="/dark-web-monitoring">
                            Dark Web Monitoring
                          </Link>
                        </li>
                        <li>
                          <Link to="/firewall-management">
                            Firewall Management
                          </Link>
                        </li>
                        <li>
                          <Link to="/threat-hunting">Threat Hunting</Link>
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
                          <Link to="/microsoft-365">Microsoft 365</Link>
                        </li>
                        <li>
                          <Link to="/microsoft-azure">Microsoft Azure</Link>
                        </li>
                        <li>
                          <Link to="/amazon-web-services">
                            Amazon Web Services
                          </Link>
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
                          <Link to="/our-story">About Us</Link>
                        </li>

                        <li>
                          <Link to="/contact-us">Contact Us</Link>
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
                          <Link to="/blog">Blog Page</Link>
                        </li>
                        <li>
                          <Link to="/blog/blog-details">Blog Details</Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      onClick={(e) => handler(e, "contact")}
                      id="contact"
                      className="menu-item-has-children active"
                    >
                      <Link to="/contact">Contact</Link>
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
                      <a href="mailto:info@rightsolutions.co.za">
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
