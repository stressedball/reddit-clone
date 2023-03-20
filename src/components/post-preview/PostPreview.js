import PostHeader from './PostHeader'
import PostPreviewOptions from './PostPreviewOptions'
import React, { useContext, useState } from 'react'
import PostPreviewBody from './PostPreviewBody'
import ImageDisplay from '../multi-usage/ImageDisplay'
import PostVotes from '../post/PostVotes'
import styled from 'styled-components'
import { lightBorder } from '../../sc-css/COLORS'
import { GlobalContext } from '../providers/GlobalProvider'
import { lightBackgroundColor } from '../../sc-css/COLORS'
import { ThemeContext } from '../providers/ThemeProvider'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${lightBorder};
    border-radius:4px;
    `

const PostWrapper = styled.div`
    display: flex;
    gap:3px;
    background-color: ${lightBackgroundColor};

    &.dark {
        background-color: rgb(26 26 27);
    }
`

const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    margin-left:8px;
`

const PostContent = styled.div`
`

export default function PostPreview({ darkMode, post }) {

    const [displayText, setDisplayText] = useState(false)
    const showContent = () => setDisplayText(!displayText)
    const { subs } = useContext(GlobalContext)
    const sub = subs.filter(el => el.id === post.data.parent)[0]

    return (
        <Container >
            <PostWrapper className={`${darkMode} content`}>
                <PostVotes darkMode={darkMode} post={post} />

                <SubContainer>

                    <PostHeader post={post} darkMode={darkMode} sub={sub} />
                    <PostPreviewBody darkMode={darkMode} post={post} sub={sub} />
                    <PostContent>
                        {
                            post.data.text ? <p>{post.data.text}</p>
                                :
                                post.data.image ? <ImageDisplay post={post} />
                                    :
                                    <p>poll</p>
                        }
                    </PostContent>
                </SubContainer>

            </PostWrapper>


        </Container>
    )
}

