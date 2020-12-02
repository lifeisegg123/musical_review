import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdSearch, AiFillPlusCircle } from "react-icons/all";
import styled from "styled-components";

import Button from "components/adminPage/Button";
import InfoForm from "components/adminPage/InfoForm";
import BottomNav from "components/adminPage/BottomNav";
import ListBox from "components/adminPage/ListBox";
import Header from "components/header/Header";
import Category from "components/adminPage/Category";

const Admin = () => {
  const dispatch = useDispatch();

  const currentInfo = useSelector((state) => state.admin.curInfo);
  const [info, setInfo] = useState({});
  useEffect(() => {
    setInfo(currentInfo);
  }, [currentInfo]);

  const [onEditing, setOnEditing] = useState(false);
  const [isNewOne, setIsNewOne] = useState(true);
  const handleAddButton = () => {
    setOnEditing(true);
    setIsNewOne(true);
    setInfo({});
  };
  useEffect(() => {
    if (Object.keys(info).length) {
      setOnEditing(true);
      setIsNewOne(false);
    }
  }, [info]);

  return (
    <Layout>
      <Header></Header>
      <Wrapper>
        <Container>
          <ListHead>
            <Category dispatch={dispatch}></Category>
            <SearchBox>
              <TextInput type="text"></TextInput>
              <Button isBorderd={false}>
                <MdSearch></MdSearch>
              </Button>
            </SearchBox>
          </ListHead>
          <ListBox dispatch={dispatch}></ListBox>
          <BottomNav
            dispatch={dispatch}
            handleAddButton={handleAddButton}
          ></BottomNav>
        </Container>
        <Container wide marginLeft="1vw">
          {onEditing ? (
            <InfoForm
              dispatch={dispatch}
              isNewOne={isNewOne}
              info={info}
            ></InfoForm>
          ) : (
            <PlusButton onClick={handleAddButton}>
              <AiFillPlusCircle />
            </PlusButton>
          )}
        </Container>
      </Wrapper>
    </Layout>
  );
};
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 720px;
`;
const Wrapper = styled.div`
  width: 92vw;
  min-width: 1050px;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`;
const Container = styled.div`
  width: ${(props) => (props.wide ? "50vw" : "35vw")};
  min-width: ${(props) => (props.wide ? "570px" : "400px")};
  height: 600px;
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

const SearchBox = styled.form`
  background-color: white;
  padding: 3px;
  border-radius: 4px;
  border: solid 1px black;
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

export default Admin;
