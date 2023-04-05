import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../providers/GlobalProvider'
import { HorizontalFlex } from '../../sc-css/atomic'
import { darkTwo, lightBackgroundColor } from '../../sc-css/COLORS'
import CommentOptions from './comment-options/CommentOptions'
import UserAvatar from '../multi-usage/UserAvatar'
import { ReplyContainer } from './comment-options/ReplyToComment'

export default function Comment({ post, darkMode, comment }) {

    const [display, setDisplay] = useState(false)
    const { users } = useContext(GlobalContext)
    const user = users.filter(user => user.id === comment.data.poster)[0]
    const [reply, setReply] = useState(false)

    useEffect(() => {
        if (comment !== undefined && user !== undefined) setDisplay(true)
    }, [comment, user])

    const handleReply = () => setReply(!reply)

    if (!display) return <div>Fetching Comment</div>

    return (

        <CommentContainer className={`${darkMode}`} key={comment.data.timeStamp}>

            <UserAvatarContainer>
                <div style={{ width: "28px", height: "28px" }}><UserAvatar user={user} /></div>
            </UserAvatarContainer>

            <div style={{ width: "100%", boxSizing: "border-box" }}>
                <CommentHeader>

                    <UserName>{user ? user.data.userName : null}</UserName>

                    <LightText>&middot;    {comment.data.timeStamp === null ? null :
                        comment.data.timeStamp.toDate().toDateString()}
                    </LightText>

                </CommentHeader>

                <div style={{ fontSize: "14px", marginBottom: "6px", marginTop: "6px" }}>
                    <p style={{ margin: "0" }}>{comment.data.text}</p>
                </div>

                <CommentOptions handleReply={handleReply} darkMode={darkMode} comment={comment} user={user} post={post} />

                {reply ? <ReplyContainer comment={comment} /> : null}

            </div>
        </CommentContainer>
    )
}

const CommentContainer = styled(HorizontalFlex)`
    padding: 8px 0;
    background-color:${lightBackgroundColor};
    border-radius:inherit;

    &.dark {
        background-color:${darkTwo};
    }
`

const CommentHeader = styled.div`
    display:flex;
    align-items:center;
    gap:3px;
    font-size:12px;
    font-weight:500;
    padding-top:6px;
`

const UserName = styled.p`
    font-size:12px;
    font-weight:700;
    margin:0;

    &:hover {
        text-decoration:underline;
        cursor:pointer;
    }
`

const LightText = styled.p`
    color: #7c7c7c;
    font-size:12px;
    font-weight:400;
    margin:0;
`

const UserAvatarContainer = styled(HorizontalFlex)`
    justify-content:center;
    width:40px;
    align-self:start;
`