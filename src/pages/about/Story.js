import React from "react";
import bannerImage from "../../assets/images/banners/story.jpg";
import BacktoTopCom from "../../components/helpers/BackToTopCom";
import Layouts from "../../components/helpers/Layouts";
import StorySection from "./our-story-section";

export default function Story() {
  return (
    <>
      <Layouts
        bannerImage={bannerImage}
        pageTitle="We are"
        highlight="Right Solutions"
        pageSubtitle="With over 20 years’ experience working across industries such as legal, financial, architecture, education, manufacturing, amongst many others."
      >
        <StorySection />
        <BacktoTopCom className=".main-header" />
      </Layouts>
    </>
  );
}
