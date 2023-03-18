import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../../providers/GlobalProvider'
import DeleteButton from '../../multi-usage/DeleteButton'
import EditButton from '../../multi-usage/EditButton'
import CommentVotes from './CommentVotes'

export default function CommentOptions({ darkMode, comment }) {

    const { user } = useContext(GlobalContext)

    if (comment === undefined) return null

    return (
        <div className='horizontal flex'>
            <CommentVotes darkMode={darkMode} comment={comment} />

            {
                user ?
                    user.id === comment.data.poster ?
                        <EditComment darkMode={darkMode} /> :
                        <ReplyVote darkMode={darkMode} comment={comment} user={user} />
                    :
                    <PublicOptions />
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

            <p className={`${darkMode}`}>Reply</p>
        </div>
    )
}

function PublicOptions() {
    return (
        <p>Public options</p>
    )
}