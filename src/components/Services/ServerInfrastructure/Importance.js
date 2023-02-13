import { Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import Card from "../../helpers/Card";

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
            <Card
              iconBackgroundColor="color-two"
              flaticon="flaticon-3d"
              headerText="High Availability"
              explainationText="High availability is the ability of a system to continue operating without interruption when one or more of its components fail."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Card
              iconBackgroundColor="color-two"
              flaticon="flaticon-3d"
              headerText="Scalability"
              explainationText="An intelligently designed server infrastructure can be scaled up or down to meet the changing needs of your business."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Card
              iconBackgroundColor="color-two"
              flaticon="flaticon-3d"
              headerText="Security"
              explainationText="Your server infrastructure is the backbone of your business. It needs to be secure and protected from outside threats."
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
