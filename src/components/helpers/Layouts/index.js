import React, { useEffect } from "react";
import Contact from "../../Contact";
import FooterHomeSix from "../../partials/Footers/FooterHomeSix";
import BacktoTopCom from "../BackToTopCom";
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
  buttonText,
  showButton,
  scrollToComponent,
  showSecondButton,
  secondButtonText,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
        buttonText={buttonText}
        showButton={showButton}
        showSecondButton={showSecondButton}
        scrollToComponent={scrollToComponent}
        secondButtonText={secondButtonText}
      />
      {children && children}
      <Contact />
      <BacktoTopCom className=".main-header" />
      <FooterHomeSix />
    </>
  );
}
