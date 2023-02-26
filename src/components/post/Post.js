import '../../css/post.css'
import Votes from '../reusables/Votes'
import { GlobalContext } from '../providers/GlobalProvider'
import AddComment from './add-comment/AddComment'
import CommentsList from './CommentsList'
import PostHeader from '../post-preview/PostHeader'
import DefaultOptions from './components/DefaultOptions'
import AdminOptions from './components/AdminOptions'
import { useParams } from 'react-router'
import React, { useState, useContext, useEffect } from 'react'
import ImageDisplay from './components/ImageDisplay'

export default function Post({ darkMode }) {

  const postId = useParams().postId
  const { posts, users, subs, user } = useContext(GlobalContext)
  const [post, setPost] = useState()
  const [posterName, setPosterName] = useState()
  const [sub, setSubs] = useState()

  useEffect(() => {

    if (posts.length > 0) setPost(posts.filter(el => el.id === postId)[0])

    if (users.length > 0 && post !== undefined) {
      const posterName = users.filter(user => user.id === post.data.poster)[0]
      setPosterName(posterName.data.userName)
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

    <>-
      <div className='post'>

        <section>

          <PostHeader sub={sub} posterName={posterName} post={post} darkMode={darkMode} />

          <h2>{post.data.title}</h2>

          {
            post.data.text ? <p>{post.data.text}</p> : null
          }

          {
            post.data.image ? <ImageDisplay post={post} /> : null
          }


          {
            post.data.poster === user.id ?
              <AdminOptions post={post} darkMode={darkMode} />
              :
              <DefaultOptions post={post} darkMode={darkMode} />
          }
        </section>

        <Votes darkMode={darkMode} post={post} postId={postId} />

      </div>

      <AddComment post={post} darkMode={darkMode} postId={postId} />

      <CommentsList darkMode={darkMode} postId={postId} />
    </>
  )
}



