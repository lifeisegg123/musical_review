import { actions } from "action/admin";
import React from "react";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdFirstPage,
  MdLastPage,
} from "react-icons/md";
import styled from "styled-components";
import Button from "./Button";

const BottomNav = ({
  dispatch,
  handleAddButton,
  maxPage,
  curPage,
  pageNumbers,
}) => {
  const handlePageNumber = (event) => {
    const target = Number(event.target.innerHTML);
    dispatch(actions.requestPageList({ targetPage: target }));
    dispatch(actions.setCurPage(target));
  };
  const handleFirstPageButton = () => {
    if (curPage <= 1) {
      return;
    }
    dispatch(actions.requestPageList({ curPage: 1, pageControl: "first" }));
    dispatch(actions.setCurPage(1));
  };
  const handlePrevButton = () => {
    if (curPage <= 1) {
      return;
    } else {
      dispatch(actions.requestPageList({ curPage, pageControl: "prev" }));
      dispatch(actions.setCurPage(curPage - 1));
    }
  };
  const handleNextButton = () => {
    if (curPage >= maxPage) {
      return;
    } else {
      dispatch(actions.requestPageList({ curPage, pageControl: "next" }));
      dispatch(actions.setCurPage(curPage + 1));
    }
  };
  const handlelastPageButton = () => {
    if (curPage >= maxPage) {
      return;
    } else {
      dispatch(
        actions.requestPageList({ curPage: maxPage, pageControl: "end" })
      );
      dispatch(actions.setCurPage(maxPage));
    }
  };
  return (
    <Container>
      <Button isborderd={true}>
        <h5>삭제</h5>
      </Button>
      <PageChanger>
        <li>
          <Button isborderd={true} onClick={handleFirstPageButton}>
            <MdFirstPage></MdFirstPage>
          </Button>
        </li>
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
        <li>
          <Button isborderd={true} onClick={handlelastPageButton}>
            <MdLastPage></MdLastPage>
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
