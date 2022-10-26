import React from "react";
import { Link } from "react-router-dom";
import "../Styles/home.scss";
import Home from "./Home";

function Main() {
  return (
    <div className="home-container">
      <div className="carousel-container">
        <Link to="/selection">
          <Home />
        </Link>
      </div>
    </div>
  );
}

export default Main;
