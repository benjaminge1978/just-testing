import "swiper/swiper-bundle.min.css"
import "./instagram-feed.scss" // Adjust the path as necessary

import { Swiper, SwiperSlide } from "swiper/react"
// SwiperCore and modules
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from "swiper"

import React from "react"

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const truncateCaption = (caption, maxWords) => {
  const words = caption.split(" ")
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(" ") + "..."
  }
  return caption
}

const SwiperComponent = () => {
  const images = [
    {
      src: "instagram/1.jpg",
      url: "https://www.instagram.com/p/CZwNhx4KmhM/?img_index=1",
      caption:
        "It feels so good to be back!❤️ With the return to office life back in full swing it’s been great to have the team back together and working on our plans for 2022 and beyond! Bringing your team back together? Let us help with team building days, conferences and of course staff parties planned by our award winning team.Take a look through our portfolio of events, meetings and so much more on www.seventa.co.uk",
    },
    {
      src: "instagram/5.jpg",
      url: "https://www.instagram.com/p/CAc2wFoMy9P/",
      caption:
        "When we decided to throw paint at ourselves all in the name of a new website photo 📸🤳",
    },
    {
      src: "instagram/3.jpg",
      url: "https://www.instagram.com/p/B9epzZkBZEr/?img_index=1",
      caption:
        "We most definitely couldn’t do it without them. Here’s a shout out to all of the unreal women we have the opportunity to work alongside every day. Dedicated, ambitious, loyal and absolutely bossing the events industry. What a team 👊 #IWD2020 #eachforequal",
    },
    {
      src: "instagram/4.jpg",
      url: "https://www.instagram.com/p/B6ApAVohSe7/?img_index=1",
      caption:
        "FAMILY PHOTO 📸🎄 Christmas Jumper Day for @savethechildren is well underway at Seventa HQ. Nice job team 🙌",
    },
    {
      src: "instagram/6.jpg",
      url: "https://www.instagram.com/p/B4kLF01BPYA/?img_index=1",
      caption:
        "A HUGE thank you to the @marriott_bournemouth team for calling in with this extra special office treat as a part of their Global Customer Appreciation Week 2019! Fresh coffee and crêpes were just what we needed 😍",
    },
    {
      src: "instagram/2.jpg",
      url: "https://www.instagram.com/p/CANnvpvn8-9/",
      caption:
        "We often take part in local beach cleans and donate our time to good causes. We are incredibly lucky to work all across the UK but our main base is Bournemouth, and with 7 miles of beautiful coastline we like to to take advantage of that ☀️🌊",
    },
    {
      src: "instagram/7.jpg",
      url: "https://www.instagram.com/p/BxSMYf2B573/",
      caption:
        "As SKYLIGHT London opens its doors to another exciting Summer season, we are throwing back to our team undertaking this exciting project of turning an abandoned car park in London, into a rooftop bar and space. Full event production by the Seventa Team from initial consultation, through to the build itself including custom bars, street food stalls, pergolas, furniture, theming and infrastructure.",
    },
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
            >
              <div className="overlay">Visit Instagram Post</div>
            </div>
            <p className="image-caption">
              {truncateCaption(image.caption, 20)}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default SwiperComponent
