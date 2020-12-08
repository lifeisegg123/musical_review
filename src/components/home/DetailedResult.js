import React from "react";
import styled from "styled-components";

import Img from "mockup/img/listitem.jpg";

const DetailedResult = () => {
  return (
    <Wrapper>
      <ResultList>
        <ListItemBox>
          <div class="results__lists--item">
            <img src={Img} alt="onscreen" />
            <h5>제목</h5>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </ListItemBox>
        <ListItemBox>
          <div class="results__lists--item">
            <img src={Img} alt="onscreen" />
            <h5>제목</h5>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </ListItemBox>
        <ListItemBox>
          <div>
            <img src={Img} alt="onscreen" />
            <h5>제목</h5>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </ListItemBox>
      </ResultList>
    </Wrapper>
  );
};

export default DetailedResult;

const Wrapper = styled.div`
  margin: 5vh auto;
  width: 75vw;
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  & ul {
    list-style: none;
  }
`;

const ResultList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
`;

const ListItemBox = styled.li`
  display: flex;
  align-items: center;
  width: 95%;
  margin: 0 auto;
  padding: 10px;
  border-bottom: solid 1px black;
  & div > img {
    width: 100px;
    height: 180px;
    @media only screen and (max-width: 768px) {
      width: 80px;
      height: 150px;
    }
  }
  & div > h5 {
    text-align: center;
    margin: 0;
  }
  & p {
    margin-left: 70px;
    @media only screen and (max-width: 768px) {
      margin-left: 20px;
      font-size: 8px;
    }
  }
`;
