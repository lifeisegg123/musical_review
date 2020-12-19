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
          <img src={pageImg} alt="PageImg" />
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
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 450px;
  margin: 5vh 0;
  padding: 20px 0;
  background-size: cover;
  & p {
    color: black;
    width: 45%;
    text-shadow: -1px 0 ${({ theme }) => theme.colors.brightest},
      0 1px ${({ theme }) => theme.colors.brightest},
      1px 0 ${({ theme }) => theme.colors.brightest},
      0 -1px ${({ theme }) => theme.colors.brightest};
    z-index: 1;
  }
  & img {
    position: absolute;
    z-index: 0;
    opacity: 0.7;
    height: 100%;
    width: 100%;
  }
`;

const blink = keyframes`
  0% {
    opacity: 0.5;
    transform: translateY(-50%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Button = styled.div`
  width: 100px;
  background-color: ${({ theme }) => theme.colors.brightest};
  margin: auto;
  text-align: center;
  border-radius: 5px;
  animation: 1s ${blink} linear infinite alternate;
  & svg {
    font-size: 30px;
  }
`;
