import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


  body {
    margin:0;
    font-family:'Manrope',sans-serif ;
    --primary-color:${(props) => props.theme.primaryColor};
    --url:url(${(props) => props.theme.mainbg});
    --fontColor:${(props) => props.theme.fontColor};
    --secColor:${(props) => props.theme.secColor};
    --bgColor:${(props) => props.theme.bgColor};
    --darkBg:url(${(props) => props.theme.darkBg});
    --toggle-btn:${(props) => props.theme.toggleBtn}%;
  }
@font-face {
    font-family:'Manrope',sans-serif ;
    src: url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600&display=swap');
}

`;

export const HomeContainer = styled.div`
  background: var(--url);
  color: var(--fontColor);
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
`;

export const CircleContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  top: 30%;
  right: 17%;
  box-shadow: 0px 0px 10px 2px var(--primary-color);
  font-size: 5rem;
  color: var(--fontColor);
  background-color: var(--bgColor);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    font-size: 1rem;
    font-weight: bold;
    color: var(--primary-color);
  }
`;
export const ResultContainer = styled.div`
  width: 486px;
  height: 448px;
  overflow-y: scroll;
  color: var(--fontColor);
  background-color: var(--bgColor);
  display: flex;
  flex-direction: column;
  border-radius: 9px;
  padding: 1rem;
  align-items: center;
  position: absolute;
  top: 13%;
  left: 20%;

  a {
    text-decoration: none;
  }

  /* width */
  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: var(--bgColor);
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: var(--primary-color);
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: var(--primary-color);
  }
`;

export const QuizIntroCont = styled.div`
  width: 486px;
  height: auto;
  color: var(--fontColor);
  background-color: var(--bgColor);
  display: flex;
  flex-direction: column;
  border-radius: 9px;
  padding: 1rem;
  position: absolute;
  top: 13%;
  left: 20%;
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
  grid-template-columns: repeat(4, 358px);
  flex-wrap: wrap;
  gap: 25px;
  margin: 20px;
`;
export const CategoryWrapper = styled.div`
  background: var(--darkBg);
  color: var(--fontColor);
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
  height: 390px;
  color: var(--fontColor);
  padding: 10px 20px 20px 20px;
  background: linear-gradient(166deg, var(--secColor) 40%, var(--bgColor) 40%);
  box-shadow: 0px 0px 10px 2px var(--primary-color);
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;

  a {
    text-decoration: none;
  }
  p {
    display: inline-block;
    padding: 0rem 1rem;
    letter-spacing: 1px;
    margin-top: 4rem;
  }
  h2 {
    padding: 10px;
    letter-spacing: 2px;
    word-spacing: 1px;
    color: var(--fontColor);
  }
`;

// quiz - section

export const QuizQuestion = styled.div`
  background-color: var(--bgColor);
  display: flex;
  justify-content: center;
  padding: 20px;
  border-radius: 5px;
  width: 760px;
  height: 138px;
  margin-bottom: 20px;
  align-items: center;
`;

export const OptionsCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 250px;
  flex-wrap: wrap;
  gap: 20px;
`;
export const Option = styled.div`
  background-color: var(--bgColor);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  width: 353px;
  height: 75px;
  align-items: center;

  &:hover {
    background-color: var(--primary-color);
    cursor: pointer;
  }

  label {
    width: 100%;
  }
`;

export const QuizBtnContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
`;
export const VaspacxContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 10%;
  left: var(--toggle-btn);

  img {
    width: 43%;
  }
  a {
    text-decoration: none;
  }
`;
