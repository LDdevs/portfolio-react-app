import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../constants";
import { Link } from 'react-scroll'

const ActiveSlider = () => {
  return (
    <div name='services' className="flex items-center justify-center flex-col sm:space-x-8  min-w-10px sm:min-h-[100vh] lg:h-[1400px] md:w-[100%] bg-[#6c34af]">
      <p className='text-white mb-6 text-4xl font-bold inline hover:border-b-4 border-[#ff66c4]'>Services</p>
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[50%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className=" z-0 flex flex-col md:gap-6 justify-ce mb-0 group relative shadow-lg text-white rounded-xl px-6 py-10 h-[250px] w-full sm:w-full xs-w-full lg:h-[100%]  lg:w-full xl:h-[650px] overflow-hidden   ">
              <div
                className="absolute inset-0 bg-cover bg-center bg-opacity-100"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-[#6c34af] opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                <item.icon className="text-blue-600  w-[32px] h-[32px]" />
                <h1 className="text-xl lg:text-2xl text-white">{item.title} </h1>
                <p className="lg:text-[18px] lg:block hidden">{item.content} </p>
              </div>
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
              {/* <Popup trigger={<button className="absolute bottom-5 right-5 w-[295px] h-[35px] text-white group-hover:text-white-500 duration-100 bg-[#ff66c4] rounded-xl hover:border-b-4 xs-font-[12px] ">Contact me below</button>} position="right center">
          <div className="">Not Quite Yet!!</div>
        </Popup> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex inline">
        <p className='text-white mb-6 mt-5 text-5l font-bold inline p-4'>For more information on packages or a Quote use the contact form at the bottom of the page. </p>

      </div>
    </div>
  );
};

export default ActiveSlider;