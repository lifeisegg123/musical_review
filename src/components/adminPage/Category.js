import { actions } from "action/admin";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Category = ({ dispatch }) => {
  const [dropbox, setDropbox] = useState(false);
  const handleMouseEnter = () => setDropbox(true);
  const handleMouseLeave = () => setDropbox(false);

  const curCategory = useSelector((state) => state.admin.category);
  const handleClick = (event) => {
    const category = event.currentTarget.innerText;
    if (category === "전체") {
      dispatch(actions.setCategory("all"));
    } else {
      dispatch(actions.setCategory(category));
    }
    dispatch(actions.requestPageList(1));
    dispatch(actions.setCurPage(1));
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <WhiteBox>{curCategory}</WhiteBox>
      {dropbox && (
        <DropdownBox>
          <WhiteBox onClick={handleClick}>전체</WhiteBox>
          <WhiteBox onClick={handleClick}>창작</WhiteBox>
          <WhiteBox onClick={handleClick}>라이센스</WhiteBox>
          <WhiteBox onClick={handleClick}>내한</WhiteBox>
          <WhiteBox onClick={handleClick}>지방공연</WhiteBox>
          <WhiteBox onClick={handleClick}>초연</WhiteBox>
          <WhiteBox onClick={handleClick}>재연</WhiteBox>
        </DropdownBox>
      )}
    </div>
  );
};

export default Category;

const WhiteBox = styled.button`
  background-color: white;
  padding: 3px;
  border-radius: 10%/20%;
  border: solid 1px black;
  cursor: pointer;
`;

const DropdownBox = styled.div`
  position: absolute;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: solid 1px black;
  & ${WhiteBox} {
    border: none;
    width: 100%;
    border-bottom: solid 1px black;
    border-radius: 0;
  }
  & ${WhiteBox}:last-child {
    border: none;
  }
`;
