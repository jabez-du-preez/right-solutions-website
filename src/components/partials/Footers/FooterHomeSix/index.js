import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import emailImage from "../../../../assets/images/email/hello.svg";
import svglogo from "../../../../assets/images/logos/rs-logo.svg";

export default function FooterHomeSix() {
  const year = new Date().getFullYear();
  return (
    <footer className="main-footer footer-five bg-lighter pt-25">
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
              </Box>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontFamily: "Montserrat",
                  mt: 3,
                  fontSize: 18,
                }}
              >
                We Secure IT!
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4} lg={2} xl={2}>
            <div className="footer-widget link-widget ml-10 rml-0 center-align">
              <h4 className="footer-title">Solutions</h4>
              <ul>
                <li>
                  <Link to="/solutions/server-infrastructure">
                    Server Infrastructure
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/endpoint-security">
                    End Point Security
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/network-infrastructure">
                    Network Infrastructure
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/modern-workplace">Modern Workplace</Link>
                </li>
                <li>
                  <Link to="/solutions/strategy-and-consulting">
                    Strategy and Consulting
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/voice-solutions">Voice Solutions</Link>
                </li>
                <li>
                  <Link to="/solutions/backup-solutions">Backup Solutions</Link>
                </li>
                <li>
                  <Link to="/solutions/email-security">Email Security</Link>
                </li>
                <li>
                  <Link to="/solutions/outsourced-it">Outsourced IT</Link>
                </li>
                <li>
                  <Link to="/solutions/co-managed-it">Co-Managed IT</Link>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} md={4} lg={2} xl={2}>
            <div className="footer-widget link-widget ml-10 rml-0 center-align">
              <h4 className="footer-title">Managed Services</h4>
              <ul>
                <li>
                  <Link to="/managed-services/pentesting">Pentesting</Link>
                </li>
                <li>
                  <Link to="/managed-services/cyber-incident-response">
                    Cyber Incidient Response
                  </Link>
                </li>
                <li>
                  <Link to="/managed-services/managed-siem-and-soc">
                    Managed SIEM and SOC
                  </Link>
                </li>
                <li>
                  <Link to="/managed-services/vulnerability-management">
                    Vulnerability Management
                  </Link>
                </li>
                <li>
                  <Link to="/managed-services/cyber-security-awareness-training">
                    Cyber Security Awareness Training
                  </Link>
                </li>
                <li>
                  <Link to="/managed-services/phishing-simulation">
                    Phishing Simulation
                  </Link>
                </li>
                <li>
                  <Link to="/managed-services/dark-web-monitoring">
                    Dark Web Monitoring
                  </Link>
                </li>
                <li>
                  <Link to="/managed-services/firewall-management">
                    Firewall Management
                  </Link>
                </li>
                <li>
                  <Link to="/managed-services/threat-hunting">
                    Threat Hunting
                  </Link>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} md={4} lg={2} xl={2}>
            <div className="footer-widget link-widget ml-10 rml-0 center-align">
              <h4 className="footer-title">Cloud Services</h4>
              <ul>
                <li>
                  <Link to="/cloud-services/microsoft-365">Microsoft 365</Link>
                </li>
                <li>
                  <Link to="/cloud-services/microsoft-azure">
                    Microsoft Azure
                  </Link>
                </li>
                <li>
                  <Link to="/cloud-services/amazon-web-services">
                    Amazon Web Services
                  </Link>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} md={4} lg={2} xl={2}>
            <div className="footer-widget link-widget ml-10 rml-0 center-align">
              <h4 className="footer-title">About</h4>
              <ul>
                <li>
                  <Link to="/about/our-story">About Us</Link>
                </li>
                <li>
                  <Link to="/about/contact-us">Contact Us</Link>
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
                  <a className="ml-10" href="callto:+(+27) 21 976 6214">
                    (+27) 21 976 6214
                  </a>
                </li>
                <li className="mb-5">
                  <i className="fas fa-envelope"></i>{" "}
                  <img
                    src={emailImage}
                    className="ml-10"
                    style={{ width: "10rem" }}
                    alt="Right Solutions Contact Email"
                  />
                </li>
                <li>
                  <i className="fas fa-map-marker-alt mr-10"></i> Cape Town
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
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
