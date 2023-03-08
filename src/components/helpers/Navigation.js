import { Link } from "react-router-dom";

function Navigation({ className }) {
  return (
    <>
      <div className={`restly-header-main-menu ${className || ""}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#">
              Solutions <i className="fa fa-angle-down" />
            </Link>
            <ul className="sub-menu">
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
          </li>
          <li>
            <Link to="#">
              Managed Services <i className="fa fa-angle-down" />
            </Link>
            <ul className="sub-menu">
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
          </li>
          <li>
            <Link to="#">
              Cloud Services <i className="fa fa-angle-down" />
            </Link>
            <ul className="sub-menu">
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
          </li>
          <li>
            <Link to="#">
              About <i className="fa fa-angle-down" />
            </Link>
            <ul className="sub-menu">
              <li>
                <Link to="/about/our-story">About Us</Link>
              </li>

              <li>
                <Link to="/about/contact-us">Contact Us</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navigation;
