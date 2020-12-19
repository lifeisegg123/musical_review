import React, { useRef } from "react";
import Slider from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import slideImg from "mockup/img/listitem.jpg";
import SliderItem from "./SliderItem";

const LeftArrow = ({ onClick, style, className }) => {
  return (
    <MdKeyboardArrowLeft
      className={className}
      onClick={onClick}
      style={{ ...style, color: "#e5e5e5" }}
    ></MdKeyboardArrowLeft>
  );
};
const RightArrow = ({ onClick, style, className }) => {
  return (
    <MdKeyboardArrowRight
      className={className}
      onClick={onClick}
      style={{ ...style, color: "#e5e5e5" }}
    ></MdKeyboardArrowRight>
  );
};

const Carousel = ({ slidesToShow }) => {
  const sliderSettings = {
    slidesToShow: Number(slidesToShow),
    slidesToScroll: 4,
    swipeToSlide: true,
    infinite: false,
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3.3,
        },
      },
    ],
  };
  const slideArrayForTest = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const slider = useRef();
  /* const testSlick = () => {
    slider.current.slickGoTo(3);
    console.log(slider.current);
  }; */
  return (
    <Slider {...sliderSettings} ref={slider}>
      {slideArrayForTest.map((value) => (
        <SliderItem image={slideImg} title={value} key={value}></SliderItem>
      ))}
    </Slider>
  );
};

export default Carousel;
