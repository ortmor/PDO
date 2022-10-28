import React from "react";

function NimrVideo({ Videosrc, Poster }) {
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

export default NimrVideo;
