import { GlobalContext } from '../providers/GlobalProvider';
import React, { useContext, useEffect, useState } from 'react'
import PostPreview from '../post-preview/PostPreview';
import { ThemeContext } from '../providers/ThemeProvider';
import styled from 'styled-components';

export default function Home({ }) {

  const { posts, user } = useContext(GlobalContext)
  const { darkMode } = useContext(ThemeContext)
  const [homePosts, setHomePosts] = useState()

  useEffect(() => { if (posts !== undefined) setHomePosts(posts) }, [posts])

  if (homePosts === undefined) return <div>Loading home page</div>

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
        homePosts
          .sort((a, b) => Date.parse(b.data.timeStamp.toDate()) - Date.parse(a.data.timeStamp.toDate()))
          .map(post => <PostPreview key={post.id} post={post} darkMode={darkMode} />)
      }
    </PostPreviewFlex>
  )
}

const PostPreviewFlex = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:100%;
`