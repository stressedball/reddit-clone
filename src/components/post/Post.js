// import '../../css/post.css'
import { GlobalContext } from '../providers/GlobalProvider'
import AddComment from './add-comment/AddComment'
import CommentsList from '../comment/CommentsList'
import PostDetails from './post-options/PostDetails'
import PostOptions from './post-options/PostOptions'
import { useParams } from 'react-router'
import React, { useState, useContext, useEffect } from 'react'
import ImageDisplay from '../multi-usage/ImageDisplay'
import SideContainer from '../home/SideContent'
import getComments from '../comment/getComments'
import PostVotes from './PostVotes'

export default function Post({ darkMode, handleDisplay }) {

  useEffect(() => { handleDisplay(true) }, [])

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

    <div id='post-wrapper'>
      <div className={`${darkMode}`}>
        <div className='vertical flex' style={{ gap: "8px" }}>

          <section className={`${darkMode} post horizontal flex`}>

            <PostVotes darkMode={darkMode} post={post} user={user} />

            <div className='vertical flex'>

              <PostDetails sub={sub} post={post} darkMode={darkMode} />

              <h1 className='no-margin'>{post.data.title}</h1>

              {post.data.text ? <p className='no-margin'>{post.data.text}</p> : null}

              {post.data.image ? <ImageDisplay post={post} /> : null}

              <PostOptions user={user} post={post} darkMode={darkMode} comments={comments} />

            </div>
          </section>


          <AddComment post={post} darkMode={darkMode} postId={postId} />

          <CommentsList darkMode={darkMode} postId={postId} comments={comments} />

        </div>

        <div style={{ maxWidth: "312px" }}>

          <SideContainer />
        </div>
      </div>
    </div>
  )
}



