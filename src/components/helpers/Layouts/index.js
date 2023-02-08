import React from "react";
import FooterHomeSix from "../../partials/Footers/FooterHomeSix";
import Navbar from "../Navbar";
import Hero from "./Hero";

export default function Layouts({
  children,
  pageTitle,
  breadcrumbs = [],
  bannerImage,
  pageSubtitle,
  highlight,
  pageTitleContinued,
  pageTitleSuffix,
}) {
  return (
    <>
      <Navbar />
      <Hero
        pageTitle={pageTitle}
        breadcrumbs={breadcrumbs}
        bannerImage={bannerImage}
        pageSubtitle={pageSubtitle}
        highlight={highlight}
        pageTitleContinued={pageTitleContinued}
        pageTitleSuffix={pageTitleSuffix}
      />
      {children && children}
      <FooterHomeSix />
    </>
  );
}
