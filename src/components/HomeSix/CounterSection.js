import { Typography } from "@mui/material";
import React from "react";
import CounterUp from "../helpers/CounterUp";

export default function CounterSection() {
  return (
    <section
      id="counter-section-three"
      className="counter-section-three bg-lighter text-center pt-100 rpt-95 pb-50 rpb-50"
    >
      <div className="container">
        <div className="section-title mb-55">
          <Typography
            variant="h2"
            className="dark-grey"
            sx={{
              fontWeight: 500,
              fontSize: "2.5rem",
              fontFamily: "Montserrat",
            }}
          >
            We serve many users and clients.
          </Typography>
          <Typography
            className="light-grey"
            variant="h2"
            marginTop={3}
            sx={{
              fontWeight: 400,
              fontSize: "1.75rem",
              fontFamily: "Montserrat",
            }}
          >
            Here is a brief summary.
          </Typography>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="success-item circle-style wow fadeInUp delay-0-2s">
              <span
                className="count-text plus"
                data-speed="5000"
                data-stop="10"
              >
                <CounterUp
                  endValue="10"
                  sectionSelect="counter-section-three"
                />
              </span>
              <span>Networks</span>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="success-item circle-style wow fadeInUp delay-0-6s color-three">
              <span
                className="count-text plus"
                data-speed="5000"
                data-stop="500"
              >
                <CounterUp
                  endValue="500"
                  sectionSelect="counter-section-three"
                />
              </span>
              <span>Users</span>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="success-item circle-style wow fadeInUp delay-0-8s color-four">
              <span
                className="count-text plus"
                data-speed="5000"
                data-stop="10"
              >
                <CounterUp
                  endValue="10"
                  sectionSelect="counter-section-three"
                />
              </span>
              <span>Happy Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
