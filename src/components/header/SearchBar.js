import React from 'react'
import styled from "styled-components"
import { darkThree, lightBorder, lightSecondary, lightText } from "../../sc-css/COLORS"

const StyledInput = styled.input`
    height:30px;
    outline:none;
    margin:auto;
    flex: 1 0 auto;
    border-radius : 12px;
    border: 1px solid ${lightBorder};
    max-width: 690px; 
    background-color: ${lightSecondary};
    font-weight: 400;
    font-size:14px;
    padding:0 8px;

    &.dark{
        background-color: ${darkThree};
        color: ${lightText}
    }
`
export default function SearchBar({ darkMode }) {

    return (
        <StyledInput className={`${darkMode}`} placeholder='Search RedditClone' />
    )
}
