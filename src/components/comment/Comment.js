import React, { useState, useEffect, useContext } from 'react'
// import '../../css/comment.css'
import { GlobalContext } from '../providers/GlobalProvider'
import CommentOptions from './comment-options/CommentOptions'
import UserAvatar from '../multi-usage/UserAvatar'
import styled from 'styled-components'
import { HorizontalFlex } from '../../sc-css/atomic'

const CommentHeader = styled.div`
    display:flex;
    align-items:center;
    gap:3px;
    font-size:12px;
    font-weight:500;
    padding-top:6px;
`

const CommentStyled = styled.article`

`
export default function Comment({ darkMode, comment }) {

    const [display, setDisplay] = useState(false)
    const { users } = useContext(GlobalContext)
    const user = users.filter(user => user.id === comment.data.poster)[0]

    useEffect(() => {

        if (comment !== undefined && user !== undefined) setDisplay(true)

    }, [comment, user])

    if (!display) return <div>Fetching Comment</div>

    return (

        <HorizontalFlex style={{ paddingTop: "8px", paddingBottom: "8px" }} key={comment.data.timeStamp}>

            <div style={{ alignSelf: "start", width: '28px', display: "flex", justifyContent: "center", alignItems: "center" }}>
                <UserAvatar user={user} />
            </div>

            <div>
                <CommentHeader>

                    <p style={{ margin: "0" }}>{user ? user.data.userName : null}</p>

                    <em>
                        {comment.data.timeStamp === null ? null :
                            comment.data.timeStamp.toDate().toDateString()}
                    </em>

                </CommentHeader>

                <div style={{ fontSize: "14px" }}>
                    <p>{comment.data.text}</p>
                </div>

                <CommentOptions darkMode={darkMode} comment={comment} user={user} />

            </div>
        </HorizontalFlex>
    )
}
