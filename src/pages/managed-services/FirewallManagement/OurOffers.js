import React from "react";
import ReusableService from "../../../components/helpers/ReusableService";

export default function OurOffers() {
  const cardItems = [
    {
      id: 1,
      header: "Configuration and maintenance",
      explaination:
        "We'll help you to configure and maintain your firewall systems to ensure that they are properly protecting your network and data.",
      icon: "fa-toolbox",
      iconColor: "bg-pink",
    },
    {
      id: 2,
      header: "Policy management",
      explaination:
        "We'll work with you to develop and maintain firewall policies that align with your organization's security needs and goals.",
      icon: "fa-handcuffs",
      iconColor: "bg-orange",
    },
    {
      id: 3,
      header: "Monitoring and alerts",
      explaination:
        "Our team will continuously monitor your firewall systems for any potential threats or issues, and will provide alerts as needed.",
      icon: "fa-bell",
      iconColor: "bg-blue",
    },
    {
      id: 4,
      header: "Support and guidance",
      explaination:
        "Our team is available to provide support and guidance as needed to help you effectively manage your firewall systems.",
      icon: "fa-headset",
      iconColor: "bg-purple",
    },
  ];
  return (
    <div className="mt-25 mb-25">
      <ReusableService
        items={cardItems}
        heightClass="height-400"
        heading="Our Firewall Management service includes"
        numberOfSlidesToScroll={1}
        numberOfSlidesToShow={3}
      />
    </div>
  );
}
