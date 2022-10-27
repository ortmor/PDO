import React, { useState, useRef } from "react";
import Video from "../Media/Videos/video.mp4";
import Card from "../Media/Images/Gallery/A.jpg";
import Card1 from "../Media/Images/Gallery/B.jpg";
import Card2 from "../Media/Images/Gallery/C.jpg";
import Card3 from "../Media/Images/Gallery/D.jpg";
import Card4 from "../Media/Images/Gallery/E.jpg";
import Card5 from "../Media/Images/Gallery/F.jpg";
import Card6 from "../Media/Images/Gallery/G.jpg";
import Card7 from "../Media/Images/Gallery/H.jpg";
import Card8 from "../Media/Images/Gallery/I.jpg";
import Card9 from "../Media/Images/Gallery/J.jpg";
import Card10 from "../Media/Images/Gallery/K.jpg";
import Card11 from "../Media/Images/Gallery/L.jpg";
import Card12 from "../Media/Images/Gallery/M.jpg";

import { EffectCreative, Autoplay, FreeMode, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

function GalleryNoor() {
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
    <div className="swiper-main">
      <div className="selection-carousel-gallery-head">
        <h1>Gallery</h1>
      </div>

      <Swiper
        effect={"creative"}
        autoplay={{
          delay: 1000,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          nextEl: ".Next-slide",
          prevEl: ".Back-slide",
        }}
        initialSlide={1}
        speed={1000}
        centeredSlides={true}
        creativeEffect={{
          prev: {
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative, Autoplay, FreeMode, Navigation]}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Card}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Card1}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Card2}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Card3}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Card4}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Card5}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Card6}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Card7}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Card8}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Card9}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Card10}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Card11}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Card12}></img>
        </SwiperSlide>

        <SwiperSlide>
          <video
            controls={true}
            width="100%"
            src={Video}
            onClick={Togglebutton}
            ref={VidRef}
            loop={true}
            muted={true}
            playsInline={true}
          />
        </SwiperSlide>
      </Swiper>
      <div className="custom-arrow-component">
        <button className="Next-slide">
          <BsArrowLeftShort color="#ffffff" size="2.5em" />
        </button>
        <button className="Back-slide">
          <BsArrowRightShort color="#ffffff" size="2.5em" />
        </button>
      </div>
    </div>
  );
}

export default GalleryNoor;
