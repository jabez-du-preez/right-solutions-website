import React from "react";
import GetInTouchSection from "../../AboutPages/AboutOne/GetInTouchSection";
import Layouts from "../../helpers/Layouts";
import PricingSection from "../../HomeOne/PricingSection";
import ServiceSection from "../../HomeOne/ServiceSection";
import WorkProcessSection from "../ServiceOne/WorkProcessSection";

export default function ServiceTwo() {
  return (
    <Layouts
      pageTitle="Service Two"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "service", path: "/service-two" },
      ]}
    >
      <ServiceSection />
      <WorkProcessSection />
      <PricingSection />
      <GetInTouchSection />
    </Layouts>
  );
}
