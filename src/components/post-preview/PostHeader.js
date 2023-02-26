import '../../css/post-preview.css'
import { GlobalContext } from '../providers/GlobalProvider'
import React, { useContext, useEffect, useState } from 'react'

export default function PostHeader({ darkMode, subId, post }) {

    const { subs, users } = useContext(GlobalContext)
    const sub = subs.filter(el => el.id === subId)[0]
    const [userName, setUserName] = useState()

    useEffect(() => {

        if (users) {
            const user = users.find(user => {
                return user.id === post.data.poster
            })
            setUserName(user.data.userName)
        }

    }, [users])

    return (

        <header
            id='details'
        >
            {
                sub !== undefined
                    ?
                    <a
                        href={`r/${sub.id}`}
                        className={`${darkMode}`}
                    >
                        r/{sub.data.name}
                    </a>
                    :
                    null
            }

            <p>Posted by {userName}</p>
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
