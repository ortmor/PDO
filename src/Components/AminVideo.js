import React, { useRef, useState } from "react";
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from "react-icons/bs";
import "../Styles/Video.scss";

function AminVideo({ Videosrc }) {
  const [toggleplay, settoggleplay] = useState();
  const VidRef = useRef(null);

  const Togglebutton = () => {
    if (!toggleplay) {
      settoggleplay(VidRef.current.play());
    } else {
      settoggleplay(VidRef.current.pause());
    }
  };

 

  return (
    <div>
      <div className="gallery-video-main">
        <button onClick={Togglebutton} id="gallery-video-playbtn">
          {toggleplay ? (
            <BsFillPauseCircleFill
              className="galleryplayicon"
              color="rgba(255, 255, 255, 0.312)"
              size="5em"
            />
          ) : (
            <BsFillPlayCircleFill
              className="galleryplayicon"
              color="rgba(255, 255, 255, 0.312)"
              size="5em"
            />
          )}
        </button>
      </div>
      <div>

      
        <video
          ref={VidRef}
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
