import { GlobalContext } from '../providers/GlobalProvider';
import React, { useContext, useEffect } from 'react'
import PostPreview from '../post-preview/PostPreview';

export default function MainPage({ darkMode, handleDisplay }) {


    useEffect(() => {handleDisplay(true)}, [])

    const { posts, user, subs } = useContext(GlobalContext)

    if (subs === undefined || posts === undefined || user === undefined) {
        return <div>Loading data, sit tight</div>
    }

    // user subscribed subs, showing subs' posts
    let contentPosts = []

    if (user.data.subscribedSubs === undefined) return null

    subs.map(sub => {

        user.data.subscribedSubs.map(subId => {

            if (subId === sub.id) {

                sub.data.posts.map(postId => {

                    const post = posts.filter(el => el.id === postId)[0]

                    contentPosts.push(post)
                })
            }
        })
    })

    return (

        contentPosts.map(post => {

            return <PostPreview
                darkMode={darkMode}
                key={post.id}
                subId={post.data.parentSub}
                post={post}
            />

        })
    )

}
