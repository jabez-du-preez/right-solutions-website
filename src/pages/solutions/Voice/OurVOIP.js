import React from "react";
import ReusableHero from "../../../components/helpers/ReusableHero";

export default function OurVOIP() {
  const listItems = ["Voicemail", "Conference calling", "Call forwarding"];
  return (
    <div
      style={{
        marginTop: "-25px",
      }}
    >
      <ReusableHero
        headerText="Our VOIP features"
        secondaryText="We offer features like"
        listItems={listItems}
        tertiaryText="for a much lower cost than traditional phone systems without sacrificing any traditional features."
        backgroundImage="url(https://images.unsplash.com/photo-1606770347238-77fcfd29906c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1550&q=80)"
      />
    </div>
  );
}
