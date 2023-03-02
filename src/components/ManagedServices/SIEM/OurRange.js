import React from "react";
import ReusableHero from "../../helpers/ReusableHero";
import ReusableHeroRight from "../../helpers/ReusableHeroRight";

export default function OurRange() {
  return (
    <div
      style={{
        marginTop: "-25px",
      }}
    >
      <ReusableHero
        secondaryText="Using state-of-the-art technology, our analysts will analyze logs and events from your network, servers, and applications to identify security breaches, cyber attacks, and other malicious activity. "
        tertiaryText="When a potential threat is detected, our team will immediately investigate and take the necessary steps to protect your systems and data."
        backgroundImage="url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)"
      />
      <ReusableHeroRight
        secondaryText="In addition to real-time monitoring and response, our service also includes regular reporting, vulnerability assessments, and security assessments to ensure that your security posture is always up to date and effective. "
        backgroundImage="url(https://images.unsplash.com/photo-1528312635006-8ea0bc49ec63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1800&q=80)"
      />
    </div>
  );
}
