import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { projects } from "../../data/data.js";
import Project from '../Project';

import "swiper/css";
import './carousel.css'
import './../Default.css';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";


function Carousel() {
  return (
    <div className="container my-16 px-10">
      <h1 className="heading">Projets</h1>
      <Swiper
      grabCursor={true}
      slidesPerView={1}
      spaceBetween={40}
      className="mySwiper"
      pagination={{
        el: '.swiper-pagination-custom',
        clickable: true,
      }}
      modules={[Pagination]}
      breakpoints={{
        800:{
          slidesPerView:2
        },
        1200:{
          slidesPerView:3
        }
      }}
    >
      {projects.map((item, index) => (
      <SwiperSlide><Project name={item.name} index={index} image={item.image} id={item.id} key={item.id}/></SwiperSlide>
      ))}

    </Swiper>
    <div className="swiper-pagination-custom"></div>
    </div>
  );
}

export default Carousel;