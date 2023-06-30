import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import emailImage from "../../../../assets/images/email/hello.svg";
import phoneImage from "../../../../assets/images/email/phone.svg";
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
            <div className="footer-widget a-widget ml-10 rml-0 center-align">
              <h4 className="footer-title">Solutions</h4>
              <ul>
                <li>
                  <a href="/solutions/server-infrastructure">
                    Server Infrastructure
                  </a>
                </li>
                <li>
                  <a href="/solutions/endpoint-security">End Point Security</a>
                </li>
                <li>
                  <a href="/solutions/network-infrastructure">
                    Network Infrastructure
                  </a>
                </li>
                <li>
                  <a href="/solutions/modern-workplace">Modern Workplace</a>
                </li>
                <li>
                  <a href="/solutions/strategy-and-consulting">
                    Strategy and Consulting
                  </a>
                </li>
                <li>
                  <a href="/solutions/voice-solutions">Voice Solutions</a>
                </li>
                <li>
                  <a href="/solutions/backup-solutions">Backup Solutions</a>
                </li>
                <li>
                  <a href="/solutions/email-security">Email Security</a>
                </li>
                <li>
                  <a href="/solutions/outsourced-it">Outsourced IT</a>
                </li>
                <li>
                  <a href="/solutions/co-managed-it">Co-Managed IT</a>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} md={4} lg={2} xl={2}>
            <div className="footer-widget a-widget ml-10 rml-0 center-align">
              <h4 className="footer-title">Managed Services</h4>
              <ul>
                <li>
                  <a href="/managed-services/pentesting">Pentesting</a>
                </li>
                <li>
                  <a href="/managed-services/cyber-incident-response">
                    Cyber Incidient Response
                  </a>
                </li>
                <li>
                  <a href="/managed-services/managed-siem-and-soc">
                    Managed SIEM and SOC
                  </a>
                </li>
                <li>
                  <a href="/managed-services/vulnerability-management">
                    Vulnerability Management
                  </a>
                </li>
                <li>
                  <a href="/managed-services/cyber-security-awareness-training">
                    Cyber Security Awareness Training
                  </a>
                </li>
                <li>
                  <a href="/managed-services/phishing-simulation">
                    Phishing Simulation
                  </a>
                </li>
                <li>
                  <a href="/managed-services/dark-web-monitoring">
                    Dark Web Monitoring
                  </a>
                </li>
                <li>
                  <a href="/managed-services/firewall-management">
                    Firewall Management
                  </a>
                </li>
                <li>
                  <a href="/managed-services/threat-hunting">Threat Hunting</a>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} md={4} lg={2} xl={2}>
            <div className="footer-widget a-widget ml-10 rml-0 center-align">
              <h4 className="footer-title">Cloud Services</h4>
              <ul>
                <li>
                  <a href="/cloud-services/microsoft-365">Microsoft 365</a>
                </li>
                <li>
                  <a href="/cloud-services/microsoft-azure">Microsoft Azure</a>
                </li>
                <li>
                  <a href="/cloud-services/amazon-web-services">
                    Amazon Web Services
                  </a>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} md={4} lg={2} xl={2}>
            <div className="footer-widget a-widget ml-10 rml-0 center-align">
              <h4 className="footer-title">About</h4>
              <ul>
                <li>
                  <a href="/about/our-story">About Us</a>
                </li>
                <li>
                  <a href="/about/contact-us">Contact Us</a>
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
                  <img
                    src={phoneImage}
                    className="ml-10"
                    style={{ width: "8.5rem" }}
                    alt="Right Solutions Phone Number"
                  />
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
            <p style={{ textAlign: "center" }}>
              Copyright @ {year} Right Solutions All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
