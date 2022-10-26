import React from "react";
import "../Styles/gallery.scss";
import BgVideo from "../Media/Videos/02_bg.mp4";
import Gallery from "./Gallery";
import Footer from "./FooterG";
function GalleryMain() {
  return (
    <div className="gallery-container">
      <Gallery />
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
      <Footer />
    </div>
  );
}

export default GalleryMain;
