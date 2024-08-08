import Heading from "@/components/Heading/Heading";
import Navbar from "@/components/Navbar/Navbar";
import Reviews from "@/components/Reviews/Reviews";
import {
  Avatar,
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <Box position={"relative"}>
          <Avatar variant="square" sx={{ width: "inherit", height: "100vh" }}>
            <Image
              alt="profile picture"
              src={"/.images/posters.jpeg"}
              fill
              style={{ objectFit: "cover" }}
            />
          </Avatar>
          <Box
            position={"absolute"}
            sx={{
              width: "100%",
              height: "100%",
              top: "0",
              left: "0",
              bgcolor: "rgba(0, 0, 0, .7)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack
              gap={2}
              sx={{ width: "80%" }}
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography variant="h4" align="center" fontWeight={900}>
                Your Guid to,
              </Typography>
              <Typography
                variant="h2"
                color="primary"
                align="center"
                fontWeight={900}
              >
                Honest Bollywood Reviews
              </Typography>
              <Typography variant="body1" align="center">
                Welcome to Bolly Critics, the ultimate destination for authentic
                Bollywood movie reviews. Here, avid filmgoers can explore
                detailed critiques and ratings to make informed viewing choices.
                Our platform empowers professional critics to share their expert
                opinions, fostering a community of discerning cinema
                enthusiasts. Discover the latest hits and misses straight from
                the voices you trust. Join Bolly Critics today, where every
                review counts and every opinion matters.
              </Typography>
              <Button
                sx={{ borderRadius: 8, px: 4, py: 2, fontWeight: 700 }}
                variant="contained"
                color="primary"
                size="large"
              >
                Get Started Now!
              </Button>
            </Stack>
          </Box>
        </Box>
        <Heading title={"Featured Reviews"} />
        <Reviews />
      </Container>
    </>
  );
};

export default Homepage;
