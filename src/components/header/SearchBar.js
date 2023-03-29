import React, { useContext, useState } from 'react'
import styled from "styled-components"
import { darkDefaultBorder, darkThree, lightBorder, lightSecondary, lightText } from "../../sc-css/COLORS"
import { GlobalContext } from '../providers/GlobalProvider'
import Subs from '../menu/Subs'
import Users from '../menu/Users'

const DropDown = styled.div`
    height: 40px;
    padding: 2px 0;
    position: relative;
    grid-column: 2;
    align-self:center;
`

const StyledInput = styled.input`
    outline:none;
    margin:auto;
    border-radius : 1.25rem;
    border: 1px solid ${lightBorder};
    background-color: ${lightSecondary};
    font-weight: 400;
    font-size:14px;
    padding:0 8px;
    height:100%;
    width: 690px; 
    box-sizing:border-box;

    &:hover, &:focus {
        border : 1px solid #0079d3;
        background-color: inherit;
    }

    &.dark {
        border : 1px solid ${darkDefaultBorder};
        background-color: ${darkThree};
        color: ${lightText}
    }
    
    &.dark:hover, &.dark:focus {
        border : 1px solid ${lightBorder};
    }
`
export default function SearchBar({ darkMode }) {

    const [display, setDisplay] = useState(false)
    const [inputValue, setInputValue] = useState()

    return (
        <DropDown>
            <StyledInput onClick={() => { setDisplay(!display) }} value={inputValue} onChange={e => setInputValue(e.target.value)} className={`${darkMode}`} placeholder='Search RedditClone' />

            {display ? <ShowContent string={inputValue} /> : null}

        </DropDown>
    )
}


function ShowContent({ string }) {
    const { users, subs } = useContext(GlobalContext)


}