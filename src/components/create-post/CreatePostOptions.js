import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GlobalContext } from '../providers/GlobalProvider'
import handleSubmit from './handleSubmit'
import styled from 'styled-components'
import { darkThree, lightBackgroundColor, lightSecondary } from '../../sc-css/COLORS'
import { HorizontalFlex } from '../../sc-css/atomic'

export default function CreatePostOptions({ notified, darkMode, setError, subId, title, text, image }) {

    const params = useParams()['*']
    const navigate = useNavigate()
    const { user } = useContext(GlobalContext)
    const [buttonStyle, setButtonStyled] = useState('')

    async function handlePostCreate() {
        const post = { params: params, user: user, subId: subId, title: title, text: text, image: image, notified: notified }
        const postId = await handleSubmit(post)
        navigate(`/r/${subId}/p/${postId}`)
    }

    useEffect(() => {
        if (title === undefined || text === undefined) return
        if (title.length <= 0 ||
            subId === "null" ||
            (params === '' && text.length <= 0) ||
            (params === 'img' && !image) ||
            params === 'poll') {
            setButtonStyled('')
            return
        }
        setButtonStyled('enabled')
    }, [params, title, text, image, subId])

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>

            <PostButton className={`${darkMode} ${buttonStyle}`}
                onClick={(e) => {
                    e.preventDefault()
                    if (buttonStyle === "") {
                        return
                    }
                    handlePostCreate()
                }}
            >Post</PostButton>

            <StyledDiv className={`${darkMode}`}>
                <input type="checkbox" ref={notified} />
                <p>Send notifications</p>
            </StyledDiv>
        </div>
    )
}



const PostButton = styled.button`
    background-color: #5e6265;
    color: rgb(255 255 255 / 50%);
    font-size:14px;
    font-weight: 700;
    padding: 4px 16px;
    border-radius: 16px;
    border:none;
    align-self: end;
    margin-right: 16px;
    margin-bottom: 16px;
    width:fit-content;  
    position:relative;
    cursor: not-allowed;
    filter: grayscale(1);

    &::before {
        content:"";
        position:absolute; 
        height:100%;
        width:100%;
        top:0;
        left:0;
        border-radius:inherit;
        background-color: #FFFFFF;
        opacity:0;
    }

    &.dark {
        background-color: ${lightBackgroundColor};
        color: rgb(55, 60, 63);
    }

    &:hover::before {
        opacity: 0.08;
    }

    &.enabled:hover::before {
        opacity: 0.08;
    }

    &.enabled::before {
        opacity:0;
    }

    &.enabled {
        background-color:#373c3f;
        color: #FFFFFF;
        cursor:pointer;
        filter: none;
    }


`

const StyledDiv = styled(HorizontalFlex)`
    background-color: ${lightSecondary};
    border-bottom-right-radius:4px;
    border-bottom-left-radius:4px;

    &.dark {
        background-color:${darkThree};
    }
`
