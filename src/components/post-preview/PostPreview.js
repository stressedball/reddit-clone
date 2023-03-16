import PostHeader from './PostHeader'
import PostPreviewOptions from './PostPreviewOptions'
import React, { useState } from 'react'
import PostPreviewBody from './PostPreviewBody'
import PreviewPlaceholder from './PreviewPlaceholder'
import ImageDisplay from '../multi-usage/ImageDisplay'
import PostVotes from '../post/PostVotes'
import styled from 'styled-components'
import { lightBorder } from '../../sc-css/COLORS'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${lightBorder};
    border-radius:4px;
    `

const PostWrapper = styled.div`
    display: flex;
    gap:3px;
`

const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    flex: 1 0 auto;
`

const PostContent = styled.div`
`

export default function PostPreview({ darkMode, post }) {

    const [displayText, setDisplayText] = useState(false)
    const showContent = () => setDisplayText(!displayText)

    return (
        <Container>

            <PostWrapper className='content'>

                <PostVotes darkMode={darkMode} post={post} />

                <PreviewPlaceholder post={post} darkMode={darkMode} />

                <SubContainer>

                    <PostHeader post={post} darkMode={darkMode} />
                    <PostPreviewBody post={post} />
                    <PostPreviewOptions post={post} darkMode={darkMode} showContent={showContent} />

                </SubContainer>

            </PostWrapper>

            <PostContent>
                {
                    displayText ?
                        post.data.text ? <p>{post.data.text}</p>
                            :
                            post.data.image ? <ImageDisplay post={post} />
                                :
                                <p>poll</p>
                        : null
                }

            </PostContent>
        </Container>
    )
}

