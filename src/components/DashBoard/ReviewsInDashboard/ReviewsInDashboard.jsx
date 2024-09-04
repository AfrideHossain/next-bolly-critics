"use client";
import { Box, Button, Grid } from "@mui/material";
import ReviewCard from "../ReviewCard/ReviewCard";
import { useState, useEffect } from "react";

const getAllReviews = async (limit = 10, skip = 0, uid) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/reviews/${uid}?limit=${limit}&skip=${skip}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch reviews");
    }
    const data = await response.json();

    return {
      reviews: data.reviews,
      total: data.total, // Assuming you include the total count in the response
    };
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return { reviews: [], total: 0 };
  }
};

const ReviewsInDashboard = ({ session }) => {
  // console.log("session from inside reviews in dashboard: ", session);
  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalReviews, setTotalReviews] = useState(0);
  const reviewsPerPage = 10;

  const fetchReviews = async (page = 1) => {
    const skip = (page - 1) * reviewsPerPage;
    const { reviews, total } = await getAllReviews(
      reviewsPerPage,
      skip,
      session.user.id
    );

    /* // Concatenating reviews
    setReviews((prevReviews) => [...prevReviews, ...reviews]); */
    setReviews(reviews);
    setTotalReviews(total);
  };

  useEffect(() => {
    fetchReviews(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    if (reviews.length < totalReviews) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  return (
    <Box sx={{ my: 2 }}>
      <Grid container spacing={2}>
        {reviews?.map((review) => (
          <Grid key={review._id} item md={4} lg={4} xl={3} sm={6} xs={12}>
            <ReviewCard reviewInfo={review} />
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="space-between" mt={2}>
        <Button
          variant="contained"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          onClick={handleNextPage}
          disabled={currentPage * reviewsPerPage >= totalReviews}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default ReviewsInDashboard;
