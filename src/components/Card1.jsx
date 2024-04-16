import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

export default function Card1({ lable, price, vector8 }) {
  return (
    <Card sx={{ marginTop: 2, paddingLeft: 1, paddingRight: 1 }}>
      <CardContent
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ flexGrow: 1 }}>
          <Typography style={{ fontSize: "14px" }} component="div">
            {lable}
          </Typography>
          <Typography style={{ fontSize: "22px" }} component="div">
            {price}
          </Typography>
        </div>
        <CardMedia
          component="img"
          src={vector8}
          alt="Description of the image"
          style={{ width: 35, height: 35 }}
        />
      </CardContent>
    </Card>
  );
}
