import React from "react";
import Grid from "@mui/material/Grid";
import DataChartComponent from "./DataChartComponent";
import VerticalBarDemo from "./VerticalBarDemo";
import Assss from "./Assss";

function DataChartWithCard() {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems={"center"}>
      <Grid item xs={12} sm={8}>
        <DataChartComponent />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Assss />
      </Grid>
    </Grid>
  );
}

export default DataChartWithCard;
