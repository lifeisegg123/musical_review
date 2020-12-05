import React, { useState } from "react";
import styled from "styled-components";

const DropBox = ({
  displayMessege,
  listInDropbox,
  handleDropboxClick,
  className,
}) => {
  const [dropbox, setDropbox] = useState(false);
  const handleMouseEnter = () => setDropbox(true);
  const handleMouseLeave = () => setDropbox(false);
  const handleClick = () => setDropbox(!dropbox);
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={className}
    >
      {typeof displayMessege === "string" ? (
        <WhiteBox>{displayMessege}</WhiteBox>
      ) : (
        displayMessege
      )}

      {dropbox && (
        <DropdownBox>
          {listInDropbox &&
            listInDropbox.map((value) => (
              <WhiteBox key={value} onClick={handleDropboxClick}>
                {value}
              </WhiteBox>
            ))}
        </DropdownBox>
      )}
    </div>
  );
};

export default DropBox;

const WhiteBox = styled.button`
  background-color: white;
  padding: 3px;
  border-radius: 5px;
  border: solid 1px black;
  vertical-align: middle;
  white-space: nowrap;
  cursor: pointer;
`;

const DropdownBox = styled.div`
  position: absolute;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: solid 1px black;
  & ${WhiteBox} {
    border: none;
    width: 100%;
    border-bottom: solid 1px black;
    border-radius: 0;
  }
  & ${WhiteBox}:last-child {
    border: none;
  }
`;
