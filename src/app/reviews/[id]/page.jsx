import AuthorInfo from "@/components/AuthorInfo/AuthorInfo";
import {  getReviewById } from "@/lib/data";
import { StarBorderOutlined } from "@mui/icons-material";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Review = async ({ params }) => {
  const review_data = await getReviewById(params.id);
  // console.log("review data from review/id", review_data);
  return (
    <Container maxWidth={"xl"} sx={{ my: 2 }}>
      <Typography
        variant="h3"
        component={"h1"}
        align="center"
        marginBottom={4}
        fontWeight={"bold"}
      >
        {review_data?.movieName}
      </Typography>
      <Grid container>
        <Grid item md={4} minHeight={"100vh"} sx={{ px: 2 }}>
          <Box
            sx={{
              bgcolor: "rgba(64, 64, 64, .5)",
              height: "100%",
              borderRadius: 2,
              p: 2,
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              fontWeight={600}
              align="center"
              sx={{ borderBottom: "2px dashed #777", py: 1 }}
            >
              Author Info
            </Typography>
            <Box sx={{ marginTop: 2 }}>
              <AuthorInfo authorIdNDate={{authorId: review_data.userId, posted: review_data.createdAt}} />
            </Box>
          </Box>
        </Grid>
        <Grid item md={8} sx={{ px: 2 }}>
          <Box>
            <Box
              position="relative"
              sx={{
                width: "100%",
                height: 350,
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <Image
                src={review_data?.posterUrl || ""}
                alt="poster"
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
            <Typography variant="body1" component="p" sx={{ my: 2, whiteSpace: "pre-line" }}>
              {review_data?.review}
            </Typography>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <IconButton area-label="Give a star">
                <StarBorderOutlined />
              </IconButton>
              <Typography variant="body1" component="p" fontWeight={500}>
                {review_data?.rating}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Review;
