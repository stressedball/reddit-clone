import '../../css/post-preview.css'
import { GlobalContext } from '../providers/GlobalProvider'
import React, { useContext, useEffect } from 'react'

export default function PostHeader({ subId, posterName, post }) {

    const { subs } = useContext(GlobalContext)

    const sub = subs.filter(el => el.id === subId)[0]

    return (

        <header
            id='details'
        >
            {
                sub !== undefined
                    ?
                    <a href={`r/${sub.id}`}>
                        r/{sub.data.name}
                    </a>
                    :
                    null
            }

            <p>Posted by {posterName}</p>
            <p>&middot;</p>
            <p>{
                post ?
                    post.data.timeStamp ?
                        post.data.timeStamp.toDate().toDateString()
                        : null
                    : null
            }</p>

        </header>
    )
}
