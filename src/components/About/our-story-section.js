import { Box, Typography } from "@mui/material";
import React from "react";
import ReusableHero from "../helpers/ReusableHero";
import ReusableHeroRight from "../helpers/ReusableHeroRight";

export default function StorySection({ id }) {
  const heroOneHeader = (
    <span>
      <span className="color-blue fw-500">Right Solutions</span> has been
      providing end-to-end high-quality managed infrastructure and security
      services to clients based both on cloud and on-premises solutions.
      Assisting both small and medium enterprises with solutions to enhance
      their digital effectiveness and competitiveness with a key focus on
      security.
    </span>
  );
  const heroTwoHeader = (
    <span>
      We pride ourselves in forming long term lasting relationships with clients
      by taking the time to understand their business before taking a dedicated
      and proactive approach to suggest and implement the right solution that
      meets their requirements.
    </span>
  );
  const heroThreeHeader = (
    <span>
      <span className="color-blue fw-500">Right Solutions</span> is a proudly
      South African company that is responsibility centred. We are committed to
      providing a positive working environment by transformation through skills
      training, opportunity creation and the procurement of goods and services.
    </span>
  );
  return (
    <>
      <Box
        id={id}
        className="scroll-margin-150"
        sx={{
          mt: 7,
          mb: 9,
        }}
      >
        <Typography
          variant="h3"
          id="our-story"
          sx={{
            mt: 5,
            fontWeight: 500,
            fontFamily: "Montserrat",
            fontSize: {
              xs: "2.25rem",
            },
          }}
          className="page-sub-title mt-25 color-blue fw-500 text-center"
        >
          This is Our Story
        </Typography>

        <Box
          sx={{
            mt: 6,
          }}
        >
          <ReusableHero
            secondaryText={heroOneHeader}
            backgroundImage="url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)"
          />
          <ReusableHeroRight
            secondaryText={heroTwoHeader}
            backgroundImage="url(https://images.unsplash.com/photo-1604881989793-466aca8dd319?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80)"
          />
          <ReusableHero
            secondaryText={heroThreeHeader}
            backgroundImage="url(https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80)"
          />
        </Box>
      </Box>
      <div className="container mt-45">
        <div className="row ">
          <div className="col-lg-6 col-sm-12">
            <div className="justify-content-center display-flex space-around flex-wrap">
              <div className="text-center lift-on-hover border-radius padding-auto feature-item-two bg-white-custom wow color-two fadeInUp delay-0-2s">
                <div className="icon mb-15">
                  <i className="fa-solid fa-user-doctor"></i>
                </div>
                <h4 className="color-black" id="our-approach">
                  Our Approach
                </h4>
                <p className="color-black">
                  As businesses today evolve to stay ahead of their ever
                  changing environment, so do their digital requirements, we
                  pride ourselves on building long-term partnerships with
                  clients by providing a strategic approach to solve complex
                  business problems and deliver digital innovation and
                  exceptional experiences to both their employees and customers.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 justify-content-center display-flex space-around flex-wrap">
            <div className="text-center lift-on-hover border-radius padding-auto feature-item-two bg-white-custom wow color-two fadeInUp delay-0-2s">
              <div className="icon mb-15">
                <i className="fa-solid fa-person-digging"></i>
              </div>
              <h4 className="color-black">Our Mission</h4>
              <p className="color-black">
                To provide the best customer-centric managed solutions that no
                only transforms clients digital initiatives but improves their
                efficiency and business profitability with an emphasis on
                keeping them secure.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div className="justify-content-center display-flex space-around flex-wrap">
              <div className="text-center lift-on-hover border-radius padding-auto feature-item-two bg-white-custom wow color-two fadeInUp delay-0-2s">
                <div className="icon mb-15">
                  <i className="fa-solid fa-rocket"></i>
                </div>
                <h4 className="color-black">Our Vision</h4>
                <p className="color-black">
                  Is to provide clients high-quality cutting-edge digital
                  solutions that improves business resiliency and overall
                  security posture, which in turn will drive sustainable growth
                  and boost economic empowerment.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6 ustify-content-center display-flex space-around flex-wrap">
            <div className="text-center lift-on-hover border-radius padding-auto feature-item-two bg-white-custom wow color-two fadeInUp delay-0-2s">
              <div className="icon mb-15">
                <i className="fa-solid fa-people-carry-box"></i>
              </div>
              <h4 className="color-black" id="our-expertise">
                Our Expertise
              </h4>
              <p className="color-black">
                We always tell our customers how important it is to check the
                qualifications of ther cyber partners. With that in mind why
                should you trust us?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
