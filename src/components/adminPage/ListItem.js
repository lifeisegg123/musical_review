import React, { useState } from "react";
import styled from "styled-components";
import { actions } from "action/admin";
const ListItem = ({ item, dispatch }) => {
  const onClick = (event) => {
    dispatch(actions.requestCurInfo(item.musical_id));
  };
  const [checked, setChecked] = useState(false);
  const handleCheck = () => {
    if (!checked) {
      dispatch(actions.addDeletionList(item.musical_id));
    } else {
      dispatch(actions.removeDeletionList(item.musical_id));
    }
    setChecked(!checked);
  };
  return (
    <List>
      <CheckboxContainer>
        <input
          type="checkbox"
          id={item.musical_id}
          value={checked}
          onClick={handleCheck}
        ></input>
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
  height: 29.6px;
  display: flex;
  align-items: center;
  background-color: white;
  border: solid 1px black;
  margin-bottom: 15px;
`;
const Checkbox = styled.label`
  cursor: pointer;
  width: 23px;
  height: 30px;
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
