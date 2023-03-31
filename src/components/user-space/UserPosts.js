import { HorizontalFlex } from '../../sc-css/atomic'
import PostVotes from '../post/PostVotes'
import PostDetails from '../post/post-options/PostDetails'
import PostPreviewBody from '../post-preview/PostPreviewBody'
import { ThemeContext } from '../providers/ThemeProvider'
import styled from 'styled-components'
import { lightBackgroundColor } from '../../sc-css/COLORS'
import { useContext } from 'react'


const PostDiv = styled.div`
  background-color:${lightBackgroundColor};
  margin-bottom:8px;
  border-radius:4px;

`

export default function UserPosts({ subs, post }) {

    const { darkMode } = useContext(ThemeContext)
    
    return (
        <PostDiv>

            <HorizontalFlex>

                <PostVotes post={post} />

                <PostDetails sub={subs.filter(sub => sub.id === post.data.parent)[0]} post={post} />

            </HorizontalFlex>

            <PostPreviewBody sub={subs.filter(sub => sub.id === post.data.parent)[0]} post={post} />

        </PostDiv >
    )
}

