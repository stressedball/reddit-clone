import React, { useState, useEffect, useContext } from 'react'
import { getComments } from '../providers/GlobalProvider'
import CommentsCount from './CommentsCount'
import '../../css/post-preview.css'

export default function PostPreviewOptions({ darkMode, showContent, post }) {

    const [comments, setComments] = useState()

    useEffect(() => {

        async function fetchComments() {
            let arrOfComments = await getComments(post.id)
            setComments(arrOfComments)
        }

        fetchComments()

    }, [])

    return (
        <div
            className='horizontal flex'
            id='expand-comments-container'
        >
            <ExpandText
                post={post}
                showContent={showContent}
                darkMode={darkMode}
            />

            {
                comments === undefined ?
                    null : <CommentsCount
                        comments={comments}
                        darkMode={darkMode}
                    />
            }

        </div>
    )
}

function ExpandText({ post, showContent, darkMode }) {

    const handleDisplayText = () => { if (post.data.text) showContent() }

    return (
        <svg
            className={`mouse-pointer ${darkMode}`}
            onClick={handleDisplayText}
            width="20px" height="20px"
            fill='currentColor'
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 21.998L16 22v-.998L20.34 21l-5.75-5.751.659-.66L21 20.34l.002-4.34H22zM8 2v.998L3.66 3l5.75 5.751-.659.66L3 3.66 2.998 8H2l.002-6z" />
            <path fill="none" d="M0 0h24v24H0z" />
        </svg>
    )
}