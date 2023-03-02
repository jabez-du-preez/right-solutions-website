import { Typography } from "@mui/material";
import React from "react";
import bannerImage from "../../../assets/images/banners/laptop1.jpg";
import BacktoTopCom from "../../helpers/BackToTopCom";
import Layouts from "../../helpers/Layouts";
import TextFirstGridItem from "../../helpers/TextFirstGridItem";
import Intro from "./Intro";

export default function EndPoint() {
  const list = (
    <>
      <Typography
        sx={{
          fontSize: {
            xs: "1rem",
            sm: "1rem",
            md: "1rem",
            lg: "1.25rem",
          },
          fontWeight: 500,
          color: "white",
          fontFamily: "Montserrat",
        }}
      >
        An endpoint, also known as a client or host, is any device that can be
        connected to a network and is capable of sending or receiving data. This
        includes:{" "}
      </Typography>
      <ul className="list-style-one py-10 wow fadeInUp delay-0-6s">
        <li>Laptops</li>
        <li>Desktop Computers</li>
        <li>Tablets</li>
        <li>Smartphones</li>
        <li>Printers</li>
      </ul>
    </>
  );
  return (
    <Layouts
      pageTitle="Let us manage your"
      highlight="Endpoint Security"
      bannerImage={bannerImage}
    >
      <Intro />
      <TextFirstGridItem
        backgroundClass="bg-blue-gradient-reverse"
        headerText="What is an Endpoint?"
        explainationText={list}
        imageSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80"
        imageAlt="A laptop with code on the screen"
      />
      <BacktoTopCom className=".main-header" />
    </Layouts>
  );
}
