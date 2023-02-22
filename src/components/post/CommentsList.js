import '../../css/comment.css'
import Comment from '../comment/Comment'
import { GlobalContext } from '../providers/GlobalProvider'
import { getComments } from '../providers/GlobalProvider'
import React, { useContext, useEffect, useRef } from 'react'
import { useState } from 'react'

export default function CommentsList({ postId }) {

    const [comments, setComments] = useState()
    const { users } = useContext(GlobalContext)

    useEffect(() => {

        async function fetchComments() {
            let arrOfComments = await getComments(postId)
            setComments(arrOfComments)
        }

        fetchComments()

    }, [])

    if (comments === undefined || users === undefined) return <div>Loading</div>

    return (
            <section
                id='comments-list'
            >
                {
                    comments.map(comment => {
                        const user = users.filter(user => user.id === comment.poster)
                        return (
                            <Comment
                                key={comment.timeStamp}
                                user={user}
                                comment={comment}
                            />
                        )
                    })
                }
            </section>
    )
}
