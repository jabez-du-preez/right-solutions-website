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
        headerText="Our Outsourced IT Service"
        secondaryText="Our Outsourced IT service is designed to provide organizations with comprehensive support for all of their IT needs."
        tertiaryText="With this service, you'll have access to a team of experienced IT professionals who will manage your organization's IT infrastructure, including hardware, software, and networking."
        backgroundImage="url(https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)"
      />
      <ReusableHeroRight
        headerText="There's more..."
        secondaryText="Our team will provide ongoing maintenance and support to keep your systems running smoothly and efficiently, as well as troubleshoot any issues that may arise. "
        tertiaryText="We'll also work with you to develop and implement IT strategies to support your business goals and needs."
        backgroundImage="url(https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)"
      />
      <ReusableHero
        headerText="Almost there"
        secondaryText="In addition to technical support, our Outsourced IT service also includes security services to help protect your systems and data. "
        tertiaryText="We'll monitor your systems 24/7, looking for potential threats and vulnerabilities, and take the necessary steps to prevent and mitigate any issues."
        backgroundImage="url(https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)"
      />
    </div>
  );
}
