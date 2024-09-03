import ReviewsInDashboard from "@/components/DashBoard/ReviewsInDashboard/ReviewsInDashboard";
import { auth } from "@/lib/auth";
import { Container } from "@mui/material";
import React from "react";

const Dashboard = async () => {
  const session = await auth();
  // console.log("Session from DashBoard: ", session);
  return (
    <Container maxWidth="xl">
      <ReviewsInDashboard session={session} />
    </Container>
  );
};

export default Dashboard;
