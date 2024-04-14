import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import imageLinks from "./Images";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "./App.css";
import ButtonCarousel from "./ButtonCarousel";

const JioCarousel = () => {
  return (
    <div>
        <ButtonCarousel/>
      <div className=" h-[70vh] flex items-center">
        <Swiper
          className=" h-[60vh] py-2"
          slidesPerView={3}
          spaceBetween={10}
          centeredSlides
          loop
          speed={1000}
          modules={[Autoplay, Navigation]}
          autoplay
          navigation
        >
          {imageLinks.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className="h-[70vh] rounded-2xl transition-all duration-1000"
              >
                <img src={item} alt="images" className="h-[70vh] rounded-2xl" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default JioCarousel;
