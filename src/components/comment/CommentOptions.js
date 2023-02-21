import React from 'react'
import '../../css/comment.css'
import { useContext } from 'react'
import { GlobalContext } from '../providers/GlobalProvider'
import CommentVotes from './CommentVotes'

export default function CommentOptions({ comment }) {

    const { user } = useContext(GlobalContext)

    if (user.id === comment.poster) {
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
            <CommentVotes />
            <button>Reply</button>
        </div>
    )
}