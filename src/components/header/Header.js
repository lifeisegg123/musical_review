import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";

import DropBox from "components/DropBox";
import SearchBar from "components/SearchBar";

const Header = ({ isAdminPage, history }) => {
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
    <HeaderWrapper>
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
};

export default Header;

const HeaderWrapper = styled.div`
  border-bottom: solid 1px #494949;
  background-color: white;
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
    color: #383fe8;
    margin: 0;
    padding: 20px 0;
    text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.5);
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
  color: black;
  text-decoration: none;
  font-size: 12px;
  background-color: #eaeaea;
  padding: 1.5px 5px 5px 5px;
  border-radius: 3px;
  white-space: nowrap;
`;

const ReflectiveDropbox = styled.span`
  display: none;
  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    width: 20%;
  }
`;

const SearchIcon = styled(MdSearch)`
  font-size: 20px;
`;
