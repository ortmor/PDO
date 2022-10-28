import React from "react";
function AminVideo({ Videosrc,Poster }) {
  return (
    <div>
      <div>
        <video
          width="100%"
          src={Videosrc}
          muted
          loop
          playsInline
          controls={true}
          poster={Poster}
        />
      </div>
    </div>
  );
}

export default AminVideo;
