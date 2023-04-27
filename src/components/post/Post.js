import React, { useState, useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import styled from 'styled-components'
import { GlobalContext } from '../providers/GlobalProvider'
import { ThemeContext } from '../providers/ThemeProvider'
import { SVGStyled, Tile } from '../../sc-css/atomic'
import { darkMain, darkSecondary, lightBackgroundColor } from '../../sc-css/COLORS'
import AddComment from './add-comment/AddComment'
import CommentsList from '../comment/CommentsList'
import PostOptions from './post-options/PostOptions'
import ImageDisplay from '../multi-usage/ImageDisplay'
import { PostVotes } from './PostVotes'
import SideContent from '../home/SideContent'
import PostHeader from '../post-preview/PostHeader'
import AddCommentFake from './add-comment/AddCommentFake'

export default function Post() {

  const { darkMode } = useContext(ThemeContext)
  const { posts, subs, user } = useContext(GlobalContext)
  const navigate = useNavigate()
  const subId = useParams().subId
  const postId = useParams().postId
  const [post, setPost] = useState()
  const [sub, setSubs] = useState()

  useEffect(() => {
    if (posts) setPost(posts.filter(post => post.id === postId)[0])
  }, [posts])

  useEffect(() => {
    if (post) setSubs(subs.filter(el => el.id === post.data.parent)[0])
  }, [post])

  if (!post) return <div>Loading</div>

  return (
    <PostContainer className={`${darkMode}`}>

      <div style={{ display: "flex", justifyContent: "center", padding:"20px 24px" }}>

        <PostColumn className={`${darkMode}`}>
          <PostSection className={`${darkMode}`}>

            <PostVotes darkMode={darkMode} user={user} post={post} />

            <VerticalFlex style={{ gap: "0", paddingTop: "8px" }}>

              <PostHeader sub={sub} post={post} darkMode={darkMode} />

              <h1 style={{ fontSize: "20px", fontWeight: '500', margin: "6px 0 12px 0" }}>{post.data.title}</h1>

              <p style={{ margin: "0", padding: "6px 6px 6px 0" }}>{post.data.text}</p>

              {post.data.image ? <ImageDisplay post={post} /> : null}

              <PostOptions user={user} post={post} darkMode={darkMode} />

            </VerticalFlex>
          </PostSection>

          {user ?
            <AddComment post={post} darkMode={darkMode} postId={postId} />
            :
            <AddCommentFake darkMode={darkMode} />
          }

          <CommentsList darkMode={darkMode} post={post} />

        </PostColumn>

        <SideContent />
      </div>
    </PostContainer>
  )
}

const PostContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
  background-color: rgb(218 224 230);
  padding-bottom:48px;

  &.dark {
    background-color:${darkMain}
  }
  `

const PostSection = styled.section`
  display: flex;
  background-color: ${lightBackgroundColor};
  border-radius:4px;
  margin-bottom:8px;

  &.dark {
    background-color:${darkSecondary}
  }
`

const VerticalFlex = styled.div`
  display: flex;
  flex-direction: column;
`

const PostColumn = styled(VerticalFlex)`
  border-radius:4px;
  width:100%;
  margin-bottom:20px;
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