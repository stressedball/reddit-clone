import React, { useEffect } from 'react'
import '../../css/comment.css'
import CommentOptions from './CommentOptions'

export default function Comment({ darkMode, comment, user }) {

    return (

        <section
            className='comment-container'
            key={comment.timeStamp}
        >
        
            <article className='comment'>
        
                <div
                    className='details'
                >
        
                    <p>Posted by {
                        user ? user[0].data.userName : null}</p>
        
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
                    darkMode={darkMode}
                    comment={comment}
                    user={user}
                />
        
            </article>
        </section>
    )
}
