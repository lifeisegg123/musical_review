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
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  transition: 200ms linear;
  &:hover {
    transform: scale(1.05);
  }
  & img {
    width: 60%;
    height: 80%;
    border-radius: 5px;
  }
`;
