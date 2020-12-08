import React from "react";
import styled from "styled-components";

import Img from "mockup/img/listitem.jpg";

const DetailedResult = () => {
  return (
    <ResultList>
      <ListItemBox>
        <div class="results__lists--item">
          <img src={Img} alt="onscreen" />
          <h5>제목</h5>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </ListItemBox>
      <ListItemBox>
        <div class="results__lists--item">
          <img src={Img} alt="onscreen" />
          <h5>제목</h5>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </ListItemBox>
      <ListItemBox>
        <div class="results__lists--item">
          <img src={Img} alt="onscreen" />
          <h5>제목</h5>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </ListItemBox>
    </ResultList>
  );
};

export default DetailedResult;

const ResultList = styled.ul`
  list-style: none;
`;

const ListItemBox = styled.li`
  display: flex;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  padding: 10px;
  border-bottom: solid 1px black;
  & div > img {
    width: 100px;
    height: 180px;
  }
  & div > h5 {
    text-align: center;
    margin: 0;
  }
  & p {
    margin-left: 30px;
  }
`;
