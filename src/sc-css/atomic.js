import styled from "styled-components"
import { darkBorder, darkHoverLight, lightGrayHover, lightBorder, lightDefaultBorder } from "./COLORS";

export const MainOutlet = styled.div`
    display: flex;
    padding: 20px 24px;
    justify-content: center;    
`

export const BlueButton = styled.button`
    font-weight:bold;
    color:white;
    background-color: #0079D3;
    border-radius:12px;
    border:none;
    padding: 4px 16px;
    width: 120px;
    font-size:14px;
    min-height:32px;
    min-width: fit-content;
    position:relative;

    &::before {
        background-color: #ffffff;
        position:absolute;
        left:0;
        top:0;
        content:"";
        width:100%;
        height:100%;
        border-radius : inherit;
        opacity: 0;
    }

    &:hover::before {
        opacity:0.2;
        cursor:pointer;
    }
`

export const SVGStyled = styled.svg`
    width : 22px;
    height: 22px;
    fill: rgb(135, 138, 140);
    stroke: rgb(135, 138, 140);

    &.small {
        width : 18px;
        height : 18px;
    }
    
    &.dark {
        fill : rgb(129, 131, 132);
        stroke : rgb(129, 131, 132);
    }

    &:hover {
        cursor : inherit;
    }
`

export const StyledLink = styled.p`
    font-size:12px;
    text-decoration:underline;
    margin: 0;
    min-height: 20px;
    margin-left: 4px;

    &:hover{
        cursor:pointer;
    }
`

export const LightText = styled.p`
    color:rgb(120, 124, 126);
    margin-top:0;
    margin: 0;
    min-height: 20px;
`

export const Hoverable = styled.span`
    &:hover {
        text-decoration:underline;
        cursor:pointer;
    }
`

export const HorizontalFlex = styled.div`
    display: flex;
    align-items: center;
`

export const Tile = styled.div`
    display: flex;
    align-items:center;
    padding : 8px 24px;
    box-sizing:border-box;
    width:100%;
    border-radius:inherit;
    height:100%;

    &.option {
        font-size:12px;
        font-weight:700;
        border-radius:4px;
        padding: 8px;
        max-width:fit-content;
        box-sizing: none;
    }

    &:hover {
        cursor:pointer;
        background-color: ${lightGrayHover};
    }
    
    &.dark:hover {
        background-color: ${darkHoverLight};
    }

    &.no-hover:hover {
        cursor:default;
        background-color:unset;
    }
`

export const MenuSmallTitles = styled.p`
    font-size:10px;
    font-weight:500;
    text-transform:uppercase;
    color:#878A8C;
    padding-left:20px;
    margin-bottom: 1px;

    &:hover {
        cursor: default;
    }
`

export const StyledOptionText = styled.p`
    font-size: 12px;
    font-weight: 700;
    color: rgb(135, 138, 140);
    margin: 0;
    min-width: fit-content;
    
    &.dark{
        color: rgb(133, 135, 137);
    }

`

export const HR = styled.hr`
    margin: 16px 0;
    max-width: 100%; 
    border: none;
    background-color: rgb(26 26 27 / 7%); 
    height: 1px;
    box-sizing:border-box;

    &.dark {
        background-color: ${darkBorder};
    }
`

export const ListDiv = styled.div`
    gap : 16px;
    display : flex;
    flex-direction:column;
    margin-right: 12px;
    
    &.private{
        flex : 1;
        gap: 0;
    }

    & > .private:last-child {
        border-bottom: 1px solid ${lightBorder};
    }

    & > .private:last-child:hover {
        border-bottom: 1px solid #898989;
    }

    & > .private.dark:last-child {
        border-bottom: 1px solid ${darkBorder};
    }

    & > .private.dark:last-child:hover {
        border-bottom: 1px solid ${lightDefaultBorder};
    }

`

// COMMENTS MOSTLY
export const CommentActiveContainer = styled.div`
    box-sizing:border-box;
    margin-top: 12px;
    margin-right:40px;
    display:flex;
    flex-direction:column;
`

export const TextArea = styled.textarea`
    width: 100%;
    resize:vertical;
    min-height:122px;
    border:1px solid ${lightBorder};
    background-color:inherit;
    border-top-right-radius:4px;
    border-top-left-radius:4px;
    border-bottom: none;
    box-sizing:border-box;
    content:"";
    padding: 8px 16px;
    
    &:focus {
        outline: none;
    }

    &.dark, &.whole.dark {
        border:1px solid ${darkBorder};
        color: inherit;
    }

    &.dark:focus, &.whole.dark:focus {
        border: 1px solid ${lightBorder};
    }

    &.whole {
        border: 1px solid #EDEFF1;
        border-bottom-right-radius:4px;
        border-bottom-left-radius:4px;
        border-bottom:1px solid inherit;
    }

    &.whole:focus {
        border: 1px solid black;
        outline: none;
    }
`

export const CancelButton = styled.button`
    color: #0079D3;
    background-color: inherit;
    position: relative;

    &::before {
        content:'';
        position: absolute;
        background-color: #0079D3;
        height:100%;
        width:100%;
        top: 0;
        left: 0;
        border-radius: inherit;
        opacity: 0;
    }

    &.dark::before {
        background-color: #D7DADC;
    }

    &:hover {
        cursor: pointer;
    }

    &:hover::before {
        opacity: 0.04;
    }

    &.dark {
        color: inherit;
    }
`

export const ConfirmButton = styled.button`
    background-color:#364266;
    filter:grayscale(1);
    color:rgba(255, 255, 255, 0.5);

    &.enabled {
        background-color:rgb(74 150 196);
        filter : none;
        color: rgb(255 255 255);
    }

    &.enabled:hover {
        cursor : pointer;
    }

    &:hover {
        cursor: not-allowed;
    }

    &.dark.enabled {
        background-color:rgb(215, 218, 220);
        color:rgb(26, 26, 27);
    }
`

export const BottomButtonsDiv = styled.div`
    box-sizing: border-box;
    display:flex;
    justify-content: end;
    background-color: #F6F7F8;
    padding:4px 8px 4px 8px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    margin-bottom:12px;
    border: 1px solid ${lightBorder};
    width:inherit;

    &.dark {
        background-color: #272729;
        border: 1px solid ${darkBorder};
    }

    & > button {
        font-size: 12px;
        font-weight:700;
        margin: 0;
        border-radius: 14px;
        padding: 0 20px;
        margin: auto 8px;
        height: 24px;
        border: none;
    }
`