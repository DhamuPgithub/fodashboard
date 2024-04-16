import React from "react";
import Grid from "@mui/material/Grid";
import ChartView from "./ChartView";

export default function ChartViewList() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <ChartView lable={"Total Distance Travelled"} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <ChartView lable={"Total Duration"} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <ChartView lable={"Shortest Distance Vehicale Duration"} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <ChartView lable={"Longest Duration"} />
      </Grid>
    </Grid>
  );
}
