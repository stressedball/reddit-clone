import { GlobalContext } from '../providers/GlobalProvider';
import React, { useContext, useEffect, useState } from 'react'
import PostPreview from '../post-preview/PostPreview';
import { ThemeContext } from '../providers/ThemeProvider';
import styled from 'styled-components';

const PostPreviewFlex = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:100%;
      

`

export default function Home({ }) {

  const { posts, user, subs } = useContext(GlobalContext)
  const { darkMode } = useContext(ThemeContext)

  useEffect(() => { }, [subs, posts, user])

  // make logic to select "random" posts
  if (!user) return (
    posts.map(post =>
      <PostPreview key={post.id} post={post} darkMode={darkMode} />
    )
  )

  // make logic to get user's subscribed subs and display content
  return (
    <PostPreviewFlex >
      {
        posts
          .sort((a, b) => Date.parse(b.data.timeStamp.toDate()) - Date.parse(a.data.timeStamp.toDate()))
          .map(post => <PostPreview key={post.id} post={post} darkMode={darkMode} />)
      }
    </PostPreviewFlex>
  )
}
