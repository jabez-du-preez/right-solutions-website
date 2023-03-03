import React from "react";
import ReusableHero from "../../helpers/ReusableHero";

export default function OurRange() {
  return (
    <div
      style={{
        marginTop: "-25px",
      }}
    >
      <ReusableHero
        headerText="Our Microsoft 365 service includes:"
        secondaryText="We'll provide you with access to a range of Microsoft 365 tools and technologies, such as "
        listItems={[
          "Microsoft Office 365",
          "Microsoft Teams",
          "Microsoft Exchange",
        ]}
        tertiaryText="to help you support your business needs."
        backgroundImage="url(https://images.unsplash.com/photo-1649433391420-542fcd3835ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      />
    </div>
  );
}
