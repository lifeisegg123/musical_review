import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <h1>페이지 제목</h1>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  border-bottom: solid 1px #494949;
  background-color: white;
  width: 100vw;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const HeaderContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  & h1 {
    color: #383fe8;
    margin: 0;
    padding: 20px 0;
    text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.5);
  }
`;
