import React from 'react'
import { SVGStyled, StyledOptionText, Tile } from '../../sc-css/atomic'

export default function SaveButton({ darkMode, user, post }) {

    return (
        <Tile className={`${darkMode} option`}>
            <SVGStyled style={{ marginRight: '2px' }}
                className={`${darkMode} `}
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path style={{ fill: "none" }} d="M17 3C18.1046 3 19 3.89543 19 5L19 19.0536C19 20.5893 17.341 21.552 16.0077 20.7901L12.9923 19.067C12.3774 18.7157 11.6226 18.7157 11.0077 19.067L7.99228 20.7901C6.65897 21.552 5 20.5893 5 19.0536L5 5C5 3.89543 5.89543 3 7 3L17 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            </SVGStyled>
            <StyledOptionText>Save</StyledOptionText>
        </Tile>
    )
}