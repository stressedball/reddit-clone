import { GlobalContext } from '../providers/GlobalProvider'
import PostPreview from '../post-preview/PostPreview'
import { useParams } from 'react-router-dom'
import React, { useContext } from 'react'

export default function Sub({ darkMode }) {

    const subId = useParams().subId
    const { posts } = useContext(GlobalContext)
    const subPosts = posts.filter(post => post.data.parent === subId)

    return (
        <>
            {
                subPosts.length === 0 ?
                    <EmptySub />
                    :
                    subPosts.map(post => {
                        return <PostPreview key={post.id} subId={null} post={post} darkMode={darkMode} />
                    })
            }
        </>
    )
}

function EmptySub() {
    return (
        <section>
            <p>Swoooosh...</p>
            <p>This sub is pretty empty.</p>
            <p>Be the first to post!</p>
        </section>
    )
}

