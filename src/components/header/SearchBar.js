import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { darkDefaultBorder, darkThree, lightBorder, lightSecondary, lightText } from "../../sc-css/COLORS"
import FilterFunction from '../multi-usage/FilterFunction'

export default function SearchBar({handleCreateSub, darkMode }) {

    const [display, setDisplay] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [activeSearch, setActiveSearch] = useState()

    useEffect(() => {
        if (display) setActiveSearch('drop-down')
        else setActiveSearch()
    }, [display])

    return (
        <Container>

            <StyledInput className={`${darkMode} ${activeSearch}`}
                onClick={() => { setDisplay(!display) }} onChange={e => setInputValue(e.target.value)}
                placeholder='Search RedditClone' value={inputValue} />

            {display ?
                <DropDown className={darkMode}>
                    <FilterFunction handleCreateSub={handleCreateSub} searchString={inputValue} darkMode={darkMode} />
                </DropDown>
                : null}
        </Container>
    )
}

const DropDown = styled.div`
    position: absolute;
    top: 38px;
    left: 1px;
    background-color: inherit;
    border: 1px solid ${lightBorder};
    box-shadow: 0 2px 4px 0 rgb(28 28 28 / 20%);
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    z-index: 50;
    width: calc(50vw - 4px);

    &.dark {
        border: 1px solid #343536;
        box-shadow: 0 2px 4px 0 rgb(215 218 220 / 20%);
    }
`

const Container = styled.div`
    height: 40px;
    padding: 2px 0;
    position: relative;
    align-self:center;
    background-color: inherit;
    max-width: 690px; 
    box-sizing: border-box;
    flex: 1;
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
    width: 50vw; 
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

    &.drop-down {
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }
`