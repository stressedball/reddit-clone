import React, { useContext } from 'react'
import { useNavigate } from "react-router"
import { GlobalContext } from '../providers/GlobalProvider'
import Votes from "../Votes"
import PostHeader from './PostHeader'

export default function PostPreview({ subId, post }) {

    const navigate = useNavigate()
    const { users } = useContext(GlobalContext)

    return (
        < div
            className="post-preview"
        >

            <div
                className="post-preview-text"
                onClick={() => {
                    subId === null ?
                    navigate(`${post.id}`)
                        :
                    navigate(`${subId}/${post.id}`)
                }}
            >

                <PostHeader
                    subId={subId}
                    posterName={
                        users
                            ?
                            users.find(user => {
                                return user.id === post.data.poster
                            }).data.userName
                            :
                            null
                    } />

                <p>{post.data.title}</p>
                <p>{post.data.text}</p>

            </div>

            < Votes
                post={post}
                postId={post.id}
            />

        </div >
    )
}
