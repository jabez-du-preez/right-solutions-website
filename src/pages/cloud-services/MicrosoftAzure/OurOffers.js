import React from "react";
// import ReusableService from "../../helpers/ReusableService";

import { Container, Grid, Typography } from "@mui/material";
import Card from "../../../components/helpers/Card";

export default function OurOffers() {
  return (
    <div className="mt-25 mb-25">
      <Container
        maxWidth="lg"
        sx={{
          mt: 7,
          mb: 7,
        }}
      >
        <Typography
          className="sub-title color-blue text-capitalize"
          variant="h5"
          textAlign="center"
          sx={{
            fontSize: {
              xs: "1.5",
              sm: "1.5rem",
              md: "1.5rem",
              lg: "2rem",
            },
            fontWeight: 500,
            fontFamily: "Montserrat",
          }}
        >
          What we offer you
        </Typography>

        <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <Card
              colorClass="bg-white-custom"
              textColorClass="color-black"
              heightClass="height-400"
              iconBackgroundColor="bg-blue"
              flaticon="fa-solid fa-gears"
              headerText="customized cloud strategy"
              explainationText="We'll work with you to design a customized cloud strategy that aligns with your organization's specific needs and goals."
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <Card
              colorClass="bg-white-custom"
              textColorClass="color-black"
              heightClass="height-400"
              iconBackgroundColor="bg-green"
              flaticon="fa-solid fa-list-check"
              headerText="Implementation and management support"
              explainationText="Our team of IT professionals will help you to implement and manage your cloud strategy, including tasks such as data migration, security, and compliance."
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <Card
              colorClass="bg-white-custom"
              textColorClass="color-black"
              heightClass="height-400"
              iconBackgroundColor="bg-purple"
              flaticon="fa-solid fa-headset"
              headerText="Support and training"
              explainationText="Our team is available to provide support and training as needed to help you effectively leverage the power of the cloud."
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
