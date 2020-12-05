import React from "react";
import Header from "components/header/Header";
import styled from "styled-components";
import pageImg from "mockup/img/pageImg.png";
import Banner from "components/home/Banner";
import MainList from "components/home/MainList";

const Home = ({ history }) => {
  console.log(history);
  return (
    <>
      <Header history={history}></Header>
      <Wrapper>
        <DescBox>
          <PageDescImg src={pageImg} alt="pageImg" />
          <p>
            페이지 설명 Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </p>
        </DescBox>
        <Banner></Banner>
        <MainList></MainList>
      </Wrapper>
    </>
  );
};

export default Home;

const Wrapper = styled.div``;
const DescBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 65vw;
  min-width: 400px;
  height: 450px;
  margin: 20vh auto;
  background-color: #232323;
  padding: 20px 15px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 2% / 4%;
  & p {
    color: white;
    width: 45%;
  }
`;
const PageDescImg = styled.img`
  width: 45%;
  height: 75%;
  border-radius: 1%;
`;
