import styled from "styled-components"

export const StyledMenu = styled.div`
    display:flex;
    flex-direction:column;
    background-color : rgb(255 255 255);
    overflow-y: auto;
    grid-area: 2/1/3/1;

    &.dark {
        background-color : rgb(26 26 27);
    }

    &.whole {
        grid-area : none;
    }
`