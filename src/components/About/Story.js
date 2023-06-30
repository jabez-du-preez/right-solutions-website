import React from "react";
import bannerImage from "../../assets/images/banners/story.jpg";
import BacktoTopCom from "../helpers/BackToTopCom";
import Layouts from "../helpers/Layouts";
import StorySection from "./our-story-section";

export default function Story() {
  const scroll = () => {
    const hero = document.querySelector("#story-intro");
    hero.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Layouts
        bannerImage={bannerImage}
        pageTitle="We are "
        highlight="Right Solutions"
        pageSubtitle="With over 20 years experience working across industries such as legal, financial, architecture, education, manufacturing, amongst many others."
        showButton
        scrollToComponent={scroll}
        buttonText="Learn More"
        showSecondButton
      >
        <StorySection id="story-intro" />
        <BacktoTopCom className=".main-header" />
      </Layouts>
    </>
  );
}
