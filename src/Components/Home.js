import React from "react";
import idleVideo from "../Media/Videos/01_idle.mp4";

function Home() {
  return (
    <div className="container-carousel">
      <video
        id="Video"
        controls={false}
        width="100%"
        src={idleVideo}
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
      />
    </div>
  );
}

export default Home;
