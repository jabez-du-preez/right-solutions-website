import React from "react";
import bannerImage from "../../../assets/images/banners/azure.jpg";
import CustomDivider from "../../../components/helpers/CustomDivider";
import Layouts from "../../../components/helpers/Layouts";
import ReusableConclusion from "../../../components/helpers/ReusableConclusion";
import CloudRange from "./CloudRange";
import Intro from "./Intro";
import OurOffers from "./OurOffers";

export default function MicrosoftAzure() {
  const scroll = () => {
    const hero = document.querySelector("#azure-intro");
    hero.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const conclusion = (
    <span>
      With our Cloud service, you can have{" "}
      <span className="color-blue fw-500">confidence</span> that your
      organization is leveraging the{" "}
      <span className="color-blue fw-500">full potential</span> of the cloud to
      support its business needs.
    </span>
  );
  return (
    <Layouts
      bannerImage={bannerImage}
      pageTitle="Microsoft Azure?"
      highlight="We do that too!"
      showButton
      buttonText="Learn more"
      scrollToComponent={scroll}
    >
      <Intro id="azure-intro" />
      <CloudRange />
      <OurOffers />
      <CustomDivider />
      <ReusableConclusion conclusion={conclusion} />
    </Layouts>
  );
}
