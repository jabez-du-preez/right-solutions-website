import NextLink from "next/link";

function Navigation({ className }) {
  return (
    <>
      <div className={`restly-header-main-menu ${className || ""}`}>
        <ul>
          <li>
            <NextLink href="/">Home</NextLink>
          </li>
          <li>
            <NextLink href="#">
              Solutions <i className="fa fa-angle-down" />
            </NextLink>
            <ul className="sub-menu">
              <li>
                <NextLink href="/solutions/server-infrastructure">
                  Server Infrastructure
                </NextLink>
              </li>
              <li>
                <NextLink href="/solutions/endpoint-security">
                  End Point Security
                </NextLink>
              </li>
              <li>
                <NextLink href="/solutions/network-infrastructure">
                  Network Infrastructure
                </NextLink>
              </li>
              <li>
                <NextLink href="/solutions/modern-workplace">
                  Modern Workplace
                </NextLink>
              </li>
              <li>
                <NextLink href="/solutions/strategy-and-consulting">
                  Strategy and Consulting
                </NextLink>
              </li>
              <li>
                <NextLink href="/solutions/voice-solutions">
                  Voice Solutions
                </NextLink>
              </li>
              <li>
                <NextLink href="/solutions/backup-solutions">
                  Backup Solutions
                </NextLink>
              </li>
              <li>
                <NextLink href="/solutions/email-security">
                  Email Security
                </NextLink>
              </li>
              <li>
                <NextLink href="/solutions/outsourced-it">
                  Outsourced IT
                </NextLink>
              </li>
              <li>
                <NextLink href="/solutions/co-managed-it">
                  Co-Managed IT
                </NextLink>
              </li>
            </ul>
          </li>
          <li>
            <NextLink href="#">
              Managed Services <i className="fa fa-angle-down" />
            </NextLink>
            <ul className="sub-menu">
              <li>
                <NextLink href="/managed-services/pentesting">
                  Pentesting
                </NextLink>
              </li>
              <li>
                <NextLink href="/managed-services/cyber-incident-response">
                  Cyber Incidient Response
                </NextLink>
              </li>
              <li>
                <NextLink href="/managed-services/managed-siem-and-soc">
                  Managed SIEM and SOC
                </NextLink>
              </li>
              <li>
                <NextLink href="/managed-services/vulnerability-management">
                  Vulnerability Management
                </NextLink>
              </li>
              <li>
                <NextLink href="/managed-services/cyber-security-awareness-training">
                  Cyber Security Awareness Training
                </NextLink>
              </li>
              <li>
                <NextLink href="/managed-services/phishing-simulation">
                  Phishing Simulation
                </NextLink>
              </li>
              <li>
                <NextLink href="/managed-services/dark-web-monihrefring">
                  Dark Web Monihrefring
                </NextLink>
              </li>
              <li>
                <NextLink href="/managed-services/firewall-management">
                  Firewall Management
                </NextLink>
              </li>
              <li>
                <NextLink href="/managed-services/threat-hunting">
                  Threat Hunting
                </NextLink>
              </li>
            </ul>
          </li>
          <li>
            <NextLink href="#">
              Cloud Services <i className="fa fa-angle-down" />
            </NextLink>
            <ul className="sub-menu">
              <li>
                <NextLink href="/cloud-services/microsoft-365">
                  Microsoft 365
                </NextLink>
              </li>
              <li>
                <NextLink href="/cloud-services/microsoft-azure">
                  Microsoft Azure
                </NextLink>
              </li>
              <li>
                <NextLink href="/cloud-services/amazon-web-services">
                  Amazon Web Services
                </NextLink>
              </li>
            </ul>
          </li>
          <li>
            <NextLink href="#">
              About <i className="fa fa-angle-down" />
            </NextLink>
            <ul className="sub-menu">
              <li>
                <NextLink href="/about/our-shrefry">About Us</NextLink>
              </li>
              {/* <li>
                <NextLink href="#our-approach">Our Approach</NextLink>
              </li>
              <li>
                <NextLink href="#our-expertise">Our Expertise</NextLink>
              </li> */}
              <li>
                <NextLink href="/about/contact-us">Contact Us</NextLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navigation;
