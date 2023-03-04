import styled from "styled-components";

export const Button = styled.button`
    justify-content:center;
    max-height: 38px;
    min-height: 36px;
    display: flex;
    align-items : center;   
    border-radius: 24px;
    width: 250px;
    border : 1px solid #edeff1;
    background-color : inherit;

    &:hover {
        cursor: pointer;
    }
`

export const Input = styled.input`
    height:38px;
    width: 250px;
    border-radius: 24px;
    background-color: rgb(246 247 248);
    border: none;
`


export const StyledText = styled.p`
    margin:0;
    text-align:left;
    width: 100%;
    max-width: 250px;

    &.small {
        font-size: 12px;
    }

    &.link {
        text-decoration : underline;
        color : blue;
        font-weight:600;
    }

    &.link:hover {
        cursor : pointer;
    }

    &.title {
        font-size: 24px; 
        font-weight: 500;
    }
`