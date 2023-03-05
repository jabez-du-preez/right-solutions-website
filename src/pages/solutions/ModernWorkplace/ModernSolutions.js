import React from "react";
import ReusableHero from "../../../components/helpers/ReusableHero";

export default function ModernSolutions() {
  const listItems = [
    "Improve employee productivity and collaboration",
    "Increase employee satisfaction and engagement",
    "Reduce IT costs and complexity",
  ];
  return (
    <ReusableHero
      headerText="Benefits of our Modern Workplace solutions"
      secondaryText="Modern Workplace applications and tools can"
      listItems={listItems}
      backgroundImage="url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      tertiaryText="for your business."
    />
  );
}
