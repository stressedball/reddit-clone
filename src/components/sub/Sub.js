// import '../../css/sub.css'
import { GlobalContext } from '../providers/GlobalProvider'
import PostPreview from '../post-preview/PostPreview'
import { useParams } from 'react-router-dom'
import React, { useContext, useEffect } from 'react'

export default function Sub({ darkMode, handleDisplay }) {

    useEffect(() => { handleDisplay(true) }, [])

    const subId = useParams().subId
    const { subs, posts, user } = useContext(GlobalContext)
    const subPosts = posts.filter(post => post.data.parent === subId)

    if (subPosts.length === 0) return <div>Be the first to post!</div>

    const sub = subs.filter(sub => sub.id === subId)[0]

    return (
        <div id='sub-container'>
            {
                subPosts.length === 0 ?
                    <EmptySub />
                    :
                    subPosts.map(post => {
                        return <PostPreview key={post.id} subId={null} post={post} darkMode={darkMode} />
                    })
            }
        </div>
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

