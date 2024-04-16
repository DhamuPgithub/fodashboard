import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card1 from "./Card1";
import vector8 from "../assets/ICONS/Vector-8.png";

export default function CardView() {
  return (
    <>
      <Box sx={{ flexGrow: 1, marginTop: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Card1
              lable={"in Hand Balance"}
              price={"25,00,000"}
              vector8={vector8}
            />
          </Grid>
          <Grid item xs={3}>
            <Card1
              lable={"Yesterday Collection"}
              price={"25,00,000"}
              vector8={vector8}
            />
          </Grid>
          <Grid item xs={3}>
            <Card1
              lable={"No of House Hold"}
              price={"25,00,000"}
              vector8={vector8}
            />
          </Grid>
          <Grid item xs={3}>
            <Card1
              lable={"Total collection"}
              price={"25,00,000"}
              vector8={vector8}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
