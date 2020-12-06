import { actions } from "action/admin";
import DropBox from "components/DropBox";
import React from "react";
import { useSelector } from "react-redux";

const Category = ({ dispatch }) => {
  const categorys = [
    "전체",
    "창작",
    "라이센스",
    "내한",
    "지방공연",
    "초연",
    "재연",
  ];
  const curCategory = useSelector((state) => state.admin.category);
  const handleClick = (event) => {
    const category = event.currentTarget.innerText;

    dispatch(actions.setCategory(category));
    dispatch(actions.requestPageList(1));
    dispatch(actions.setCurPage(1));
  };

  return (
    <DropBox
      displayMessege={curCategory}
      listInDropbox={categorys}
      handleDropboxClick={handleClick}
    ></DropBox>
  );
};

export default Category;
