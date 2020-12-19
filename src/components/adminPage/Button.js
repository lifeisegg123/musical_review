import styled from "styled-components";

const Button = styled.button`
  height: 25px;
  color: ${({ theme }) => theme.colors.brightest};
  background-color: ${(props) =>
    props.isClicked ? props.theme.colors.dark : props.theme.colors.darkerest};
  border: none;
  cursor: pointer;
  & svg {
    font-size: 1.2em;
  }
`;

export default Button;
