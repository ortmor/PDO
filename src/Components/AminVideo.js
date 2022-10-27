import React from "react";
function AminVideo({ Videosrc }) {
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
        />
      </div>
    </div>
  );
}

export default AminVideo;
