"use client";
import { Box, Button, Grid } from "@mui/material";
import ReviewCard from "../ReviewCard/ReviewCard";
import { useState, useEffect } from "react";
import { getAllReviewsByUid } from "@/lib/data";

// const getAllReviews = async (limit = 10, skip = 0, uid) => {
//   try {
//     const reviews = await getAllReviewsByUid(limit, skip, uid);
//     console.log("===>", reviews);
//   } catch (error) {
//     console.error("Error fetching reviews:", error);
//     return { reviews: [], total: 0 };
//   }
// };

const ReviewsInDashboard = ({ session }) => {
  // console.log("session from inside reviews in dashboard: ", session);
  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalReviews, setTotalReviews] = useState(0);
  const reviewsPerPage = 10;

  const fetchReviews = async (page = 1) => {
    const skip = (page - 1) * reviewsPerPage;
    const { reviews, total } = await getAllReviewsByUid(reviewsPerPage, skip);

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
