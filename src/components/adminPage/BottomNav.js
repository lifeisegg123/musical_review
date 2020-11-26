import { actions } from "action/admin";
import React, { useCallback, useEffect, useState } from "react";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdFirstPage,
  MdLastPage,
} from "react-icons/md";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Button from "components/adminPage/Button";

const BottomNav = ({ dispatch, handleAddButton }) => {
  const curPage = useSelector((state) => state.admin.curPage);
  const maxPage = useSelector((state) => state.admin.maxPage);

  const [pageNumbers, setPageNumbers] = useState([]);
  /*
   * calculate page numbers with curent page
   * @param{number}: current page
   */
  const calculatePageButton = useCallback(
    (curValue) => {
      let pages = [];
      let targetValue = curValue - (curValue % 5) + 1;
      if (!(curValue % 5)) {
        targetValue = curValue - 4;
      }
      [0, 1, 2, 3, 4].some((value) => {
        if (targetValue + value > maxPage || !maxPage) {
          return true;
        }
        pages.push(targetValue + value);
        return false;
      });
      setPageNumbers(pages);
    },
    [maxPage]
  );

  useEffect(() => {
    calculatePageButton(curPage);
  }, [curPage, maxPage, calculatePageButton]);

  const handleDelete = () => {
    dispatch(actions.deleteInfo());
  };

  /*
   * when page number clicked, get list and set curent page state
   */
  const handlePageNumber = (event) => {
    const target = Number(event.target.innerHTML);
    if (curPage === target) {
      return;
    }
    dispatch(actions.requestPageList({ targetPage: target }));
    dispatch(actions.setCurPage(target));
  };
  const handleFirstPageButton = () => {
    if (curPage <= 1) {
      return;
    }
    dispatch(actions.requestPageList({ pageControl: "first" }));
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
      <Button isBorderd={true} onClick={handleDelete}>
        <h5>삭제</h5>
      </Button>
      <PageChanger>
        <li>
          <Button isBorderd={true} onClick={handleFirstPageButton}>
            <MdFirstPage></MdFirstPage>
          </Button>
        </li>
        <li>
          <Button isBorderd={true} onClick={handlePrevButton}>
            <MdKeyboardArrowLeft></MdKeyboardArrowLeft>
          </Button>
        </li>
        {pageNumbers.map((e) => (
          <li key={e}>
            <Button
              isClicked={e === curPage}
              isBorderd={true}
              onClick={handlePageNumber}
            >
              {e}
            </Button>
          </li>
        ))}
        <li>
          <Button isBorderd={true} onClick={handleNextButton}>
            <MdKeyboardArrowRight></MdKeyboardArrowRight>
          </Button>
        </li>
        <li>
          <Button isBorderd={true} onClick={handlelastPageButton}>
            <MdLastPage></MdLastPage>
          </Button>
        </li>
      </PageChanger>
      <Button isBorderd={true} onClick={handleAddButton}>
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
