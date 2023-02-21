import { GlobalContext } from '../providers/GlobalProvider'
import Votes from "../Votes"
import PostHeader from './PostHeader'
import '../../css/post-preview.css'
import React, { useContext } from 'react'
import { useNavigate } from "react-router"

export default function PostPreview({ subId, post }) {

    const navigate = useNavigate()
    const { users } = useContext(GlobalContext)

    return (
        < div
            className="post-preview"
        >

            <div
                id='content'
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

                <div
                    onClick={(e) => {
                        console.log(e.target)
                        if (e.target === undefined) return
                        subId === null ?
                            navigate(`p/${post.id}`)
                            :
                            navigate(`r/${subId}/p/${post.id}`)
                    }}
                >

                    <p>{post.data.title}</p>
                    <p>{post.data.text}</p>

                </div>

            </div>


            < Votes
                post={post}
                postId={post.id}
            />

        </div >
    )
}
