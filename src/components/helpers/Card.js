import React from "react";

export default function Card({
  iconBackgroundColor,
  flaticon,
  headerText,
  explainationText,
  heightClass,
  colorClass,
  textColorClass,
}) {
  return (
    <div className="col-sm-12 col-lg-12">
      <div
        className={`feature-item-two ${colorClass} lift-on-hover border-radius padding-auto wow fadeInUp delay-0-2s ${heightClass} `}
      >
        <div className={`${iconBackgroundColor} card-icon mb-20`}>
          <i className={`${flaticon}`}></i>
        </div>
        <h4
          className={`${textColorClass} text-center text-capitalize color-black`}
        >
          {headerText}
        </h4>
        <p className={`${textColorClass} text-center`}>{explainationText}</p>
      </div>
    </div>
  );
}
