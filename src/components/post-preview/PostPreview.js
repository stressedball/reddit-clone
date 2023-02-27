import '../../css/post-preview.css'
import Votes from "../reusables/Votes"
import PostHeader from './PostHeader'
import PostPreviewOptions from './PostPreviewOptions'
import React, { useState } from 'react'
import PostPreviewBody from './PostPreviewBody'
import PreviewPlaceholder from './PreviewPlaceholder'
import ImageDisplay from '../post/components/ImageDisplay'

export default function PostPreview({ darkMode, subId, post }) {

    const [displayText, setDisplayText] = useState(false)
    const showContent = () => setDisplayText(!displayText)

    return (
        < div
            className="vertical flex post-preview"
        >

            <div
                className='horizontal flex content'
            >
                < Votes post={post} darkMode={darkMode} />

                <PreviewPlaceholder post={post} darkMode={darkMode} subId={subId} />

                <div className='vertical flex'>

                    <PostPreviewBody post={post} subId={subId} />

                    <PostHeader subId={subId} post={post} darkMode={darkMode} />

                    <PostPreviewOptions post={post} darkMode={darkMode} showContent={showContent} />

                </div>

            </div>

            <div>
                {
                    displayText ?
                        post.data.text ? <p>{post.data.text}</p>
                            : 
                            post.data.image ? <ImageDisplay post={post} />
                                :
                                post.data.poll ? <p>poll</p>
                                    : null
                        : null
                } 
            </div>
        </div >
    )
}

