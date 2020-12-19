import React from "react";
import styled from "styled-components";

import bg from "mockup/img/banner.jpg";

const Banner = () => {
  return (
    <BannerContainer backgroundImage={bg}>
      <h2>추천작 제목</h2>
      <p>
        추천작 설명Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown
      </p>
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled.div`
  margin: 100px 0;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  & p {
    width: 40%;
  }
  @media only screen and (max-width: 768px) {
    height: 25vh;
    & p {
      width: 60%;
    }
  }
`;
