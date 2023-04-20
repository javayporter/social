import React from "react";
import "../rightBar/rightbar.scss";
import { Suggestions } from "../Suggestions";

const RightBar = () => {
  const imgSrc =
    "https://cdn.shopify.com/s/files/1/0229/7313/products/MSSX-RED---1_1800x1800.jpg?v=1554335497";
  return (
    <div className="rightbar">
      <Suggestions
        heading="Your Sugesstions"
        actionA="follow"
        actionB="dismiss"
        name="Javay Porter"
        imgSrc={imgSrc}
      />
    </div>
  );
};

export default RightBar;
