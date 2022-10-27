import React from "react";
import "../Styles/gallery.scss";
import BgVideo from "../Media/Videos/02_bg.mp4";
import Footer from "./FooterG";
import GalleryNoor from "./GalleryNoor";

function GalleryNoorMain() {
  return (
    <div className="gallery-container">
      <GalleryNoor />
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

export default GalleryNoorMain;
