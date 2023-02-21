import '../../css/sub.css'
import React, { useContext } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { GlobalContext } from '../providers/GlobalProvider'
import PostPreview from '../post/PostPreview'

export default function Sub() {

    const subId = useParams().subId
    const { subs, posts } = useContext(GlobalContext)

    if (posts.length === 0 || subs.length === 0) {
        return <div>Hang tight, fetching data.</div>
    }

    const sub = subs.filter(thisSub => thisSub.id === subId)[0]

    if (sub.data.posts === undefined) {

        return (

            <section>
                <p>Swoooosh...</p>
                <p>This sub is pretty empty.</p>
                <p>Be the first to post!</p>
            </section>
        )
    }

    const Sub = posts.filter(post =>
        sub.data.posts.filter(id =>
            id === post.id
        )
    )

    return (
        <>
            <h3>{sub.data.name}</h3>
            {
                Sub.map(post => {

                    return <PostPreview
                        key={post.id}
                        subId={null}
                        post={post}
                    />
                })
            }
        </>
    )

}

