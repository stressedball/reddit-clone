import '../../css/post.css'
import Votes from '../reusables/Votes'
import { GlobalContext } from '../providers/GlobalProvider'
import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import AddComment from './AddComment'
import CommentsList from './CommentsList'
import PostHeader from '../post-preview/PostHeader'
import getImage from './getImage'


export default function Post({ darkMode }) {

  const postId = useParams().postId
  const { posts, users, subs } = useContext(GlobalContext)
  const [post, setPost] = useState()
  const [posterName, setPosterName] = useState()
  const [sub, setSubs] = useState()

  useEffect(() => {

    if (posts.length > 0) setPost(posts.filter(el => el.id === postId)[0])

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

        </section>

        <Votes darkMode={darkMode} post={post} postId={postId} />

      </div>

      <AddComment post={post} darkMode={darkMode} postId={postId} />

      <CommentsList darkMode={darkMode} postId={postId} />
    </>
  )
}

function ImageDisplay({ post }) {

  const [image, setImage] = useState()
  const [isImage, setIsImage] = useState(false)

  useEffect(() => {

    async function fetchImage() {

      const imageUrl = await getImage(post)

      setImage(imageUrl)
      // setIsImage(true)
    }

    fetchImage()

  }, [])

  // if (!isImage) return <p>Loading data</p>

  return (
    <img src={`${image}`} crossOrigin="anonymous"/>
  )
}

