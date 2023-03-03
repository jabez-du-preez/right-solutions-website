import { Box, Typography } from "@mui/material";
import React from "react";
import ReusableHero from "../helpers/ReusableHero";
import ReusableHeroRight from "../helpers/ReusableHeroRight";

export default function StorySection() {
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
      {/* <div className="container">
        <Typography
          variant="h3"
          sx={{ mt: 3, fontWeight: 400 }}
          className="page-sub-title mt-25 color-blue fw-500 text-center"
        >
          This is Our Story
        </Typography>
        <Typography
          variant="h3"
          sx={{ fontWeight: 300, fontSize: "1.25rem", mt: 3 }}
          className="section-sub-header text-center dark-grey"
        >
          <span className="color-blue">Right Solutions</span> has been providing
          end-to-end high-quality managed infrastructure and security services
          to clients based both on cloud and on-premises solutions. Assisting
          both small and medium enterprises with solutions to enhance their
          digital effectiveness and competitiveness with a key focus on
          security.
        </Typography>
        <Typography
          variant="h3"
          sx={{ fontWeight: 300, fontSize: "1.25rem", mt: 3 }}
          className="section-sub-header text-center dark-grey"
        >
          We pride ourselves in forming long term lasting relationships with
          clients by taking the time to understand their business before taking
          a dedicated and proactive approach to suggest and implement the right
          solution that meets their requirements.
        </Typography>
        <Typography
          variant="h3"
          sx={{ fontWeight: 300, fontSize: "1.25rem", mt: 3 }}
          className="section-sub-header text-center dark-grey"
        >
          <span className="color-blue">Right Solutions</span> is a proudly South
          African company that is responsibility centred. We are committed to
          providing a positive working environment by transformation through
          skills training, opportunity creation and the procurement of goods and
          services.
        </Typography>
      </div> */}
      {/* <div className="container"> */}
      <Box
        sx={{
          padding: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          overflow: "hidden",
        }}
      >
        <Typography
          variant="h3"
          id="our-story"
          sx={{ mt: 5, fontWeight: 500, fontFamily: "Montserrat" }}
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

        {/* <Box
          sx={{
            mt: 6,
          }}
        >
          <Grid
            container
            className=" bg-light-blue lift-on-hover fadeIn duration-1000 delay-500 ease-in-out"
            spacing={3}
            padding={3}
            sx={{
              margin: "0 auto",
              padding: {
                xs: "0.5rem",
                sm: "0.5rem",
                md: "1rem",
                lg: "2rem 8rem",
                xl: "2rem 8rem",
              },
              boxShadow: "0.1rem 0.1rem 1rem 0 rgba(0, 0, 0, 0.05)",
            }}
            order={{ xs: 1, md: 2 }}
          >
            <Grid
              item
              xs={12}
              md={6}
              lg={6}
              style={{
                padding: 0,
              }}
              className="first fadeIn duration-1000 delay-500 ease-in-out"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 300,
                  padding: "1rem",
                  fontSize: {
                    sm: "1.25rem",
                    md: "1.25rem",
                    lg: "1.5rem",
                  },
                  textAlign: {
                    xs: "center",
                    sm: "center",
                    md: "left",
                    lg: "left",
                  },
                }}
              >
                <span className="color-blue">Right Solutions</span> has been
                providing end-to-end high-quality managed infrastructure and
                security services to clients based both on cloud and on-premises
                solutions. Assisting both small and medium enterprises with
                solutions to enhance their digital effectiveness and
                competitiveness with a key focus on security.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={6}
              className="second"
              style={{
                padding: 0,
              }}
              sx={{
                paddingleft: 0,
                paddingTop: 0,
              }}
            >
              <Box
                sx={{
                  width: {
                    xs: "85%",
                    sm: "85%",
                    lg: "100%",
                  },
                  height: {
                    lg: "auto",
                  },
                  margin: {
                    xs: " auto",
                    sm: "auto",
                    md: "auto",
                  },
                }}
              >
                <img
                  className="border-radius light-shadow"
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="client-celebration"
                />
              </Box>
            </Grid>
          </Grid>
        </Box> */}
        {/* <Box
          sx={{
            mt: 5,
          }}
        >
          <Grid
            container
            className="lift-on-hover"
            spacing={2}
            padding={3}
            sx={{
              margin: "0 auto",
              padding: "2rem 8rem",
              backgroundColor: "#003d59",
              boxShadow: "0.1rem 0.1rem 1rem 0 rgba(0, 0, 0, 0.05)",
              width: {
                xs: "90%",
                sm: "90%",
                md: "100%",
                lg: "100%",
                xl: "100%",
              },
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              lg={6}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                padding: "16px 16px",
              }}
            >
              <Box
                sx={{
                  width: {
                    lg: "100%",
                  },
                  height: {
                    lg: "100%",
                  },
                }}
              >
                <img
                  className="border-radius light-shadow"
                  src="https://images.unsplash.com/photo-1604881989793-466aca8dd319?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80"
                  alt="company pride"
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 300,
                  fontSize: "1.5rem",
                  color: "white",
                }}
              >
                We pride ourselves in forming long term lasting relationships
                with clients by taking the time to understand their business
                before taking a dedicated and proactive approach to suggest and
                implement the right solution that meets their requirements.
              </Typography>
            </Grid>
          </Grid>
        </Box> */}
        {/* <Box
          sx={{
            mt: 5,
          }}
        >
          <Grid
            container
            className=" bg-light-blue lift-on-hover"
            spacing={2}
            padding={3}
            sx={{
              margin: "0 auto",
              padding: "2rem 8rem",
              boxShadow: "0.1rem 0.1rem 1rem 0 rgba(0, 0, 0, 0.05)",
              width: {
                xs: "90%",
                sm: "90%",
                md: "100%",
                lg: "100%",
                xl: "100%",
              },
            }}
            order={{ xs: 1, md: 2 }}
          >
            <Grid
              item
              xs={12}
              md={6}
              lg={6}
              className="first "
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Typography sx={{ fontWeight: 300, fontSize: "1.5rem" }}>
                <span className="color-blue font-bold">Right Solutions</span> is
                a proudly South African company that is responsibility centred.
                We are committed to providing a positive working environment by
                transformation through skills training, opportunity creation and
                the procurement of goods and services.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={6}
              className="second"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                boxSizing: "border-box",
              }}
            >
              <Box
                sx={{
                  width: {
                    lg: "100%",
                  },
                  height: {
                    lg: "100%",
                  },
                }}
              >
                <img
                  className="border-radius light-shadow"
                  src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
                  alt="table mountain, cape town"
                />
              </Box>
            </Grid>
          </Grid>
        </Box> */}
      </Box>
      <div className="container mt-45">
        <div className="row ">
          <div className="col-lg-6 col-sm-12">
            <div className="justify-content-center display-flex space-around flex-wrap">
              <div className="text-center lift-on-hover border-radius padding-auto feature-item-two bg-blue-dark wow color-two fadeInUp delay-0-2s">
                <div className="icon mb-15">
                  <i className="fa-solid fa-user-doctor"></i>
                </div>
                <h4 className="color-white" id="our-approach">
                  Our Approach
                </h4>
                <p className="color-white">
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
            <div className="text-center lift-on-hover border-radius padding-auto feature-item-two bg-blue-dark wow color-two fadeInUp delay-0-2s">
              <div className="icon mb-15">
                <i className="fa-solid fa-people-carry-box"></i>
              </div>
              <h4 className="color-white" id="our-expertise">
                Our Expertise
              </h4>
              <p className="color-white">
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
