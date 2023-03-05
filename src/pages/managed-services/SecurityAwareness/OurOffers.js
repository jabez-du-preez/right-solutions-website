import React from "react";
import ReusableService from "../../../components/helpers/ReusableService";

export default function OurOffers() {
  const cardItems = [
    {
      id: 1,
      header: "Customized training materials",
      explaination:
        "We'll work with you to develop customized training materials and resources that are tailored to your organization's needs and industry.",
      icon: "fa-users-gear",
      iconColor: "bg-orange",
    },
    {
      id: 2,
      header: "Online training modules",
      explaination:
        "Our service includes a range of online training modules that cover topics such as phishing, password security, and safe browsing practices.",
      icon: "fa-book",
      iconColor: "bg-pink",
    },
    {
      id: 3,
      header: "Regular updates",
      explaination:
        "As the threat landscape evolves, we'll provide regular updates and new training materials to ensure that your team is always up to date on the latest threats and best practices.",
      icon: "fa-arrows-rotate",
      iconColor: "bg-green",
    },
    {
      id: 4,
      header: "Support and guidance",
      explaination:
        "Our team of security professionals is available to provide support and guidance as needed to help you implement your security awareness training program.",
      icon: "fa-headset",
      iconColor: "bg-blue",
    },
  ];
  return (
    <div className="mt-25 mb-25">
      <ReusableService
        items={cardItems}
        heightClass="height-350"
        heading="Our Security Awareness Training service includes"
        numberOfSlidesToScroll={1}
        numberOfSlidesToShow={3}
      />
    </div>
  );
}
