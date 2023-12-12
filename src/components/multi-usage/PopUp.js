import styled from "styled-components";
import { HorizontalFlex } from "../../sc-css/atomic";
import { Blue, darkBorder, darkButton, darkHoverLight, darkMain, darkMainText, darkTwo, lightBackgroundColor, lightBorder } from "../../sc-css/COLORS";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

export default function PopUp({ message, handleDisplay }) {

    const { darkMode } = useContext(ThemeContext)

    useEffect(() => {
        setTimeout(() => {
            handleDisplay()
        }, 2000)
    }, [])

    return (
        <HorizontalFlex>
            <PopUpStyled darkMode={darkMode}>{message}</PopUpStyled>
        </HorizontalFlex>
    )
}

const PopUpStyled = styled.div`
    padding:12px 24px;
    position: fixed;
    bottom: 45px;
    max-width:270px;
    width:100%;
    left:50%;
    transform: translateX(-50%);
    border-radius:4px;
    border: 1px solid;
    font-size:14px;
    font-weight:500;
    background-color: ${props => props.darkMode === 'dark' ? darkTwo : lightBackgroundColor};
    color: ${props => props.darkMode === 'dark' ? darkMainText : darkMain};
    border-color: ${props => props.darkMode === 'dark' ? darkBorder : lightBorder};
    border-left: 4px solid ${props => props.darkMode === 'dark' ? darkButton : Blue};
    box-shadow: 0 0 12px 2px ${props => props.darkMode === 'dark' ? darkHoverLight : lightBorder};
`