import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { HorizontalFlex, SVGStyled } from '../../sc-css/atomic'
import styled from 'styled-components'
import { darkBorder, lightDefaultBorder } from '../../sc-css/COLORS'
import ImageSVG from '../multi-usage/ImageSVG'
import PollSVG from '../multi-usage/PollSVG'

export default function NavBar({ darkMode }) {

    const navigate = useNavigate()
    const location = useLocation().pathname

    // selected option styling  
    useEffect(() => {
        if (location.split('/')[2] === 'img') document.querySelector('.parent.image').classList.add('selected')
            
        else if (location.split('/')[2] === 'poll') document.querySelector('.parent.poll').classList.add('selected')
            
        else document.querySelector('.parent.text-div').classList.add('selected')
    }, [location])

    const handleClick = (e) => {
        document.querySelectorAll('.selected').forEach(node => node.classList.remove('selected'))

        if (e.target.classList.contains('text-div')) {
            navigate('/submit')
            document.querySelector('.parent.text-div').classList.add('selected')
        } else if (e.target.classList.contains('image')) {
            navigate('/submit/img')
            document.querySelector('.parent.image').classList.add('selected')
        } else if (e.target.classList.contains('poll')) {
            navigate('/submit/poll')
            document.querySelector('.parent.poll').classList.add('selected')
        }
    }

    return (
        <HorizontalFlex >
            {/* text */}
            <StyledDiv onClick={handleClick} className={`${darkMode} parent text-div`}>
                <SVGStyled
                    className={`${darkMode} text-div`}
                    style={{ fill: "inherit", stroke: "none" }}
                    viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                    <path style={{ stroke: "inherit" }} className='text-div' d="M4.5 6.99542H4V7.99542H4.5V6.99542ZM10.5 7.99542H11V6.99542H10.5V7.99542ZM4.5 10H4V11H4.5V10ZM10.5 11H11V10H10.5V11ZM4.5 3.99738H4V4.99738H4.5V3.99738ZM10.5 4.99738H11V3.99738H10.5V4.99738ZM13.5 3.5H14V3.29289L13.8536 3.14645L13.5 3.5ZM10.5 0.5L10.8536 0.146447L10.7071 0H10.5V0.5ZM4.5 7.99542H10.5V6.99542H4.5V7.99542ZM4.5 11H10.5V10H4.5V11ZM4.5 4.99738H10.5V3.99738H4.5V4.99738ZM12.5 14H2.5V15H12.5V14ZM2 13.5V1.5H1V13.5H2ZM13 3.5V13.5H14V3.5H13ZM2.5 1H10.5V0H2.5V1ZM10.1464 0.853553L13.1464 3.85355L13.8536 3.14645L10.8536 0.146447L10.1464 0.853553ZM2.5 14C2.22386 14 2 13.7761 2 13.5H1C1 14.3284 1.67157 15 2.5 15V14ZM12.5 15C13.3284 15 14 14.3284 14 13.5H13C13 13.7761 12.7761 14 12.5 14V15ZM2 1.5C2 1.22386 2.22386 1 2.5 1V0C1.67157 0 1 0.671574 1 1.5H2Z" />
                </SVGStyled>
                <p style={{ margin: '0' }} className='text-div'>Post</p>
            </StyledDiv>


            {/* image */}
            <StyledDiv className={`${darkMode} parent image`} onClick={handleClick}>
                <ImageSVG darkMode={darkMode} />
                <p style={{ margin: '0' }} className='image'>Image</p>
            </StyledDiv>

            {/* poll */}
            <StyledDiv className={`${darkMode} parent poll`} onClick={handleClick}>
                <PollSVG darkMode={darkMode} />
                <p style={{ margin: '0' }} className='poll'>Poll</p>
            </StyledDiv>
        </HorizontalFlex>
    )
}

const StyledDiv = styled.div`
    display:flex;
    align-items:center;
    font-size: 14px;
    font-weight:700;
    padding: 15px 17px;
    width:100%;
    color: #878A8C;
    fill: rgb(135, 138, 140);
    stroke: rgb(135, 138, 140);
    position: relative;
    border-bottom : 1px solid ${lightDefaultBorder};

    &.dark {
        border : 1px solid ${darkBorder};
    }

    &::before {
        background-color: #0079d3;
        position: absolute;
        left: -1px;
        top: -1px;
        height:100%;
        width:100%;
        border: inherit;
        content:"";
        opacity: 0;
    }

    &.dark::before {
        background-color: #D7DADC;
    }

    &::after {
        border-bottom : 1px solid transparent;
    }

    &.selected {
        border-bottom: 1px solid #0079d3;
        color: #0079d3;
        fill: #0079d3;
        stroke: #0079d3;
    }

    &.dark.selected {
        color:#D7DADC;
        border-bottom: 1px solid #D7DADC;
        fill: #D7DADC;
        stroke: #D7DADC;
    }

    &:hover {
        cursor:pointer;
    }

    &:hover::before {
        opacity: 0.03;
    }

    & > * {
        flex: 1 0 auto;
    }

    &:nth-of-type(1), &:nth-of-type(2) {
        border-right : 1px solid ${lightDefaultBorder};
    }

    &.dark:nth-of-type(1), &.dark:nth-of-type(2) {
        border-right : 1px solid ${darkBorder};
    }
`