import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import Slider from "react-slick";
import Image from '../layer/Image';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import oneSlider from '../../public/slider.svg';
import AppointmentForm from "./AppointmentForm";

// Custom Next Arrow
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="bg-white text-black rounded-full p-2"
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        right: "10px",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        zIndex: 1,
        width: "40px",
        height: "40px",
      }}
    >
      <MdOutlineKeyboardArrowRight size={20} />
    </div>
  );
}

// Custom Previous Arrow
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="bg-white text-black rounded-full p-2"
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        left: "10px",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        zIndex: 1,
        width: "40px",
        height: "40px",
      }}
    >
      <MdOutlineKeyboardArrowLeft size={20} />
    </div>
  );
}

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: function (i) {
      return (
        <div className="w-[12px] h-[12px] bg-transparent border-2 border-[#32a877] rounded-full  transition duration-300 ease-in-out"></div>
      );
    },
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <div className="relative">

      <div className="z-50 absolute top-[125px] left-1/2 transform -translate-x-1/2 flex justify-center items-center flex-col text-center px-4 sm:px-8 md:px-16">
        <h3 className="text-[rgb(245,_250,_248)] font-[Roboto] text-[24px] font-normal leading-[26px] tracking-normal sm:text-[28px]">
          Reliable and Stable Crews
        </h3>
        <h2 className="max-w-[776px] text-[rgb(255,_255,_255)] font-[Roboto] text-[40px] sm:text-[60px] font-medium leading-[130%] tracking-[0.59px]">
          Professional
        </h2>
        <h2 className="max-w-[776px] text-[rgb(255,_255,_255)] font-[Roboto] text-[40px] sm:text-[60px] font-medium leading-[130%] tracking-[0.59px]">
          <span className="text-[#2B8761] bg-white p-1">cleaning</span> services
        </h2>
        <p className="max-w-[793px] mt-[30px] text-[rgb(242,_255,_250)] font-[Roboto] text-[16px] sm:text-[18px] font-normal leading-[26px] tracking-normal">
          While you are doing something important, we will put things in order in the apartment, private house or office
        </p>
      </div>


      <div className="slider-wrapper">
        <Slider {...settings}>
          <div>
            <Image src={oneSlider} alt="Slider Image 1" />
          </div>
          <div>
            <Image src={oneSlider} alt="Slider Image 2" />
          </div>
          <div>
            <Image src={oneSlider} alt="Slider Image 3" />
          </div>
        </Slider>
      </div>


      <AppointmentForm className="absolute bottom-0 left-1/2 transform -translate-x-1/2 sm:bottom-[-60px] md:bottom-[-90px]" />

      <style jsx>{`
        .slider-wrapper {
          position: relative;
          padding-bottom: 40px; 
        }

        .custom-dots {
          margin:10px;
          position: absolute;
          bottom:10%; 
          left: 50%;
          transform: translateX(-50%);
        }

        .custom-dots li.slick-active div {
          background-color: #32a877; 
        }
      `}</style>
    </div>
  );
}
