import React from "react";
// import bannerImage from "../../assets/images/banners/rusty-car10.jpg";
import BacktoTopCom from "../helpers/BackToTopCom";
import Layouts from "../helpers/Layouts";
import ReusableService from "../helpers/ReusableService";
// import ReusableHero from "../helpers/ReusableHero";
import CounterSection from "./CounterSection";
import OurServices from "./OurServices";

export default function HomeSix() {
  const scroll = () => {
    const hero = document.querySelector("#services-cards");
    hero.scrollIntoView({ behavior: "smooth" });
  };

  const cardItems = [
    {
      id: 1,
      header: "Cyber Security",
      explaination:
        "We provide cyber security services to protect your business from cyber threats.",
      href: "/endpoint-security",
      icon: "fa-user-secret",
      iconColor: "bg-green",
    },
    {
      id: 2,
      header: "Server Infrastructure",
      explaination:
        "We provide cyber security services to protect your business from cyber threats.",
      href: "/server-infrastructure",
      icon: "fa-server",
      iconColor: "bg-orange",
    },
    {
      id: 3,
      header: "Threat Hunting",
      explaination:
        "We provide cyber security services to protect your business from cyber threats.",
      href: "/threat-hunting",
      icon: "fa-user-ninja",
      iconColor: "bg-red",
    },
    {
      id: 4,
      header: "End Point Security",
      explaination:
        "We provide cyber security services to protect your business from cyber threats.",
      href: "/endpoint-security",
      icon: "fa-computer",
      iconColor: "bg-purple",
    },
    {
      id: 5,
      header: "Network Infrastructure",
      explaination:
        "We provide cyber security services to protect your business from cyber threats.",
      href: "/network-infrastrucutre",
      icon: "fa-diagram-project",
      iconColor: "bg-blue",
    },
    {
      id: 6,
      header: "Modern Workplace",
      explaination:
        "We provide cyber security services to protect your business from cyber threats.",
      href: "/modern-workplace",
      icon: "fa-briefcase",
      iconColor: "bg-yellow",
    },
  ];

  return (
    <>
      <Layouts
        // bannerImage="https://images.unsplash.com/photo-1526230040953-6bce5ae9861b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1708&q=80"
        bannerImage="https://images.unsplash.com/photo-1574075769427-50408e11d0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        pageTitle="We’re The"
        highlight="Right Solution"
        pageTitleContinued="for you"
        pageSubtitle="Your one stop shop for modern and intelligent solutions"
        buttonText="Learn More"
        showButton
        scrollToComponent={scroll}
        showSecondButton
        secondButtonText="Contact Us"
      >
        <ReusableService
          id="services-cards"
          className="scroll-margin-100"
          items={cardItems}
          heading="We have a diverse presence across various industries."
          showReadMore
          numberOfSlidesToScroll={1}
          numberOfSlidesToShow={3}
        />
        <OurServices id="what-we-do" />
        <CounterSection />
        <BacktoTopCom className=".main-header" />
      </Layouts>
    </>
  );
}
