import React from "react";
import { Container } from "react-bootstrap";
import "./home.scss";
const Location = () => {
  return (
    <Container className="locationsection">

    <div className="location">
     
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14318.705812040562!2d78.1641554!3d26.2072013!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x949ed3eb12f9d1bd!2sPRAEDICO%20GLOBAL%20RESEARCH%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1651209397956!5m2!1sen!2sin"
        width="200"
        height="100"
        className="map"
        >
      </iframe>

      <div className="address">

        <h6>DELIVERY</h6>
        <h5>Omaha,NE 68131 ,EE.UU</h5>
        <time>12:32pm to 1:20pm</time>
      </div>
        </div>

   
    </Container>
  );
};

export default Location;
