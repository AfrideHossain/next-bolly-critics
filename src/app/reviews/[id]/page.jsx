import { StarBorderOutlined } from "@mui/icons-material";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Review = () => {
  return (
    <Container maxWidth={"xl"} sx={{ my: 2 }}>
      <Typography
        variant="h3"
        component={"h1"}
        align="center"
        marginBottom={4}
        fontWeight={"bold"}
      >
        Bollywood Posters
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
                src={"/.images/posters.jpeg"}
                alt="poster"
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
            <Typography variant="body1" component="p" sx={{ my: 2 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              facere perferendis perspiciatis reprehenderit quisquam suscipit
              sapiente sint cupiditate similique, omnis officiis fuga nam quas
              earum exercitationem vel, libero consectetur voluptate nemo velit?
              Officia error incidunt possimus commodi hic modi ratione inventore
              aliquam minima, praesentium voluptate velit sequi accusamus libero
              accusantium harum. Aspernatur rem excepturi dicta quibusdam, illum
              mollitia aliquid odio commodi distinctio, delectus pariatur neque
              repudiandae inventore iusto veniam ex ipsa molestias id voluptatem
              nihil nobis voluptatum. Ad, autem! Neque iure praesentium repellat
              asperiores, officiis ipsam in laboriosam culpa esse est vel
              nesciunt! Iure veritatis soluta nam hic sed deserunt.
            </Typography>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <IconButton area-label="Give a star">
                <StarBorderOutlined />
              </IconButton>
              <Typography variant="body1" component="p" fontWeight={500}>
                0
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Review;
