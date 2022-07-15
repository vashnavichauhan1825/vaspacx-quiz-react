import styled from "styled-components";


export const VaspacxLogo = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 55px;
    letter-spacing: 2px;
    padding-bottom: 23px;
    background: -webkit-linear-gradient( 349deg ,white 20%,  #ff72bf 20%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

export const RulesList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    text-align: center;
    color:var(--primary-color);
    gap: 5px;

    li{
        padding:2px;
    }
    li::before {
    content: '🚀';
    margin: 5px;
}
`