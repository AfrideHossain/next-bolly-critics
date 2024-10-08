import { StarBorderOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DeletePostBtn from "./DeletePostBtn";
const ReviewCard = ({ reviewInfo }) => {
  const { posterUrl, movieName, rating, _id, createdAt } = reviewInfo;
  return (
    <Card variant="elevation" sx={{ marginBottom: 5, position: "relative" }}>
      <CardMedia sx={{ height: 150 }}>
        <Box position="relative" sx={{ width: "100%", height: "100%" }}>
          <Image src={posterUrl} alt={movieName + "poster"} fill />
        </Box>
      </CardMedia>
      <CardContent>
        <Typography variant="h5" gutterBottom component="h5" fontWeight={600}>
          {movieName}
        </Typography>
        <Typography variant="body1" component="p" fontWeight={500}>
          <Typography
            variant="body1"
            component={"p"}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <AccessTimeIcon />
            {new Date(createdAt).toLocaleDateString("en-us", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </Typography>
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <IconButton area-label="Give a star">
            <StarBorderOutlined />
          </IconButton>
          <Typography variant="body1" component="p" fontWeight={500}>
            {rating}
          </Typography>
        </Box>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            color={"info"}
            sx={{ textTransform: "none" }}
            href={`/dashboard/post/mod/${_id}`}
          >
            Update
          </Button>
          <Button
            variant="contained"
            color={"primary"}
            sx={{ textTransform: "none" }}
            href={`/reviews/${_id}`}
          >
            Read Now
          </Button>
        </Stack>
      </CardActions>
      {/* <Button
        variant="contained"
        color={"error"}
        sx={{ position: "absolute", top: 5, right: 5 }}
      >
        <DeleteIcon /> 
      </Button>*/}
      <DeletePostBtn id={ _id} />
    </Card>
  );
};

export default ReviewCard;
