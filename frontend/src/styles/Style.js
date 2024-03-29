import React from "react";
import styled from "styled-components";

// 전체화면
export const Wrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  flex: 1 0 auto;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  background: #dff6ff;
  padding: 10px;
  flex-wrap: wrap;
  overflow: auto;
`;

//  제목
export const Article = styled.h2`
  display: flex;
  flex: 0 1 auto;
  padding: 10px; // 요소 내부 너비
  justify-content: center; // 수평 위치 설정
  align-items: center; // 수직 위치 설정
  border-style: none none double none;
  // background-color: DodgerBlue;
  line-height: 40px;
  // color: gray; // 글씨색
`;

// homepage 버튼영역
export const GoHomePage = styled.section`
  display: flex;
  flex: 0 1 auto;
  justify-content: right;
  align-items: center;
  margin-left: auto;
  // background: violet;
`;

//  main 영역
export const Main = styled.section`
  height: 550px;
  display: flex;
  flex: 0 1 auto;
  padding: 20px;
  flex-wrap: nowrap;
  // flex-wrap: wrap;
  overflow: auto;
  align-items: center;
  // justify-content: space-around;
  justify-content: center;
  // background: blue;
`;

// main 이미지
export const MainImage = styled.img`
  display: flex;
  height: 90%;
  width: 40%;
  float: left;
  margin-right: 50px;
  border: 8px solid skyblue;
  border-style: inset;
  border-radius: 30px;
`;

// main contents
export const Contents = styled.div`
  display: flex;
  height: 90%;
  width: 40%;
  border: 5px solid skyblue;
  border-style: none none none double;
  padding-left: 50px;
  // background: yellow;
  text-overflow: ellipsis;
  overflow: auto;
  text-align: left;
`;

// bottom
export const Bottom = styled.section`
  display: flex;
  flex: 0 1 auto;
  padding: 10px;
  // flex-wrap: wrap;
  // overflow: auto;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: auto;
  // background: blue;
`;

// 더보기 이미지 영역
export const MoreSection = styled.section`
  display: flex;
  flex: 0 1 auto;
  flex-wrap: nowrap;
  padding: 20px;
  margin: 10px;
  border: 3px solid skyblue;
  border-style: dotted;
  border-radius: 30px;
  // background: yellow;
  align-items: center;
  justify-content: center;
`;

// more image 태그
export const MoreImage = styled.img`
  width: 200px;
  height: 200px;
  display: flex;
  border: 0px solid;
  border-radius: 10px;
`;

// 버튼
export const Button = styled.button`
  background: none;
  font-size: 13px;
  border: 0px solid;
  border-radius: 3px;
  border-color: #dff6ff;
`;
