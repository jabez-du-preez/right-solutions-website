import React from "react";
// import bannerImage from "../../../assets/images/banners/manage.jpg";
import Layouts from "../../helpers/Layouts";
import Conclusion from "./Conclusion";
import Intro from "./Intro";
import OurRange from "./OurRange";

export default function CoManaged() {
  return (
    <Layouts bannerImage="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80">
      <Intro />
      <OurRange />
      <Conclusion />
    </Layouts>
  );
}
