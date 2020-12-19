import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import styled from "styled-components";
import Button from "./adminPage/Button";

const SearchBar = ({ handleSearch, width, className }) => {
  const [searchData, setsearchData] = useState("");
  const handleSearchDataChange = (event) => {
    const {
      target: { value },
    } = event;
    setsearchData(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchData);
  };
  return (
    <SearchBox onSubmit={handleSubmit} className={className}>
      <TextInput
        type="text"
        value={searchData}
        onChange={handleSearchDataChange}
        width={width}
      ></TextInput>
      <Button type="submit">
        <MdSearch></MdSearch>
      </Button>
    </SearchBox>
  );
};

export default SearchBar;

const SearchBox = styled.form`
  background-color: #121212;
  padding: 3px;
  border-radius: 4px;
  border: solid 1px ${({ theme }) => theme.colors.brightest};
`;

const TextInput = styled.input.attrs({ type: `text` })`
  background-color: ${({ theme }) => theme.colors.darkerest};
  border: none;
  color: ${({ theme }) => theme.colors.brightest};
  ${(props) => props.width && `width: ${props.width}`}
`;
