import { useContext } from 'react'
import styled from 'styled-components'
import { darkTwo, lightBackgroundColor } from '../../sc-css/COLORS'
import { ThemeContext } from '../providers/ThemeProvider'
import ImageDisplay from '../multi-usage/ImageDisplay'
import PostHeader from '../post-preview/PostHeader'
import PostOptions from '../post/post-options/PostOptions'
import PostPreviewBody from '../post-preview/PostPreviewBody'
import { PostVotes } from '../post/PostVotes'

export default function UserPosts({ subs, post }) {

    const { darkMode } = useContext(ThemeContext)

    if (!subs) return
    
    const sub = subs.filter(sub => sub.id === post.data.parent)[0]

    return (
        <Container className={darkMode}>

            <PostVotes post={post} />

            <div>
                <div style={{ paddingTop: "8px", marginLeft: "8px" }}>
                    <PostHeader sub={sub} post={post} />
                </div>

                <div style={{ paddingTop: "8px", marginLeft: "8px" }}>
                    <PostPreviewBody sub={sub} post={post} />
                </div>

                <div style={{ marginLeft: "8px" }}>
                    {
                        post.data.text ?
                            <p>{post.data.text}</p>
                            : post.data.image ?
                                <ImageDisplay post={post} />
                                : null
                    }
                </div>

                <PostOptions user={post.data.poster} post={post} sub={sub} />

            </div>
        </Container >
    )
}

const Container = styled.div`
    width: 640px;
    background-color:${lightBackgroundColor};
    margin-bottom:8px;
    border-radius:4px;
    display: flex;

    &.dark {
        background-color: ${darkTwo};
    }
`

const PostContainer = styled.div`
    padding-top: 8px;
`