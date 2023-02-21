import React, { useContext } from 'react'
import { GlobalContext } from '../providers/GlobalProvider'

export default function PostHeader({ subId, posterName }) {

    const { subs } = useContext(GlobalContext)

    const sub = subs.filter(el => el.id === subId)[0]

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
