import React from 'react'
import '../../css/comment.css'
import { useContext } from 'react'
import { GlobalContext } from '../providers/GlobalProvider'
import CommentVotes from './CommentVotes'

export default function CommentOptions({ darkMode, comment }) {

    const { user } = useContext(GlobalContext)

    if (user.id === comment.data.poster) {
        return <EditComment darkMode={darkMode} />

    }

    return <ReplyVote darkMode={darkMode} />

}

function EditComment({ darkMode }) {

    return (
        <div className='horizontal flex' style={{gap:'1rem'}}>
            <button
                className={`${darkMode} buttonStyle mouse-pointer`}
            >Edit</button>
            
            <button
                className={`${darkMode} buttonStyle mouse-pointer`}
            >Delete</button>
        </div>
    )
}

function ReplyVote({ darkMode }) {

    return (
        <div>
            <CommentVotes />
            <button
                className={`${darkMode} buttonStyle mouse-pointer`}
            >Reply</button>
        </div>
    )
}