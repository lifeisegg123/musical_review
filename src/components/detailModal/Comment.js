import React from "react";
import styled from "styled-components";
import { FaRegStar } from "react-icons/fa";

import Image from "mockup/img/listitem.jpg";

const Comment = () => {
  return (
    <CommentContainer>
      <ProfileBox>
        <img src={Image} alt="profileImg" />
        <NicknameBox>
          <h5>닉네임</h5>
          <RatingBox>
            <FaRegStar></FaRegStar>
            <h6>4.2</h6>
          </RatingBox>
        </NicknameBox>
      </ProfileBox>
      <Message>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
      </Message>
    </CommentContainer>
  );
};

export default Comment;

const CommentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #f2f2f2;
  width: 90%;
  height: 60px;
  margin: 5px auto;
  border-radius: 10px;
`;
const ProfileBox = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 25%;
  border-right: solid 1px black;
  & img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;
const NicknameBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & h5 {
    margin: 0;
    white-space: nowrap;
  }
`;

const RatingBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 16px;
  font-size: 12px;
`;

const Message = styled.span`
  width: 70%;
  margin: 0 10px;
  display: flex;
  align-items: center;
  & p {
    margin: auto;
    font-size: 13px;
  }
`;
