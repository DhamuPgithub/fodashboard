import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card2 from "./Card2";
import vector1 from "../assets/ICONS/Vector-1.png";

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Card2 label={"Total Driver"} price={"200"} vector1={vector1} />
        </Grid>
        <Grid item xs={3}>
          <Card2 label={"Total Supervisor"} price={"200"} vector1={vector1} />
        </Grid>
        <Grid item xs={3}>
          <Card2 label={"Total Helper"} price={"200"} vector1={vector1} />
        </Grid>
        <Grid item xs={3}>
          <Card2 label={"Total Zone Head"} price={"200"} vector1={vector1} />
        </Grid>
        <Grid item xs={3}>
          <Card2 label={"Total Manpower"} price={"200"} vector1={vector1} />
        </Grid>
        <Grid item xs={3}>
          <Card2 label={"Total Vehicle"} price={"200"} vector1={vector1} />
        </Grid>
        <Grid item xs={3}>
          <Card2 label={"Total Qr/Rf Id"} price={"200"} vector1={vector1} />
        </Grid>
      </Grid>
    </Box>
  );
}
