import { actions } from "action/admin";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ListItem from "./ListItem";

const ListBox = ({ dispatch, curPage }) => {
  const pageList = useSelector((state) => state.admin.pageList);

  useEffect(() => {
    dispatch(actions.requestPageList(curPage));
    return () => {};
  }, [dispatch, curPage]);
  return (
    <ListContainer>
      {pageList &&
        pageList.map((item) => (
          <ListItem
            item={item}
            dispatch={dispatch}
            key={item.musical_id}
          ></ListItem>
        ))}
    </ListContainer>
  );
};

export default ListBox;

const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
