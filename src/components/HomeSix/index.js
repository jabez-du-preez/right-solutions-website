import React from "react";
import bannerImage from "../../assets/images/banners/rusty-car10.jpg";
import BacktoTopCom from "../helpers/BackToTopCom";
import Layouts from "../helpers/Layouts";
import AboutSection from "./AboutSection";
import CounterSection from "./CounterSection";
import OurServices from "./OurServices";
import Sponsers from "./Sponsers";

export default function HomeSix() {
  return (
    <>
      <Layouts
        bannerImage={bannerImage}
        pageTitle="We’re The"
        highlight="Right Solution"
        pageTitleContinued="for you"
        pageSubtitle="Your one stop shop for modern and intelligent solutions"
      >
        {/* <HeaderHomeSix /> */}
        {/* <Hero /> */}
        <OurServices />
        <AboutSection />
        {/* <CallToActionSection /> */}
        <Sponsers />
        {/* <CustomizeSection /> */}
        {/* <TeamSection teams={teams} /> */}
        {/* <PricingSectionFive /> */}
        <CounterSection />
        {/* <TestimonialSection />
        <SubscribeSection /> */}
        <BacktoTopCom className=".main-header" />
      </Layouts>
    </>
  );
}
