import { Box, Typography } from "@mui/material";
import React from "react";
import ReusableHero from "../../helpers/ReusableHero";
import ReusableHeroRight from "../../helpers/ReusableHeroRight";

export default function Methods() {
  return (
    <>
      <div className="display-flex justify-content-center mt-50 mb-50">
        <div className="feature-line occilate-reverse">
          <span className="animate-bar"></span>
        </div>
      </div>
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
            mb: 6,
            fontWeight: 500,
            fontFamily: "Montserrat",
          }}
        >
          How we do it
        </Typography>
        {/* 
        <TextFirstGridItem
          backgroundClass="bg-dark-blue-gradient"
          headerText="We use a method called Virtualization."
          explainationText="Server virtualization is the process of creating virtual versions of a physical server, allowing multiple virtual servers to run on a single physical server. This results in higher utilization of physical resources, improved flexibility and scalability, and reduced costs for hardware, maintenance, and energy consumption."
          imageSrc="https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          imageAlt="virtual world"
        /> */}
        <ReusableHero
          headerText="We use a method called Virtualization."
          secondaryText="Server virtualization is the process of creating virtual versions of a physical server, allowing multiple virtual servers to run on a single physical server. This results in higher utilization of physical resources, improved flexibility and scalability, and reduced costs for hardware, maintenance, and energy consumption."
          backgroundImage="url(https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80)"
        />
        <ReusableHeroRight
          headerText="We take care of your servers, so you don't have to."
          secondaryText="Server management is the process of maintaining and administrating
              servers in an IT infrastructure. It involves monitoring server
              performance, ensuring security, conducting regular backups,
              updating software and hardware, and developing disaster recovery
              plans."
          backgroundImage="url(https://images.unsplash.com/photo-1581092919535-7146ff1a590b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHNlcnZlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60)"
        />
      </Box>
      {/* <TextSecondGridItem
          backgroundClass="bg-dark-blue-gradient-reverse"
          headerText="We take care of your servers, so you don't have to."
          explainationText="Server management is the process of maintaining and administrating
              servers in an IT infrastructure. It involves monitoring server
              performance, ensuring security, conducting regular backups,
              updating software and hardware, and developing disaster recovery
              plans."
          imageSrc="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
          imageAlt="server room"
        /> */}
    </>
  );
}
