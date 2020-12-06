import React, { useRef } from "react";
import styled from "styled-components";

import Slider from "react-slick";
import SliderItem from "./SliderItem";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import slideImg from "mockup/img/listitem.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LeftArrow = ({ onClick, style, className }) => {
  return (
    <MdKeyboardArrowLeft
      className={className}
      onClick={onClick}
      style={{ ...style, color: "black" }}
    ></MdKeyboardArrowLeft>
  );
};
const RightArrow = ({ onClick, style, className }) => {
  return (
    <MdKeyboardArrowRight
      className={className}
      onClick={onClick}
      style={{ ...style, color: "black" }}
    ></MdKeyboardArrowRight>
  );
};

const MainList = () => {
  const sliderSettings = {
    slidesToShow: 5,
    slidesToScroll: 1,
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
  const slideArrayForTest = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const slider = useRef();
  const testSlick = () => {
    slider.current.slickGoTo(3);
    console.log(slider.current);
  };
  return (
    <MainListBox>
      <button onClick={testSlick}>test</button>
      <SliderWrapper>
        <h4 class="mainlist__category">카테고리1</h4>
        <Slider {...sliderSettings} ref={slider}>
          {slideArrayForTest.map((value) => (
            <SliderItem image={slideImg} title={value}></SliderItem>
          ))}
        </Slider>
      </SliderWrapper>
      <SliderWrapper>
        <h4 class="mainlist__category">카테고리2</h4>
        <Slider {...sliderSettings}>
          {slideArrayForTest.map(() => (
            <SliderItem image={slideImg} title="테스트"></SliderItem>
          ))}
        </Slider>
      </SliderWrapper>
      <SliderWrapper>
        <h4 class="mainlist__category">카테고리3</h4>
        <Slider {...sliderSettings}>
          {slideArrayForTest.map(() => (
            <SliderItem image={slideImg} title="테스트"></SliderItem>
          ))}
        </Slider>
      </SliderWrapper>
    </MainListBox>
  );
};

export default MainList;

const MainListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto;
  padding: 20px;
  width: 80vw;
  background-color: #f2f2f2;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.5));
  border-radius: 10px;
`;

const SliderWrapper = styled.div`
  width: 90%;
  & h4 {
    margin-left: 3%;
  }
`;
