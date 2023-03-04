import styled from "styled-components";
import { lightBorder, lightBackgroundColor } from "./COLORS";

export const DropDownContainerStyled = styled.div`
    position: relative;
    z-index: 1;
    border-radius: 4px;
    border: 1px solid transparent;

    &:hover {
        border : 1px solid ${lightBorder};
        cursor:pointer;
    }

    &.true {
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
        border-bottom: 1px solid transparent;
    }

    &.false {
        border-bottom-right-radius: 4px;
        border-bottom-left-radius: 4px;
    }
`
export const DropDownHeaderStyled = styled.div`
    z-index: 2;
    width: inherit;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 32px;
    position:relative;
`
export const DropDownDisplayed = styled.div`
    position:absolute;
    top:39px;
    left:0;
    background-color : ${lightBackgroundColor}
    display: flex;
    flex-direction:column;
    width:max-content;
    font-weight:bold;
    font-size: 14px;
`

export const Tile = styled.div`
    display: flex;
    align-items:center;
    min-height : 50px;

    &:hover{
        background-color: #0079d3;
        color:${lightBackgroundColor};
    }

    &:hover > * {
        color:${lightBackgroundColor};
    }
`