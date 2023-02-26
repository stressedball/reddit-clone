import '../../css/comment.css'
import Comment from '../comment/Comment'
import { GlobalContext } from '../providers/GlobalProvider'
import React, { useContext, useEffect, useRef } from 'react'
import { useState } from 'react'
import { db } from '../../firebase/getAuthDb';
import { onSnapshot, query, doc, collection } from 'firebase/firestore';

export default function CommentsList({ darkMode, postId }) {

    const [comments, setComments] = useState()
    const { users } = useContext(GlobalContext)
    const [display, setDisplay] = useState(false)

    useEffect(() => {

        const q = query(collection(db, 'posts', postId, 'comments'))

        const unSub = onSnapshot(q, (querySnapShot) => {

            let commentsArr = []

            querySnapShot.forEach((doc) => {
                commentsArr.push({ id: doc.id, data: doc.data() })
            })

            setComments(commentsArr)
        })

        return () => unSub()

    }, [])

    useEffect(() => {
        
        if (comments !== undefined && users !== undefined) {
            setDisplay(true)
        }
        
    }, [comments, users])

    if (!display) return <div>Loading</div>

    return (
        <section
            id='comments-list'
        >
            {
                comments.map(comment => {
                    

                    return (
                    
                        <Comment
                            key={comment.data.poster}
                            darkMode={darkMode}
                            comment={comment}
                        />
                    )
                })
            }
        </section>
    )
}
