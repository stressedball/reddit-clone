import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../providers/GlobalProvider'
import { CommentContainer, UserName , UserAvatarContainer} from '../../sc-css/CommentStyle'
import { lightBackgroundColor } from '../../sc-css/COLORS'
import AuthenticateUser from '../log-in_sign-up/AuthenticateUser'
import CommentDateStamp from './CommentDateStamp'
import CommentOptions from './comment-options/CommentOptions'
import ExpandComment from './ExpandComment'
import EditComment from './EditComment'
import { ReplyContainer } from './comment-options/ReplyToComment'
import UserAvatar from '../multi-usage/UserAvatar'

export function Comment({ comments, darkMode, comment }) {

    const { users, user } = useContext(GlobalContext)
    const poster = users.filter(user => user.id === comment.data.poster)[0]
    const [reply, setReply] = useState(false)
    const [commentIsExpanded, setCommentIsExpanded] = useState(true)
    const [flag, setFlag] = useState(false)
    const [editComment, setEditComment] = useState(false)

    const handleReply = () => {
        if (!user) setFlag(true)
        else setReply(!reply)
    }

    const handleEdit = () => setEditComment(!editComment)
    const handleLoginScreen = () => setFlag(!flag)
    const handleCommentExpand = () => setCommentIsExpanded(!commentIsExpanded)

    if (!poster || !comment) return <div>Fetching Comment</div>

    if (!comments) return

    return (
        <>
            {
                commentIsExpanded ?
                    <CommentContainer className={darkMode}>

                        <div style={{ display: "flex", flexDirection: "column", minWidth: "40px", minHeight: "100%" }}>

                            <UserAvatarContainer><UserAvatar navigation={true} user={poster} /></UserAvatarContainer>

                            <div style={{ flex: "1 0 auto", paddingTop: "8px" }}>
                                <Thread className={darkMode} onClick={handleCommentExpand} />
                            </div>

                        </div>

                        <div style={{ width: "100%", boxSizing: "border-box" }}>
                            <CommentHeader>

                                <UserName>{poster ? poster.data.userName : null}</UserName>

                                <CommentDateStamp comment={comment} />

                            </CommentHeader>

                            {
                                editComment ?
                                    <EditComment comment={comment} handleEdit={handleEdit} />
                                    :
                                    <div style={{ fontSize: "14px", marginBottom: "6px", marginTop: "6px" }}><p style={{ margin: "0" }}>{comment.data.text}</p></div>

                            }

                            <CommentOptions handleEdit={handleEdit} handleReply={handleReply} darkMode={darkMode} comment={comment} />

                            {
                                reply ? <ReplyContainer handleReply={handleReply} comment={comment} /> : null
                            }

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
                    <ExpandComment handleCommentExpand={handleCommentExpand} poster={poster} darkMode={darkMode} comment={comment} />
            }
            {
                flag ? <AuthenticateUser handleLoginScreen={handleLoginScreen} /> : null
            }
        </>
    )
}

const CommentHeader = styled.div`
    display:flex;
    align-items:center;
    gap:3px;
    font-size:12px;
    font-weight:500;
    padding-top:6px;
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

