import { GlobalContext } from '../providers/GlobalProvider'
import AddComment from './add-comment/AddComment'
import CommentsList from '../comment/CommentsList'
import PostDetails from './post-options/PostDetails'
import PostOptions from './post-options/PostOptions'
import { useParams } from 'react-router'
import React, { useState, useContext, useEffect } from 'react'
import ImageDisplay from '../multi-usage/ImageDisplay'
import getComments from '../comment/getComments'
import PostVotes from './PostVotes'
import styled from 'styled-components'

const PostWrapper = styled.div`
  border: 1px solid;
`

const PostSection = styled.section`
  display: flex;
`

const VerticalFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export default function Post({ darkMode }) {

  const postId = useParams().postId
  const { posts, users, subs, user } = useContext(GlobalContext)
  const [post, setPost] = useState()
  const [sub, setSubs] = useState()
  const [comments, setComments] = useState()

  useEffect(() => {
    if (posts) setPost(posts.filter(el => el.id === postId)[0])
  }, [posts, users, subs, postId])

  useEffect(() => {
    if (post) setSubs(subs.filter(el => el.id === post.data.parent)[0])
  }, [post])

  useEffect(() => {
    getComments(postId)
      .then((data) => setComments(data))
  }, [])

  if (post === undefined || sub === undefined || user === undefined) return <div>Loading</div>

  return (

    <PostWrapper>
      <div className={`${darkMode}`}>

        <VerticalFlex>

          <PostSection className={`${darkMode} post`}>

            <PostVotes darkMode={darkMode} post={post} user={user} />

            <VerticalFlex style={{ gap: "0" }}>

              <PostDetails sub={sub} post={post} darkMode={darkMode} />

              <h1 className='no-margin'>{post.data.title}</h1>

              {post.data.text ? <p className='no-margin'>{post.data.text}</p> : null}

              {post.data.image ? <ImageDisplay post={post} /> : null}

              <PostOptions user={user} post={post} darkMode={darkMode} comments={comments} />

            </VerticalFlex>
          </PostSection>


          {user ?
            <AddComment post={post} darkMode={darkMode} postId={postId} />
            :
            <p>Log in to comment</p>
          }

          <CommentsList darkMode={darkMode} postId={postId} comments={comments} />

        </VerticalFlex>

      </div>
    </PostWrapper>
  )
}



