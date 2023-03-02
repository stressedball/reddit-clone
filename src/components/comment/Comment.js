import React, { useState, useEffect, useContext } from 'react'
import '../../css/comment.css'
import { GlobalContext } from '../providers/GlobalProvider'
import CommentOptions from './comment-options/CommentOptions'
import UserAvatar from '../multi-usage/UserAvatar'

export default function Comment({ darkMode, comment }) {

    const [display, setDisplay] = useState(false)
    const { users } = useContext(GlobalContext)
    const user = users.filter(user => user.id === comment.data.poster)[0]

    useEffect(() => {

        if (comment !== undefined && user !== undefined) setDisplay(true)

    }, [comment, user])

    if (!display) return <div>Fetching Comment</div>

    return (

        <section
            className='comment-container'
            key={comment.data.timeStamp}
        >

            <UserAvatar user={user} />

            <article className='comment'>

                <div
                    className='details'
                >

                    <p className='no-margin'>{user ? user.data.userName : null}</p>

                    <em>
                        {
                            comment.data.timeStamp === null ? null :
                                comment.data.timeStamp.toDate().toDateString()
                        }
                    </em>

                </div>

                <div className='comment-content'>
                    <p>{comment.data.text}</p>
                </div>

                <CommentOptions
                    darkMode={darkMode}
                    comment={comment}
                    user={user}
                />

            </article>
        </section>
    )
}
