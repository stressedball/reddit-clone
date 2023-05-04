import React from 'react'
import { Tile, SVGStyled, StyledOptionText } from '../../sc-css/atomic'

export default function ShareButton({ darkMode }) {
    return (
        <Tile style={{ padding: "8px" }} className={`${darkMode} option`} >
            <SVGStyled className={`${darkMode}`} style={{ marginRight: '2px' }}
                viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/SVGStyled">
                <path d="M 19.71875 5.28125 L 18.28125 6.71875 L 24.5625 13 L 11 13 C 7.144531 13 4 16.144531 4 20 C 4 23.855469 7.144531 27 11 27 L 11 25 C 8.226563 25 6 22.773438 6 20 C 6 17.226563 8.226563 15 11 15 L 24.5625 15 L 18.28125 21.28125 L 19.71875 22.71875 L 27.71875 14.71875 L 28.40625 14 L 27.71875 13.28125 Z" />
            </SVGStyled>
            <StyledOptionText>Share</StyledOptionText>
        </Tile>
    )
}