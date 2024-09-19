import Heading from "@/components/Heading/Heading";
import { Container, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Heading title={"About Bolly Critics"} />
        <Typography variant="body1" component={"p"} maxWidth="md">
          Welcome to <strong>Bolly Critics</strong>, your ultimate destination
          for Bollywood movie reviews. Our mission is to provide insightful and
          unbiased reviews to help movie enthusiasts make informed decisions.
          Whether you are looking for the latest blockbuster or a hidden gem,
          Bolly Critics is here to guide you through the world of Bollywood
          cinema.
          <br />
          <br />
          We understand that everyone has different tastes and preferences,
          which is why we encourage diverse perspectives. Our platform allows
          users to share their own reviews and ratings, creating a community of
          movie lovers who can engage in thoughtful discussions and debates.
          <br />
          <br />
          Thank you for visiting Bolly Critics. We hope you enjoy exploring our
          site and find it to be a valuable resource for all your Bollywood
          movie needs. If you have any questions or feedback, please do not
          hesitate to contact us.
        </Typography>
      </Container>
    </>
  );
};

export default About;
