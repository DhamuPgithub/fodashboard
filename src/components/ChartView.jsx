import React from "react";
import BasicDemo from "./BasicDemo";
import ChartContainer from "./ChartContainer";

export default function ChartView({ lable }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        // minWidth: "22rem",
        minHeight: "26rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        // marginTop: 20,
        // marginRight: 20,
        padding: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 20,
          // backgroundColor: "red",
          paddingLeft: "25px",
          paddingRight: "25px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontSize: 20,
            fontWeight: 500,
            color: "gray",
            fontFamily: "inherit",
            display: "flex",
            alignItems: "center",
          }}
        >
          {lable}
        </div>
        <div>
          <BasicDemo />
        </div>
      </div>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          // backgroundColor: "yellow",
        }}
      >
        <ChartContainer />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          // backgroundColor: "green",
        }}
      >
        <div>
          <p style={{ color: "darkGrey", fontWeight: 500, fontSize: 20 }}>
            Yesterday
          </p>
          <p style={{ color: "cyan", fontWeight: 500, fontSize: 20 }}>
            20 Hours
          </p>
        </div>
        <div>
          <p style={{ color: "darkGrey", fontWeight: 500, fontSize: 20 }}>
            {" "}
            Today
          </p>
          <p style={{ color: "darkblue", fontWeight: 500, fontSize: 20 }}>
            540-Km
          </p>
        </div>
      </div>
    </div>
  );
}
