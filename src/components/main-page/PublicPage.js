import { GlobalContext } from '../providers/GlobalProvider';
import React, { useContext, useEffect, useState } from 'react'
import PostPreview from '../post-preview/PostPreview';
import { AuthContext } from '../providers/AuthProvider';
import SideContent from '../home/SideContent';
import { ThemeContext } from '../providers/ThemeProvider';

export default function PublicPage({ }) {
    console.log('ok')
    // useEffect(() => { handleDisplay(true) }, [])
    const { userId } = useContext(AuthContext)
    const { posts, user, subs } = useContext(GlobalContext)
    const { darkMode } = useContext(ThemeContext)

    useEffect(() => {
    }, [subs, posts, user])

    // if (user === undefined) return <PublicMenu />
    let contentPosts = []

    // if (subs === undefined || posts === undefined || user === undefined) {
    //     return <div>Loading data, sit tight</div>
    // }

    // if (!user.data.subscribedSubs) return <EmptySubs user={user} />

    // user.data.subscribedSubs.map(subId => {
    //     posts.map(post => {
    //         if (post.data.parent === subId) contentPosts.push(post)
    //     })
    // })
    // const handleDisplay = () => { setDisplay(!display) }

    return (
        posts.map(post =>
            <PostPreview key={post.id} post={post} darkMode={darkMode} />
        )
    )
}


// contentPosts.map(post => {
//     return <PostPreview
//         key={post.id}
//         subId={post.data.parent}
//         post={post}
//     />
// })