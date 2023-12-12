import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { darkDefaultBorder, darkThree, lightBorder, bottomBoxColor, lightText } from "../../sc-css/COLORS"
import FilterFunction from '../multi-usage/FilterFunction'
import SearchSVG from '../multi-usage/SVGs/SearchSVG'

export default function SearchBar({ handleCreateSub, darkMode }) {

    const [display, setDisplay] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [activeSearch, setActiveSearch] = useState()

    useEffect(() => {
        if (display) setActiveSearch('drop-down')
        else setActiveSearch()
    }, [display])

    useEffect(() => {
        const handleDisplay = (e) => {
            if (!e.target.classList.contains('search-redditClone')) setDisplay(false)
        }
        window.addEventListener('click', handleDisplay)
        return () => window.removeEventListener('click', handleDisplay)
    }, [])

    return (
        <Container className={`${darkMode} ${activeSearch} search-redditClone`}>

            <div className='search-redditClone' style={{ margin: "auto 10px", height: "100%", width: "25px", display: "flex", alignItems: "center", justifyContent: "center" }}><SearchSVG darkMode={darkMode} className='search-redditClone' /></div>

            <StyledInput className='search-redditClone' placeholder='Search RedditClone' value={inputValue} onClick={() => { setDisplay(!display) }} onChange={e => setInputValue(e.target.value)} />

            {
                display ?
                    <DropDown className={darkMode}>
                        <FilterFunction handleCreateSub={handleCreateSub} searchString={inputValue} darkMode={darkMode} />
                    </DropDown>
                    : null
            }
        </Container>
    )
}

const DropDown = styled.div`
    position: absolute;
    top: 38px;
    left: -1px;
    background-color: inherit;
    border: 1px solid ${lightBorder};
    box-shadow: 0 2px 4px 0 rgb(28 28 28 / 20%);
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    z-index: 50;
    width: 100%;

    &.dark {
        border: 1px solid #343536;
        box-shadow: 0 2px 4px 0 rgb(215 218 220 / 20%);
    }
`

const Container = styled.div`
    height: 40px;
    position: relative;
    align-self:center;
    margin: auto;
    background-color: inherit;
    max-width: 690px; 
    box-sizing: border-box;
    display: flex;
    border-radius : 1.25rem;
    border: 1px solid ${lightBorder};
    background-color: ${bottomBoxColor};
    width:100%;

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

const StyledInput = styled.input`
    outline:none;
    margin:auto;
    font-weight: 400;
    font-size:14px;
    height:100%;
    width: 100%; 
    box-sizing:border-box;
    background-color:inherit;
    border: none;
    border-radius: inherit;
    color:inherit;
`
