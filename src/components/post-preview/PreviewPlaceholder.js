import React, { useEffect, useState } from 'react'
import ImageDisplay from '../multi-usage/ImageDisplay'
import { useNavigate } from 'react-router-dom'
import { HorizontalFlex, SVGStyled } from '../../sc-css/atomic'
import styled from 'styled-components'

export default function PreviewPlaceholder({ post, darkMode, subId }) {

    const [placeholder, setPlaceholder] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        if (post.data.image) setPlaceholder(<ImageDisplay post={post} />)
        // if (post.data.poll)
        else setPlaceholder(<Text darkMode={darkMode} />)
    }, [])

    const handleClick = (e) => {
        if (e.target === undefined) return
        subId === null ? navigate(`/p/${post.id}`) : navigate(`/r/${subId}/p/${post.id}`)
    }

    return (
        <StyledHorFlex style={{ minHeight: "100%", width: "100px" }}
            onClick={handleClick}>
            {placeholder}
        </StyledHorFlex>
    )
}

function Text({ darkMode }) {

    return (
        <SVGStyled
            className={`${darkMode}`}
            style={{ stroke: "none" }}
            viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 6.99542H4V7.99542H4.5V6.99542ZM10.5 7.99542H11V6.99542H10.5V7.99542ZM4.5 10H4V11H4.5V10ZM10.5 11H11V10H10.5V11ZM4.5 3.99738H4V4.99738H4.5V3.99738ZM10.5 4.99738H11V3.99738H10.5V4.99738ZM13.5 3.5H14V3.29289L13.8536 3.14645L13.5 3.5ZM10.5 0.5L10.8536 0.146447L10.7071 0H10.5V0.5ZM4.5 7.99542H10.5V6.99542H4.5V7.99542ZM4.5 11H10.5V10H4.5V11ZM4.5 4.99738H10.5V3.99738H4.5V4.99738ZM12.5 14H2.5V15H12.5V14ZM2 13.5V1.5H1V13.5H2ZM13 3.5V13.5H14V3.5H13ZM2.5 1H10.5V0H2.5V1ZM10.1464 0.853553L13.1464 3.85355L13.8536 3.14645L10.8536 0.146447L10.1464 0.853553ZM2.5 14C2.22386 14 2 13.7761 2 13.5H1C1 14.3284 1.67157 15 2.5 15V14ZM12.5 15C13.3284 15 14 14.3284 14 13.5H13C13 13.7761 12.7761 14 12.5 14V15ZM2 1.5C2 1.22386 2.22386 1 2.5 1V0C1.67157 0 1 0.671574 1 1.5H2Z" />
        </SVGStyled>
    )
}

function Poll() {

}

const StyledHorFlex = styled(HorizontalFlex)`
    justify-content:center;

    &:hover {
        cursor:pointer;
    }
`