import React from "react";
import bannerImage from "../../assets/images/banners/contact.jpg";
import Contact from "../Contact";
import Layouts from "../helpers/Layouts";

export default function ContactUs() {
  return (
    <Layouts bannerImage={bannerImage}>
      <Contact />
    </Layouts>
  );
}
