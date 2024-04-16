import React from "react";
import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Product() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component={"main"} sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
          <Typography variant="h4"> Welcome to Product</Typography>
        </Box>
      </Box>
    </>
  );
}

export default Product;
