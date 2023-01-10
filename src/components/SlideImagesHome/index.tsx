import img1 from "../../assets/slideHomeImagens/Imagem1.jpg";
import img2 from "../../assets/slideHomeImagens/Imagem2.jpg";
import img3 from "../../assets/slideHomeImagens/Imagem3.jpg";
import img4 from "../../assets/slideHomeImagens/Imagem4.jpg";
import img5 from "../../assets/slideHomeImagens/Imagem5.jpg";
import img6 from "../../assets/slideHomeImagens/Imagem6.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { StyledContainerFull, StyledContainerSlide } from "./style";

export const SlideImagesHome = () => {
  return (
    <StyledContainerFull>
      <StyledContainerSlide>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
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
            <img src={img1} alt="" />
          </SwiperSlide>
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
        </Swiper>
      </StyledContainerSlide>
    </StyledContainerFull>
  );
};
