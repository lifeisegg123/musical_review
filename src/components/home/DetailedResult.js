import React from "react";
import styled from "styled-components";

import Img from "mockup/img/listitem.jpg";

const DetailedResult = () => {
  return (
    <Wrapper>
      <ResultList>
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
  color: ${({ theme }) => theme.colors.brightest};
  padding: 10px;
  border-radius: 20px;
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
  border-bottom: solid 7px ${({ theme }) => theme.colors.bright};
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
