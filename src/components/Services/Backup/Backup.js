import React from "react";
import bannerImage from "../../../assets/images/banners/backup.jpg";
import CustomDivider from "../../helpers/CustomDivider";
import Layouts from "../../helpers/Layouts";
import ReusableConclusion from "../../helpers/ReusableConclusion";
import Intro from "./Intro";
import Solutions from "./Solutions";

export default function Backup() {
  const conclusion = (
    <span>
      With our Managed Backup Solution, you can have peace of mind knowing that
      your organization's data is being{" "}
      <span className="color-blue fw-500">properly protected</span> and is{" "}
      <span className="color-blue fw-500">always available</span> when needed.
    </span>
  );

  const scroll = () => {
    const hero = document.querySelector("#backup-intro");
    hero.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layouts
      bannerImage={bannerImage}
      buttonText="Learn More"
      showButton
      scrollToComponent={scroll}
      pageTitle="Managed Backup"
      pageSubtitle="We help you leverage the full potential of the cloud to support your business needs."
      showSecondButton
    >
      <Intro id="backup-intro" />
      <Solutions />
      <CustomDivider />
      <ReusableConclusion conclusion={conclusion} />
    </Layouts>
  );
}
