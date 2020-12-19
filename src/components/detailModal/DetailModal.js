import React from "react";
import styled from "styled-components";

import { FaHeart } from "react-icons/fa";
import Comment from "./Comment";
import Rating from "./Rating";

import Image from "mockup/img/listitem.jpg";

const DetailModal = () => {
  return (
    <>
      <Blur />
      <Wrapper>
        <InfoContainer>
          <ImgBox>
            <img src={Image} alt="detailImg" />
            <Rating></Rating>
          </ImgBox>
          <DescBox>
            <Desc>
              <h3>제목</h3>
              <p>
                줄거리 Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book.
              </p>
            </Desc>
            <ButtonBox>
              <button>
                찜하기
                <FaHeart />
              </button>
              <button>예매링크</button>
            </ButtonBox>
          </DescBox>
        </InfoContainer>
        <CommentsContainer>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
          <InputBox>
            <input type="text" placeholder="댓글 입력" />
            <button>작성</button>
          </InputBox>
        </CommentsContainer>
      </Wrapper>
    </>
  );
};

export default DetailModal;

const Blur = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.darkest};
  opacity: 0.3;
  z-index: 2;
`;

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 35vw;
  min-width: 410px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darker};
  color: ${({ theme }) => theme.colors.brightest};
  padding: 15px;
  border-radius: 20px;
  z-index: 3;
  @media only screen and (max-width: 768px) {
    width: 90vw;
    min-width: 0px;
    margin-top: 30px;
  }
`;
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  border-bottom: solid 2px #494949;
  padding: 10px 0;
`;
const ImgBox = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 38%;

  & img {
    width: 120px;
    height: 180px;
    border-radius: 5%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

const DescBox = styled.span`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Desc = styled.div`
  text-align: center;
  & h3 {
    top: 0;
    width: 100px;
    margin: 0 auto;
    padding-bottom: 10px;
    border-bottom: solid 4px ${({ theme }) => theme.colors.bright};
  }
  & p {
    font-size: 14px;
  }
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  & button {
    background-color: #ff8383;
    width: 80px;
    height: 30px;
    border: none;
    border-radius: 4px;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;

const CommentsContainer = styled.div`
  width: 100%;
  margin-top: 3%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const InputBox = styled.div`
  background-color: ${({ theme }) => theme.colors.bright};
  margin-top: 15px;
  padding: 5px 0;
  width: 90%;
  height: 30px;
  border-radius: 15px;
  text-align: center;
  & input {
    margin: auto;
    margin-right: 5px;
    height: 90%;
    width: 70%;
    border: none;
    background-color: ${({ theme }) => theme.colors.bright};
    color: ${({ theme }) => theme.colors.brightest};
  }
  & button {
    border: none;
    width: 55px;
    height: 25px;
    border-radius: 4%;
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.brightest};
  }
`;
