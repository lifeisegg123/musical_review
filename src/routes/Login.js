import React, { useState } from "react";
import styled from "styled-components";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const handleOnChange = (event) => {
    const {
      target: { name, value },
    } = event;
    switch (name) {
      case "id":
        setId(value);
        break;
      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  };
  const handleOnClick = (event) => {
    event.preventDefault();
    console.log("click");
  };
  return (
    <UserForm>
      <h3>페이지 제목</h3>
      <UserInput
        type="text"
        name="id"
        value={id}
        onChange={handleOnChange}
        placeholder="ID를 입력해주세요."
      ></UserInput>
      <UserInput
        type="password"
        name="password"
        value={password}
        onChange={handleOnChange}
        placeholder="비밀번호를 입력해주세요."
      ></UserInput>
      <UserButton onClick={handleOnClick} isborderd="true" type="submit">
        로그인
      </UserButton>
    </UserForm>
  );
};

export default Login;

const UserForm = styled.form`
  width: 400px;
  height: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 10px;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.5));
`;
const UserInput = styled.input`
  margin: 3% auto;
  width: 75%;
  height: 8%;
  border: none;
  border-radius: 5px;
`;
const UserButton = styled.button`
  margin: 3% auto;
  width: 75%;
  height: 7%;
  background-color: #0095f6;
  border: none;
  border-radius: 5px;
`;
