import { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router"
import styled from "styled-components"

export default function PostPreviewBody({ darkMode, post, sub }) {

    const navigate = useNavigate()
    const location = useLocation().pathname.split('/')
    const [titleStyle, setTitleStyle] = useState()

    const handleClick = (e) => {
        if (e.target === undefined) return
        if (location[1] === 'r') navigate(`p/${post.id}`)
        else navigate(`/r/${sub.id}/p/${post.id}`)
    }

    useEffect(() => {
        if (location[1] === 'u') setTitleStyle('user')
        if (location[3] === 'p') setTitleStyle('post')
        else setTitleStyle('preview')
    }, [location])

    return (
        <StyledDiv onClick={handleClick} className={`${darkMode}`}>
            <Title className={titleStyle}>{post.data.title}</Title>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    &.dark {
        background-color : inherit;
    }

    &:hover {
        cursor:pointer;
    }
`

const Title = styled.h3`
    font-weight: 500;

    &.post {
        margin: 8px 0; 
        font-size:20px;
    }

    &.preview {
        margin: 4px 0 5px 0;
        font-size: 16px;
    }

    &.user {
        font-size: 18px;
    }
`