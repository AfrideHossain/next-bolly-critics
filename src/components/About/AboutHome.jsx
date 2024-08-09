import { Box, Button, Typography } from "@mui/material";

const AboutHome = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
      }}
    >
      <Typography variant="body1" component={"p"} textAlign={"center"}>
        {`Welcome to Bolly Critics, your go-to hub for comprehensive Bollywood
        movie reviews. Founded with the aim of providing honest and insightful
        critiques, we cater to both movie enthusiasts and professional critics.
        Our platform is designed to bridge the gap between viewers and
        reviewers, ensuring that every opinion is heard and valued. At Bolly
        Critics, we believe in the power of informed choices. That's why we
        offer a space where critics can share their detailed analyses, and users
        can explore diverse perspectives on the latest Bollywood releases.
        Whether you're looking for in-depth reviews, ratings, or just a quick
        read before watching a movie, Bolly Critics has got you covered. Join us
        in celebrating the vibrant world of Bollywood cinema. Explore, review,
        and share your thoughts with a community that appreciates the art of
        filmmaking. Bolly Critics – where every movie gets its true review.`}
      </Typography>
      <Button variant="outlined" color="primary" sx={{ textTransform: "none" }}>
        Learn more
      </Button>
    </Box>
  );
};

export default AboutHome;
