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
        <ItemBox>{displayMessege}</ItemBox>
      ) : (
        displayMessege
      )}

      {dropbox && (
        <DropdownBox>
          {listInDropbox &&
            listInDropbox.map((value) => (
              <ItemBox key={value} onClick={handleDropboxClick}>
                {value}
              </ItemBox>
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

const ItemBox = styled.button`
  background-color: ${({ theme }) => theme.colors.darker};
  color: ${({ theme }) => theme.colors.brightest};
  padding: 3px;
  border-radius: 3px;
  border: solid 1px black;
  vertical-align: middle;
  white-space: nowrap;

  cursor: pointer;
`;

const DropdownBox = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.bright};
  padding: 0 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  border-radius: 3px;
  animation: ${dropDown} 0.3s ease-out;

  & ${ItemBox} {
    border: none;
    width: 100%;
    margin: 2px 0;
  }
  & ${ItemBox}:last-child {
    border: none;
  }
`;
