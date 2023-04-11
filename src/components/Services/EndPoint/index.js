import React from "react";
import bannerImage from "../../../assets/images/banners/laptop1.jpg";
import Layouts from "../../helpers/Layouts";
import ReusableHero from "../../helpers/ReusableHero";
import Intro from "./Intro";

export default function EndPoint() {
  const scroll = () => {
    const hero = document.querySelector("#endpoint-intro");
    hero.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Layouts
      pageTitle="Round the clock security for your "
      highlight="End Points"
      bannerImage={bannerImage}
      showButton
      buttonText="Learn More"
      scrollToComponent={scroll}
      showSecondButton
    >
      <Intro id="endpoint-intro" />
      <ReusableHero
        headerText="What is an endpoint?"
        secondaryText="An endpoint, also known as a client or host, is any device that can be connected to a network and is capable of sending or receiving data. This includes:"
        listItems={[
          "Laptops",
          "Desktop Computers",
          "Tablets",
          "Smartphones",
          "Printers",
        ]}
        tertiaryText="and more."
        backgroundImage="url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80)"
      />
    </Layouts>
  );
}
