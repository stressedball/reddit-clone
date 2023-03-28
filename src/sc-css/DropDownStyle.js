import styled from "styled-components";
import { lightBorder, lightBackgroundColor, darkTwo } from "./COLORS";

export const DropDownContainerStyled = styled.div`  
    position: relative;
    z-index: 100;
    border-radius: 4px;
    border: 1px solid transparent;
    font-size:14px;
    font-weight:500;
    width:270px;

    &:hover {
        border : 1px solid ${lightBorder};
        cursor:pointer;
    }

    &.drop-down-menu.not-drop:hover {
        border: 1px solid transparent;
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
    z-index: 2;
    width: inherit;
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
    top: 40px;
    left:0;
    background-color : ${lightBackgroundColor};
    display: flex;
    flex-direction:column;
    font-weight:bold;
    font-size: 14px;
    width:inherit;
    
    &.dark{
        background-color : ${darkTwo};
    }
`

