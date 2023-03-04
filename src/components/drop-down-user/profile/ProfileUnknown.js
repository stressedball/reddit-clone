import React from 'react'
import styled from 'styled-components'
import { SVGStyled } from '../../../sc-css/atomic'

const StyledDiv = styled.div`
    display: flex;
    align-items : center;
    height : 100%;
    margin : 0 4px 0 4px;
`

export default function ProfileUnknown({ darkMode, handleDisplay }) {

    return (

        <StyledDiv onClick={() => handleDisplay()} className={`${darkMode} drop-down-user`}>

            <SVGStyled
                fill="currentColor" className={`${darkMode} drop-down-user`}
                viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                <path d="M18,17a7,7,0,1,0-7-7A7,7,0,0,0,18,17ZM18,5a5,5,0,1,1-5,5A5,5,0,0,1,18,5Z" className="clr-i-outline clr-i-outline-path-1 drop-down-user"></path>
                <path d="M30.47,24.37a17.16,17.16,0,0,0-24.93,0A2,2,0,0,0,5,25.74V31a2,2,0,0,0,2,2H29a2,2,0,0,0,2-2V25.74A2,2,0,0,0,30.47,24.37ZM29,31H7V25.73a15.17,15.17,0,0,1,22,0h0Z" className="clr-i-outline clr-i-outline-path-2 drop-down-user"></path>
                <rect x="0" y="0" width="36" height="36" fillOpacity="0" className='drop-down-user' />
            </SVGStyled>

            <SVGStyled
                fill="currentColor" className={`${darkMode} drop-down-user`} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path className='drop-down-user' d="M759.2 419.8L697.4 358 512 543.4 326.6 358l-61.8 61.8L512 667z" />
            </SVGStyled>
        </StyledDiv>
    )
}
