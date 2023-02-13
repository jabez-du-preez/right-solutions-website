import { Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";

export default function Importance() {
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
      <Container
        maxWidth="lg"
        sx={{
          mt: 3,
        }}
      >
        <Typography
          className="sub-title color-blue"
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
          Importance of Server Infrastructure
        </Typography>

        <Grid container spacing={4} sx={{ mt: 3 }}>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <div className="feature-item-two display-flex space-around  lift-on-hover border-radius color-two padding-auto wow fadeInUp delay-0-2s">
              <div className="card-icon mb-20">
                <i className="flaticon flaticon-3d"></i>
              </div>
              <h4>
                <a href="/service-details">High Availability</a>
              </h4>
              <p>
                High availability is the ability of a system to continue
                operating without interruption when one or more of its
                components fail.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            {/* <Card className="lift-on-hover">
              <CardContent
                sx={{
                  padding: "2rem 2rem",
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <div className="card-icon center-align">
                  <i className="flaticon flaticon-3d"></i>
                </div>
                <Typography
                  color="black"
                  variant="h5"
                  textAlign="center"
                  sx={{
                    fontSize: {
                      xs: "1.25rem",
                      sm: "1.25rem",
                      md: "1.25rem",
                      lg: "1.5rem",
                    },
                    fontWeight: 600,
                    fontFamily: "Montserrat",
                    mb: 2,
                    mt: 1,
                  }}
                >
                  High Availability
                </Typography>
                <Typography
                  variant="p"
                  textAlign="center"
                  color="#6D6D6D"
                  sx={{
                    fontSize: {
                      xs: "1rem",
                      sm: "1rem",
                      md: "1rem",
                      lg: "1.25rem",
                    },
                    fontWeight: 400,
                    fontFamily: "Montserrat",
                  }}
                >
                  High availability is the ability of a system to continue
                  operating without interruption when one or more of its
                  components fail.
                </Typography>
              </CardContent>
            </Card> */}
            <div className="feature-item-two  lift-on-hover  border-radius  color-two padding-auto wow fadeInUp delay-0-2s">
              <div className="card-icon mb-20">
                <i className="flaticon flaticon-3d"></i>
              </div>
              <h4>
                <a href="/service-details">Scalability</a>
              </h4>
              <p>
                An intelligently designed server infrastructure can be scaled up
                or down to meet the changing needs of your business.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <div className="feature-item-two  lift-on-hover  border-radius  color-two padding-auto wow fadeInUp delay-0-2s">
              <div className="card-icon mb-20">
                <i className="flaticon flaticon-3d"></i>
              </div>
              <h4>
                <a href="/service-details">Security</a>
              </h4>
              <p>
                Your server infrastructure is the backbone of your business. It
                needs to be secure and protected from outside threats.
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
