import React from "react";

import { Pagination, A11y, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import { useNavigate } from "react-router-dom";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

import img1Slide1 from "../../../public/images/slider/img1-1.webp";
import img2Slide1 from "../../../public/images/slider/img1-2.webp";
import img1Slide2 from "../../../public/images/slider/img2-1.png";
import img2Slide2 from "../../../public/images/slider/img2-2.png";
import img1Slide4 from "../../../public/images/slider/img2-2.png";
import img2Slide4 from "../../../public/images/slider/img4-2.webp";
// import images from "../../../public/images/slider/images.jpg"
import imgslide5 from "../../../public/images/slider/bb.webp"
import { Link, useNavigate } from "react-router-dom";

const Slider = () => {
  const sliders = [
    {
      id: 1,
      bgimg: "bg-slide1",
      img1: img1Slide1,
      img2: img2Slide1,
      title: "kld fashion Store",
      description:
        "Our latest fashion trends, discover them now at Kholoud store",
    },
    {
      id: 2,
      bgimg: "bg-slide2",
      img1: imgslide5,
      img2: imgslide5,
      title: "kld fashion Store",
      description:
        "Our latest fashion trends, discover them now",
    },
    {
      id: 3,
      bgimg: "bg-slide1",
      img1: img1Slide1,
      img2: img2Slide1,
      title: "kld fashion Store",
      description:
        "Our latest fashion trends, discover them now",
    },
    {
      id: 4,
      bgimg: "bg-slide2",
      img1: img1Slide4,
      img2: img2Slide4,
      title: "kld fashion Store",
      description:
        "Our latest fashion trends, discover them now",
    },
  ];
  return (
    <div>
      <Swiper
        modules={[Pagination, A11y, Autoplay, Navigation]}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {sliders.map((slider) => (
          <SwiperSlide key={slider.id}>
            <div
              className={
                slider.bgimg +
                " w-full max-sm:h-[90vh] sm:h-[80vh] md:h-[80vh] xl:h-[100vh]  bg-no-repeat bg-cover "
              }
            >
              <div className="bg-black bg-opacity-60 w-full h-full max-sm:px-[1rem] sm:px-[2.5rem] md:px-[3rem] lg:px-[4rem] xl:px-[12rem] flex items-center md:justify-between max-sm:justify-center  ">
                <div className="flex-col items-center justify-center">
                  <h1 className="text-white pb-10 max-sm:text-center sm:text-center md:text-start lg:text-start">
                    {slider.title}
                  </h1>
                  <p className="capitalize text-white md:w-6/12 lg:w-1/2 text-xl pb-10 max-sm:text-center max-sm:w-full max-sm:text-base sm:w-full sm:text-center md:text-start lg:text-start">
                    {slider.description}
                  </p>
                  <Link to={"/about"}>
                    <button className="btn bg-white border-0 text-primary hover:bg-primary hover:text-white rounded-3xl flex max-sm:text-sm max-sm:mx-auto sm:mx-auto md:mx-0 lg:mx-0 ">
                      view more
                    </button>
                  </Link>
                </div>

                <div className="md:flex lg:flex gap-12 mt-24 relative max-sm:hidden sm:hidden">
                  {/* <figure className="">
                    <img
                      src={slider.img1}
                      className=" w-80 object-contain rounded-[16px] shadow-2xl"
                    /> */}
                  {/* </figure>
                  <figure className=" mt-20">
                    <img
                      src={slider.img2}
                      className=" w-80 object-contain rounded-[16px] shadow-2xl"
                    />
                  </figure> */}
                </div>
              </div>
            </div>
            {/* <img
              src={slide1}
              alt={slide1}
              className="w-full max-sm:h-[30vh] sm:h-[30vh] md:h-[40vh] xl:h-[70vh] object-cover  bg-slide1"
            /> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
