import React, { useEffect, useState } from 'react'
import AdminOptions from '../post/components/AdminOptions'
import DefaultOptions from '../post/components/DefaultOptions'

export default function Etcetera({ user, post, darkMode }) {

    const [display, setDisplay] = useState(false)
    const [admin, setAdmin] = useState(false)

    useEffect(() => {
        if (post) {
            post.data.poster === user.id ?
                setAdmin(true) : setAdmin(false)
        }
    }, [post])

    return (

        <div className={`${darkMode} mouse-pointer post-option`}
            style={{ position: 'relative' }}
        >

            <svg
                onClick={() => setDisplay(!display)}
                className={`${darkMode} hover`}
                fill="currentColor"
                width="20px" height="20px"
                viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5.5 16c0-1.5-1.25-2.75-2.75-2.75-1.531 0-2.75 1.25-2.75 2.75s1.219 2.75 2.75 2.75c1.5 0 2.75-1.25 2.75-2.75zM13.938 16c0-1.5-1.25-2.75-2.75-2.75s-2.75 1.25-2.75 2.75 1.25 2.75 2.75 2.75 2.75-1.25 2.75-2.75zM22.406 16c0-1.5-1.219-2.75-2.75-2.75-1.5 0-2.75 1.25-2.75 2.75s1.25 2.75 2.75 2.75c1.531 0 2.75-1.25 2.75-2.75z"></path>
            </svg>

            {
                display ?
                    admin ? <AdminOptions post={post} darkMode={darkMode} user={user} />
                        : <DefaultOptions post={post} darkMode={darkMode} user={user} />
                    : null
            }
        </div>
    )
}
