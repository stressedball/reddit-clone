import React, { useState, useEffect, useContext } from 'react'
import '../../css/comment.css'
import { GlobalContext } from '../providers/GlobalProvider'
import CommentOptions from './CommentOptions'

export default function Comment({ darkMode, comment }) {

    const [display, setDisplay] = useState(false)
    const { users } = useContext(GlobalContext)
    const user = users.filter(user => user.id === comment.data.poster)

    useEffect(() => {

        if (comment !== undefined && user !== undefined) setDisplay(true)

    }, [comment, user])

    if (!display) return <div>Fetching Comment</div>

    return (

        <section
            className='comment-container'
            key={comment.data.timeStamp}
        >

            <article className='comment'>

                <div
                    className='details'
                >

                    <p>Posted by {user ? user[0].data.userName : null}</p>

                    <em>
                        {
                            comment.data.timeStamp === null ? null :
                                comment.data.timeStamp.toDate().toDateString()
                        }
                    </em>

                </div>

                <p>{comment.data.text}</p>

                <CommentOptions
                    darkMode={darkMode}
                    comment={comment}
                    user={user}
                />

            </article>
        </section>
    )
}
