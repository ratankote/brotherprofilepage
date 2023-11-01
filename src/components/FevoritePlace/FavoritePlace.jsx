
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import './FevoritePlace.css'
  import ayodhy from '../../img/aaiC.jpg'
import kedarnath from "../../img/kk.jpeg";
import kashi from "../../img/krishnaA1.jpeg";
import tirupati from "../../img/krishnaA2.jpeg";
import pandrpur from "../../img/krishnaA3.jpeg";

// import required modules
import { EffectCards } from "swiper";

export default function FevoritePlace() {
  return (
    <>
     <div className="t-heading">
        <span> My</span>
        <span>Gallary </span>
        
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div></div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><img style={{width:'100%' , height:'100%'}}src={kedarnath} alt='loding'/></SwiperSlide>
        <SwiperSlide><img style={{width:'100%' , height:'100%'}}src={ayodhy} alt='loding'/></SwiperSlide>
        <SwiperSlide><img style={{width:'100%' , height:'100%'}}src={kashi} alt='loding'/></SwiperSlide>
        <SwiperSlide><img style={{width:'100%' , height:'100%'}}src={tirupati} alt='loding'/></SwiperSlide>
        <SwiperSlide><img style={{width:'100%' , height:'100%'}}src={pandrpur} alt='loding'/></SwiperSlide>
      </Swiper>
    </>
  );
}
