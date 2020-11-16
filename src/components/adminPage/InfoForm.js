import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import styled from "styled-components";
import Button from "./Button";

const InfoForm = ({ dispatch, isNewOne, addAction, info }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [link, setLink] = useState("");
  const [desc, setDesc] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleOnChange = (event) => {
    const {
      target: { name, value },
    } = event;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "category":
        setCategory(value);
        break;
      case "link":
        setLink(value);
        break;
      case "desc":
        setDesc(value);
        break;
      case "startDate":
        setStartDate(value);
        break;
      case "endDate":
        setEndDate(value);
        break;
      default:
        break;
    }
  };

  const [imgPath, setImgPath] = useState("");
  const [imgName, setImgName] = useState("");

  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    setImgName(theFile.name);
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setImgPath(result);
    };
    reader.readAsDataURL(theFile);
  };

  const addInfo = (event) => {
    event.preventDefault();
    if (!title || !desc || !category) {
      alert("제목, 카테고리, 설명을 모두 입력하시기 바랍니다.");
      return;
    }
    const dayRegExp = /^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])$/;
    if (startDate) {
      if (!dayRegExp.test(startDate)) {
        alert("날짜 형식이 맞지 않습니다(YYYY-MM-DD)");
      }
    } else if (endDate) {
      if (!dayRegExp.test(endDate)) {
        alert("날짜 형식이 맞지 않습니다(YYYY-MM-DD)");
      }
    }
    const data = {
      name: title,
      summary: desc,
      link: link,
      start_date: startDate,
      end_date: endDate,
      img_path: imgPath,
    };
    if (isNewOne) {
      dispatch(addAction(data));
    }
  };

  useEffect(() => {
    if (Object.keys(info).length) {
      setTitle(info.name);
      setDesc(info.summary);
      setCategory(info.category);
      setStartDate(info.start_date ? info.start_date.slice(0, 10) : "");
      setEndDate(info.end_date ? info.end_date.slice(0, 10) : "");
      setLink(info.link || "");
      setImgPath(info.img_path || "");
      setImgName("");
    } else {
      setTitle("");
      setDesc("");
      setCategory("");
      setStartDate("");
      setEndDate("");
      setLink("");
      setImgPath("");
      setImgName("");
    }
  }, [info]);

  return (
    <Form onSubmit={addInfo}>
      <Infolist>
        <InfoItem>
          <h5>공연명</h5>
          <input
            name="title"
            type="text"
            value={title}
            onChange={handleOnChange}
          />
        </InfoItem>
        <InfoItem>
          <h5>카테고리</h5>
          <input
            name="category"
            type="text"
            value={category}
            onChange={handleOnChange}
          />
        </InfoItem>
        <InfoItem>
          <h5>설명</h5>
          <input
            name="desc"
            type="text"
            value={desc}
            onChange={handleOnChange}
          />
        </InfoItem>
        <InfoItem>
          <h5>링크</h5>
          <input
            name="link"
            type="text"
            value={link}
            onChange={handleOnChange}
          />
        </InfoItem>
        <InfoItem>
          <h5>기간</h5>
          <input
            name="startDate"
            type="date"
            value={startDate}
            onChange={handleOnChange}
          />
          <p>~</p>
          <input
            name="endDate"
            type="date"
            value={endDate}
            onChange={handleOnChange}
          />
        </InfoItem>
        <InfoItem>
          <h5>이미지</h5>
          <p>{imgName}</p>
          <input
            name="img"
            type="file"
            accept="image/*"
            id="img-input"
            onChange={onFileChange}
          ></input>
          <label htmlFor="img-input">
            <BsThreeDots></BsThreeDots>
          </label>
        </InfoItem>
      </Infolist>
      <ImageContainer>
        {imgPath ? (
          <ImagePreview src={imgPath} alt="preview" />
        ) : (
          <span>이미지를 등록해주세요</span>
        )}
        <Button type="submit">{isNewOne ? "등록" : "수정"}</Button>
      </ImageContainer>
    </Form>
  );
};

export default InfoForm;

const Form = styled.form`
  text-align: center;
  height: 100%;
`;

const Infolist = styled.ul`
  height: 50%;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

const InfoItem = styled.li`
  height: 25px;
  width: 90%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  background-color: white;
  border: solid 1px black;
  & h5 {
    width: 10%;
    padding: 3px;
    margin: 0;
    border-right: solid 1px black;
  }
  & p {
    margin: 0;
  }
  & input {
    border: none;
    height: 90%;
  }
  & input[type="text"] {
    width: 90%;
  }
  & input[type="date"] {
    width: 44%;
  }
  & input[id="img-input"] {
    display: none;
  }
  & input[id="img-input"] + label {
    width: 3.5%;
    text-align: center;
    padding: 3px 0;
    border-left: solid 1px black;
  }
`;
const ImageContainer = styled.div`
  height: 40%;
`;

const ImagePreview = styled.img`
  width: 45%;
  height: 100%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 5px;
`;
