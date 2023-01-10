import img2 from "../../assets/slideHomeImagens/Imagem2.jpg";
import img3 from "../../assets/slideHomeImagens/Imagem3.jpg";
import img4 from "../../assets/slideHomeImagens/Imagem4.jpg";
import img5 from "../../assets/slideHomeImagens/Imagem5.jpg";
import img6 from "../../assets/slideHomeImagens/Imagem6.jpg";
import img7 from "../../assets/slideHomeImagens/Imagem7.jpg";
import img8 from "../../assets/slideHomeImagens/Imagem8.jpg";
import img9 from "../../assets/slideHomeImagens/Imagem9.jpg";
import img10 from "../../assets/slideHomeImagens/Imagem10.jpg";
import img11 from "../../assets/slideHomeImagens/Imagem11.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { StyledContainerSlide } from "./style";

export const SlideImagesHome = () => {
  return (
    <StyledContainerSlide>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img10} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img11} alt="" />
        </SwiperSlide>
      </Swiper>
    </StyledContainerSlide>
  );
};
