import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { actions } from "action/admin";
const ListItem = ({ item, dispatch }) => {
  const onClick = (event) => {
    dispatch(actions.requestCurInfo(item.musical_id));
  };

  return (
    <List>
      <CheckboxContainer>
        <input type="checkbox" id={item.musical_id}></input>
        <Checkbox htmlFor={item.musical_id}></Checkbox>
      </CheckboxContainer>
      <ListNumber onClick={onClick}>{item.musical_id}</ListNumber>
      <ListTitle onClick={onClick}>{item.name}</ListTitle>
    </List>
  );
};

export default ListItem;

const List = styled.li`
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: white;
  border: solid 1px black;
  margin-bottom: 3%;
`;
const Checkbox = styled.label`
  cursor: pointer;
  width: 23px;
  height: 27px;
  margin: 0;
  display: block;
`;

const CheckboxContainer = styled.form`
  & input {
    display: none;
  }
  & input:checked + ${Checkbox} {
    background-color: #666666;
  }
`;

const ListNumber = styled.h4`
  width: 35px;
  margin: 0;
  padding: 4px 0;
  border-left: solid 1px black;
  border-right: solid 1px black;
  text-align: center;
`;
const ListTitle = styled.h4`
  margin: 0;
  padding: 4px 0;
  width: 100%;
  text-align: center;
`;
