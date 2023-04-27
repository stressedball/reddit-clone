import { useNavigate } from "react-router-dom"
import { useState, useContext } from "react"
import styled from "styled-components"
import { CreatePostTile, HomeMenuTile } from "../multi-usage/SpecialMenuOptions"
import { ThemeContext } from "../providers/ThemeProvider"
import { Tile, SVGStyled } from "../../sc-css/atomic"
import { darkThree, lightBorder, lightText } from "../../sc-css/COLORS"
import FilterFunction from "../multi-usage/FilterFunction"

export default function Menu({handleCreateSub, dropdownMenu, handleMenuDisplay }) {

    const navigate = useNavigate()
    const { darkMode } = useContext(ThemeContext)
    const [inputValue, setInputValue] = useState('')
    const [closeHover, setCloseHover] = useState('')

    const handleFilterSearch = (e) => { setInputValue(e.target.value) }

    return (
        <div>
            {/* Either close menu or pin menu svg */}
            <div style={{ display: "flex", justifyContent: "end", alignItems: "center" }}  >
                {
                    dropdownMenu ? null :
                        // close button
                        <SVGStyled className={`${darkMode} ${closeHover}`} style={{ marginTop: "16px", marginRight: "8px", padding: "2px", width: "20px", height: "20px" }}
                            onClick={() => handleMenuDisplay()}
                            onMouseEnter={() => setCloseHover('hover')}
                            onMouseLeave={() => setCloseHover('')}
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <g id="Menu / Close_LG">
                                <path id="Vector" d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                        </SVGStyled>
                }
            </div>

            <StyledInput onChange={(e) => handleFilterSearch(e)} type='text' id="input" value={inputValue} className={`${darkMode}  drop-down-menu`} placeholder={'Filter'} onClick={(e) => e.stopPropagation()} />

            {/* Create post */}
            <Tile className={`${darkMode}`} onClick={() => { navigate('/submit') }}>
                <CreatePostTile />
                <p style={{ margin: '0', marginLeft: "8px" }}>Create Post</p>
            </Tile>

            <FilterFunction handleCreateSub={handleCreateSub} darkMode={darkMode} searchString={inputValue} />

            {/* Home */}
            <Tile className={`${darkMode}`} onClick={() => { navigate('reddit-clone/') }}>
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
    margin-right: 24px;
    width: calc(100% - 48px);
    box-sizing:border-box;        
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
