import '../../css/post.css'
import Votes from '../subs/Votes'
import { GlobalContext } from '../providers/GlobalProvider'
import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import AddComment from './AddComment'
import CommentsList from './CommentsList'

export default function Post() {

  const postId = useParams().postId
  const { posts, users } = useContext(GlobalContext)
  const [post, setPost] = useState()
  const [posterName, setPosterName] = useState()

  useEffect(() => {

    if (posts.length > 0) {
      setPost(posts.filter(el => el.id === postId)[0])
    }
    if (users.length > 0 && post !== undefined) {
      const posterName = users.filter(user => user.id === post.data.poster)
      setPosterName(posterName[0].data.userName)
    }

  }, [posts, users, post])

  if (post === undefined) return <div>Loading</div>

  return (

    <>
      <div
        className='post'
      >

        <section>

          <div>
            <p>{post.data.title}</p>
            <p>Posted by {posterName}</p>
          </div>

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

