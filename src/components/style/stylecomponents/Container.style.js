import styled, { createGlobalStyle } from "styled-components";
import mainbg from "../../../assests/mainbg.jpg";
import darkbg from "../../../assests/darkbg.jpg";
export const GlobalStyle = createGlobalStyle`


  body {
    margin:0;
    font-family:'Manrope',sans-serif ;
    --primary-color: #ff72bf;
  }
@font-face {
    font-family:'Manrope',sans-serif ;
    src: url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600&display=swap');
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

  a {
    text-decoration: none;
  }
`;

export const QuizCategoryCont = styled.div`
  display: grid;
  grid-template-columns: repeat(4,358px);
  flex-wrap: wrap;
  gap: 25px;
  margin: 20px;
`;
export const CategoryWrapper = styled.div`
  background: url(${darkbg});
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
`;

export const CategoryCard = styled.div`
  height: 485px;
  color: white;
  padding: 10px 20px 20px 20px;
  background: linear-gradient(166deg, #191b7d 40%, #211c1ca6 40%);
  box-shadow: 0px 0px 10px 2px var(--primary-color);
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  
  p{
    display: inline-block;
    padding: 0rem 1rem;
    letter-spacing: 1px;
    margin-top: 4rem;
    line-height: 2;
  }
  h2{
    padding: 10px;
    letter-spacing:2px;
    word-spacing:1px;
    color: white;
  }
`;
