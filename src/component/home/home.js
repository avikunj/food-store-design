import React from "react";
import Buttons from "./buttons";
import Header from "./header";
import Maki from "../../img/maki.png";
import "./home.scss";
import Category from "./category";
import Bottom from "./bottom";
import Rate from "./rate";
import Location from "./location";

const Home = () => {
  return (
    <div className="foodDesignHomePage">
      <Header />
      <Buttons />
      <div className="image">
        <img src={Maki} />
    </div>
    <Category/>
    <Rate/>
    <Location />
    <Bottom/>
      </div>
  );
};

export default Home;
