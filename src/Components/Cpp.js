import React from "react";
import "../Styles/home.scss";
import BgVideo from "../Media/Videos/02_bg.mp4";
import Footer from "./Footer";

function Cpp() {
  return (
    <div className="home-container">
      <div className="inner-carousel-heading">
        <div className="inner-carousel-head">
          <h1>Central Processing Plant (CPP)</h1>
        </div>
      </div>

      <div className="carousel-container">
        <div className="container-carousel">
          <video
            id="Video"
            controls={false}
            width="100%"
            src={BgVideo}
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline={true}
          />
        </div>
      </div>
      <Footer link="/gallerycpp" />
    </div>
  );
}

export default Cpp;
