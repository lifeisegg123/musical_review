import React from "react";
import styled from "styled-components";

import Slider from "react-slick";
import SliderItem from "./SliderItem";

import slideImg from "mockup/img/listitem.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainList = () => {
  const sliderSettings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
  };
  const slideArrayForTest = [0, 0, 0, 0, 0, 0];
  return (
    <MainListBox>
      <SliderWrapper>
        <h4 class="mainlist__category">카테고리1</h4>
        <Slider {...sliderSettings}>
          {slideArrayForTest.map(() => (
            <SliderItem image={slideImg} title="테스트"></SliderItem>
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
  border-radius: 2%;
`;

const SliderWrapper = styled.div`
  width: 90%;
  & h4 {
    margin-left: 3%;
  }
`;