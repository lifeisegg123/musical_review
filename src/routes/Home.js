import React, { useRef } from "react";
import Header from "components/header/Header";
import styled, { keyframes } from "styled-components";
import pageImg from "mockup/img/pageImg.png";
import Banner from "components/home/Banner";
import MainList from "components/home/MainList";
import { IoMdArrowRoundDown } from "react-icons/io";

const Home = ({ history }) => {
  const buttonRef = useRef();
  const headerRef = useRef();
  const handleScroll = () => {
    window.scroll({
      top: buttonRef.current.offsetTop - headerRef.current.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Header history={history} ref={headerRef}></Header>
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
        <Button onClick={handleScroll}>
          <IoMdArrowRoundDown />
        </Button>
        <div ref={buttonRef}>
          <Banner></Banner>
        </div>
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
  margin: 5vh auto;
  background-color: #232323;
  padding: 20px 15px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  & p {
    color: white;
    width: 45%;
  }
  @media only screen and (max-width: 768px) {
    width: 80vw;
    min-width: 0px;
    height: 80vh;
  }
`;
const PageDescImg = styled.img`
  width: 45%;
  height: 75%;
  border-radius: 5px;
`;

const blink = keyframes`
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const Button = styled.div`
  width: 100px;
  background-color: white;
  margin: auto;
  text-align: center;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3),
    -5px -5px 10px rgba(245, 245, 245, 0.7);
  animation: 1s ${blink} linear infinite alternate;
  & svg {
    font-size: 30px;
  }
`;
