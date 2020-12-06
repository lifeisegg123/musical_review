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
        <h4>4.2 점</h4>
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
`;
const StarList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
