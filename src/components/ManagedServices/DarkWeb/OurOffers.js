import React from "react";
import ReusableService from "../../helpers/ReusableService";

export default function OurOffers() {
  const cardItems = [
    {
      id: 1,
      header: "Real-time monitoring",
      explaination:
        "Our team will monitor the dark web on a continuous basis, looking for any mentions of your organization or its assets.",
      icon: "fa-microscope",
      iconColor: "bg-blue",
    },
    {
      id: 2,
      header: "Email encryption",
      explaination:
        "If we detect any potential threats or exposures, we'll immediately notify you so that you can take the necessary steps to protect yourself.",
      icon: "fa-file-shield",
      iconColor: "bg-yellow",
    },
    {
      id: 3,
      header: "Detailed reports",
      explaination:
        "Our service includes regular reports that provide information on the threats and exposures we've detected, along with recommendations for mitigating those risks.",
      icon: "fa-newspaper",
      iconColor: "bg-green",
    },
    {
      id: 4,
      header: "Support and guidance",
      explaination:
        "Our team is available to provide support and guidance as needed to help you effectively respond to any threats or exposures that we detect.",
      icon: "fa-headset",
      iconColor: "bg-pink",
    },
  ];
  return (
    <div className="mt-25 mb-25">
      <ReusableService
        items={cardItems}
        heightClass="height-400"
        heading="Our Dark Web Monitoring service includes"
        numberOfSlidesToScroll={1}
        numberOfSlidesToShow={3}
      />
    </div>
  );
}
