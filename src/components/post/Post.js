import React, { useState, useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import styled from 'styled-components'
import { GlobalContext } from '../providers/GlobalProvider'
import { ThemeContext } from '../providers/ThemeProvider'
import { SVGStyled, Tile } from '../../sc-css/atomic'
import { darkMain, darkSecondary, lightBackgroundColor } from '../../sc-css/COLORS'
import AddComment from './add-comment/AddComment'
import CommentsList from '../comment/CommentsList'
import PostDetails from './post-options/PostDetails'
import PostOptions from './post-options/PostOptions'
import ImageDisplay from '../multi-usage/ImageDisplay'
import PostVotes from './PostVotes'
import SideContent from '../home/SideContent'

const PostPage = styled.div`
  position: fixed;
  left:0;
  top:48px;
  width:100vw;
  z-index:10;
  background-color:rgb(28 28 28 / 90%);
  height:100vh;
  overflow-y: auto;
  `

const PostContainer = styled.div`
  margin:auto;
  display: flex;
  flex-direction:column;
  justify-content:center;
  max-width: 1280px;
  width: calc(100% - 160px);
  background-color: rgb(218 224 230);
  padding-bottom:48px;

  &.dark {
    background-color:${darkMain}
  }
  `

const PostSection = styled.section`
  display: flex;
`

const VerticalFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const PostColumn = styled(VerticalFlex)`
  border-radius:4px;
  width:100%;
  max-width:740px;
  gap:4px;
  background-color: ${lightBackgroundColor};
  margin-bottom:20px;

  &.dark {
    background-color:${darkSecondary}
  }
  `

const TileNoHover = styled(Tile)`
  justify-content:end;
  background-color: inherit;

  &:hover {
    cursor: default;
    background-color: inherit;
  }

  &.dark {
    background-color:inherit;
  }
`

export default function Post({ }) {

  const navigate = useNavigate()
  const subId = useParams().subId
  const postId = useParams().postId
  const { posts, users, subs, user } = useContext(GlobalContext)
  const [post, setPost] = useState()
  const [sub, setSubs] = useState()
  const [comments, setComments] = useState()
  const { darkMode } = useContext(ThemeContext)

  useEffect(() => {
    if (posts) setPost(posts.filter(el => el.id === postId)[0])
  }, [posts, users, subs, postId])

  useEffect(() => {
    if (post) {
      setSubs(subs.filter(el => el.id === post.data.parent)[0])
      setComments(post.comments)
    }
  }, [post])

  if (post === undefined || sub === undefined || user === undefined) return <div>Loading</div>

  return (

    <PostPage>
      <PostContainer className={`${darkMode}`}>

        <TileNoHover className={`${darkMode}`} >
          <SVGStyled
            style={{ width: "30px", height: "30px" }} onClick={() => navigate(`/r/${subId}`)}
            viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="icomoon-ignore"></g>
            <path d="M10.722 9.969l-0.754 0.754 5.278 5.278-5.253 5.253 0.754 0.754 5.253-5.253 5.253 5.253 0.754-0.754-5.253-5.253 5.278-5.278-0.754-0.754-5.278 5.278z" fill="currentColor"></path>
          </SVGStyled>
        </TileNoHover>

        <div style={{ display: "flex", justifyContent: "center" }}>

          <PostColumn className={`${darkMode}`}>

            <PostSection>

              <PostVotes darkMode={darkMode} post={post} user={user} />

              <VerticalFlex style={{ gap: "0", paddingTop:"8px" }}>

                <PostDetails sub={sub} post={post} darkMode={darkMode} />

                <h1 style={{fontSize:"20px", fontWeight:'500'}} className='no-margin'>{post.data.title}</h1>

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

          </PostColumn>

          <SideContent />

        </div>
      </PostContainer>

    </PostPage >
  )
}



