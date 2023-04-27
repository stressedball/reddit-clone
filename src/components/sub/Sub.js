import { GlobalContext } from '../providers/GlobalProvider'
import PostPreview from '../post-preview/PostPreview'
import { useParams } from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../providers/ThemeProvider'
import CreatePostShortcut from '../create-post-shortcut/CreatePostShortcut'
import SubHeader from './SubHeader'
import { HorizontalFlex, MainOutlet } from '../../sc-css/atomic'
import SubSideContent from '../sideContent/SubSideContent'
import SideContent from '../home/SideContent'

export default function Sub() {

    const { user, posts } = useContext(GlobalContext)
    const { darkMode } = useContext(ThemeContext)
    const subId = useParams().subId
    const [subPosts, setSubPosts] = useState()

    useEffect(() => {
        if (posts) setSubPosts(posts.filter(post => post.data.parent === subId))
    }, [posts, subId])

    if (!subPosts) return <div>Loading</div>

    return (
        <>
            <SubHeader />

            <MainOutlet>

                <div style={{ flex: "1" }}>

                    {
                        user ?
                            <CreatePostShortcut /> : null
                    }
                    {
                        subPosts.length === 0 ?
                            <EmptySub />
                            :
                            subPosts.map(post => {
                                return <PostPreview key={post.id} subId={null} post={post} darkMode={darkMode} />
                            })
                    }
                </div>

                <SideContent />

            </MainOutlet>
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

