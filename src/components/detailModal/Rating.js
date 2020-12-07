import React from "react";
import styled from "styled-components";

import { FaRegStar } from "react-icons/fa";

const Rating = () => {
  return (
    <RatingBox>
      <span>
        <StarList>
          <li>
            <FaRegStar></FaRegStar>
          </li>
          <li>
            <FaRegStar></FaRegStar>
          </li>
          <li>
            <FaRegStar></FaRegStar>
          </li>
          <li>
            <FaRegStar></FaRegStar>
          </li>
          <li>
            <FaRegStar></FaRegStar>
          </li>
        </StarList>
      </span>
      <span>
        <p>4.2 점</p>
      </span>
    </RatingBox>
  );
};

export default Rating;

const RatingBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  & span:first-child {
    width: 70%;
  }
  & p {
    white-space: nowrap;
    margin: 0;
    font-size: 13px;
    font-weight: bold;
  }
`;
const StarList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
