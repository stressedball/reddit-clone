import { GlobalContext } from '../providers/GlobalProvider'
import PostPreview from '../post-preview/PostPreview'
import { useParams } from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../providers/ThemeProvider'
import CreatePostShortcut from '../create-post-shortcut/CreatePostShortcut'
import SubHeader from './SubHeader'
import { ListDiv, MainOutlet } from '../../sc-css/atomic'
import SideContent from '../home/SideContent'

export default function Sub() {

    const { user, posts } = useContext(GlobalContext)
    const { darkMode } = useContext(ThemeContext)
    const subId = useParams().subId
    const [subPosts, setSubPosts] = useState()
    const [display, setDisplay] = useState('')

    useEffect(() => {
        if (posts) setSubPosts(posts.filter(post => post.data.parent === subId))
    }, [posts, subId])

    useEffect(() => {
        if (user) setDisplay('private')
        else setDisplay('')
    }, [user])

    if (!subPosts) return <div>Loading</div>

    return (
        <>
            <SubHeader />

            <MainOutlet>

                <ListDiv className={display}>
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
                </ListDiv>

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

