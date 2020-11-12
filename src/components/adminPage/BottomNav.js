import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import styled from "styled-components";
import Button from "./Button";

const BottomNav = ({
  dispatch,
  endPage,
  setCurPageAction,
  handleAddButton,
  curPage,
  pageNumbers,
}) => {
  const handlePageNumber = (event) => {
    const target = parseInt(event.target.innerHTML) - 1;
    dispatch(setCurPageAction(target));
  };
  const handlePrevButton = (event) => {
    if (curPage <= 0) {
      return;
    } else {
      dispatch(setCurPageAction(curPage - 1));
    }
  };
  const handleNextButton = (event) => {
    if (curPage >= endPage - 1) {
      return;
    } else {
      dispatch(setCurPageAction(curPage + 1));
    }
  };
  return (
    <Container>
      <Button isborderd={true}>
        <h5>삭제</h5>
      </Button>
      <PageChanger>
        <li>
          <Button isborderd={true} onClick={handlePrevButton}>
            <MdKeyboardArrowLeft></MdKeyboardArrowLeft>
          </Button>
        </li>
        {pageNumbers.map((e) => (
          <li key={e}>
            <Button isborderd={true} onClick={handlePageNumber}>
              {e + 1}
            </Button>
          </li>
        ))}
        <li>
          <Button isborderd={true} onClick={handleNextButton}>
            <MdKeyboardArrowRight></MdKeyboardArrowRight>
          </Button>
        </li>
      </PageChanger>
      <Button isborderd={true} onClick={handleAddButton}>
        <h5>추가</h5>
      </Button>
    </Container>
  );
};

export default BottomNav;

const Container = styled.span`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & h5 {
    margin: 0;
  }
`;

const PageChanger = styled.ul`
  list-style: none;
  width: 70%;
  display: flex;
  justify-content: space-around;
  padding: 0;
`;
