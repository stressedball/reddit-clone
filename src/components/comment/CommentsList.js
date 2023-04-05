import React, { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Comment from './Comment'
import { HorizontalFlex } from '../../sc-css/atomic'
import { lightBackgroundColor, darkTwo } from '../../sc-css/COLORS'

export default function CommentsList({ darkMode, post }) {

    const [comments, setComments] = useState()

    useEffect(() => {
        if (post !== undefined) setComments(post.comments)
    }, [post])

    if (comments === undefined) return <p>Loading comments</p>

    if (comments.length === 0) return (
        <CommentContainer>Be the first to comment!</CommentContainer>
    )

    return (
        <StyledDiv >
            {
                comments.map(comment => {
                    return (
                        <Comment key={comment.data.timeStamp} post={post} darkMode={darkMode} comment={comment} />
                    )
                })
            }
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
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