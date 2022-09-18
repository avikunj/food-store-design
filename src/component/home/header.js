import React from "react";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
const Header = () => {
  return (
    <div className="header">
      <div>
        <ArrowBackIosIcon className="menu1" />
        <FavoriteBorderIcon className="menu2" />
      </div>
      <div>
        <h1>Maki Salmon</h1>
        <h6>Salmon category</h6>
      </div>
    </div>
  );
};

export default Header;
