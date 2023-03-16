import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../../providers/GlobalProvider'
import DeleteButton from '../../multi-usage/DeleteButton'
import EditButton from '../../multi-usage/EditButton'
import CommentVotes from './CommentVotes'

export default function CommentOptions({ darkMode, comment }) {

    const { user } = useContext(GlobalContext)

    return (
        <div className='horizontal flex'>
            <CommentVotes darkMode={darkMode} comment={comment} />

            {
                user.id === comment.data.poster ?
                    <EditComment darkMode={darkMode} /> :
                    <ReplyVote darkMode={darkMode} comment={comment} user={user} />
            }
        </div>
    )
}

function EditComment({ darkMode }) {

    return (
        <div className='horizontal flex' style={{ gap: '1rem' }}>
            <EditButton darkMode={darkMode} />
            <DeleteButton darkMode={darkMode} />
        </div>
    )
}

function ReplyVote({ darkMode, comment, user }) {

    return (
        <div>

            <p
                className={`${darkMode} buttonStyle mouse-pointer`}
            >Reply</p>
        </div>
    )
}