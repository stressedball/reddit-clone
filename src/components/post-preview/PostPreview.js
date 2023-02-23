import '../../css/post-preview.css'
import { GlobalContext } from '../providers/GlobalProvider'
import Votes from "../reusables/Votes"
import PostHeader from './PostHeader'
import PostPreviewOptions from './PostPreviewOptions'
import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router"

export default function PostPreview({ darkMode, subId, post }) {

    const navigate = useNavigate()
    const { users } = useContext(GlobalContext)
    const [displayText, setDisplayText] = useState(false)
    const showContent = () => setDisplayText(!displayText)

    return (
        < div
            className="vertical flex post-preview"
        >

            <div
                className='horizontal flex content'
            >
                < Votes
                    post={post}
                    postId={post.id}
                    darkMode={darkMode}
                />

                <div>image/text preview</div>

                <div className='vertical flex'>

                    <div
                        className='mouse-pointer'
                        onClick={(e) => {

                            if (e.target === undefined) return

                            subId === null ?
                                navigate(`p/${post.id}`)
                                :
                                navigate(`r/${subId}/p/${post.id}`)
                        }}
                    >
                        <p>{post.data.title}</p>
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
                        darkMode={darkMode}
                    />

                    <PostPreviewOptions
                        post={post}
                        darkMode={darkMode}
                        showContent={showContent}
                    />

                </div>

            </div>

            <div>
                {
                    displayText ?
                        <p>{post.data.text}</p>
                        : null
                }

            </div>
        </div >
    )
}

