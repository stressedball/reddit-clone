import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { darkBorder, darkDefaultBorder, darkTwo, lightBackgroundColor, lightBorder, lightDefaultBorder } from '../../sc-css/COLORS'
import { GlobalContext } from '../providers/GlobalProvider'
import ImageDisplay from '../multi-usage/ImageDisplay'
import PostHeader from './PostHeader'
import PostPreviewBody from './PostPreviewBody'
import PostPreviewOptions from './PostPreviewOptions'
import PostExpand from './PostExpand'
import PreviewPlaceholder from './PreviewPlaceholder'
import { PostVotes } from '../post/PostVotes'

// User is used to display post details wether if user is logged in or not!
export default function PostPreview({ darkMode, post }) {

    const [displayText, setDisplayText] = useState(false)
    const { user, subs } = useContext(GlobalContext)
    const [display, setDisplay] = useState('')
    const [sub, setSub] = useState()

    const showContent = () => setDisplayText(!displayText)

    useEffect(() => {
        if (user) setDisplay('private')
        else setDisplay('public')
    }, [user])

    useEffect(() => {
        if (subs) setSub(subs.filter(el => el.id === post.data.parent)[0])
    }, [subs])

    if (!post || !sub) return <div>Loading preview</div>

    return (
        <Container className={`${display} ${darkMode}`} >

            <PostVotes darkMode={darkMode} post={post} />

            <div>

                <PostWrapper className={`${darkMode}`}>

                    {user ? <PreviewPlaceholder darkMode={darkMode} post={post} subId={sub.id} /> : null}

                    <SubContainer className={display}>
                        {user ?
                            <>
                                <PostPreviewBody darkMode={darkMode} post={post} sub={sub} />

                                <PostHeader post={post} darkMode={darkMode} sub={sub} />
                            </>
                            :
                            <>
                                <PostHeader post={post} darkMode={darkMode} sub={sub} />

                                <PostPreviewBody darkMode={darkMode} post={post} sub={sub} />

                                <div>
                                    {
                                        post.data.text ? <p>{post.data.text}</p>
                                            :
                                            post.data.image ? <ImageDisplay post={post} />
                                                :
                                                <p>poll</p>
                                    }
                                </div>
                            </>
                        }

                        <PostPreviewOptions showContent={showContent} darkMode={darkMode} post={post} />

                    </SubContainer>
                </PostWrapper>

                {displayText ? <PostExpand post={post} darkMode={darkMode} /> : null}

            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    border: 1px solid ${lightBorder};
    border-radius:4px;
    background-color: ${lightBackgroundColor};
    min-width : 690px;
    
    &:hover {
        border:1px solid #898989;   
    }

    &.private {
        border-radius:0;
    }

    &.dark {
        background-color: ${darkTwo};
        border: 1px solid ${darkBorder};
    }

    &.dark:hover {
        border: 1px solid ${lightDefaultBorder};
    }

`

const PostWrapper = styled.div`
    display: flex;
    gap:3px;
    border-radius:inherit;
`

const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left:8px;

    &.private{
        flex: 1 0 auto;
    }
`