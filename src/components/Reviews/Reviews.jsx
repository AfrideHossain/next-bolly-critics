import { Grid } from "@mui/material";
import SmallReviewCard from "./SmallReviewCard";

const Reviews = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={4} lg={4} xl={3} sm={6} xs={12}>
          <SmallReviewCard />
        </Grid>
        <Grid item md={4} lg={4} xl={3} sm={6} xs={12}>
          <SmallReviewCard />
        </Grid>
        <Grid item md={4} lg={4} xl={3} sm={6} xs={12}>
          <SmallReviewCard />
        </Grid>
        <Grid item md={4} lg={4} xl={3} sm={6} xs={12}>
          <SmallReviewCard />
        </Grid>
        <Grid item md={4} lg={4} xl={3} sm={6} xs={12}>
          <SmallReviewCard />
        </Grid>
      </Grid>
    </>
  );
};

export default Reviews;
