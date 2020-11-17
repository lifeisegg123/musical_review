import { actions } from "action/admin";
import React, { useCallback, useEffect, useState } from "react";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdFirstPage,
  MdLastPage,
} from "react-icons/md";
import { shallowEqual, useSelector } from "react-redux";
import styled from "styled-components";
import Button from "./Button";

const BottomNav = ({ dispatch, handleAddButton }) => {
  const curPage = useSelector((state) => state.admin.curPage);
  const maxPage = useSelector((state) => state.admin.maxPage, shallowEqual);

  const [pageNumbers, setPageNumbers] = useState([]);
  const [curDirection, setCurDirection] = useState("first");
  const calculatePageButton = useCallback(
    (curValue, determinant) => {
      let pages = [];
      if (determinant) {
        [0, 1, 2, 3, 4].some((value) => {
          if (curValue + value > maxPage || !maxPage) {
            return true;
          }
          pages.push(curValue + value);
          return false;
        });
      } else {
        [0, 1, 2, 3, 4].some((value) => {
          if (
            curValue - value < 0 ||
            (curValue % 5 !== 0 && (curValue - value) % 5 === 0)
          ) {
            return true;
          }
          pages.push(curValue - value);
          return false;
        });
        pages.reverse();
      }
      setPageNumbers(pages);
    },
    [maxPage]
  );

  useEffect(() => {
    if (curPage % 5 === 1 && curDirection === "next") {
      calculatePageButton(curPage, true);
    } else if (curPage % 5 === 0 && curDirection === "prev") {
      calculatePageButton(curPage, false);
    } else if (curDirection === "first") {
      calculatePageButton(1, true);
    } else if (curDirection === "end") {
      calculatePageButton(curPage, false);
    }
  }, [curPage, maxPage, calculatePageButton, curDirection]);

  const handleDelete = () => {
    dispatch(actions.deleteInfo());
  };
  const handlePageNumber = (event) => {
    const target = Number(event.target.innerHTML);
    if (curPage === target) {
      return;
    }
    dispatch(actions.requestPageList({ targetPage: target }));
    dispatch(actions.setCurPage(target));
    setCurDirection("");
  };
  const handleFirstPageButton = () => {
    if (curPage <= 1) {
      return;
    }
    dispatch(actions.requestPageList({ pageControl: "first" }));
    dispatch(actions.setCurPage(1));
    setCurDirection("first");
  };
  const handlePrevButton = () => {
    if (curPage <= 1) {
      return;
    } else {
      dispatch(actions.requestPageList({ curPage, pageControl: "prev" }));
      dispatch(actions.setCurPage(curPage - 1));
      setCurDirection("prev");
    }
  };
  const handleNextButton = () => {
    if (curPage >= maxPage) {
      return;
    } else {
      dispatch(actions.requestPageList({ curPage, pageControl: "next" }));
      dispatch(actions.setCurPage(curPage + 1));
      setCurDirection("next");
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
      setCurDirection("end");
    }
  };
  return (
    <Container>
      <Button isborderd={true} onClick={handleDelete}>
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
            <Button
              isClicked={e === curPage}
              isborderd={true}
              onClick={handlePageNumber}
            >
              {e}
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
