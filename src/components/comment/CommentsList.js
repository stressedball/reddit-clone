import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import {Comment} from './Comment'
import { HorizontalFlex } from '../../sc-css/atomic'
import { lightBackgroundColor, darkTwo } from '../../sc-css/COLORS'
import { GlobalContext } from '../providers/GlobalProvider'

export default function CommentsList({ darkMode, post }) {

    const { comments } = useContext(GlobalContext)
    const [postComments, setPostComments] = useState()

    useEffect(() => {
        if (post && comments) setPostComments(comments.filter(comment => comment.data.parent === post.id))
    }, [comments, post])

    if (!postComments) return <p>Loading comments</p>

    if (postComments.length === 0) return (
        <CommentContainer className={darkMode}>Be the first to comment!</CommentContainer>
    )

    postComments.sort((a, b) => Date.parse(b.data.timeStamp.toDate()) - Date.parse(a.data.timeStamp.toDate()))

    return (
        <StyledDiv >
            {
                postComments.map(comment => {
                    return (
                        <Comment comments={comments} comment={comment} key={comment.data.timeStamp} darkMode={darkMode} />
                    )
                })
            }
        </StyledDiv >
    )
}

const StyledDiv = styled.div`
    // border-bottom-right-radius: 4px;
    // border-bottom-left-radius: 4px;
`

const CommentContainer = styled(HorizontalFlex)`
    font-size: 14px;
    padding: 8px 40px;
    background-color:${lightBackgroundColor};
    border-radius:inherit;

    &.dark {
        background-color:${darkTwo};
    }
`

