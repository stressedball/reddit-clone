import styled from "styled-components";
import { lightBorder, lightBackgroundColor, darkTwo } from "./COLORS";

export const DropDownContainerStyled = styled.div`  
    position: relative;
    z-index: 200;
    border-radius: 4px;
    border: 1px solid transparent;
    font-size:14px;
    font-weight:500;
    min-width: max-content;

    &:hover {
        border : 1px solid ${lightBorder};
        cursor:pointer;
    }

    &.dark.false:hover {
        border: 1px solid #343536;
    }

    &.drop-down-menu.not-drop:hover {
        border: 1px solid transparent;
        cursor : default;
    }

    &.true {
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
        border: 1px solid #EDEFF1;
        border-bottom: 1px solid transparent;
    }

    &.dark.true {
        border: 1px solid #343536;
    }

    &.false {
        border-bottom-right-radius: 4px;
        border-bottom-left-radius: 4px;
    }
`

export const DropDownHeaderStyled = styled.div`
    z-index: 2;
    width: fit-content;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 34px;
    position:relative;
    display:flex;
    align-items: center;
`

export const DropDownDisplayed = styled.div`
    position:absolute;
    top: 34px;
    background-color : ${lightBackgroundColor};
    display: flex;
    flex-direction:column;
    font-weight:bold;
    font-size: 14px;
    min-width: max-content;
    border: 1px solid #EDEFF1;
    border-radius: 4px;
    border-top: none;
    border-top-right-radius: 0;
    border-top-left-radius: 0;

    &.drop-down-menu {
        left: -1px;
    }
    
    &.drop-down-user {
        right: -1px;
    }

    &.dark {
        background-color : ${darkTwo};
        border: 1px solid #343536;
        border-top: none;
    }
`

