import React from 'react'
import '../../css/comment.css'
import CommentOptions from './CommentOptions'

export default function Comment({ comment, user }) {

    return (
        <section
            className='comment-container'
            key={comment.timeStamp}
        >
            <article className='comment'>
                <div
                    className='details'
                >
                    <p>Posted by {user[0].data.userName}</p>
                    <em>
                        {
                            comment.timeStamp === null ?
                                null
                                :
                                comment.timeStamp.toDate().toDateString()
                        }
                    </em>
                </div>
                <p>{comment.text}</p>
                <CommentOptions
                    comment={comment}
                    user={user}
                />
            </article>
        </section>
    )
}
