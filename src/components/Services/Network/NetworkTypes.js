import React from "react";
import ReusableService from "../../helpers/ReusableService";

export default function NetworkTypes() {
  const cardItems = [
    {
      id: 1,
      header: "Local Area Network (LAN)",
      explaination:
        "A local area network (LAN) is a computer network that interconnects computers within a smaller geographic area, such as an office building. A LAN is typically confined to a single building or group of buildings, such as a campus or college.",
      icon: "fa-location-dot",
      iconColor: "bg-green",
    },
    {
      id: 2,
      header: "Wireless LAN (WLAN)",
      explaination:
        "A wireless local area network (WLAN) is a wireless computer network that links two or more devices using a wireless distribution method within a limited area such as a home, school, computer laboratory, or office building.",
      icon: "fa-wifi",
      iconColor: "bg-blue",
    },
    {
      id: 3,
      header: "Virtual Private Network (VPN)",
      explaination:
        "A virtual private network (VPN) is a private network that extends across a public network. It enables users to send and receive data across shared or public networks as if their devices were directly connected to the private network.",
      icon: "fa-lock",
      iconColor: "bg-yellow",
    },
  ];
  return (
    <div className="mt-25 mb-25">
      <ReusableService
        items={cardItems}
        id="network-types"
        heading="We can manage them all"
        numberOfSlidesToShow={3}
        numberOfSlidesToScroll={1}
      />
    </div>
  );
}
