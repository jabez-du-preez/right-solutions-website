import React from "react";

export default function Hero({
  pageTitle,
  breadcrumbs = [],
  bannerImage,
  pageSubtitle,
  highlight,
  pageTitleSuffix,
  pageTitleContinued,
}) {
  return (
    <section
      className="page-banner bgs-cover overlay pt-50"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="container">
        <div className="banner-inner">
          <h1 className="page-title text-center">
            {pageTitle} <span className="color-blue">{highlight}</span>{" "}
            {pageTitleSuffix}
            {pageTitleContinued}
          </h1>
          <h4 className="page-sub-title text-center">{pageSubtitle}</h4>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              {breadcrumbs &&
                breadcrumbs.length > 0 &&
                breadcrumbs.map((item) => (
                  <li key={Math.random()} className="breadcrumb-item">
                    <a href={item.path}>{item.name}</a>
                  </li>
                ))}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}
