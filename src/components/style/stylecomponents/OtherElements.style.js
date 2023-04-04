import styled from "styled-components";

export const VaspacxLogo = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 2rem;
  letter-spacing: 2px;
  padding-bottom: 23px;
  background: -webkit-linear-gradient(
    298deg,
    var(--fontColor) 40%,
    var(--primary-color) 20%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const RulesList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  color: var(--primary-color);
  gap: 5px;

  li {
    padding: 2px;
  }
  li::before {
    content: "🚀";
    margin: 5px;
  }
`;
export const CorrectAnswer = styled.div`
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  padding: 12px;
  border-radius: 5px;
  width: 25%;
  margin-bottom: 20px;
  align-items: center;
`;
export const ResultQuestion = styled.div`
  background-color: var(--bgColor);
  display: flex;
  justify-content: center;
  padding: 20px;
  border-radius: 5px;
  width: 90%;
  height: 58px;
  margin-bottom: 20px;
  align-items: center;
`;

export const QuestionNo = styled.span`
  width: 80px;
  height: 80px;
  position: absolute;
  border-radius: 50%;
  text-align: center;
  top: 21%;
  left: 10%;
  font-size: 4rem;
  box-shadow: 4px -5px 20px 11px var(--primary-color);
`;

export const Footer = styled.div`
  width: 88%;
  padding: 1% 6%;
  display: flex;
  justify-content: space-between;
  background-color: var(--bgColor);
  position: absolute;
  bottom: 0%;
`;

export const FooterList = styled.ul`
  list-style: none;
  display: flex;
  font-size: 20px;
  gap: 40px;

  a {
    text-decoration: none;
  }

  li {
    color: var(--primary-color);
    cursor: pointer;
  }
`;

export const Vaspacx = styled.span`
  color: var(--fontColor);
  font-size: 3rem;
  span {
    color: var(--primary-color);
  }
`;
