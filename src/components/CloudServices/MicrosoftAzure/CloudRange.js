import React from "react";
import ReusableHero from "../../helpers/ReusableHero";

export default function CloudRange() {
  return (
    <div
      style={{
        marginTop: "-25px",
      }}
    >
      <ReusableHero
        headerText="Our range of cloud-based tools and technologies"
        secondaryText="We'll provide you with access to a range of cloud-based tools and technologies, such as:"
        listItems={[
          "Microsoft Azure",
          "Microsoft 365",
          "Amazon Web Services",
          "Google Cloud Platform",
        ]}
        tertiaryText="to help you support your business needs."
        backgroundImage="url(https://images.unsplash.com/photo-1509803874385-db7c23652552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      />
    </div>
  );
}
