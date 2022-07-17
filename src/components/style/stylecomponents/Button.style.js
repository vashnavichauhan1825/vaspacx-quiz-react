import styled from "styled-components";

export const EffectButton = styled.button`
  width: 167px;
  background: linear-gradient(142deg, var(--primary-color) 35%, white 36%);
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  height: 40px;
  display: flex;
  font-weight: bold;
  padding: 9px 10px;
  margin: 20px 20px;
  border: none;
  letter-spacing: 1px;
  border-radius: 6px;
  color: var(--primary-color);
  justify-content: space-between;

  &:hover {
    justify-content: center;
    background: linear-gradient(189deg, var(--primary-color) 75%, white 36%);
    color: #ffffff;
  }
  i {
    color: #ffffff;
  }
`;

export const NormalButton = styled.div`
  font-size: 1rem;
  font-weight: bold;
  background-color: var(--primary-color);
  color: var(--secColor);
  border: none;
  transition: all 0.1s ease-in-out;
  letter-spacing: 2px;
  border-radius: 6px;
  padding: 9px 10px;
  cursor: pointer;
  text-align: center;
  &:hover {
    background-color: var(--secColor);
    color: var(--primary-color);
  }
`;

export const PrimaryButton = styled.button`
  cursor: pointer;
  width: 100px;
  height: 40px;
  margin: 10px 15px;
  padding: 5px 5px;
  font-weight: 600;
  border: none;
  letter-spacing: 1px;
  background-color: var(--primary-color);
  opacity: 0.8;
  color: var(--secColor);
  transition: all 0.1s ease-in-out;

  &:hover {
    cursor: pointer;
    opacity: 1;
    color: var(--primary-color);
    border-bottom: 2px solid var(--primary-color);
    background-color: var(--secColor);
  }
`;

export const SecButton = styled.button`
  background-color: rgb(0, 0, 0);
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  width: 100px;
  height: 40px;
  padding: 9px 10px;
  margin: 20px 20px;
  letter-spacing: 1px;
  border-radius: 6px;
  transition: all 0.1s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: var(--primary-color);
    color: #ffffff;
  }
`;

export const ToggleThemeBtn = styled.div`
  width: 30px;
  height: 30px;
  border: none;
  background: transparent;
  position: absolute;
  top: 3%;
  cursor:pointer;
  right: 2%;

  img {
    width: 30px;
    height: 30px;
  }
`;
