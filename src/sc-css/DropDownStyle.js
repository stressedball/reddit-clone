import styled from "styled-components";
import { lightBorder, lightBackgroundColor } from "./COLORS";

export const DropDownContainerStyled = styled.div`
    position: relative;
    z-index: 1;
    border-radius: 4px;
    border: 1px solid transparent;
    font-size:14px;
    font-weight:500;

    &:hover {
        border : 1px solid ${lightBorder};
        cursor:pointer;
    }

    &.drop-down-menu.not-drop:hover {
        border: none;
        cursor : default;
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
    display:flex;
    align-items: center;
    justify-content:center;
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
    background-color : ${lightBackgroundColor};
    display: flex;
    flex-direction:column;
    font-weight:bold;
    font-size: 14px;

    &.dark{
        background-color : rgb(26 26 27);
    }
`

