import React from "react";
import ReusableHero from "../../../components/helpers/ReusableHero";

export default function GrowingBusiness() {
  return (
    <div
      style={{
        marginTop: "-25px",
      }}
    >
      <ReusableHero
        headerText="Growing Business"
        secondaryText="As businesses reinvent themselves through digital transformation it has become more important than ever that business leaders stop managing IT as a technical function and align it with the company strategy, if not it could affect the long-term growth of the business or result in sudden changes in business direction."
        backgroundImage="url(https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80"
      />
    </div>
  );
}
