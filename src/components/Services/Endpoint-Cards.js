import React from "react";

import { Box, Grid, Typography } from "@mui/material";

function EndpointCards() {
  // const cardData = [
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1597303214211-76388cc0c365?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  //     title: "Card 1",
  //     text: "Card 1 text goes here",
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1672907011795-45b1bb13f6cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  //     title: "Card 2",
  //     text: "Card 2 text goes here",
  //   },
  // ];

  return (
    <>
      <section className="about-two rpt-25 pb-20">
        <div className="container">
          {/* <div className="about-wrap"> */}
          {/* <div className="row">
              <div className="col-lg-6 center-justify">
                <div className="about-two-image pt-25 wow fadeInLeft delay-0-2s">
                  <img
                    src={
                      require(`../../assets/images/vectors/working.png`).default
                    }
                    alt="Digital Environment"
                  />
                </div>
              </div>
              <div className="col-lg-6 align-self-end">
                <div className="about-content pt-75 rpt-20 pr-70 rpr-0 wow fadeInRight delay-0-2s">
                  <div className="section-title mt-35 ">
                    <p className="card-type-right">
                      It has become more important than ever to have a resilient
                      security framework as cyber attacks have become more
                      advanced and frequent in recent years.
                    </p>
                  </div>
                  <div className="section-title mt-35 ">
                    <p className="card-type-right ">
                      Traditional security architecture is not enough anymore,
                      to protect your business you not only need to know and
                      secure all your digital assets but must continuously
                      monitor them for a breach and plan for business continuity
                      in case of one.
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Box>
                <img
                  src="https://images.unsplash.com/photo-1597303214211-76388cc0c365?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="unsplash"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <Typography variant="h4">Card 1</Typography>
                <Typography variant="body1">Card 1 text goes here</Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        {/* </div> */}
      </section>
      {/* <section className="about-two pt-25 rpt-50 pb-25">
        <div className="container">
          <div className="about-wrap pt-20">
            <div className="row">
              <div className="col-lg-6 center-justify">
                <div className="about-two-image pt-45 wow fadeInLeft delay-0-2s">
                  <img
                    src={
                      require(`../../assets/images/vectors/building.png`)
                        .default
                    }
                    alt="Digital Environment"
                  />
                </div>
              </div>
              <div className="col-lg-6 align-self-end">
                <div className="about-content pt-75 rpt-20 pr-70 rpr-0 wow fadeInRight delay-0-2s">
                  <div className="section-title mt-35 ">
                    <p className="card-type-right ">
                      Using the CIA Triad Model of Confidentiality, Integrity
                      and Availability. Our security professionals use trusted
                      industry solutions which are both progressive and
                      preventative in dealing with the latest threat landscape.
                    </p>
                  </div>
                  <div className="section-title mt-35 ">
                    <p className="card-type-right ">
                      Helping to remain secure while your business digitally
                      transforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="about-two pt-50 rpt-80 pb-50">
        <div className="container">
          <div className="about-wrap-left pt-20">
            <div className="row">
              <div className="col-lg-6 align-self-end">
                <div className="about-content pt-75 rpt-20 pl-70 rpr-0 wow fadeInRight delay-0-2s">
                  <div className="section-title mt-35 ">
                    <p className="card-type-left">
                      Using the CIA Triad Model of Confidentiality, Integrity
                      and Availability. Our security professionals use trusted
                      industry solutions which are both progressive and
                      preventative in dealing with the latest threat landscape.
                    </p>
                  </div>
                  <div className="section-title mt-35 ">
                    <p className="card-type-left">
                      Helping to remain secure while your business digitally
                      transforms.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-two-image rmb-70 wow fadeInLeft delay-0-2s">
                  <img
                    src={
                      require(`../../assets/images/vectors/building.png`)
                        .default
                    }
                    alt="Digital Environment"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default EndpointCards;
