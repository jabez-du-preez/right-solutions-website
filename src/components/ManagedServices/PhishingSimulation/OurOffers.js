import React from "react";
import ReusableService from "../../helpers/ReusableService";

export default function OurOffers() {
  const cardItems = [
    {
      id: 1,
      header: "Customized simulations",
      explaination:
        "We'll work with you to design customized phishing simulations that test your employees' awareness of phishing threats and their ability to recognize and report them.",
      icon: "fa-location-dot",
      iconColor: "bg-green",
    },
    {
      id: 2,
      header: "Detailed reporting",
      explaination:
        "After each simulation, we'll provide detailed reports that include information on the success rate of the simulation, the types of phishing emails that were most successful, and the employees who were most susceptible to phishing attacks.",
      icon: "fa-wifi",
      iconColor: "bg-blue",
    },
    {
      id: 3,
      header: "Remediation resources",
      explaination:
        "Our service includes a range of resources and materials to help you educate your employees about phishing threats and best practices for preventing them.",
      icon: "fa-lock",
      iconColor: "bg-yellow",
    },
    {
      id: 4,
      header: "Ongoing support",
      explaination:
        "Our team is available to provide ongoing support and guidance as needed to help you effectively implement and maintain your phishing simulation program.",
      icon: "fa-lock",
      iconColor: "bg-orange",
    },
  ];
  return (
    <div className="mt-25 mb-25">
      <ReusableService
        items={cardItems}
        heightClass="height-400"
        heading="Our Phishing Simulation service includes"
        numberOfSlidesToScroll={1}
        numberOfSlidesToShow={3}
      />
    </div>
  );
}
