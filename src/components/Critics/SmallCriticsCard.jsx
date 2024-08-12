import { StarBorderOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import Image from "next/image";

const SmallCriticsCard = () => {
  return (
    <Card
      variant="elevation"
      sx={{
        marginBottom: 5,
        display: "flex",
        flexDirection: { md: "row", sm: "column", xs: "column" },
      }}
    >
      <CardMedia sx={{ width: { md: 200 }, height: { xs: 200 } }}>
        <Box position="relative" sx={{ width: "100%", height: "100%" }}>
          <Image
            src={"/.images/posters.jpeg"}
            alt="poster"
            fill
            objectFit="cover"
          />
        </Box>
      </CardMedia>
      <Box>
        <CardContent>
          <Typography variant="h5" gutterBottom component="h5" fontWeight={600}>
            John Doe
          </Typography>
          {/* <Typography variant="body1" component="p" fontWeight={500}>
            By{" "}
            <Typography
              variant="body1"
              component="span"
              fontWeight={500}
              color={"primary"}
            >
              Afride Hossain22
            </Typography>{" "}
            on Wed Jun 05 2024
          </Typography> */}
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <IconButton area-label="Give a star">
              <StarBorderOutlined />
            </IconButton>
            <Typography variant="body1" component="p" fontWeight={500}>
              0
            </Typography>
          </Box>
          <Button
            variant="contained"
            color={"primary"}
            sx={{ textTransform: "none" }}
          >
            View
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};

export default SmallCriticsCard;
