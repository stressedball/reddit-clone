import React from 'react'
import '../../css/comment.css'
import { useContext } from 'react'
import { GlobalContext } from '../providers/GlobalProvider'

export default function CommentOptions({ comment }) {

    const { userId } = useContext(GlobalContext)

    if (userId === comment.poster) {
        return <EditComment />

    }

    return <ReplyVote />

}

function EditComment() {

    return (
        <div>
            <button
            >Edit</button>
            <button>Delete</button>
        </div>
    )
}

function ReplyVote() {

    return (
        <div>
            <button>Reply</button>
        </div>
    )
}