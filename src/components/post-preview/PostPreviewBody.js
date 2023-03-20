import { useNavigate, useLocation } from "react-router"
import styled from "styled-components"

const StyledDiv = styled.div`

    &.dark {
        background-color : inherit;
    }

    &:hover {
        cursor:pointer;
    }
`

const H3 = styled.h3`
    margin:0; 
    font-weight:600;
    font-size:18px;

    &.dark{
        color: 
    }
`

export default function PostPreviewBody({ darkMode, post, sub }) {

    const navigate = useNavigate()
    const location = useLocation().pathname.split('/')

    const handleClick = (e) => {
        if (e.target === undefined) return

        if (location[1] === 'r') navigate(`p/${post.id}`)
        else navigate(`r/${sub.id}/p/${post.id}`)
    }

    return (

        <StyledDiv onClick={handleClick} className={`${darkMode}`}>

            <h3 style={{ margin: "0", fontWeight: "500", fontSize: "18px" }}>{post.data.title}</h3>

        </StyledDiv>
    )
}