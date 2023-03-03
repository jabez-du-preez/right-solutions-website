import React from "react";
import ReusableHero from "../../helpers/ReusableHero";

export default function More() {
  return (
    <div
      style={{
        marginTop: "-25px",
      }}
    >
      <ReusableHero
        headerText="Advanced Network Technology"
        secondaryText="Adopting advanced network technology will allow your business flexibility by enhancing network virtualization capabilities and simplifying network management for greater efficiency. Therefore enhancing security by allowing the monitoring and responding to network security threats in real-time."
        backgroundImage="url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80"
      />
    </div>
  );
}
