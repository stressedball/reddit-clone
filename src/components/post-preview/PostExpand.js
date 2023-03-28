import React from 'react'
import ImageDisplay from '../multi-usage/ImageDisplay'

export default function PostExpand({ post, darkMode }) {

    return (
        <div className={`${darkMode}`}>
            {post.data.text ? <p>{post.data.text}</p> : null}
            {post.data.image ? <ImageDisplay post={post} /> : null}
        </div>
    )
}
