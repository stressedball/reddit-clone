import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../providers/GlobalProvider'
import { HorizontalFlex } from '../../sc-css/atomic'
import { darkTwo, lightBackgroundColor } from '../../sc-css/COLORS'
import CommentOptions from './comment-options/CommentOptions'
import UserAvatar from '../multi-usage/UserAvatar'
import { ReplyContainer } from './comment-options/ReplyToComment'
import { SVGStyled } from '../../sc-css/atomic'

export default function Comment({ comments, darkMode, comment }) {

    const { users } = useContext(GlobalContext)
    const poster = users.filter(user => user.id === comment.data.poster)[0]
    const [reply, setReply] = useState(false)
    const [commentIsExpanded, setCommentIsExpanded] = useState(true)

    const handleReply = () => setReply(!reply)
    const handleCommentExpand = () => setCommentIsExpanded(!commentIsExpanded)

    if (!poster || !comment) return <div>Fetching Comment</div>

    if (!comments) return

    return (
        <>
            {
                commentIsExpanded ?
                    <CommentContainer className={darkMode}>

                        <div style={{ display: "flex", flexDirection: "column", width: "40px", minHeight: "100%" }}>

                            <UserAvatarContainer><UserAvatar navigation={true} user={poster} /></UserAvatarContainer>

                            <div style={{ flex: "1 0 auto", paddingTop: "8px" }}>
                                <Thread className={darkMode} onClick={handleCommentExpand} />
                            </div>

                        </div>

                        <div style={{ width: "100%", boxSizing: "border-box" }}>
                            <CommentHeader>

                                <UserName>{poster ? poster.data.userName : null}</UserName>

                                <LightText>&middot; {comment.data.timeStamp === null ? null :
                                    comment.data.timeStamp.toDate().toDateString()}
                                </LightText>

                            </CommentHeader>

                            <div style={{ fontSize: "14px", marginBottom: "6px", marginTop: "6px" }}>
                                <p style={{ margin: "0" }}>{comment.data.text}</p>
                            </div>

                            <CommentOptions handleReply={handleReply} darkMode={darkMode} comment={comment} />

                            {reply ? <ReplyContainer handleReply={handleReply} comment={comment} /> : null}

                            {
                                comments.filter(c => c.data.thread === comment.id).length > 0 ?
                                    comments.filter(c => c.data.thread === comment.id).map(el => {
                                        return (
                                            <Comment key={el.data.timeStamp} comment={el} darkMode={darkMode} comments={comments} />
                                        )
                                    }) : null
                            }
                        </div>
                    </CommentContainer>
                    :
                    <CommentContainer className={darkMode} style={{ alignItems: "center", gap: "3px", paddingLeft: "3px" }}>

                        <SVGStyled onClick={handleCommentExpand}
                            className={`${darkMode}`} style={{ height: "15px" }}
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 21.998L16 22v-.998L20.34 21l-5.75-5.751.659-.66L21 20.34l.002-4.34H22zM8 2v.998L3.66 3l5.75 5.751-.659.66L3 3.66 2.998 8H2l.002-6z" />
                            <path style={{ stroke: "none", fill: "none" }} d="M0 0h24v24H0z" />
                        </SVGStyled>

                        <UserAvatarContainer style={{ margin: "0" }}><UserAvatar navigation={true} user={poster} /></UserAvatarContainer>

                        <UserName >{poster ? poster.data.userName : null}</UserName>

                        <LightText >&middot; {comment.data.timeStamp ? comment.data.timeStamp.toDate().toDateString() : null}
                        </LightText>

                    </CommentContainer>
            }
        </>
    )
}

const CommentContainer = styled(HorizontalFlex)`
    padding: 8px 0;
    background-color:${lightBackgroundColor};
    border-radius:inherit;
    display: flex;
    align-items: stretch;
    
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
    width: 28px;
    height: 28px;
    margin: auto;
`

const Thread = styled.div`
    width: 2px;
    background-color: #EDEFF1; 
    height:100%;
    margin: auto;

    &:hover {
        background-color: #0079D3;
        cursor: pointer;
    }

    &.dark {
        background-color: #343536;
    }

    &.dark:hover {
        background-color: ${lightBackgroundColor};
    }
`