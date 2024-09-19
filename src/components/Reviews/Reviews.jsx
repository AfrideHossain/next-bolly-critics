"use client";
import { Grid } from "@mui/material";
import SmallReviewCard from "./SmallReviewCard";
import { useEffect, useState } from "react";
const getReviews = async () => {
  const fetchReviews = await fetch(
    `http://localhost:3000/api/reviews?limit=4&skip=0`,
    {
      cache: "no-store",
    }
  );
  return await fetchReviews.json();
};

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getReviews().then((data) => {
      if (data.success) setReviews(data.reviews);
    });
  }, []);
  console.log(reviews);
  return (
    <Grid container spacing={2} justifyContent={"center"}>
      {reviews?.map((review) => (
        <Grid key={review._id} item md={4} lg={4} xl={3} sm={6} xs={12}>
          <SmallReviewCard reviewInfo={review} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Reviews;
