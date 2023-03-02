import React, { useState, useEffect, useContext } from 'react'
import CommentsCount from './CommentsCount'
import '../../css/post-preview.css'
import { db } from '../../firebase/getAuthDb';
import { onSnapshot, query, collection } from 'firebase/firestore';

export default function PostPreviewOptions({ darkMode, showContent, post }) {

    const [comments, setComments] = useState()

    useEffect(() => {

        const q = query(collection(db, 'posts', post.id, 'comments'))

        const unSub = onSnapshot(q, (querySnapShot) => {

            let commentsArr = []

            querySnapShot.forEach((doc) => {
                commentsArr.push({ id: doc.id, data: doc.data() })
            })

            setComments(commentsArr)
        })

        return () => unSub()

    }, [])


    return (
        <div
            className='horizontal flex'
            id='expand-comments-container'
        >
            <ExpandText post={post} showContent={showContent} darkMode={darkMode} />

            {
                comments === undefined ?
                    null : <CommentsCount comments={comments} darkMode={darkMode} />
            }

        </div>
    )
}

function ExpandText({ post, showContent, darkMode }) {

    const handleDisplayText = () => { showContent() }

    return (
        <svg
            className={`mouse-pointer ${darkMode} hover`}
            onClick={handleDisplayText}
            width="20px" height="20px"
            fill='currentColor'
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 21.998L16 22v-.998L20.34 21l-5.75-5.751.659-.66L21 20.34l.002-4.34H22zM8 2v.998L3.66 3l5.75 5.751-.659.66L3 3.66 2.998 8H2l.002-6z" />
            <path fill="none" d="M0 0h24v24H0z" />
        </svg>
    )
}