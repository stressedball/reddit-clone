import '../../css/post-preview.css'
import { GlobalContext } from '../providers/GlobalProvider'
import Votes from "../Votes"
import PostHeader from './PostHeader'
import { getComments } from '../providers/GlobalProvider'
import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from "react-router"

export default function PostPreview({ subId, post }) {

    const navigate = useNavigate()
    const { users } = useContext(GlobalContext)
    const [displayText, setDisplayText] = useState()

    return (
        < div
            className="post-preview"
        >

            <div
                id='content'
            >

                <div
                    onClick={(e) => {

                        if (e.target === undefined) return

                        subId === null ?
                            navigate(`p/${post.id}`)
                            :
                            navigate(`r/${subId}/p/${post.id}`)
                    }}
                >

                    <p>{post.data.title}</p>
                    {/* <p>{post.data.text}</p> */}

                </div>

                <PostHeader
                    subId={subId}
                    post={post}
                    posterName=
                    {
                        users ?
                            users.find(user => {
                                return user.id === post.data.poster
                            }).data.userName
                            : null
                    }
                />

                <PostPreviewOptions
                    post={post}
                />

            </div>

            < Votes
                post={post}
                postId={post.id}
            />

        </div >
    )
}


function PostPreviewOptions({ post }) {

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
            className='post-preview-details'
        >
            <ExpandText post={post} />

            {
                comments === undefined ?
                    null : <CommentsCount comments={comments} />
            }

        </div>
    )
}

function CommentsCount({ comments }) {

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem"
            }}
        >

            <svg
                fill="#000000"
                width="20px" height="20px"
                viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14.5 2h-13l-.5.5v9l.5.5H4v2.5l.854.354L7.707 12H14.5l.5-.5v-9l-.5-.5zm-.5 9H7.5l-.354.146L5 13.293V11.5l-.5-.5H2V3h12v8z" />
            </svg>
            <p>{comments.length} Comments</p>

        </div>
    )
}

function ExpandText({ post }) {

    const handleDisplayText = () => {

        if (post.data.text) {
            console.log(post.data.text)
        }
    }


    return (

        <svg
            onClick={handleDisplayText}
            width="20px" height="20px"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 21.998L16 22v-.998L20.34 21l-5.75-5.751.659-.66L21 20.34l.002-4.34H22zM8 2v.998L3.66 3l5.75 5.751-.659.66L3 3.66 2.998 8H2l.002-6z" />
            <path fill="none" d="M0 0h24v24H0z" />
        </svg>
    )
}