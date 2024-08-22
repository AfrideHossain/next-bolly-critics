import Reviews from "@/components/Reviews/Reviews";
import { getAllReviewsData } from "@/lib/data";
import { Container, Typography } from "@mui/material";

const getAllReviews = async () => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/reviews?limit=10&skip=0`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch reviews");
    }
    const data = await response.json();

    return data.reviews;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return [];
  }
};

const ReviewsPage = async () => {
  const reviews = await getAllReviews();
  // const reviews = await getAllReviewsData(10, 0);
  // console.log(reviews);

  return (
    <Container maxWidth="xl" sx={{ my: 2 }}>
      <Reviews reviews={reviews} />
    </Container>
  );
};

export default ReviewsPage;
