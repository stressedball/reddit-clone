import styled from "styled-components"
import { lightBorder, lightBackgroundColor } from "./COLORS";

export const noMarginP = styled.p`
`

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
    
    &.dark {
        fill : rgb(215 218 220);
    }

    &:hover {
        cursor : pointer;
    }
`

export const StyledLink = styled.p`
    font-size:12px;
    text-decoration:underline;
    
    &:hover{
        cursor:pointer;
    }
`

export const LightText = styled.p`
    color:rgb(120, 124, 126);
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
    min-height : 50px;
    padding : 2px 4px;

    &:hover {
        cursor:pointer;
        background-color: rgba(0, 0, 0, 0.04);
    }
    
    &.dark:hover {
        background-color: rgba(255, 255, 255, 0.04);
    }
`

export const MenuSmallTitles = styled.p`
    font-size:10px;
    font-weight:500;
    text-transform:uppercase;
    color:#878a8c;

    &:hover {
        cursor: default;
    }
`