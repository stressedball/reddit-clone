import styled from "styled-components"
import { darkHoverLight, lightGrayHover } from "./COLORS";

export const mousePointer = styled.p`
    &:hover{
        cursor:pointer;
    }
`

export const BlueButton = styled.button`
    font-weight:bold;
    color:white;
    background-color: #0079D3;
    border-radius:12px;
    border:none;
    padding: 4px 16px ;
    width: 120px;
    font-size:14px;
    min-height:32px;
    min-width:32px;
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
    width : 20px;
    height : 20px;
    fill: rgb(135, 138, 140);

    & > path {
        stroke: rgb(135, 138, 140);
    }
    
    &.dark {
        fill : rgb(215 218 220);
    }

    &.dark > path {
        stroke : rgb(215 218 220);
    }

    &:hover {
        cursor : pointer;
    }
`

export const StyledLink = styled.p`
    font-size:12px;
    text-decoration:underline;
    margin: 0;
    height: 20px;

    &:hover{
        cursor:pointer;
    }
`

export const LightText = styled.p`
    color:rgb(120, 124, 126);
    margin-top:0;
    margin: 0;
    height: 20px;
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

    &:hover {
        cursor:pointer;
        background-color: ${lightGrayHover};
    }
    
    &.dark:hover {
        background-color: ${darkHoverLight};
    }
`

export const MenuSmallTitles = styled.p`
    font-size:10px;
    font-weight:500;
    text-transform:uppercase;
    color:#878a8c;
    padding-left:20px;

    &:hover {
        cursor: default;
    }
`

export const StyledOptionText = styled.p`
    font-size: 12px;
    font-weight: 700;
    color: rgb(135, 138, 140);

    &.dark{
        color: rgb(133, 135, 137);
    }

`