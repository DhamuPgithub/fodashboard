import React from "react";
import SideBar from "../components/SideBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardView from "../components/CardView";
import BasicGrid from "../components/BasicGrid";
import DataChartWithCard from "../components/DataChartWithCard";
import ChartViewList from "../components/ChartViewList";
// import LoginPage from "../components/LoginPage";

function DashBoard() {
  return (
    <>
      <Box className="a" sx={{ display: "flex", backgroundColor: "#F4F6F6" }}>
        <SideBar />
        <Box component={"main"} sx={{ flexGrow: 1 }}>
          <CardView />
          <DataChartWithCard />
          <BasicGrid />
          <ChartViewList />
          {/* <LoginPage /> */}
        </Box>
      </Box>
    </>
  );
}

export default DashBoard;
