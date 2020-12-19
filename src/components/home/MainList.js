import React from "react";
import styled from "styled-components";
import Carousel from "./Carousel";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainList = () => {
  return (
    <MainListBox>
      <SliderWrapper>
        <h4>카테고리1</h4>
        <Carousel slidesToShow="6"></Carousel>
      </SliderWrapper>
      <SliderWrapper>
        <h4>카테고리2</h4>
        <Carousel slidesToShow="6"></Carousel>
      </SliderWrapper>
      <SliderWrapper>
        <h4>카테고리3</h4>
        <Carousel slidesToShow="6"></Carousel>
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
  width: 90%;
  color: #e5e5e5;
`;

const SliderWrapper = styled.div`
  width: 90%;
  & h4 {
    margin-left: 3%;
  }
`;
