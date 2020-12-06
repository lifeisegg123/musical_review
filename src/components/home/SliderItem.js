import React from "react";
import styled from "styled-components";

const SliderItem = ({ image, title }) => {
  return (
    <SliderItemWrapper>
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
  & img {
    width: 12vw;
    height: 33vh;
    border-radius: 5px;
    @media only screen and (max-width: 768px) {
      width: 20vw;
      height: 20vh;
    }
  }
`;
