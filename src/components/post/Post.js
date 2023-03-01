import '../../css/post.css'
import Votes from '../reusables/Votes'
import { GlobalContext } from '../providers/GlobalProvider'
import AddComment from './add-comment/AddComment'
import CommentsList from './CommentsList'
import PostDetails from './components/PostDetails'
import DefaultOptions from './components/DefaultOptions'
import AdminOptions from './components/AdminOptions'
import { useParams } from 'react-router'
import React, { useState, useContext, useEffect } from 'react'
import ImageDisplay from './components/ImageDisplay'
import SideContainer from '../home/SideContainer'

export default function Post({ darkMode, handleDisplay }) {

  useEffect(() => { handleDisplay(true) }, [])

  const postId = useParams().postId
  const { posts, users, subs, user } = useContext(GlobalContext)
  const [post, setPost] = useState()
  const [sub, setSubs] = useState()

  useEffect(() => {

    if (posts) setPost(posts.filter(el => el.id === postId)[0])

  }, [posts, users, subs, postId])

  useEffect(() => {

    if (post) setSubs(subs.filter(el => el.id === post.data.parent)[0])

  }, [post])

  if (post === undefined || sub === undefined || user === undefined) return <div>Loading</div>

  return (

    <div id='post-wrapper'>

      <div className={`${darkMode}`}>

        <div className='vertical flex' style={{ gap: "8px" }}>

          <section className={`${darkMode} post horizontal flex`}>

            <Votes dimension="25" flexDirection={"vertical"} darkMode={darkMode} post={post} postId={postId} />

            <div className='vertical flex'>

              <PostDetails sub={sub} post={post} darkMode={darkMode} />

              <h1 style={{ margin: "0" }}>{post.data.title}</h1>

              {post.data.text ? <p style={{ margin: "0" }}>{post.data.text}</p> : null}

              {post.data.image ? <ImageDisplay post={post} /> : null}

              {
                post.data.poster === user.id ?
                  <AdminOptions post={post} darkMode={darkMode} /> :
                  <DefaultOptions post={post} darkMode={darkMode} />
              }
            </div>
          </section>


          <AddComment post={post} darkMode={darkMode} postId={postId} />

          <CommentsList darkMode={darkMode} postId={postId} />

        </div>

        <div style={{ maxWidth: "312px" }}>
          <SideContainer />
        </div>
      </div>
    </div>
  )
}



