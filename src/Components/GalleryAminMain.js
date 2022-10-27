import React from "react";
import "../Styles/gallery.scss";
import BgVideo from "../Media/Videos/02_bg.mp4";
import Footer from "./FooterG";
import GalleryAmin from "./GalleryAmin";

function GalleryAminMain() {
  return (
    <div className="gallery-container">
      <GalleryAmin />
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

export default GalleryAminMain;
