import React from "react";
import ReusableHero from "../../../components/helpers/ReusableHero";

export default function OurRange() {
  return (
    <div
      style={{
        marginTop: "-25px",
      }}
    >
      <ReusableHero
        headerText="what our AWS service includes"
        secondaryText="We'll provide you with access to a range of AWS tools and technologies, such as: "
        listItems={["virtual machines", "storage", "networking"]}
        tertiaryText="to help you support your business needs."
        backgroundImage="url(https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80)"
      />
    </div>
  );
}
