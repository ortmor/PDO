import React from "react";
import "../Styles/home.scss";
import BgVideo from "../Media/Videos/Nimr.mp4";
import Footer from "./Footer";

function Nimr() {
  return (
    <div className="home-container">
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
      <Footer link="/gallerynimr" />
    </div>
  );
}

export default Nimr;
