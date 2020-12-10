import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

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

const dropDown = keyframes`
  0%{
  transform: translateY(-50%) scale(0.5);
  opacity: 0;
}
  100%{
  transform: translateY(0) scale(1);
  opacity: 1;
  }
`;

const WhiteBox = styled.button`
  background-color: white;
  padding: 3px;
  border-radius: 3px;
  border: solid 1px black;
  vertical-align: middle;
  white-space: nowrap;

  cursor: pointer;
`;

const DropdownBox = styled.div`
  position: absolute;
  background-color: white;
  padding: 0 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 3px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
  animation: ${dropDown} 0.3s ease-out;

  & ${WhiteBox} {
    border: none;
    width: 100%;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.7);
    margin: 2px 0;
  }
  & ${WhiteBox}:last-child {
    border: none;
  }
`;
