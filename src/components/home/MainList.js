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
        <Carousel slidesToShow="5"></Carousel>
      </SliderWrapper>
      <SliderWrapper>
        <h4>카테고리2</h4>
        <Carousel slidesToShow="5"></Carousel>
      </SliderWrapper>
      <SliderWrapper>
        <h4>카테고리3</h4>
        <Carousel slidesToShow="5"></Carousel>
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
