import React from "react";
import styled from "styled-components";

const SliderItem = ({ image, title }) => {
  const test = () => console.log("test");
  return (
    <SliderItemWrapper onClick={test}>
      <img src={image} alt={title} />
      <p>{title}</p>
    </SliderItemWrapper>
  );
};

export default SliderItem;

const SliderItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  transition: 100ms linear;
  &:hover {
    transform: scale(1.1);
  }
  & img {
    width: 120px;
    height: 180px;
    border-radius: 5px;
    @media only screen and (max-width: 768px) {
      width: 70px;
      height: 105px;
    }
  }
`;
