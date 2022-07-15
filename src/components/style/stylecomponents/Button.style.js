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
  color: #191b7d;
  border: none;
  transition: all 0.1s ease-in-out;
  letter-spacing: 2px;
  border-radius: 6px;
  padding: 9px 10px;
  cursor: pointer;
  text-align: center;
  &:hover {
    background-color: #191b7d;
    color: var(--primary-color);
  }
`;
