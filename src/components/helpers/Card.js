import React from "react";

export default function Card({
  iconBackgroundColor,
  flaticon,
  headerText,
  explainationText,
}) {
  return (
    <div
      className={`feature-item-two lift-on-hover border-radius ${iconBackgroundColor} padding-auto wow fadeInUp delay-0-2s`}
    >
      <div className="card-icon mb-20">
        <i className={`flaticon ${flaticon}`}></i>
      </div>
      <h4>
        <a href="/service-details">{headerText}</a>
      </h4>
      <p>{explainationText}</p>
    </div>
  );
}
