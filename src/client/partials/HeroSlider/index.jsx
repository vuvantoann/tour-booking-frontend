import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import './HeroSlider.scss'

const HeroSlider = () => {
  return (
    <div className="hero-slider">
      <Swiper
        modules={[Autoplay]}
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="hero-swiper"
      >
        <SwiperSlide>
          <div
            className="slide-bg"
            style={{ backgroundImage: 'url(/assets/Ha-Noi.jpg)' }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slide-bg"
            style={{ backgroundImage: 'url(/assets/da-nang-city.jpeg)' }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slide-bg"
            style={{ backgroundImage: 'url(/assets/ho-chi-minh-city.jpg)' }}
          ></div>
        </SwiperSlide>
      </Swiper>

      {/* Nội dung cố định nằm trên ảnh trượt */}
      <div className="hero-content">
        <h1>DISCOVER</h1>
        <h2>VIET NAM</h2>
        <p>Find great places to stay, eat, shop or visit from local experts.</p>
        <form className="search-box">
          <input type="text" placeholder="Food, Service, Hotel" />
          <input type="text" placeholder="Where" />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  )
}

export default HeroSlider
