// import '../../css/comment.css'
import Comment from './Comment'
import { GlobalContext } from '../providers/GlobalProvider'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'

export default function CommentsList({ darkMode,comments }) {

    const { users } = useContext(GlobalContext)
    const [display, setDisplay] = useState(false)

    useEffect(() => {
        if (comments !== undefined && users !== undefined) {
            setDisplay(true)
        }
    }, [comments, users])

    if (!display) return <div>Loading</div>

    return (
        <div
            id='comments-list'
        >
            {
                comments.map(comment => {
                    return (
                        <Comment key={comment.data.poster} darkMode={darkMode} comment={comment} />
                    )
                })
            }
        </div>
    )
}
