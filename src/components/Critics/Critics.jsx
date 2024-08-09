import { Grid } from "@mui/material";
import SmallCriticsCard from "./SmallCriticsCard";

const Critics = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={4} lg={4} xl={3} sm={6} xs={12}>
          <SmallCriticsCard />
        </Grid>
        <Grid item md={4} lg={4} xl={3} sm={6} xs={12}>
          <SmallCriticsCard />
        </Grid>
        <Grid item md={4} lg={4} xl={3} sm={6} xs={12}>
          <SmallCriticsCard />
        </Grid>
        <Grid item md={4} lg={4} xl={3} sm={6} xs={12}>
          <SmallCriticsCard />
        </Grid>
        <Grid item md={4} lg={4} xl={3} sm={6} xs={12}>
          <SmallCriticsCard />
        </Grid>
      </Grid>
    </>
  );
};

export default Critics;
