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

    <div
      className='container'
    >
      <div
        className='post'
      >

        <section>
          <section
            style={{
              display: "flex",
              gap: "1rem"
            }}
          >
            <p>{post.data.title}</p>
            <p>Posted by {posterName}</p>
          </section>
          <p>{post.data.text}</p>

          <Votes
            post={post}
            postId={postId}
          />
        </section>
      </div>

      <AddComment
        post={post}
        postId={postId}
      />

      <section
        className='comments'
      >
        <CommentsList
          postId={postId}
        />
      </section>
    </div>
  )
}

