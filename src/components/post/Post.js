import React, { useState, useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import styled from 'styled-components'
import { GlobalContext } from '../providers/GlobalProvider'
import { ThemeContext } from '../providers/ThemeProvider'
import { MainOutlet, HR } from '../../sc-css/atomic'
import { darkBorder, darkSecondary, lightBackgroundColor, lightBorder } from '../../sc-css/COLORS'
import AddComment from './add-comment/AddComment'
import CommentsList from '../comment/CommentsList'
import PostOptions from './post-options/PostOptions'
import ImageDisplay from '../multi-usage/ImageDisplay'
import { PostVotes } from './PostVotes'
import SideContent from '../home/SideContent'
import PostHeader from '../post-preview/PostHeader'
import AddCommentFake from './add-comment/AddCommentFake'
import SubHeader from '../sub/SubHeader'

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
    <>

      <SubHeader />

      <MainOutlet>
        <PostColumn className={`${darkMode}`}>
          <PostSection>

            <PostVotes darkMode={darkMode} user={user} post={post} />

            <VerticalFlex>

              <PostHeader user={user} sub={sub} post={post} darkMode={darkMode} />

              <h1 style={{ fontSize: "20px", fontWeight: '500', margin: "6px 0 12px 0" }}>{post.data.title}</h1>

              <p style={{ margin: "0", padding: "6px 6px 6px 0" }}>{post.data.text}</p>

              {post.data.image ? <ImageDisplay post={post} /> : null}

              <PostOptions user={user} post={post} darkMode={darkMode} />

              {
                user ?
                  <>
                    <AddComment post={post} darkMode={darkMode} postId={postId} />
                    <HR className={darkMode}></HR>
                  </>
                  :
                  <>
                    <HR className={darkMode}></HR>
                    <AddCommentFake darkMode={darkMode} />
                  </>
              }

            </VerticalFlex>
          </PostSection>

          <CommentsList darkMode={darkMode} post={post} />

        </PostColumn>

        <SideContent />
      </MainOutlet>
    </>
  )
}

const PostSection = styled.section`
  display: flex;
  border-radius:4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
`

const VerticalFlex = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0; 
  padding-top: 8px;
  margin-right: 40px;
`

const PostColumn = styled(VerticalFlex)`
  border-radius:4px;
  width:100%;
  margin-bottom:20px;
  max-width: 740px;
  background-color: ${lightBackgroundColor};
  border: 1px solid ${lightBorder};

  &.dark {
    background-color:${darkSecondary};
    border: 1px solid ${darkBorder};
  }
`

