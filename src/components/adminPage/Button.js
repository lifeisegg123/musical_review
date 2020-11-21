const { default: styled } = require("styled-components");

const Button = styled.button`
  height: 25px;
  background-color: ${(props) => (props.isClicked ? "#819FF7" : "white")};
  border: ${(props) => (props.isBorderd ? "solid 1px black" : "none")};
  cursor: pointer;
`;

export default Button;
