import { Grid } from "@mui/material";
import SmallReviewCard from "./SmallReviewCard";
import { auth } from "@/lib/auth";

const Reviews = async ({ reviews }) => {
  const session = await auth();
  console.log("Session data in Reviews component:", session);

  return (
    <Grid container spacing={2}>
      {reviews?.map((review) => (
        <Grid key={review._id} item md={4} lg={4} xl={3} sm={6} xs={12}>
          <SmallReviewCard reviewInfo={review} session={session} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Reviews;
