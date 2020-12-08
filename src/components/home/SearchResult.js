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
      <ResultList>
        <DetailedResult></DetailedResult>
      </ResultList>
    </>
  );
};

export default SearchResult;

const SliderContainer = styled.div`
  margin: 5vh auto;
  width: 80vw;
  padding: 10px;
  background-color: #dfdfdf;
  border-radius: 2%/6%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  & h3 {
    margin: 0 0 0 20px;
  }
`;

const ResultList = styled.div`
  margin: 5vh auto;
  width: 80vw;
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 2%/6%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  & ul {
    list-style: none;
  }
`;
