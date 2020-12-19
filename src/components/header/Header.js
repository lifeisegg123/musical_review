import React, { useState, forwardRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";

import DropBox from "components/DropBox";
import SearchBar from "components/SearchBar";

const Header = forwardRef(({ isAdminPage, history }, ref) => {
  const listForDropbox = ["로그인", "회원가입"];
  const handleDropBox = (event) => {
    const target = event.currentTarget.innerText;
    if (target === "로그인") {
      history.push("/login");
    } else if (target === "회원가입") {
      history.push("/login");
    }
  };

  const [mobileSearchBar, setMobileSearchBar] = useState(false);
  const handleMobileSearchBar = () => setMobileSearchBar(!mobileSearchBar);

  return (
    <HeaderWrapper ref={ref}>
      <HeaderContainer>
        <h2>페이지 제목</h2>
        {!isAdminPage && (
          <>
            <ReflectiveSearchBar width="300px" />
            <UserLinks>
              <StyledLink to="login">로그인</StyledLink>
              <StyledLink to="login">회원가입</StyledLink>
            </UserLinks>
            {mobileSearchBar && <SearchBar width="100px"></SearchBar>}
            <ReflectiveDropbox>
              <SearchIcon onClick={handleMobileSearchBar} />
              <DropBox
                displayMessege={
                  <GiHamburgerMenu style={{ fontSize: "20px" }} />
                }
                listInDropbox={listForDropbox}
                handleDropboxClick={handleDropBox}
              ></DropBox>
            </ReflectiveDropbox>
          </>
        )}
      </HeaderContainer>
    </HeaderWrapper>
  );
});

export default Header;

const HeaderWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.darker};
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const HeaderContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & h2 {
    color: ${({ theme }) => theme.colors.pageTheme};
    margin: 0;
    padding: 20px 0;
  }
  @media only screen and (max-width: 768px) {
  }
`;

const ReflectiveSearchBar = styled(SearchBar)`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const UserLinks = styled.span`
  width: 13%;
  display: flex;
  justify-content: space-around;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.brightest};
  text-decoration: none;
  font-size: 12px;
  background-color: ${({ theme }) => theme.colors.bright};
  padding: 1.5px 5px 5px 5px;
  border-radius: 3px;
  white-space: nowrap;
`;

const ReflectiveDropbox = styled.span`
  display: none;
  color: ${({ theme }) => theme.colors.brightest};
  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    width: 20%;
  }
`;

const SearchIcon = styled(MdSearch)`
  font-size: 20px;
`;
