"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Box, Typography, Container } from "@mui/material";
import { useRouter } from "next/navigation";
import { submitReview } from "@/lib/action";
const Post = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    const success = await submitReview(data);

    if (success) {
      router.push("/"); // Redirect to the homepage after successful submission
    } else {
      console.error("Failed to submit review");
    }
  };

  return (
    <Container maxWidth="xl">
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
        <Typography variant="h5" gutterBottom>
          Write a Review
        </Typography>

        <TextField
          label="Rating (0-10)"
          variant="outlined"
          type="number"
          fullWidth
          {...register("rating", {
            required: "Rating is required",
            min: 0,
            max: 10,
          })}
          error={!!errors.rating}
          helperText={errors.rating ? errors.rating.message : ""}
          sx={{ mb: 2 }}
        />

        <TextField
          label="Movie"
          variant="outlined"
          fullWidth
          {...register("movieName", { required: "Poster URL is required" })}
          error={!!errors.movieName}
          helperText={errors.movieName ? errors.movieName.message : ""}
          sx={{ mb: 2 }}
        />

        <TextField
          label="Review"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          {...register("review", { required: "Comment is required" })}
          error={!!errors.review}
          helperText={errors.review ? errors.review.message : ""}
          sx={{ mb: 2 }}
        />

        <TextField
          label="Poster URL"
          variant="outlined"
          fullWidth
          {...register("posterUrl", { required: "Poster URL is required" })}
          error={!!errors.posterUrl}
          helperText={errors.posterUrl ? errors.posterUrl.message : ""}
          sx={{ mb: 2 }}
        />

        <Button type="submit" variant="contained" color="primary">
          Submit Review
        </Button>
      </Box>
    </Container>
  );
};

export default Post;
