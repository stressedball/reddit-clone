import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { Comment } from './Comment'
import { GlobalContext } from '../providers/GlobalProvider'
import { EmptyComments } from '../../sc-css/CommentStyle'
import { SVGStyled } from '../../sc-css/atomic'

export default function CommentsList({ darkMode, post }) {

    const { comments } = useContext(GlobalContext)
    const [postComments, setPostComments] = useState()

    useEffect(() => {
        if (post && comments) setPostComments(comments.filter(comment => comment.data.parent === post.id))
    }, [comments, post])

    if (!postComments) return <p>Loading comments</p>

    if (postComments.length === 0) return <NoComments darkMode={darkMode} />

    if (postComments.filter(comment => comment.data.timeStamp === null).length > 0) return

    postComments.sort((a, b) =>
        Date.parse(b.data.timeStamp.toDate()) - Date.parse(a.data.timeStamp.toDate())
    )

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

const NoComments = ({ darkMode }) => {

    const [color, setColor] = useState('')

    useEffect(() => {
        if (darkMode === '') setColor('rgb(74, 150, 196)')
        else setColor('')
    }, [darkMode])

    return (
        <EmptyComments className={darkMode}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <SVGStyled
                    style={{ height: "28px", width: "28px", marginBottom: "20px", fill: `${color}` }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 52 52" enableBackground="new 0 0 52 52" xmlSpace="preserve">
                    <g>
                        <path d="M47.8,31c-0.1-0.4-0.1-0.8,0.1-1.2c1.3-2.3,2.1-4.9,2.1-7.7c0-8.8-7.6-16-17-16c-4.4,0-8.4,1.6-11.4,4.2
    C31.9,11.5,40,19.9,40,30.1c0,2.5-0.5,4.9-1.4,7.1c1.1-0.4,2.2-0.9,3.2-1.4c0.4-0.2,0.8-0.3,1.2-0.1l6.1,2.4
    c0.6,0.2,1.1-0.3,0.9-0.9L47.8,31z"/>
                        <g>
                            <path d="M19,14.1c-9.4,0-17,7.2-17,16c0,2.8,0.8,5.4,2.1,7.7c0.2,0.4,0.3,0.8,0.1,1.2L2,45.1
        c-0.2,0.6,0.3,1.1,0.9,0.9L9,43.6c0.4-0.1,0.8-0.1,1.2,0.1c2.6,1.5,5.6,2.3,8.8,2.3c9.4,0,17-7.2,17-16C36,21.3,28.4,14.1,19,14.1
        z"/>
                        </g>
                    </g>
                </SVGStyled>
                <EmptyMessages className='first'>No Comments Yet</EmptyMessages>
                <EmptyMessages className='second'>Be the first to share what you think!</EmptyMessages>
            </div>
        </EmptyComments>
    )
}

const StyledDiv = styled.div`
    &:last-child {
        border-bottom-right-radius: 4px;
        border-bottom-left-radius: 4px;
    }
`

const EmptyMessages = styled.p`
    margin:0;

    &.first {
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 12px;
    }

    &.second {
        font-size: 14px;
        font-weight: 500;
    }
`



