import { useNavigate } from "react-router-dom"
import { useState, useContext } from "react"
import styled from "styled-components"
import { ThemeContext } from "../providers/ThemeProvider"
import { Tile, SVGStyled } from "../../sc-css/atomic"
import { darkThree, lightBorder, lightText } from "../../sc-css/COLORS"
import FilterFunction from "../multi-usage/FilterFunction"
import CreateSVG from "../multi-usage/SVGs/CreateSVG"
import HomeSVG from "../multi-usage/SVGs/HomeSVG"

export default function Menu({ handleCreateSub, dropdownMenu, handleMenuDisplay }) {

    const navigate = useNavigate()
    const { darkMode } = useContext(ThemeContext)
    const [inputValue, setInputValue] = useState('')

    const handleFilterSearch = (e) => { setInputValue(e.target.value) }

    return (
        <div>
            {/* Either close menu or pin menu svg */}
            <div style={{ display: "flex", justifyContent: "end", alignItems: "center" }}  >
                {
                    dropdownMenu ? null :
                        // close button
                        <Tile className={`${darkMode} option`} onClick={() => handleMenuDisplay()}
                        style={{marginTop: "8px", marginRight: "8px"}}>

                            <SVGStyled className={`${darkMode}`}
                                style={{  padding: "2px" }}
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <g style={{ stroke: "inherit", fill: "none" }} id="Menu / Close_LG">
                                    <path style={{ stroke: "inherit", fill: "inherit" }} id="Vector" d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </g>

                            </SVGStyled>
                        </Tile>
                }
            </div>

            <StyledInput onChange={(e) => handleFilterSearch(e)} type='text' id="input" value={inputValue} darkMode={darkMode} className={`${darkMode}  drop-down-menu`} placeholder={'Filter'} onClick={(e) => e.stopPropagation()} />

            {/* Create post */}
            <div>
                <Tile className={`${darkMode}`} onClick={() => { navigate('/submit') }}>
                    <CreateSVG />
                    <p style={{ margin: '0', marginLeft: "8px" }}>Create Post</p>
                </Tile>
            </div>

            <FilterFunction handleCreateSub={handleCreateSub} darkMode={darkMode} searchString={inputValue} />

            {/* Home */}
            <div>
                <Tile className={`${darkMode}`} onClick={() => { navigate('reddit-clone/') }}>
                    <HomeSVG />
                    <p style={{ margin: "0", marginLeft: "8px" }}>Home</p>
                </Tile>
            </div>

        </div>
    )
}

const StyledInput = styled.input`
    height:30px;
    outline:none;
    border: 1px solid transparent;
    background-color: ${props => props.darkMode === 'dark' ? darkThree : '#f6f7f8'};
    color: ${props => props.darkMode === 'dark' ? lightText : 'inherit'};
    margin : 4px 24px;
    width: calc(100% - 48px);
    box-sizing:border-box;        

    &:hover, &:focus {
        border-color : ${props => props.darkMode === 'dark' ? lightBorder : '#0079d3'};
    }

`
