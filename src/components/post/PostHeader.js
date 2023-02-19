import React from 'react'

export default function PostHeader({ sub, posterName }) {

    return (

        <header
            id='details'
        >
            SUB LOGO
            {
                sub !== undefined
                    ?
                    <p>
                        <a href={`/${sub.id}`}>
                            r/{sub.data.name}
                        </a></p>
                    :
                    null
            }

            <p>&middot;</p>
            <p>Posted by {posterName}</p>
            <p>timeStamp</p>

        </header>
    )
}
