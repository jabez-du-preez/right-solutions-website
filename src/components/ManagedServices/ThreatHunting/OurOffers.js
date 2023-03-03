import React from "react";
import ReusableService from "../../helpers/ReusableService";

export default function OurOffers() {
  const cardItems = [
    {
      id: 1,
      header: "Proactive threat hunting",
      explaination:
        "Our team will use a variety of tools and techniques to search for and investigate potential threats to your systems and data.",
      icon: "fa-person-rifle",
      iconColor: "bg-purple",
    },
    {
      id: 2,
      header: "Customized approach",
      explaination:
        "We'll work with you to develop a customized threat hunting plan that aligns with your organization's specific security needs and goals.",
      icon: "fa-users-gear",
      iconColor: "bg-pink",
    },
    {
      id: 3,
      header: "Threat intelligence",
      explaination:
        "Our service includes access to a range of threat intelligence resources to help our team stay up to date on the latest threats and trends.",
      icon: "fa-brain",
      iconColor: "bg-blue",
    },
    {
      id: 4,
      header: "Support and guidance",
      explaination:
        "Our team is available to provide support and guidance as needed to help you effectively respond to any threats that we detect.",
      icon: "fa-headset",
      iconColor: "bg-green",
    },
  ];
  return (
    <div className="mt-25 mb-25">
      <ReusableService
        items={cardItems}
        heightClass="height-400"
        heading="Our Threat Hunting service includes"
        numberOfSlidesToScroll={1}
        numberOfSlidesToShow={3}
      />
    </div>
  );
}
