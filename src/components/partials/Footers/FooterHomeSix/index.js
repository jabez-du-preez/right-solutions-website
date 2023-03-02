import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import svglogo from "../../../../assets/images/svg-logo.svg";

export default function FooterHomeSix() {
  const year = new Date().getFullYear();
  return (
    <footer className="main-footer footer-five bg-lighter pt-75">
      <div className="container">
        <Grid container spacing={1}>
          <Grid item xs={12} md={4} lg={2} xl={2}>
            <div className="footer-widget about-widget center-align">
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="flex-start"
                alignContent="center"
              >
                {/* <div className="center-align"> */}
                <img
                  className="resize-img"
                  style={{ margin: "auto auto" }}
                  width="100%"
                  height="100%"
                  src={svglogo}
                  alt="Logo"
                />{" "}
                {/* <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 400,
                      fontFamily: "Montserrat",
                      mt: {
                        xs: 2,
                        md: 2,
                        lg: "auto",
                        xl: "auto",
                      },
                      ml: {
                        xs: 2,
                        md: 2,
                        lg: "0.25rem",
                        xl: "0.25rem",
                      },
                      fontSize: {
                        xs: "2.5rem",
                        lg: "1rem",
                      },
                    }}
                  >
                    Right Solutions
                  </Typography> */}
                {/* </div> */}
              </Box>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontFamily: "Montserrat",
                  mt: 3,
                  fontSize: 18,
                }}
              >
                We Do IT!
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4} lg={2} xl={2}>
            <div className="footer-widget link-widget ml-10 rml-0 center-align">
              <h4 className="footer-title">Solutions</h4>
              <ul>
                <li>
                  <Link to="/server-infrastructure">Server Infrastructure</Link>
                </li>
                <li>
                  <Link to="/endpoint-security">End Point Security</Link>
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
            </div>
          </Grid>
          <Grid item xs={12} md={4} lg={2} xl={2}>
            <div className="footer-widget link-widget ml-10 rml-0 center-align">
              <h4 className="footer-title">Managed Services</h4>
              <ul>
                <li>
                  <Link to="/pentesting">Pentesting</Link>
                </li>
                <li>
                  <Link to="/cyber-incident-response">
                    Cyber Incidient Response
                  </Link>
                </li>
                <li>
                  <Link to="/managed-siem-and-soc">Managed SIEM and SOC</Link>
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
                  <Link to="/phishing-simulation">Phishing Simulation</Link>
                </li>
                <li>
                  <Link to="/dark-web-monitoring">Dark Web Monitoring</Link>
                </li>
                <li>
                  <Link to="/firewall-management">Firewall Management</Link>
                </li>
                <li>
                  <Link to="/threat-hunting">Threat Hunting</Link>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} md={4} lg={2} xl={2}>
            <div className="footer-widget link-widget ml-10 rml-0 center-align">
              <h4 className="footer-title">Cloud Services</h4>
              <ul>
                <li>
                  <Link to="/microsoft-365">Microsoft 365</Link>
                </li>
                <li>
                  <Link to="/microsoft-azure">Microsoft Azure</Link>
                </li>
                <li>
                  <Link to="/amazon-web-services">Amazon Web Services</Link>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} md={4} lg={2} xl={2}>
            <div className="footer-widget link-widget ml-10 rml-0 center-align">
              <h4 className="footer-title">About</h4>
              <ul>
                <li>
                  <Link to="/our-story">Our Story</Link>
                </li>
                <li>
                  <Link to="/our-approach">Our Approach</Link>
                </li>
                <li>
                  <Link to="/our-expertise">Our Expertise</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} md={4} lg={2} xl={2}>
            <div className="footer-widget contact-widget mr-10 rmr-0 center-align">
              <h4 className="footer-title">Information</h4>
              <ul>
                <li className="mb-5">
                  <i className="fas fa-phone-alt"></i>{" "}
                  <a className="ml-10" href="callto:+(+27) 12 345 678">
                    (+27) 12 345 678
                  </a>
                </li>
                <li className="mb-5">
                  <i className="fas fa-envelope"></i>{" "}
                  <a className="ml-10" href="mailto:info@rightsol.co.za">
                    info@rightsol.co.za
                  </a>
                </li>
                <li>
                  <i className="fas fa-map-marker-alt mr-10"></i> Cape Town
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
        {/* <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="footer-widget about-widget">
              <Box
                display="flex"
                flexDirection="row"
                alignContent="center"
                className="footer-logo mb-15"
              >
                <img src={logo} alt="Logo" />{" "}
                <Typography
                  variant="h5"
                  sx={{
                    margin: "auto 0.5rem",
                    fontWeight: 400,
                    fontFamily: "Montserrat",
                  }}
                >
                  Right Solutions
                </Typography>
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 400,
                  fontFamily: "Montserrat",
                }}
              >
                Let us help you, the <span className="color-blue">Right</span>{" "}
                way!
              </Typography>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="footer-widget link-widget ml-50 rml-0">
              <h4 className="footer-title">Product</h4>
              <ul className="list-style-two">
                <li>
                  <a href="#">Landing page</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Documentation</a>
                </li>
                <li>
                  <a href="#">Referral Program</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="footer-widget link-widget ml-50 rml-0">
              <h4 className="footer-title">Services</h4>
              <ul className="list-style-two">
                <li>
                  <a href="#">Documentation</a>
                </li>
                <li>
                  <a href="#">License</a>
                </li>
                <li>
                  <a href="#">Changelog</a>
                </li>
                <li>
                  <a href="#">Developers</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="footer-widget contact-widget mr-30 rmr-0">
              <h4 className="footer-title">Information</h4>
              <ul className="list-style-two">
                <li>
                  <i className="fas fa-phone-alt"></i>{" "}
                  <a href="callto:+(+27) 12 345 678">(+27) 12 345 678</a>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>{" "}
                  <a href="mailto:info@rightsol.co.za">info@rightsol.co.za</a>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
      <div className="copyright-area mt-20">
        <div className="container">
          <div className="copyright-inner justify-content-center">
            <p>Copyright @ {year} Right Solutions All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
