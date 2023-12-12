import styled from "styled-components";
import {  Blue, darkButton, darkMain, darkThree, lightBackgroundColor } from "../../sc-css/COLORS";

export const Button = styled.button`
    justify-content:center;
    max-height: 38px;
    min-height: 36px;
    display: flex;
    align-items : center;   
    border-radius: 24px;
    min-width: 250px;
    outline: none;
    color:inherit;
    border : 1px solid;
    border-color:inherit;
    background-color : inherit;
    font-size:inherit;
    margin: 8px 0;
    position:relative;
    font-weight:bold;
    
    &:hover {
        cursor: pointer;
    }

    &::before {
        position:absolute;
        left:0;
        top:0;
        content:"";
        width:100%;
        height:100%;
        border-radius : inherit;
        opacity: 0;
    }

    &:hover::before, &:focus::before, &.dark:focus::before {
        opacity: 0.2;
    }

    &.dark {
        background-color: ${darkButton};
        color: ${darkThree};
    }

    &.dark::before {
        background-color: ${darkMain};
    }
    
    &.confirm:not(.dark) {
        background-color: ${Blue};
        color: ${lightBackgroundColor};
        border-color: transparent;

        &::before {
            background-color: #ffffff;
        }
    }

    &.google:not(.dark) {
        &::before {
            background-color: ${Blue};
        }

        &:hover::before, &:focus::before {
            opacity: 0.1;
            border-color: ${Blue};
        }
    }
`

export const Input = styled.input`
    height:38px;
    width: 250px;
    border-radius: 24px;
    color:inherit;
    background-color: inherit;
    border: 1px solid;
    border-color:inherit;
    font-size:inherit;
    margin-bottom:8px;
    padding-left:14px;

    &.dark {
        background-color: ${darkThree};
    }

    &:focus {
        outline:none;
    }
`

export const StyledText = styled.p`
    margin:0;
    max-width: 250px;

    &.small {
        font-size: 13px;
    }

    &.link {
        text-decoration : underline;
        color : ${Blue};
        font-weight:600;

        &:hover {
            cursor : pointer;
        }

        &.dark {
            color : ${darkButton};
        }
    }



    &.title {
        font-size: 24px; 
        font-weight: 500;
    }
`

export const Form = styled.form`
    width:100%;
    display:flex;
    flex-direction:column;
    border-color:inherit;
`