import React from "react";
import "./home.scss";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
const Rate = () => {
  return (
    <div className="ratesection">
      <div className="rate">
        <h1>
          $24<sup>.99</sup>
        </h1>
      </div>
      <div className="rating">
        <p>VALUATION</p>
        <span className="per">4.5</span>
        <span><StarIcon/></span>
        <span><StarIcon/></span>
        <span><StarIcon/></span>
        <span><StarIcon/></span>
        <span>
          <StarBorderIcon />
        </span>
        <span className="per">(45)</span>
      </div>
    </div>
  );
};

export default Rate;
