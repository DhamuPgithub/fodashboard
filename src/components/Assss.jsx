import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const card = (
  <React.Fragment>
    <CardContent style={{ gap: 20, display: "flex", flexDirection: "column" }}>
      <div style={{ textAlign: "center", margin: "6px" }}>
        <Typography
          style={{ fontSize: "26px", fontWeight: 500, color: "darkgray" }}
          color="primary"
        >
          Working Zone
        </Typography>
        <Typography
          style={{ fontSize: "40px", fontWeight: 700, color: "darkblue" }}
          color="primary"
        >
          20
        </Typography>
      </div>
      <div style={{ textAlign: "center", margin: "6px" }}>
        <Typography
          style={{ fontSize: "18px", fontWeight: 500, color: "darkgray" }}
          color="primary"
        >
          Working Ward
        </Typography>
        <Typography
          style={{ fontSize: "22px", fontWeight: 700, color: "cyan" }}
          color="primary"
        >
          300
        </Typography>
      </div>
      <div style={{ textAlign: "center", margin: "6px" }}>
        <Typography
          style={{ fontSize: "18px", fontWeight: 500, color: "darkgray" }}
          color="primary"
        >
          Not Working Ward
        </Typography>
        <Typography
          style={{ fontSize: "22px", fontWeight: 700, color: "lightgreen" }}
          color="primary"
        >
          300
        </Typography>
      </div>
    </CardContent>
  </React.Fragment>
);

export default function Assss() {
  return (
    <Box sx={{ minWidth: 275, marginTop: 2 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
