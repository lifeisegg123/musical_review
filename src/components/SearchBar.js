import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import styled from "styled-components";
import Button from "./adminPage/Button";

const SearchBar = ({ handleSearch }) => {
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
    <SearchBox onSubmit={handleSubmit}>
      <TextInput
        type="text"
        value={searchData}
        onChange={handleSearchDataChange}
      ></TextInput>
      <Button isBorderd={false} type="submit">
        <MdSearch></MdSearch>
      </Button>
    </SearchBox>
  );
};

export default SearchBar;

const SearchBox = styled.form`
  background-color: white;
  padding: 3px;
  border-radius: 4px;
  border: solid 1px black;
`;

const TextInput = styled.input.attrs({ type: `text` })`
  border: none;
`;
