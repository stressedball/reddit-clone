import styled from "styled-components"
import { darkBorder, lightBorder } from "./COLORS"

export const StyledMenu = styled.div`
    display:flex;
    flex-direction:column;
    background-color : rgb(255 255 255);
    overflow-y: auto;
    grid-area: 2/1/3/1;
    font-size:14px;
    border-right:1px solid ${lightBorder};
    box-sizing:border-box;
    
    &.dark {
        border-right:1px solid ${darkBorder};
        background-color : rgb(26 26 27);
    }

    &.whole {
        border-right:none;
        grid-area : none;
    }
`