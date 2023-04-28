import React from "react";
import Contact from "../../Contact";
import FooterHomeSix from "../../partials/Footers/FooterHomeSix";
import BacktoTopCom from "../BackToTopCom";
import Navbar from "../Navbar";
import Head from "./Head";
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
  const currentURL = window.location.href;

  function formatUrl(url) {
    const path = url.substring(url.lastIndexOf("/") + 1);

    const words = path
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1));

    const formatted = words.join(" ");

    if (formatted === "") {
      return "Home";
    }

    return formatted;
  }

  return (
    <>
      <Head title={formatUrl(currentURL)} />
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
