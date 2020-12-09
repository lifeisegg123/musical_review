import React from "react";
import styled from "styled-components";
import Carousel from "./Carousel";
import DetailedResult from "./DetailedResult";

const SearchResult = () => {
  return (
    <>
      <SliderContainer>
        <h3>상영중</h3>
        <Carousel slidesToShow="6"></Carousel>
      </SliderContainer>
      <DetailedResult></DetailedResult>
    </>
  );
};

export default SearchResult;

const SliderContainer = styled.div`
  margin: 5vh auto;
  width: 75vw;
  padding: 10px 30px;
  background-color: #dfdfdf;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  & h3 {
    margin: 0 0 0 20px;
  }
`;
