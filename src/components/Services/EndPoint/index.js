import { Box, Typography } from "@mui/material";
import React from "react";
import bannerImage from "../../../assets/images/banners/laptop1.jpg";
import BacktoTopCom from "../../helpers/BackToTopCom";
import Layouts from "../../helpers/Layouts";
import TextFirstGridItem from "../../helpers/TextFirstGridItem";

export default function EndPoint() {
  return (
    <Layouts
      pageTitle="Let us manage your"
      highlight="Endpoint Security"
      bannerImage={bannerImage}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        sx={{
          mt: 5,
          mb: 10,
        }}
      >
        <Typography
          variant="h4"
          className="montserrat color-blue"
          textAlign="center"
          sx={{
            mt: 2,
            fontWeight: 500,
            textTransform: "capitalize",
            fontFamily: "Montserrat",
          }}
        >
          Allow us to explain
        </Typography>
      </Box>
      <TextFirstGridItem
        backgroundClass="bg-blue-gradient-reverse"
        headerText="What is an Endpoint?"
        explainationText="An endpoint is any device that can be connected to a network and is capable of sending and receiving data. This includes desktops, laptops, tablets, smartphones, and even printers. An endpoint is also known as a client or a host."
        imageSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80"
        imageAlt="A laptop with code on the screen"
      />
      <BacktoTopCom className=".main-header" />
    </Layouts>
  );
}
