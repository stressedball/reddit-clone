import { GlobalContext } from '../providers/GlobalProvider';
import React, { useContext, useEffect, useState } from 'react'
import PostPreview from '../post-preview/PostPreview';
import { ThemeContext } from '../providers/ThemeProvider';
import styled from 'styled-components';

const PostPreviewFlex = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    gap: 16px;
    width:100%;
      
    &.private{
      gap:0;
    }
`

export default function Home({ }) {

  const { posts, user, subs } = useContext(GlobalContext)
  const { darkMode } = useContext(ThemeContext)
  const [display, setDisplay] = useState('')

  useEffect(() => { }, [subs, posts, user])

  useEffect(() => {
    if (user) setDisplay('private')
    else setDisplay('public')
  }, [user])

  // make logic to select "random" posts
  if (!user) return (
    posts.map(post =>
      <PostPreview key={post.id} post={post} darkMode={darkMode} />
    )
  )

  // make logic to get user's subscribed subs and display content
  return (
    <PostPreviewFlex className={`${display}`}>
      {
        posts.map(post =>
          <PostPreview key={post.id} post={post} darkMode={darkMode} />
        )
      }
    </PostPreviewFlex>
  )
}
