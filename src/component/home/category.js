import { BottomNavigationAction } from "@mui/material";
import * as React from "react";
import  Fish from "../../img/fish.png"
import  Red from "../../img/red.png"
import  White from "../../img/whiterice.png"
const Category = () => {
  return (
    <div className="categorysection">

    <div className="category">


 <span><img src={Fish} height={60}  className="icon" /></span>
 <span><img src={Red} height={60} className="icon"/></span>
 
 <span><img src={White} height={60} className="icon"/></span>
    </div>
    </div>
  );
};

export default Category;
