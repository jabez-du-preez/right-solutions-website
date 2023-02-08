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
                <Link to="/server-infrastructure">Server Infrastructure</Link>
              </li>
              <li>
                <Link to="/endpoint-security">End Point Security</Link>
              </li>
              <li>
                <Link to="/network-infrastructure">Network Infrastructure</Link>
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
          <li>
            <Link to="#">
              Managed Services <i className="fa fa-angle-down" />
            </Link>
            <ul className="sub-menu">
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
          </li>
          <li>
            <Link to="#">
              Cloud Services <i className="fa fa-angle-down" />
            </Link>
            <ul className="sub-menu">
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
          </li>
          <li>
            <Link to="#">
              About <i className="fa fa-angle-down" />
            </Link>
            <ul className="sub-menu">
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
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navigation;
