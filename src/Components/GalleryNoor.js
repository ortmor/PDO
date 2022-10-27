import React, { useState, useRef } from "react";
import Video from "../Media/Images/Gallery/Amin/aminvideo.mp4";
import Card2 from "../Media/Images/Gallery/Amin/02.jpg";
import Card3 from "../Media/Images/Gallery/Amin/03.jpg";
import Card4 from "../Media/Images/Gallery/Amin/04.jpg";
import Card5 from "../Media/Images/Gallery/Amin/05.jpg";
import Card6 from "../Media/Images/Gallery/Amin/06.jpg";
import Card7 from "../Media/Images/Gallery/Amin/07.jpg";
import Card8 from "../Media/Images/Gallery/Amin/08.jpg";
import Card9 from "../Media/Images/Gallery/Amin/09.jpg";
import Card10 from "../Media/Images/Gallery/Amin/10.jpg";

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
      

      <Swiper
        effect={"creative"}
        autoplay={{
          delay: 4000,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          nextEl: ".Next-slide",
          prevEl: ".Back-slide",
        }}
        initialSlide={1}
        speed={1500}
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
