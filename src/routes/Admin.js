import BottomNav from "components/adminPage/BottomNav";
import ListItem from "components/adminPage/ListItem";
import React, { useCallback, useEffect, useState } from "react";
import { MdSearch, AiFillPlusCircle } from "react-icons/all";
import styled from "styled-components";
import Button from "components/adminPage/Button";

import InfoForm from "components/adminPage/InfoForm";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "action/admin";

const Admin = () => {
  const [onEditing, setOnEditing] = useState(null);
  const [dropbox, setDropbox] = useState(false);
  const [isNewOne, setIsNewOne] = useState(true);
  const handleMouseEnter = () => setDropbox(true);
  const handleMouseLeave = () => setDropbox(false);

  const dispatch = useDispatch();
  const infos = useSelector((state) => state.admin.infos);
  useEffect(() => {
    dispatch(actions.requestInfo());
    dispatch(actions.setCurPage(0));
    return () => {};
  }, [dispatch]);

  const maxPage = useSelector((state) => state.admin.maxPage);
  const curPage = useSelector((state) => state.admin.curPage);

  useEffect(() => {
    if (infos.length) {
      dispatch(actions.setMaxPage(Math.ceil(infos.length / 10)));
    }
    setOnEditing(false);
  }, [infos, maxPage, dispatch]);

  const [info, setInfo] = useState("");
  const handleAddButton = () => {
    setOnEditing(true);
    setIsNewOne(true);
    setInfo("");
  };
  useEffect(() => {
    if (info) {
      setOnEditing(true);
      setIsNewOne(false);
    }
  }, [info]);

  const [pageNumbers, setPageNumbers] = useState([]);
  const calculatePageButton = useCallback(
    (curValue) => {
      let arr = [];
      for (let i = 0; i < 5; i++) {
        if (curValue + i >= maxPage || !maxPage) {
          break;
        }
        arr.push(curValue + i);
      }
      setPageNumbers(arr);
    },
    [maxPage]
  );
  useEffect(() => {
    console.log(curPage);
    if (curPage % 5 === 0) {
      calculatePageButton(curPage);
    }
  }, [curPage, maxPage, calculatePageButton]);

  return (
    <Layout>
      <Container>
        <ListHead>
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <WhiteBox>카테고리</WhiteBox>
            {dropbox && (
              <DropdownBox>
                <WhiteBox>카테고리</WhiteBox>
                <WhiteBox>카테고리</WhiteBox>
              </DropdownBox>
            )}
          </div>
          <SearchBox>
            <TextInput type="text"></TextInput>
            <Button isborderd={false}>
              <MdSearch></MdSearch>
            </Button>
          </SearchBox>
        </ListHead>
        <ListBox>
          {infos &&
            infos
              .slice(curPage * 10, curPage * 10 + 10)
              .map((info) => (
                <ListItem
                  info={info}
                  key={info.musical_id}
                  setParentInfo={setInfo}
                ></ListItem>
              ))}
        </ListBox>
        <BottomNav
          dispatch={dispatch}
          maxPage={maxPage}
          setCurPageAction={actions.setCurPage}
          handleAddButton={handleAddButton}
          curPage={curPage}
          pageNumbers={pageNumbers}
        ></BottomNav>
      </Container>
      <Container wide marginLeft="1vw">
        {onEditing ? (
          <InfoForm
            dispatch={dispatch}
            addAction={actions.addInfo}
            isNewOne={isNewOne}
            info={info}
          ></InfoForm>
        ) : (
          <PlusButton onClick={handleAddButton}>
            <AiFillPlusCircle />
          </PlusButton>
        )}
      </Container>
    </Layout>
  );
};

const Layout = styled.div`
  width: 92vw;
  min-width: 1050px;
  height: 100vh;
  min-height: 530px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`;
const Container = styled.div`
  width: ${(props) => (props.wide ? "50vw" : "35vw")};
  min-width: ${(props) => (props.wide ? "570px" : "400px")};
  height: 80vh;
  min-height: 530px;
  padding: 1% 1.5%;
  background-color: #ebeaea;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 15px;
`;
const ListHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const WhiteBox = styled.button`
  background-color: white;
  padding: 3px;
  border-radius: 10%/20%;
  border: solid 1px black;
  cursor: pointer;
`;
const SearchBox = styled.form`
  background-color: white;
  padding: 3px;
  border-radius: 4px;
  border: solid 1px black;
`;

const ListBox = styled.ul`
  list-style: none;
  padding: 0;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const TextInput = styled.input.attrs({ type: `text` })`
  border: none;
`;

const PlusButton = styled.div`
  text-align: center;
  margin: auto 0;
  cursor: pointer;
  & svg {
    font-size: 70px;
  }
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
    border-bottom: solid 1px black;
    border-radius: 0;
  }
  & ${WhiteBox}:last-child {
    border: none;
  }
`;
export default Admin;
