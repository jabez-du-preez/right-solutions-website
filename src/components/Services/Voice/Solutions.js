import React from "react";
import ReusableService from "../../helpers/ReusableService";

export default function Solutions() {
  const cardItems = [
    {
      id: 1,
      header: "Advanced Call Features",
      explaination:
        "Our service includes a range of advanced call features, such as call forwarding, voicemail, call waiting, and caller ID.",
      icon: "fa-scale-unbalanced",
      iconColor: "bg-yellow",
    },
    {
      id: 2,
      header: "Softphone support",
      explaination:
        "Our service includes support for softphones, allowing you to make and receive calls using your computer or mobile device.",
      icon: "fa-headphones-simple",
      iconColor: "bg-blue",
    },
    {
      id: 3,
      header: "Integration with popular business tools",
      explaination:
        "Our service can be easily integrated with popular business tools such as Microsoft Office, Google Suite, and Salesforce.",
      icon: "fa-link",
      iconColor: "bg-purple",
    },
    {
      id: 4,
      header: "24/7 support",
      explaination:
        "Our team of support professionals is available around the clock to help you with any questions or issues you may have.",
      icon: "fa-headset",
      iconColor: "bg-green",
    },
  ];
  return (
    <ReusableService
      items={cardItems}
      heading="Our VOIP Solution Includes"
      numberOfSlidesToShow={2}
      numberOfSlidesToScroll={1}
    />
  );
}
