import styled, { createGlobalStyle } from "styled-components";
import mainbg from "../../../assests/mainbg.jpg";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600&display=swap');
  body {
    margin:0;
    font-family: 'Manrope', sans-serif;
    --primary-color: #ff72bf;
  }
`;

export const HomeContainer = styled.div`
  background: url(${mainbg});
  color: #ffffff;
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
`;

export const QuizIntroCont = styled.div`
     width: 486px;
    height: auto;
    background-color: #211c1ca6;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    border-radius: 9px;
    padding: 1rem;
    padding-right: 10rem;
    position: absolute;
    top: 13%;
    left: 10.5%;
  h4 {
    letter-spacing: 1px;
    word-spacing: 6px;
  }

  a{
    text-decoration:none;
  }
`;
