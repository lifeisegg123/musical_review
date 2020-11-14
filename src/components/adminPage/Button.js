const { default: styled } = require("styled-components");

const Button = styled.button`
  height: 25px;
  background-color: white;
  border: ${(props) => (props.isborderd ? "solid 1px black" : "none")};
  cursor: pointer;
`;

export default Button;
