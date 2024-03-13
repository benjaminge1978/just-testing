import "swiper/swiper-bundle.min.css"
import "./instagram-feed.scss" // Adjust the path as necessary

import { Swiper, SwiperSlide } from "swiper/react"
// SwiperCore and modules
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from "swiper"

import React from "react"

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const SwiperComponent = () => {
  const images = [
    {
      src: "instagram/1.jpg",
      url: "https://www.instagram.com/p/CZwNhx4KmhM/?img_index=1",
    },
    { src: "instagram/2.jpg", url: "https://www.instagram.com/p/CANnvpvn8-9/" },
    {
      src: "instagram/3.jpg",
      url: "https://www.instagram.com/p/B9epzZkBZEr/?img_index=1",
    },
    {
      src: "instagram/4.jpg",
      url: "https://www.instagram.com/p/B6ApAVohSe7/?img_index=1",
    },
    { src: "instagram/5.jpg", url: "https://www.instagram.com/p/CAc2wFoMy9P/" },
    {
      src: "instagram/6.jpg",
      url: "https://www.instagram.com/p/B4kLF01BPYA/?img_index=1",
    },
    { src: "instagram/7.jpg", url: "https://www.instagram.com/p/BxSMYf2B573/" },
  ]

  const navigateToUrl = url => {
    window.location.href = url
  }

  return (
    <>
      <div className="follow-link-container">
        <a
          href="https://www.instagram.com/seventaevents/"
          target="_blank"
          rel="noreferrer"
          className="follow-link"
        >
          Follow Us
        </a>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1} // Default setting for larger screens
        pagination={{ clickable: true }}
        breakpoints={{
          // Screens size 640 pixels and below
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // Screens size 991 pixels and below
          991: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // You can continue adding breakpoints for larger screens if needed
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} onClick={() => navigateToUrl(image.url)}>
            <div
              className="slide-background"
              style={{ backgroundImage: `url(${image.src})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default SwiperComponent
