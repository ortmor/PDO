import React, { useState, useRef } from "react";
import Video from "../Media/Videos/video.mp4";
import Card from "../Media/Images/Gallery/A.jpg";
import { EffectCreative, Autoplay, FreeMode, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";


function Gallery() {
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
          <img src={Card}></img>
        </SwiperSlide>
        <SwiperSlide>
          <video
            controls={false}
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

export default Gallery;
