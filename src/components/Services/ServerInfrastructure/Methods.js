import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import TextFirstGridItem from "../../helpers/TextFirstGridItem";
import TextSecondGridItem from "../../helpers/TextSecondGridItem";

export default function Methods() {
  const textWithASpan = `We use a method called ${(
    <span className="color-dark-blue text-capitalize font-bold">
      "Virtualization."
    </span>
  )}`;
  console.log(textWithASpan);
  return (
    <>
      <Divider
        className="border-radius"
        sx={{
          margin: "2rem auto",
          width: "50%",
          height: "1.5px",
        }}
        color="#3bb3eb"
      />
      <Box>
        <Typography
          className="sub-title color-blue text-capitalize"
          variant="h5"
          textAlign="center"
          sx={{
            fontSize: {
              xs: "1.25rem",
              sm: "1.25rem",
              md: "1.25rem",
              lg: "1.5rem",
            },
            fontWeight: 500,
            fontFamily: "Montserrat",
          }}
        >
          How we do it
        </Typography>

        <TextFirstGridItem
          backgroundClass="bg-blue-gradient-reverse"
          headerText="We use a method called Virtualization."
          explainationText="Server virtualization is the process of creating virtual versions of a physical server, allowing multiple virtual servers to run on a single physical server. This results in higher utilization of physical resources, improved flexibility and scalability, and reduced costs for hardware, maintenance, and energy consumption."
          imageSrc="https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          imageAlt="virtual world"
        />
        {/* <Box
          sx={{
            mt: 6,
          }}
        >
          <Grid
            container
            className="fadeIn lift-on-hover bg-blue-gradient-reverse"
            spacing={3}
            sx={{
              padding: {
                xs: "1rem",
                sm: "1rem",
                md: "1rem",
                lg: "2rem 8rem",
              },
            }}
            order={{ xs: 1, md: 2 }}
          >
            <Grid
              item
              xs={12}
              md={12}
              lg={6}
              className="first"
              style={{ padding: "0px" }}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Typography
                color="white"
                sx={{
                  fontWeight: 300,
                  fontSize: {
                    sm: "1.75rem",
                    md: "1.75rem",
                    lg: "2rem",
                  },
                  textAlign: {
                    xs: "center",
                    sm: "center",
                    md: "left",
                    lg: "left",
                  },
                }}
              >
                We use a method called{" "}
                <span className="color-dark-blue text-capitalize font-bold">
                  Virtualization.
                </span>
              </Typography>
              <Typography
                color="white"
                sx={{
                  fontWeight: 300,
                  mt: 5,
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
                Server virtualization is the process of creating virtual
                versions of a physical server, allowing multiple virtual servers
                to run on a single physical server. This results in higher
                utilization of physical resources, improved flexibility and
                scalability, and reduced costs for hardware, maintenance, and
                energy consumption.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              lg={6}
              className="second"
              sx={{
                paddingBottom: "1rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "0 auto",
              }}
            >
              <Box
                sx={{
                  width: {
                    xs: "90%",
                    sm: "90%",
                  },
                  height: {
                    lg: "100%",
                  },
                  margin: "1rem auto",
                }}
              >
                <img
                  className="border-radius light-shadow"
                  src="https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="virtual world"
                />
              </Box>
            </Grid>
          </Grid>
        </Box> */}
      </Box>
      <Box sx={{ mt: 10 }}>
        <TextSecondGridItem
          backgroundClass="bg-dark-blue-gradient-reverse"
          headerText="We take care of your servers, so you don't have to."
          explainationText="Server management is the process of maintaining and administrating
              servers in an IT infrastructure. It involves monitoring server
              performance, ensuring security, conducting regular backups,
              updating software and hardware, and developing disaster recovery
              plans."
          imageSrc="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
          imageAlt="server room"
        />
      </Box>
      {/* <Box
        sx={{
          mt: 6,
        }}
      >
        <Grid
          container
          className="lift-on-hover bg-blue-gradient"
          spacing={2}
          sx={{
            padding: {
              xs: "1rem",
              sm: "1rem",
              md: "1rem",
              lg: "2rem 8rem",
            },
            // backgroundColor: "#003d59",
            boxShadow: "0.1rem 0.1rem 1rem 0 rgba(0, 0, 0, 0.05)",
          }}
        >
          <Grid
            item
            xs={12}
            md={12}
            lg={6}
            sx={{
              paddingBottom: "1rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 auto",
            }}
          >
            <Box
              sx={{
                width: {
                  xs: "90%",
                  sm: "90%",
                },
                height: {
                  lg: "100%",
                },
                margin: "1rem auto",
              }}
            >
              <img
                className="border-radius light-shadow"
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
                alt="woman in IT"
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            style={{
              padding: 0,
            }}
            sx={{
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Typography
              sx={{
                fontWeight: 550,
                padding: "1rem",
                color: "white",
                fontSize: {
                  sm: "1.25rem",
                  md: "1.25rem",
                  lg: "2rem",
                },
                textAlign: {
                  xs: "center",
                  sm: "center",
                  md: "left",
                  lg: "left",
                },
              }}
            >
              We take care of your servers, so you don't have to.
            </Typography>
            <Typography
              sx={{
                fontWeight: 300,
                padding: "1rem",
                color: "white",
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
              Server management is the process of maintaining and administrating
              servers in an IT infrastructure. It involves monitoring server
              performance, ensuring security, conducting regular backups,
              updating software and hardware, and developing disaster recovery
              plans.
            </Typography>
          </Grid>
        </Grid>
      </Box> */}
    </>
  );
}
