import { Route, Routes } from "react-router-dom";
import Approach from "./components/About/Approach";
import Contact from "./components/About/Contact";
import Expertise from "./components/About/Expertise";
import Story from "./components/About/Story";
import Amazon from "./components/CloudServices/Amazon/Amazon";
import Microsoft365 from "./components/CloudServices/Microsoft365/Micrsoft365";
import MicrosoftAzure from "./components/CloudServices/MicrosoftAzure/MicrosoftAzure";
import FourZeroFour from "./components/FourZeroFour/index";
import HomeSix from "./components/HomeSix";
import CyberIncident from "./components/ManagedServices/CyberIncident/CyberIncident";
import DarkWeb from "./components/ManagedServices/DarkWeb/DarkWeb";
import FirewallManagement from "./components/ManagedServices/FirewallManagement/FirewallManagement";
import Pentesting from "./components/ManagedServices/Pentesting/Pentesting";
import PhishingSimulation from "./components/ManagedServices/PhishingSimulation/PhishingSimulation";
import SIEM from "./components/ManagedServices/SIEM/SIEM";
import SecurityAwareness from "./components/ManagedServices/SecurityAwareness/SecurityAwareness";
import ThreatHunting from "./components/ManagedServices/ThreatHunting/ThreatHunting";
import Vulnerability from "./components/ManagedServices/Vulnerability/Vulnerability";
import Backup from "./components/Services/Backup/Backup";
import CoManaged from "./components/Services/CoManaged/CoManaged";
import Email from "./components/Services/Email/Email";
import EndPoint from "./components/Services/EndPoint/index";
import ModernWorkplace from "./components/Services/ModernWorkplace/index";
import Network from "./components/Services/Network/index";
import Outsourced from "./components/Services/Outsourced/Outsourced";
import ServerInfrastructure from "./components/Services/ServerInfrastructure/index";
import Strategy from "./components/Services/Strategy/Strategy";
import Voice from "./components/Services/Voice/Voice";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<HomeSix />} />
      <Route path="*" element={<FourZeroFour />} />
      <Route
        path="/solutions/server-infrastructure"
        element={<ServerInfrastructure />}
      />
      <Route path="/solutions/backup-solutions" element={<Backup />} />
      <Route path="/solutions/co-managed-it" element={<CoManaged />} />
      <Route path="/solutions/email-security" element={<Email />} />
      <Route path="/solutions/endpoint-security" element={<EndPoint />} />
      <Route path="/solutions/modern-workplace" element={<ModernWorkplace />} />
      <Route path="/solutions/network-infrastructure" element={<Network />} />
      <Route path="/solutions/outsourced-it" element={<Outsourced />} />
      <Route path="/solutions/strategy-and-consulting" element={<Strategy />} />
      <Route path="/solutions/voice-solutions" element={<Voice />} />
      <Route
        path="/managed-services/cyber-incident-response"
        element={<CyberIncident />}
      />
      <Route
        path="/managed-services/dark-web-monitoring"
        element={<DarkWeb />}
      />
      <Route
        path="/managed-services/firewall-management"
        element={<FirewallManagement />}
      />
      <Route path="/managed-services/pentesting" element={<Pentesting />} />
      <Route
        path="/managed-services/phishing-simulation"
        element={<PhishingSimulation />}
      />
      <Route
        path="/managed-services/cyber-security-awareness-training"
        element={<SecurityAwareness />}
      />
      <Route path="/managed-services/managed-siem-and-soc" element={<SIEM />} />
      <Route
        path="/managed-services/threat-hunting"
        element={<ThreatHunting />}
      />
      <Route
        path="/managed-services/vulnerability-management"
        element={<Vulnerability />}
      />
      <Route path="/cloud-services/amazon-web-services" element={<Amazon />} />
      <Route path="/cloud-services/microsoft-365" element={<Microsoft365 />} />
      <Route
        path="/cloud-services/microsoft-azure"
        element={<MicrosoftAzure />}
      />
      <Route path="/our-approach" element={<Approach />} />
      <Route path="/about/contact-us" element={<Contact />} />
      <Route path="/our-expertise" element={<Expertise />} />
      <Route path="/about/our-story" element={<Story />} />
      <Route path="/support" />
      <Route path="/support/admin" />
    </Routes>
  );
}
