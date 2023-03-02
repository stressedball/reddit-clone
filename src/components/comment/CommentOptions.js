import React from 'react'
import '../../css/comment.css'
import { useContext } from 'react'
import { GlobalContext } from '../providers/GlobalProvider'
import Votes from '../reusables/Votes'
import DeleteButton from '../reusables/DeleteButton'
import EditButton from '../reusables/EditButton'

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
            <EditButton darkMode={darkMode} />
            <DeleteButton darkMode={darkMode} />
        </div>
    )
}

function ReplyVote({ darkMode }) {

    return (
        <div>
            <Votes />
            <button
                className={`${darkMode} buttonStyle mouse-pointer`}
            >Reply</button>
        </div>
    )
}