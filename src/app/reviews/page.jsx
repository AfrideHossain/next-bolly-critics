"use client";
import Reviews from "@/components/Reviews/Reviews";
import { Container, Button, Box } from "@mui/material";
import { useState, useEffect } from "react";

const getAllReviews = async (limit = 10, skip = 0) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/reviews?limit=${limit}&skip=${skip}`,
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

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalReviews, setTotalReviews] = useState(0);
  const reviewsPerPage = 10;

  // Fetch the session using useSession
  // console.log("from reviews page: ", session);
  // console.log("from reviews page: ", status);

  const fetchReviews = async (page = 1) => {
    const skip = (page - 1) * reviewsPerPage;
    const { reviews, total } = await getAllReviews(reviewsPerPage, skip);

    /* setReviews((prevReviews) => [...prevReviews, ...reviews]); // Concatenating reviews */
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
    <Container maxWidth="xl" sx={{ my: 2 }}>
      <Reviews reviews={reviews} session={session} />
      {/* {session ? session?.user?.email : "You are not loggedin"} */}
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
    </Container>
  );
};

export default ReviewsPage;
