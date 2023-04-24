import { useNavigate } from "react-router-dom"
import { useState, useContext } from "react"
import styled from "styled-components"
import { CreatePostTile, HomeMenuTile } from "../multi-usage/SpecialMenuOptions"
import { ThemeContext } from "../providers/ThemeProvider"
import { Tile, SVGStyled } from "../../sc-css/atomic"
import { darkThree, lightBorder, lightText } from "../../sc-css/COLORS"
import FilterFunction from "../multi-usage/FilterFunction"

export default function Menu({ dropdownMenu, handleMenuDisplay }) {

    const navigate = useNavigate()
    const { darkMode } = useContext(ThemeContext)
    const [inputValue, setInputValue] = useState('')

    const handleFilterSearch = (e) => { setInputValue(e.target.value) }

    return (
        <div>
            {/* Either close menu or pin menu svg */}
            <div style={{ display: "flex", justifyContent: "end", alignItems: "center" }}  >
                {dropdownMenu ? null :
                    // close button
                    <SVGStyled style={{ width: "32px", height: "32px" }}
                        onClick={() => handleMenuDisplay()}
                        viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g id="icomoon-ignore"></g>
                        <path d="M10.722 9.969l-0.754 0.754 5.278 5.278-5.253 5.253 0.754 0.754 5.253-5.253 5.253 5.253 0.754-0.754-5.253-5.253 5.278-5.278-0.754-0.754-5.278 5.278z" fill="currentColor"></path>
                    </SVGStyled>}
            </div>

            <StyledInput onChange={(e) => handleFilterSearch(e)} type='text' id="input" value={inputValue} className={`${darkMode}  drop-down-menu`} placeholder={'Filter'} onClick={(e) => e.stopPropagation()} />

            {/* Create post */}
            <Tile className={`${darkMode}`} onClick={() => { navigate('/submit') }}>
                <CreatePostTile />
                <p style={{ margin: '0', marginLeft: "8px" }}>Create Post</p>
            </Tile>

            <FilterFunction darkMode={darkMode} searchString={inputValue} />

            {/* Home */}
            <Tile className={`${darkMode}`} onClick={() => { navigate('/') }}>
                <HomeMenuTile />
                <p style={{ margin: "0", marginLeft: "8px" }}>Home</p>
            </Tile>
        </div>
    )
}

const StyledInput = styled.input`
    height:30px;
    outline:none;
    margin-left: 24px;
    border: 1px solid transparent;
    background-color: #f6f7f8;
    margin-top:4px;
    
    &:hover {
        border : 1px solid #0079d3;
    }

    &:focus {
        border : 1px solid #0079d3;
        background-color: inherit;
    }

    &.dark{
        background-color: ${darkThree};
        color:${lightText};
    }

    &.dark:focus, &.dark:hover {
        border : 1px solid ${lightBorder};
    }
`
