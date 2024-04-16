import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function VerticalBarDemo() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "white",
      }}
    >
      <Card elevation={2} style={{ width: "30rem" }}>
        <CardContent>
          <div style={{ textAlign: "center" }}>
            <Typography variant="h5" color="primary">
              Working Zone
            </Typography>
            <Typography variant="h3" color="primary">
              20
            </Typography>
          </div>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <Typography variant="h5" color="primary">
              Working Ward
            </Typography>
            <Typography variant="h3" color="primary">
              300
            </Typography>
          </div>
          <div style={{ textAlign: "center" }}>
            <Typography variant="h5" color="primary">
              Not Working Ward
            </Typography>
            <Typography variant="h3" color="primary">
              300
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
