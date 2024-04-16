import React from "react";
import Card2 from "./Card2";
import vector1 from "../assets/ICONS/Vector-1.png";

export default function CardView2() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between", // Adjusts spacing between cards
        flexWrap: "wrap",
        gap: "3rem",
      }}
    >
      <Card2 lable={"in Hand Balance"} price={"25,00,000"} vector1={vector1} />
      <Card2 lable={"in Hand Balance"} price={"12,00,000"} vector1={vector1} />
      <Card2 lable={"in Hand Balance"} price={"75,00,000"} vector1={vector1} />
      <Card2 lable={"in Hand Balance"} price={"50,00,000"} vector1={vector1} />
      <Card2 lable={"in Hand Balance"} price={"50,00,000"} vector1={vector1} />
      <Card2 lable={"in Hand Balance"} price={"50,00,000"} vector1={vector1} />
      <Card2 lable={"in Hand Balance"} price={"50,00,000"} vector1={vector1} />
    </div>
  );
}
