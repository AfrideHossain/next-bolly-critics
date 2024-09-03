import { Grid } from "@mui/material";
import SmallReviewCard from "./SmallReviewCard";

const Reviews = ({ reviews }) => {
  return (
    <Grid container spacing={2}>
      {reviews?.map((review) => (
        <Grid key={review._id} item md={4} lg={4} xl={3} sm={6} xs={12}>
          <SmallReviewCard reviewInfo={review} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Reviews;
