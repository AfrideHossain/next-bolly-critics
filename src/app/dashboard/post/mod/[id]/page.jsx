"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Box, Typography, Container } from "@mui/material";
import { useRouter } from "next/navigation";
import { updateReview } from "@/lib/action";
const ModifyReview = ({ params }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [reviewData, setReviewData] = useState({});

  const onSubmit = async (data) => {
    const success = await updateReview(data, params.id);

    if (success) {
      router.push("/dashboard/"); // Redirect to the homepage after successful submission
    } else {
      console.error("Failed to submit review");
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/reviews/s/${params.id}`);
      const data = await response.json();
      setReviewData(data?.review);
    };
    fetchData();
  }, [params.id]);
  // console.log("Review data ==> ", reviewData);

  return (
    <Container maxWidth="xl">
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
        <Typography variant="h5" gutterBottom>
          Modify {reviewData?.movieName}
        </Typography>

        <TextField
          label="Rating (0-10)"
          variant="outlined"
          type="number"
          fullWidth
          defaultValue={reviewData?.rating}
          {...register("rating", {
            min: 0,
            max: 10,
          })}
          error={!!errors.rating}
          helperText={errors.rating ? errors.rating.message : ""}
          sx={{ mb: 2 }}
        />

        {/* <TextField
          label="Movie"
          variant="outlined"
          fullWidth
          {...register("movieName")}
          error={!!errors.movieName}
          helperText={errors.movieName ? errors.movieName.message : ""}
          sx={{ mb: 2 }}
        /> */}

        <TextField
          label="Review"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          defaultValue={reviewData?.review}
          {...register("review")}
          error={!!errors.review}
          helperText={errors.review ? errors.review.message : ""}
          sx={{ mb: 2 }}
        />

        <TextField
          label="Poster URL"
          variant="outlined"
          fullWidth
          defaultValue={reviewData?.posterUrl}
          {...register("posterUrl")}
          error={!!errors.posterUrl}
          helperText={errors.posterUrl ? errors.posterUrl.message : ""}
          sx={{ mb: 2 }}
        />

        <Button type="submit" variant="contained" color="primary">
          Submit Modifications
        </Button>
      </Box>
    </Container>
  );
};

export default ModifyReview;
