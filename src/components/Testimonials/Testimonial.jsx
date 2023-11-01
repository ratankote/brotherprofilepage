import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import {certificate } from '../family/data'

// Import Swiper styles
import '../Testimonials/Testimonial.css'
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper";

export default function Education(){
  return(
    <>
    <div className="Education" id="Education" >
     <div class="table-responsive">  
    <table class="table fnt">
  <thead>
    <tr>
      <th scope="col">QUALIFICATION</th>
      <th scope="col">INSTITUTION</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>sslc</td>
      <td>karnataka public schoole</td>
    </tr>
    <tr>
      <td>(Puc) science</td>
      <td>BK Deshmukh Mahavidyalaya, Chakur</td>
    </tr>
    <tr>
      <td>(Drgree) B Pharmacy</td>
      <td>R R K S College of Pharmacy, Bidar</td>
    </tr>
  </tbody>
</table>
</div>
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      certificate's And Medical license
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        {certificate.map(itm =>{
          return(
        <SwiperSlide style={{    height:' fit-content'}}>
          <img src={itm}/>
        </SwiperSlide>
          )
        })}
     </Swiper>
      </div>
    </div>
  </div>
</div>
</div>
    </>
  )
}
