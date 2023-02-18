import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { db } from '../../firebase/getAuthDb'
import { collection, onSnapshot } from 'firebase/firestore'
import { GlobalContext } from '../providers/GlobalProvider'
import Comment from '../comment/Comment'
import '../../css/comment.css'

export default function CommentsList({ postId }) {

    const [comments, setComments] = useState()
    const { users } = useContext(GlobalContext)

    useEffect(() => {

        const unSub = onSnapshot(collection(db, 'posts', postId, 'comments'),
            (querySnapShot) => {
                let arr = []
                querySnapShot.forEach((doc) => {
                    arr.push(doc.data())
                })
                setComments(arr)
            })

        return () => unSub()

    }, [])

    if (comments === undefined) return <div>Loading</div>

    return (
            <section
                id='comments-list'
            >
                {
                    comments.map(comment => {
                        const user = users.filter(user => user.id === comment.poster)
                        return (
                            <Comment
                                user={user}
                                comment={comment}
                            />
                        )
                    })
                }
            </section>
    )
}
