// import '../../css/post-preview.css'
import { GlobalContext } from '../providers/GlobalProvider'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function PostHeader({ darkMode, subId, post }) {

    const navigate = useNavigate()
    const { subs, users } = useContext(GlobalContext)
    const sub = subs.filter(el => el.id === subId)[0]
    const [poster, setPoster] = useState()

    useEffect(() => {

        if (users) {
            const user = users.filter(user => user.id === post.data.poster)[0]
            setPoster(user)
        }

    }, [users])

    if (poster === undefined) return <div>Loading</div>

    return (

        <section
            id='details'
        >
            {
                sub !== undefined ?
                    <>
                        <p onClick={() => navigate(`r/${sub.id}`)}
                            className={`${darkMode} mouse-pointer aRef`}
                        >r/{sub.data.name}</p>
                        <p>&middot;</p>
                    </>
                    : null
            }


            <p>Posted by <span
                onClick={() => navigate(`u/${poster.id}`)}
                className={`${darkMode} mouse-pointer aRef`}
            >{poster.data.userName}</span></p>

            <p>{
                post ?
                    post.data.timeStamp ?
                        post.data.timeStamp.toDate().toDateString()
                        : null
                    : null
            }</p>

        </section>
    )
}
