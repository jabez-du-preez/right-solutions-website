import { Route, Routes } from "react-router-dom";
// import AboutFive from "./components/AboutPages/AboutFive";
// import AboutFour from "./components/AboutPages/Aboutfour";
// import AboutOne from "./components/AboutPages/AboutOne/index";
// import AboutSeven from "./components/AboutPages/AboutSeven";
// import AboutSix from "./components/AboutPages/AboutSix";
// import AboutThree from "./components/AboutPages/AboutThree/index";
// import AboutTwo from "./components/AboutPages/AboutTwo/index";
// import Blog from "./components/BlogPages/Blog";
// import BlogDetails from "./components/BlogPages/BlogDetails";
// import Contact from "./components/Contact/index";
// import CounterPage from "./components/CounterPage";
// import FourZeroFour from "./components/FourZeroFour/index";
// import HomeEight from "./components/HomeEight/index";
// import HomeFive from "./components/HomeFive";
// import HomeFour from "./components/HomeFour";
// import HomeNine from "./components/HomeNine";
// import HomeSeven from "./components/HomeSeven";
import HomeSix from "./components/HomeSix";
// import HomeThree from "./components/HomeThree";
// import HomeTwo from "./components/HomeTwo";
// import ProtfolioDetails from "./components/PortfolioPages/PortfolioDetails";
// import PortfolioFour from "./components/PortfolioPages/PortfolioFour";
// import PortfolioOne from "./components/PortfolioPages/PortfolioOne";
// import PortfolioThree from "./components/PortfolioPages/PortfolioThree";
// import PortfolioTwo from "./components/PortfolioPages/PortfolioTwo";
// import PricingFive from "./components/PricingPages/PricingFive/index";
// import PricingFour from "./components/PricingPages/PricingFour/index";
// import PricingOne from "./components/PricingPages/PricingOne";
// import PricingSix from "./components/PricingPages/PricingSix";
// import PricingThree from "./components/PricingPages/PricingThree/index";
// import PricingTwo from "./components/PricingPages/PricingTwo";
// import ServiceDetails from "./components/ServicePages/ServiceDetails/index";
// import ServiceFive from "./components/ServicePages/ServiceFive";
// import ServiceFour from "./components/ServicePages/ServiceFour";
// import ServiceOne from "./components/ServicePages/ServiceOne/index";
// import ServiceSeven from "./components/ServicePages/ServiceSeven";
// import ServiceSix from "./components/ServicePages/ServiceSix";
// import ServiceThree from "./components/ServicePages/ServiceThree";
// import ServiceTwo from "./components/ServicePages/ServiceTwo/index";
import Approach from "./components/About/Approach";
import Contact from "./components/About/Contact";
import Expertise from "./components/About/Expertise";
import Story from "./components/About/Story";
import Amazon from "./components/CloudServices/Amazon";
import MicrosoftAzure from "./components/CloudServices/MicrosoftAzure";
import Microsoft365 from "./components/CloudServices/Micrsoft365";
import CyberIncident from "./components/ManagedServices/CyberIncident";
import DarkWeb from "./components/ManagedServices/DarkWeb";
import FirewallManagement from "./components/ManagedServices/FirewallManagement";
import Pentesting from "./components/ManagedServices/Pentesting";
import PhishingSimulation from "./components/ManagedServices/PhishingSimulation";
import SecurityAwareness from "./components/ManagedServices/SecurityAwareness";
import SIEM from "./components/ManagedServices/SIEM";
import ThreatHunting from "./components/ManagedServices/ThreatHunting";
import Vulnerability from "./components/ManagedServices/Vulnerability";
import Backup from "./components/Services/Backup";
import CoManaged from "./components/Services/CoManaged";
import Email from "./components/Services/Email";
import EndPoint from "./components/Services/EndPoint";
import ModernWorkplace from "./components/Services/ModernWorkplace";
import Network from "./components/Services/Network";
import Outsourced from "./components/Services/Outsourced";
import ServerInfrastructure from "./components/Services/ServerInfrastructure/index";
import Strategy from "./components/Services/Strategy";
import Voice from "./components/Services/Voice";

// import Shop from "./components/ShopPages/Shop";
// import ShopDetails from "./components/ShopPages/ShopDetails";
// import TeamFour from "./components/TeamPages/TeamFour";
// import TeamOne from "./components/TeamPages/TeamOne";
// import TeamSingle from "./components/TeamPages/TeamSingle";
// import TeamThree from "./components/TeamPages/TeamThree";
// import TeamTwo from "./components/TeamPages/TeamTwo";
// import TestimonialFour from "./components/TestimonialPages/TestimonialFour";
// import TestimonialThree from "./components/TestimonialPages/TestimonialThree";
// import TestimonialTwo from "./components/TestimonialPages/TestimonialTwo/index";
// import TestimonialOne from "./components/TestimonialPages/TestmonialOne";

export default function Routers() {
  return (
    <Routes>
      <Route exact path="/" element={<HomeSix />} />
      {/* <Route exact path="/home-two" element={<HomeTwo />} />
      <Route exact path="/home-three" element={<HomeThree />} />
      <Route exact path="/home-four" element={<HomeFour />} />
      <Route exact path="/home-five" element={<HomeFive />} />
      <Route exact path="/home-six" element={<HomeSix />} />
      <Route exact path="/home-seven" element={<HomeSeven />} />
      <Route exact path="/home-eight" element={<HomeEight />} />
      <Route exact path="/home-nine" element={<HomeNine />} />
      <Route exact path="/about-one" element={<AboutOne />} />
      <Route exact path="/about-two" element={<AboutTwo />} />
      <Route exact path="/about-Three" element={<AboutThree />} />
      <Route exact path="/about-four" element={<AboutFour />} />
      <Route exact path="/about-five" element={<AboutFive />} />
      <Route exact path="/about-six" element={<AboutSix />} />
      <Route exact path="/about-seven" element={<AboutSeven />} />
      <Route exact path="/service-one" element={<ServiceOne />} />
      <Route exact path="/service-two" element={<ServiceTwo />} />
      <Route exact path="/service-three" element={<ServiceThree />} />
      <Route exact path="/service-four" element={<ServiceFour />} />
      <Route exact path="/service-five" element={<ServiceFive />} />
      <Route exact path="/service-six" element={<ServiceSix />} />
      <Route exact path="/service-seven" element={<ServiceSeven />} />
      <Route exact path="/service-details" element={<ServiceDetails />} />
      <Route exact path="/portfolio-one" element={<PortfolioOne />} />
      <Route exact path="/portfolio-two" element={<PortfolioTwo />} />
      <Route exact path="/portfolio-three" element={<PortfolioThree />} />
      <Route exact path="/portfolio-four" element={<PortfolioFour />} />
      <Route exact path="/portfolio-details" element={<ProtfolioDetails />} />
      <Route exact path="/team-one" element={<TeamOne />} />
      <Route exact path="/team-two" element={<TeamTwo />} />
      <Route exact path="/team-three" element={<TeamThree />} />
      <Route exact path="/team-four" element={<TeamFour />} />
      <Route exact path="/team-single" element={<TeamSingle />} />
      <Route exact path="/testimonial-one" element={<TestimonialOne />} />
      <Route exact path="/testimonial-two" element={<TestimonialTwo />} />
      <Route exact path="/testimonial-three" element={<TestimonialThree />} />
      <Route exact path="/testimonial-four" element={<TestimonialFour />} />
      <Route exact path="/pricing" element={<PricingOne />} />
      <Route exact path="/pricing-two" element={<PricingTwo />} />
      <Route exact path="/pricing-three" element={<PricingThree />} />
      <Route exact path="/pricing-four" element={<PricingFour />} />
      <Route exact path="/pricing-five" element={<PricingFive />} />
      <Route exact path="/pricing-six" element={<PricingSix />} />
      <Route exact path="/shop" element={<Shop />} />
      <Route exact path="/shop-details" element={<ShopDetails />} />
      <Route exact path="/blog" element={<Blog />} />
      <Route exact path="/blog/blog-details" element={<BlogDetails />} />
      <Route exact path="/404" element={<FourZeroFour />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/counters" element={<CounterPage />} /> */}
      <Route
        exact
        path="/server-infrastructure"
        element={<ServerInfrastructure />}
      />
      <Route exact path="/backup-solutions" element={<Backup />} />
      <Route exact path="/co-managed-it" element={<CoManaged />} />
      <Route exact path="/email-security" element={<Email />} />
      <Route exact path="/endpoint-security" element={<EndPoint />} />
      <Route exact path="/modern-workplace" element={<ModernWorkplace />} />
      <Route exact path="/network-infrastructure" element={<Network />} />
      <Route exact path="/outsourced-it" element={<Outsourced />} />
      <Route exact path="/strategy-and-consulting" element={<Strategy />} />
      <Route exact path="/voice-solutions" element={<Voice />} />
      <Route
        exact
        path="/cyber-incident-response"
        element={<CyberIncident />}
      />
      <Route exact path="/dark-web-monitoring" element={<DarkWeb />} />
      <Route
        exact
        path="/firewall-management"
        element={<FirewallManagement />}
      />
      <Route exact path="/pentesting" element={<Pentesting />} />
      <Route
        exact
        path="/phishing-simulation"
        element={<PhishingSimulation />}
      />
      <Route
        exact
        path="/cyber-security-awareness-training"
        element={<SecurityAwareness />}
      />
      <Route exact path="/managed-siem-and-soc" element={<SIEM />} />
      <Route exact path="/threat-hunting" element={<ThreatHunting />} />
      <Route
        exact
        path="/vulnerability-management"
        element={<Vulnerability />}
      />
      <Route exact path="/amazon-web-services" element={<Amazon />} />
      <Route exact path="/microsoft-365" element={<Microsoft365 />} />
      <Route exact path="/microsoft-azure" element={<MicrosoftAzure />} />
      <Route exact path="/our-approach" element={<Approach />} />
      <Route exact path="/contact-us" element={<Contact />} />
      <Route exact path="/our-expertise" element={<Expertise />} />
      <Route exact path="/our-story" element={<Story />} />
    </Routes>
  );
}
