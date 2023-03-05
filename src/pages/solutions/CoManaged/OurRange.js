import React from "react";
import ReusableHero from "../../../components/helpers/ReusableHero";
import ReusableHeroRight from "../../../components/helpers/ReusableHeroRight";

export default function OurRange() {
  return (
    <div
      style={{
        marginTop: "-25px",
      }}
    >
      <ReusableHero
        headerText="Our Offer to you"
        secondaryText="Our team will provide ongoing maintenance and support to keep your systems running smoothly and efficiently, as well as troubleshooting any issues that may arise."
        tertiaryText="We'll also work with you to develop and implement IT strategies to support your business goals and needs."
        backgroundImage="url(https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)"
      />
      <ReusableHeroRight
        headerText="There's more..."
        secondaryText="In addition to technical support, our Outsourced IT service also includes security services to help protect your systems and data."
        tertiaryText="We'll monitor your systems 24/7, looking for potential threats and vulnerabilities, and take the necessary steps to prevent and mitigate any issues."
        backgroundImage="url(https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)"
      />
    </div>
  );
}
