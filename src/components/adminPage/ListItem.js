import React from "react";
import styled from "styled-components";
const ListItem = ({ info, setParentInfo }) => {
  const onClick = (event) => setParentInfo(info);
  return (
    <List>
      <CheckboxContainer>
        <input type="checkbox" id={info.musical_id}></input>
        <Checkbox htmlFor={info.musical_id}></Checkbox>
      </CheckboxContainer>
      <ListNumber onClick={onClick}>{info.musical_id}</ListNumber>
      <ListTitle onClick={onClick}>{info.name}</ListTitle>
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
