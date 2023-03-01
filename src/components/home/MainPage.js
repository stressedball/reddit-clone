import { GlobalContext } from '../providers/GlobalProvider';
import React, { useContext, useEffect, useState } from 'react'
import PostPreview from '../post-preview/PostPreview';

export default function MainPage({ darkMode, handleDisplay }) {

    useEffect(() => { handleDisplay(true) }, [])

    const { posts, user, subs } = useContext(GlobalContext)

    let contentPosts = []

    if (subs === undefined || posts === undefined || user === undefined) {
        return <div>Loading data, sit tight</div>
    }

    if (!user.data.subscribedSubs) return <EmptySubs user={user} />

    user.data.subscribedSubs.map(subId => {
        posts.map(post => {
            if (post.data.parent === subId) contentPosts.push(post)
        })
    })

    return (
        contentPosts.map(post => {
            return <PostPreview
                darkMode={darkMode}
                key={post.id}
                subId={post.data.parent}
                post={post}
            />
        })
    )
}

function EmptySubs({user}) {
    return (
        <div>
            <p>Hey there {user.data.userName}</p>
            <p>You haven't subscribed to any community</p>
            <p>Here are some suggestions</p>
        </div>
    )
}