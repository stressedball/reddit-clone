import { GlobalContext } from '../providers/GlobalProvider';
import React, { useContext, useEffect, useState } from 'react'
import PostPreview from '../post-preview/PostPreview';
import { AuthContext } from '../providers/AuthProvider';
import PublicMenu from '../menu/PublicMenu';
import Menu from '../menu/Menu';
import SideContent from '../home/SideContent';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;

`
export default function MainPage({ }) {

    // useEffect(() => { handleDisplay(true) }, [])
    const { userId } = useContext(AuthContext)

    const { posts, user, subs } = useContext(GlobalContext)

    useEffect(() => {
        console.log(user)
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
        // contentPosts.map(post => {
        //     return <PostPreview
        //         key={post.id}
        //         subId={post.data.parent}
        //         post={post}
        //     />
        // })
        <StyledDiv>
            {
                user ? <Menu /> : <PublicMenu />
            }
            <SideContent />
        </StyledDiv>
    )
}

function EmptySubs({ user }) {
    return (
        <div>
            <p>Hey there {user.data.userName}</p>
            <p>You haven't subscribed to any community</p>
            <p>Here are some suggestions</p>
        </div>
    )
}