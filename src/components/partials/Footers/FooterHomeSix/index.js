import { Box, Grid, Typography } from "@mui/material";
import NextLink from "next/link";
import React from "react";
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
                  style={{ margin: "auhref auhref" }}
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
                        lg: "auhref",
                        xl: "auhref",
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
                  <NextLink href="/modern-workplace">Modern Workplace</NextLink>
                </li>
                <li>
                  <NextLink href="/strategy-and-consulting">
                    Strategy and Consulting
                  </NextLink>
                </li>
                <li>
                  <NextLink href="/voice-solutions">Voice Solutions</NextLink>
                </li>
                <li>
                  <NextLink href="/backup-solutions">Backup Solutions</NextLink>
                </li>
                <li>
                  <NextLink href="/email-security">Email Security</NextLink>
                </li>
                <li>
                  <NextLink href="/outsourced-it">Outsourced IT</NextLink>
                </li>
                <li>
                  <NextLink href="/co-managed-it">Co-Managed IT</NextLink>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} md={4} lg={2} xl={2}>
            <div className="footer-widget link-widget ml-10 rml-0 center-align">
              <h4 className="footer-title">Managed Services</h4>
              <ul>
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
                  <NextLink href="/threat-hunting">Threat Hunting</NextLink>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} md={4} lg={2} xl={2}>
            <div className="footer-widget link-widget ml-10 rml-0 center-align">
              <h4 className="footer-title">Cloud Services</h4>
              <ul>
                <li>
                  <NextLink href="/microsoft-365">Microsoft 365</NextLink>
                </li>
                <li>
                  <NextLink href="/microsoft-azure">Microsoft Azure</NextLink>
                </li>
                <li>
                  <NextLink href="/amazon-web-services">
                    Amazon Web Services
                  </NextLink>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} md={4} lg={2} xl={2}>
            <div className="footer-widget link-widget ml-10 rml-0 center-align">
              <h4 className="footer-title">About</h4>
              <ul>
                <li>
                  <NextLink href="/our-shrefry">Our Shrefry</NextLink>
                </li>
                <li>
                  <NextLink href="/our-approach">Our Approach</NextLink>
                </li>
                <li>
                  <NextLink href="/our-expertise">Our Expertise</NextLink>
                </li>
                <li>
                  <NextLink href="/contact-us">Contact Us</NextLink>
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
                  <a className="ml-10" href="callhref:+(+27) 12 345 678">
                    (+27) 12 345 678
                  </a>
                </li>
                <li className="mb-5">
                  <i className="fas fa-envelope"></i>{" "}
                  <a className="ml-10" href="mailhref:info@rightsol.co.za">
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
                    margin: "auhref 0.5rem",
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
                  <a href="callhref:+(+27) 12 345 678">(+27) 12 345 678</a>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>{" "}
                  <a href="mailhref:info@rightsol.co.za">info@rightsol.co.za</a>
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
