import React from "react";
import ReusableService from "../../helpers/ReusableService";

export default function OurOffers() {
  const cardItems = [
    {
      id: 1,
      header: "Advanced spam and phishing protection",
      explaination:
        "Our systems use advanced machine learning and artificial intelligence to identify and block spam and phishing emails before they can reach your inbox.",
      icon: "fa-user-secret",
      iconColor: "bg-green",
    },
    {
      id: 2,
      header: "Email encryption",
      explaination:
        "Our service includes email encryption capabilities, allowing you to securely send and receive sensitive information over email.",
      icon: "fa-file-shield",
      iconColor: "bg-blue",
    },
    {
      id: 3,
      header: "Email archiving",
      explaination:
        "Our service includes email archiving capabilities, allowing you to store and retrieve emails for compliance purposes or for later reference.",
      icon: "fa-box-archive",
      iconColor: "bg-yellow",
    },
    {
      id: 4,
      header: "24/7 monitoring and support",
      explaination:
        "Our team of security professionals is available around the clock to monitor your email systems and respond to any potential threats.",
      icon: "fa-headset",
      iconColor: "bg-orange",
    },
  ];
  return (
    <div className="mt-25 mb-25">
      <ReusableService
        items={cardItems}
        heightClass="height-400"
        heading="We can manage them all"
        numberOfSlidesToScroll={1}
        numberOfSlidesToShow={3}
      />
    </div>
  );
}
