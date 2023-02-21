import '../../css/post.css'
import Votes from '../Votes'
import { GlobalContext } from '../providers/GlobalProvider'
import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import AddComment from './AddComment'
import CommentsList from './CommentsList'
import PostHeader from './PostHeader'

export default function Post() {

  const postId = useParams().postId
  const { posts, users, subs } = useContext(GlobalContext)
  const [post, setPost] = useState()
  const [posterName, setPosterName] = useState()
  const [sub, setSubs] = useState()

  useEffect(() => {

    if (posts.length > 0) {
      setPost(posts.filter(el => el.id === postId)[0])
    }

    if (users.length > 0 && post !== undefined) {
      const posterName = users.filter(user => user.id === post.data.poster)
      setPosterName(posterName[0].data.userName)
    }

    if (subs !== undefined) {

      subs.filter(sub => {
        if (sub.data.posts) {
          if (sub.data.posts.filter(id => id === postId)) {
            setSubs(sub)
          }
        }
      })
    }

  }, [posts, users, post, subs])

  if (post === undefined) return <div>Loading</div>

  return (

    <>
      <div
        className='post'
      >

        <section>

          <PostHeader
            sub={sub}
            posterName={posterName}
            post={post}
          />

          <h2>{post.data.title}</h2>

          <p>{post.data.text}</p>

        </section>

        <Votes
          post={post}
          postId={postId}
        />

      </div>

      <AddComment
        post={post}
        postId={postId}
      />

      <CommentsList
        postId={postId}
      />
    </>
  )
}

