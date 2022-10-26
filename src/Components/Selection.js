import React from "react";
import BgVideo from "../Media/Videos/03.mp4";
import Amin from "../Media/Images/Cards/amin.png";
import CPP from "../Media/Images/Cards/CPP.png";
import Nimr from "../Media/Images/Cards/nimr.png";
import Noor from "../Media/Images/Cards/noor.png";
import { Link } from "react-router-dom";

function Selection() {
  return (
    <div className="selection-carousel">
      <div className="selection-carousel-heading">
        <div className="selection-carousel-button-mains">
          <Link to="/amin">
            <div>
              <img src={Amin} />
            </div>
          </Link>

          <Link to="/nimr">
            <div>
            <img src={Nimr} />
            </div>
          </Link>

          <Link to="/cpp">
            <div>
              <img src={CPP} />
            </div>
          </Link>


          <Link to="/noor">
            <div>
              <img src={Noor} />
            </div>
          </Link>
        </div>
      </div>

      <video
        id="Video1"
        controls={false}
        width="100%"
        src={BgVideo}
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        
      />
    </div>
  );
}

export default Selection;
