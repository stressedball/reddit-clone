import '../../css/sub.css'
import React, { useContext } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { GlobalContext } from '../providers/GlobalProvider'
import PostPreview from '../post-preview/PostPreview'

export default function Sub({ darkMode }) {

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

    let arr = []

    sub.data.posts.map(postId =>
        posts.map(post => {
            if (post.id === postId) {
                arr.push(post)
            }
        })
    )

    return (
        <>
            <h3>{sub.data.name}</h3>
            {
                arr.map(post => {

                    return <PostPreview
                        key={post.id}
                        subId={null}
                        post={post}
                        darkMode={darkMode}
                    />
                })
            }
        </>
    )

}

