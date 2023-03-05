import React from "react";
import ReusableHero from "../../../components/helpers/ReusableHero";

export default function OurOffer() {
  return (
    <div
      style={{
        marginTop: "-25px",
      }}
    >
      <ReusableHero
        headerText="Our incident response service includes:"
        listItems={[
          "Immediate notification and assessment of the incident",
          "Identification and containment of the problem",
          "Analysis of the root cause ",
          "determination of appropriate remediation steps ",
          "Coordination of the response with relevant parties",
          "Restoration of normal operations",
          "Post-incident review and improvement recommendations ",
        ]}
        backgroundImage="url(https://images.unsplash.com/photo-1586470202424-a6f766679b45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80)"
      />
    </div>
  );
}
